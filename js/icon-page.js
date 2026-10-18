/* Icon detail page behaviour */
(function () {
  "use strict";
  const F = window.Animaticons;

  F.ready(() => {
    const data = window.ANIMATICONS;
    const params = new URLSearchParams(location.search);
    const icon = F.iconRecord(params.get("id") || "") || data.icons[0];
    let pack = params.get("pack") === "ember" ? "ember" : "aura";

    const state = { size: 112, dur: 1, color: "#F2892C", lang: "react" };
    const defaults = Object.assign({}, state);

    const cat = data.categories.find((c) => c.id === icon.cat) || { name: icon.cat, id: icon.cat };

    document.title = icon.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) + " — Animated " + cat.name + " Icon | Animaticons";

    /* ---------- crumb ---------- */
    const crumb = document.getElementById("crumb");
    if (crumb) {
      crumb.innerHTML =
        '<a href="gallery.html">Icons</a><span class="sep">/</span>' +
        '<a href="gallery.html?cat=' + encodeURIComponent(cat.id) + '">' + F.esc(cat.name) + '</a><span class="sep">/</span>' +
        "<span>" + F.esc(icon.id) + "</span>";
    }

    /* ---------- pack pill ---------- */
    const packPill = document.getElementById("packPill");
    if (packPill) {
      packPill.querySelectorAll("button").forEach((b) => {
        b.classList.toggle("is-active", b.getAttribute("data-pack") === pack);
        b.addEventListener("click", () => {
          pack = b.getAttribute("data-pack");
          packPill.querySelectorAll("button").forEach((x) => x.classList.toggle("is-active", x === b));
          const url = new URL(location.href);
          url.searchParams.set("id", icon.id);
          url.searchParams.set("pack", pack);
          history.replaceState(null, "", url.pathname + url.search);
          paintAll();
          F.replay(document.getElementById("stageBody"));
        });
      });
    }

    /* ---------- stage ---------- */
    const stage = document.getElementById("stageBody");
    function paintStage() {
      if (!stage) return;
      stage.textContent = "";
      stage.appendChild(F.makeIcon(icon, {
        size: state.size, pack, color: state.color, dur: state.dur, label: icon.id,
      }));
    }

    /* ---------- swatches ---------- */
    const colors = ["#F2892C", "#FFA24D", "#2B1D12", "#B4530E", "#D4483B", "#27885C", "#4C6FC8"];
    const swatchWrap = document.getElementById("dSwatches");
    if (swatchWrap) {
      colors.forEach((c) => {
        const s = document.createElement("button");
        s.type = "button";
        s.className = "swatch" + (c === state.color ? " is-active" : "");
        s.style.background = c;
        s.setAttribute("aria-label", "Color " + c);
        s.addEventListener("click", () => {
          state.color = c;
          Array.from(swatchWrap.querySelectorAll(".swatch")).forEach((x) => x.classList.remove("is-active"));
          s.classList.add("is-active");
          paintAll();
        });
        swatchWrap.appendChild(s);
      });
      const custom = document.createElement("span");
      custom.className = "swatch";
      custom.innerHTML = '<input type="color" value="#F2892C" aria-label="Custom color" />';
      swatchWrap.appendChild(custom);
      custom.querySelector("input").addEventListener("input", (e) => {
        state.color = e.target.value;
        Array.from(swatchWrap.querySelectorAll(".swatch")).forEach((x) => x.classList.remove("is-active"));
        custom.classList.add("is-active");
        paintAll();
      });
    }

    /* ---------- sliders ---------- */
    const sizeRange = document.getElementById("dSize");
    const durRange = document.getElementById("dDur");
    if (sizeRange) {
      sizeRange.addEventListener("input", (e) => {
        state.size = Number(e.target.value);
        document.getElementById("dSizeOut").textContent = state.size + "px";
        paintAll();
      });
    }
    if (durRange) {
      durRange.addEventListener("input", (e) => {
        state.dur = Number(e.target.value);
        document.getElementById("dDurOut").textContent = state.dur.toFixed(1) + "×";
        paintAll();
      });
    }

    /* ---------- actions ---------- */
    const replayBtn = document.getElementById("dReplay");
    if (replayBtn) replayBtn.addEventListener("click", () => F.replay(stage));
    const resetBtn = document.getElementById("dReset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        Object.assign(state, defaults);
        if (sizeRange) { sizeRange.value = state.size; document.getElementById("dSizeOut").textContent = state.size + "px"; }
        if (durRange) { durRange.value = state.dur; document.getElementById("dDurOut").textContent = state.dur.toFixed(1) + "×"; }
        if (swatchWrap) {
          Array.from(swatchWrap.querySelectorAll(".swatch")).forEach((x, i) => {
            x.classList.toggle("is-active", colors[i] === state.color);
          });
        }
        paintAll();
        F.replay(stage);
        F.toast("Back to defaults");
      });
    }
    const dlBtn = document.getElementById("dDownload");
    if (dlBtn) {
      dlBtn.addEventListener("click", () => {
        const svg = F.svgSource(icon, { size: state.size, color: state.color, pack });
        const blob = new Blob([svg], { type: "image/svg+xml" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "animaticons-" + pack + "-" + icon.id + ".svg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        F.toast("SVG downloaded");
      });
    }

    /* ---------- code ---------- */
    const codeEl = document.getElementById("dCode");
    function paintCode() {
      if (!codeEl) return;
      const opts = { size: state.size, color: state.color, dur: state.dur, pack };
      let code, label;
      switch (state.lang) {
        case "vue": code = F.codeVue(icon, opts); label = "Vue"; break;
        case "html": code = F.codeHtml(icon, opts); label = "HTML"; break;
        case "svg": code = F.svgSource(icon, opts); label = "SVG"; break;
        default: code = F.codeReact(icon, opts); label = "React";
      }
      codeEl.innerHTML = F.highlight(code, state.lang === "svg" ? "svg" : "react");
      codeEl.dataset.raw = code;
      const labelEl = document.getElementById("dCodeLabel");
      if (labelEl) labelEl.textContent = label;
    }
    document.querySelectorAll(".detail-code .code-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".detail-code .code-tabs button").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        state.lang = btn.getAttribute("data-lang");
        paintCode();
      });
    });

    /* ---------- info ---------- */
    function paintInfo() {
      const packMeta = data.packs.find((p) => p.id === pack);
      const titleEl = document.getElementById("dTitle");
      const subEl = document.getElementById("dSub");
      const descEl = document.getElementById("dDesc");
      const kwRow = document.getElementById("dKw");
      const stageCat = document.getElementById("stageCat");
      const catLink = document.getElementById("dCatLink");

      if (titleEl) titleEl.textContent = icon.id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      if (subEl) subEl.textContent = (packMeta ? packMeta.name : pack) + " pack · " + cat.name;
      if (descEl) {
        descEl.textContent =
          "The “" + icon.id.replace(/-/g, " ") + "” icon from the " + (packMeta ? packMeta.name : pack) +
          " pack. It plays on hover, and you can tune size, duration and color to match your product — then copy the code below.";
      }
      if (stageCat) stageCat.textContent = cat.name;
      if (catLink) catLink.href = "gallery.html?cat=" + encodeURIComponent(cat.id);
      if (kwRow) {
        kwRow.innerHTML = "";
        const kws = [icon.id.replace(/-/g, " "), ...(icon.kw || [])].slice(0, 7);
        kws.forEach((k) => {
          const t = document.createElement("span");
          t.className = "tag";
          t.textContent = k;
          kwRow.appendChild(t);
        });
      }
    }

    /* ---------- related + prev/next ---------- */
    function paintRelated() {
      const row = document.getElementById("relatedRow");
      if (!row) return;
      row.textContent = "";
      const sameCat = data.icons.filter((i) => i.cat === icon.cat && i.id !== icon.id);
      const fill = data.icons.filter((i) => i.id !== icon.id && i.cat !== icon.cat);
      const picks = [...sameCat, ...fill].slice(0, 10);
      picks.forEach((i) => {
        const a = document.createElement("a");
        a.className = "icon-card";
        a.href = "icon.html?id=" + encodeURIComponent(i.id) + "&pack=" + pack;
        a.innerHTML = '<div class="ic-stage"></div><div class="ic-name">' + F.esc(i.id) + "</div>";
        a.querySelector(".ic-stage").appendChild(F.makeIcon(i, { size: 34, pack }));
        row.appendChild(a);
      });
    }

    function paintNav() {
      const nav = document.getElementById("detailNav");
      if (!nav) return;
      nav.textContent = "";
      const idx = data.icons.findIndex((i) => i.id === icon.id);
      const prev = data.icons[(idx - 1 + data.icons.length) % data.icons.length];
      const next = data.icons[(idx + 1) % data.icons.length];
      const link = (ic, dir) => {
        const a = document.createElement("a");
        a.href = "icon.html?id=" + encodeURIComponent(ic.id) + "&pack=" + pack;
        const ico = F.makeIcon(ic, { size: 16, pack });
        const name = document.createElement("span");
        name.className = "dn-name";
        name.textContent = ic.id;
        if (dir === "prev") {
          a.appendChild(F.makeIcon({ svg: '<path data-a="left" data-d="0" d="M14 6l-6 6 6 6"/>' }, { size: 16 }));
          a.appendChild(name);
          a.appendChild(ico);
        } else {
          a.appendChild(ico);
          a.appendChild(name);
          a.appendChild(F.makeIcon({ svg: '<path data-a="right" data-d="0" d="M10 6l6 6-6 6"/>' }, { size: 16 }));
        }
        return a;
      };
      nav.appendChild(link(prev, "prev"));
      nav.appendChild(link(next, "next"));
    }

    function paintAll() {
      paintStage();
      paintCode();
      paintInfo();
    }

    paintAll();
    paintRelated();
    paintNav();
  });
})();
