/* Gallery: filters, search, lazy grid, quick copy */
(function () {
  "use strict";
  const F = window.Animaticons;

  F.ready(() => {
    const data = window.ANIMATICONS;

    /* ---------- state ---------- */
    const params = new URLSearchParams(location.search);
    const state = {
      pack: params.get("pack") === "aura" || params.get("pack") === "ember" ? params.get("pack") : "all",
      cat: params.get("cat") || "all",
      q: params.get("q") || "",
      copyAs: "svg",
    };

    const grid = document.getElementById("iconGrid");
    const empty = document.getElementById("galEmpty");
    const emptyText = document.getElementById("emptyText");
    const titleEl = document.getElementById("galTitle");
    const countEl = document.getElementById("galCount");
    const searchInput = document.getElementById("galSearch");
    if (searchInput) searchInput.value = state.q;

    /* ---------- lazy mount ---------- */
    const lazyObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target;
          lazyObserver.unobserve(el);
          const id = el.dataset.id;
          const pack = el.dataset.pack;
          const icon = F.iconRecord(id);
          if (!icon) continue;
          const stage = el.querySelector(".ic-stage");
          stage.textContent = "";
          stage.appendChild(F.makeIcon(icon, { size: 36, pack }));
        }
      },
      { rootMargin: "320px 0px" }
    );

    /* ---------- filtering ---------- */
    function activePacks() {
      return state.pack === "all" ? ["aura", "ember"] : [state.pack];
    }

    function filtered() {
      const packs = activePacks();
      const out = [];
      for (const icon of data.icons) {
        if (state.cat !== "all" && icon.cat !== state.cat) continue;
        const q = state.q.trim().toLowerCase();
        let ok = true;
        if (q) {
          const hay = icon.id + " " + icon.kw.join(" ") + " " + icon.cat + " " +
            (data.categories.find((c) => c.id === icon.cat) || { name: "" }).name.toLowerCase();
          ok = q.split(/\s+/).every((w) => hay.includes(w));
        }
        if (!ok) continue;
        for (const pack of packs) out.push({ icon, pack });
      }
      return out;
    }

    /* ---------- rendering ---------- */
    function card(item) {
      const el = document.createElement("button");
      el.type = "button";
      el.className = "icon-card";
      el.dataset.id = item.icon.id;
      el.dataset.pack = item.pack;
      el.setAttribute("aria-label", item.icon.id + " — open details");
      el.innerHTML =
        '<span class="pack-dot" aria-hidden="true"></span>' +
        '<div class="ic-actions">' +
        '  <span class="ic-act" data-act="copy" role="button" tabindex="0" aria-label="Copy ' + item.icon.id + '"><span data-icon="copy" data-size="14"></span></span>' +
        '  <span class="ic-act" data-act="open" role="button" tabindex="0" aria-label="Open ' + item.icon.id + '"><span data-icon="expand" data-size="14"></span></span>' +
        "</div>" +
        '<div class="ic-stage"><div class="ic-skel"></div></div>' +
        '<div class="ic-name">' + F.esc(item.icon.id) + "</div>";
      F.wireIconSlots(el);

      el.addEventListener("click", (e) => {
        const act = e.target.closest("[data-act]");
        if (act && act.getAttribute("data-act") === "copy") {
          e.stopPropagation();
          quickCopy(item);
          return;
        }
        window.location.href = "icon.html?id=" + encodeURIComponent(item.icon.id) + "&pack=" + item.pack;
      });
      lazyObserver.observe(el);
      return el;
    }

    function quickCopy(item) {
      const icon = item.icon;
      const opts = { size: 24, color: "currentColor", dur: 1, pack: item.pack };
      let text, msg;
      switch (state.copyAs) {
        case "react": text = F.codeReact(icon, opts); msg = "React snippet copied"; break;
        case "vue": text = F.codeVue(icon, opts); msg = "Vue snippet copied"; break;
        case "html": text = F.codeHtml(icon, opts); msg = "HTML snippet copied"; break;
        default: text = F.svgSource(icon, opts); msg = "SVG copied";
      }
      F.copyText(text, msg);
    }

    function render() {
      const items = filtered();
      grid.textContent = "";
      const frag = document.createDocumentFragment();
      for (const item of items) frag.appendChild(card(item));
      grid.appendChild(frag);

      const total = items.length;
      if (countEl) countEl.textContent = F.fmt(total) + (total === 1 ? " icon" : " icons");

      const catMeta = state.cat === "all" ? null : data.categories.find((c) => c.id === state.cat);
      const packMeta = state.pack === "all" ? null : data.packs.find((p) => p.id === state.pack);
      if (titleEl) {
        let t = catMeta ? catMeta.name : "All icons";
        if (packMeta) t += " · " + packMeta.name;
        titleEl.textContent = t;
      }
      empty.classList.toggle("show", total === 0);
      grid.style.display = total === 0 ? "none" : "";
      if (total === 0 && emptyText) {
        emptyText.textContent = state.q
          ? "No icons match “" + state.q + "”. Try a different word or browse a category."
          : "No icons in this category yet.";
      }
      syncSidebar();
      const url = new URL(location.href);
      if (state.pack === "all") url.searchParams.delete("pack");
      else url.searchParams.set("pack", state.pack);
      if (state.cat === "all") url.searchParams.delete("cat");
      else url.searchParams.set("cat", state.cat);
      if (state.q) url.searchParams.set("q", state.q);
      else url.searchParams.delete("q");
      history.replaceState(null, "", url.pathname + (url.search || "") );
    }

    /* ---------- sidebar ---------- */
    const packSwitch = document.getElementById("packSwitch");
    function renderPackSwitch() {
      if (!packSwitch) return;
      packSwitch.textContent = "";
      const opts = [
        { id: "all", name: "Both packs", count: data.total },
        ...data.packs.map((p) => ({ id: p.id, name: p.name, count: p.iconCount, sub: p.id === "aura" ? "line" : "tint" })),
      ];
      for (const opt of opts) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "pack-opt" + (state.pack === opt.id ? " is-active" : "");
        const iconName = opt.id === "all" ? "layers" : "sparkle";
        const packAttr = opt.id === "all" || opt.id === "aura" ? "" : ' data-pack="ember"';
        b.innerHTML =
          '<span data-icon="' + iconName + '" data-size="20"' + packAttr + "></span>" +
          "<span>" + opt.name + "</span>" +
          '<span class="po-sub">' + F.fmt(opt.count) + "</span>";
        b.addEventListener("click", () => {
          state.pack = opt.id;
          renderPackSwitch();
          render();
        });
        packSwitch.appendChild(b);
      }
      F.wireIconSlots(packSwitch);
    }

    const catList = document.getElementById("catList");
    function syncSidebar() {
      if (!catList) return;
      catList.textContent = "";
      const packs = activePacks();
      const allBtn = document.createElement("button");
      allBtn.type = "button";
      allBtn.className = "cat-item" + (state.cat === "all" ? " is-active" : "");
      const totalAll = data.icons.length * packs.length;
      allBtn.innerHTML = "<span>All icons</span><span class='c-count'>" + F.fmt(totalAll) + "</span>";
      allBtn.addEventListener("click", () => {
        state.cat = "all";
        render();
      });
      catList.appendChild(allBtn);

      for (const c of data.categories) {
        const perPack = data.icons.filter((i) => i.cat === c.id).length;
        const count = perPack * packs.length;
        if (!count) continue;
        const b = document.createElement("button");
        b.type = "button";
        b.className = "cat-item" + (state.cat === c.id ? " is-active" : "");
        b.innerHTML = "<span>" + F.esc(c.name) + "</span><span class='c-count'>" + F.fmt(count) + "</span>";
        b.addEventListener("click", () => {
          state.cat = c.id;
          render();
          if (window.matchMedia("(max-width: 920px)").matches) closeDrawer();
        });
        catList.appendChild(b);
      }
    }

    /* ---------- search ---------- */
    if (searchInput) {
      let t = null;
      searchInput.addEventListener("input", () => {
        clearTimeout(t);
        t = setTimeout(() => {
          state.q = searchInput.value;
          render();
        }, 120);
      });
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          searchInput.value = "";
          state.q = "";
          render();
          searchInput.blur();
        }
      });
    }

    const copyAs = document.getElementById("copyAs");
    if (copyAs) {
      copyAs.addEventListener("change", () => {
        state.copyAs = copyAs.value;
      });
    }

    /* ---------- mobile drawer ---------- */
    const side = document.getElementById("galSide");
    const scrim = document.getElementById("sideScrim");
    const toggle = document.getElementById("sideToggle");
    function openDrawer() {
      side.classList.add("open");
      scrim.classList.add("open");
    }
    function closeDrawer() {
      side.classList.remove("open");
      scrim.classList.remove("open");
    }
    if (toggle) toggle.addEventListener("click", openDrawer);
    if (scrim) scrim.addEventListener("click", closeDrawer);

    renderPackSwitch();
    render();
  });
})();
