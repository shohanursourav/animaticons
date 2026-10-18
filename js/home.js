/* Home page behaviour */
(function () {
  "use strict";
  const F = window.Animaticons;
  F.ready(() => {
    const data = window.ANIMATICONS;

    // dynamic stats (never hardcode counts)
    const statCats = document.getElementById("statCats");
    if (statCats) statCats.textContent = data.categories.length + " tidy categories";
    const statCatCount = document.getElementById("statCatCount");
    if (statCatCount) statCatCount.textContent = data.categories.length;

    /* ---------- hero rotating icon ---------- */
    const heroIcons = ["sparkles", "rocket", "heart", "bell-ring", "flash"];
    let heroIdx = 0;
    const heroSlot = document.getElementById("heroIcon");
    const heroLabel = document.getElementById("heroLabel");
    function paintHero() {
      const icon = F.iconRecord(heroIcons[heroIdx]);
      if (!icon || !heroSlot) return;
      heroSlot.textContent = "";
      const node = F.makeIcon(icon, { size: 128, pack: "ember", label: icon.id });
      heroSlot.appendChild(node);
      heroLabel.textContent = icon.id;
      requestAnimationFrame(() => F.replay(node));
    }
    paintHero();
    setInterval(() => {
      heroIdx = (heroIdx + 1) % heroIcons.length;
      paintHero();
    }, 3600);
    if (heroSlot) heroSlot.addEventListener("mouseenter", () => F.replay(heroSlot));

    /* ---------- typewriter search demo ---------- */
    const words = ["heart", "cart", "cloud-rain", "camera", "rocket", "coffee"];
    const typed = document.getElementById("typedWord");
    let w = 0, ch = 0, deleting = false;
    function tick() {
      if (!typed) return;
      const word = words[w];
      if (!deleting) {
        ch++;
        typed.textContent = word.slice(0, ch);
        if (ch === word.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        ch--;
        typed.textContent = word.slice(0, ch);
        if (ch === 0) {
          deleting = false;
          w = (w + 1) % words.length;
        }
      }
      setTimeout(tick, deleting ? 45 : 95);
    }
    tick();
    const fakeSearch = document.getElementById("fakeSearch");
    if (fakeSearch) {
      const open = () => F.openPalette(typed ? typed.textContent : "");
      fakeSearch.addEventListener("click", open);
      fakeSearch.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      });
    }

    /* ---------- finder tiles ---------- */
    const tileIds = ["heart", "cart", "cloud-rain", "camera", "music", "bell", "rocket", "smile", "coffee", "gamepad", "leaf", "flash"];
    const tiles = document.getElementById("finderTiles");
    if (tiles) {
      tileIds.forEach((id) => {
        const icon = F.iconRecord(id);
        if (!icon) return;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "finder-tile anim-host";
        btn.setAttribute("aria-label", "Open " + id);
        btn.appendChild(F.makeIcon(icon, { size: 34 }));
        const name = document.createElement("span");
        name.className = "t-name";
        name.textContent = id;
        btn.appendChild(name);
        btn.addEventListener("click", () => {
          window.location.href = "icon.html?id=" + encodeURIComponent(id);
        });
        tiles.appendChild(btn);
      });
    }

    /* ---------- playground ---------- */
    const picks = ["sparkles", "bell-ring", "rocket", "heart", "coffee", "camera", "music", "cloud-rain"];
    const state = {
      id: "sparkles",
      pack: "aura",
      size: 128,
      dur: 1,
      color: "#F2892C",
      lang: "react",
    };
    const defaults = Object.assign({}, state);
    const stage = document.getElementById("pgStage");
    const picker = document.getElementById("pgPicker");
    const codeEl = document.getElementById("pgCode");
    const swatchWrap = document.getElementById("pgSwatches");
    const colors = ["#F2892C", "#FFA24D", "#2B1D12", "#B4530E", "#D4483B", "#27885C", "#4C6FC8"];

    function currentIcon() {
      return F.iconRecord(state.id);
    }

    function renderStage() {
      if (!stage) return;
      const icon = currentIcon();
      if (!icon) return;
      stage.textContent = "";
      stage.appendChild(F.makeIcon(icon, {
        size: state.size, pack: state.pack, color: state.color, dur: state.dur, label: icon.id,
      }));
      const cat = data.categories.find((c) => c.id === icon.cat);
      const catEl = document.getElementById("pgCat");
      const idEl = document.getElementById("pgId");
      const tagEl = document.getElementById("pgPackTag");
      if (catEl) catEl.textContent = cat ? cat.name : icon.cat;
      if (idEl) idEl.textContent = icon.id;
      if (tagEl) {
        const pack = data.packs.find((p) => p.id === state.pack);
        tagEl.textContent = pack ? pack.name + " pack" : state.pack;
      }
    }

    function renderCode() {
      if (!codeEl) return;
      const icon = currentIcon();
      if (!icon) return;
      const opts = { size: state.size, color: state.color, dur: state.dur, pack: state.pack };
      let code, label;
      switch (state.lang) {
        case "vue": code = F.codeVue(icon, opts); label = "Vue"; break;
        case "html": code = F.codeHtml(icon, opts); label = "HTML"; break;
        case "svg": code = F.svgSource(icon, opts); label = "SVG"; break;
        default: code = F.codeReact(icon, opts); label = "React";
      }
      codeEl.innerHTML = F.highlight(code, state.lang === "react" ? "react" : state.lang);
      codeEl.dataset.raw = code;
      const labelEl = document.getElementById("pgCodeLabel");
      if (labelEl) labelEl.textContent = label;
    }

    function renderAll() {
      renderStage();
      renderCode();
    }

    if (picker) {
      picks.forEach((id) => {
        const icon = F.iconRecord(id);
        if (!icon) return;
        const b = document.createElement("button");
        b.type = "button";
        b.className = "pg-pick" + (id === state.id ? " is-active" : "");
        b.setAttribute("aria-label", "Preview " + id);
        b.appendChild(F.makeIcon(icon, { size: 22 }));
        b.addEventListener("click", () => {
          state.id = id;
          Array.from(picker.children).forEach((c) => c.classList.remove("is-active"));
          b.classList.add("is-active");
          renderAll();
          F.replay(stage);
        });
        picker.appendChild(b);
      });
    }

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
          renderAll();
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
        renderAll();
      });
    }

    const sizeRange = document.getElementById("pgSize");
    const durRange = document.getElementById("pgDur");
    if (sizeRange) {
      sizeRange.addEventListener("input", (e) => {
        state.size = Number(e.target.value);
        document.getElementById("pgSizeOut").textContent = state.size + "px";
        renderAll();
      });
    }
    if (durRange) {
      durRange.addEventListener("input", (e) => {
        state.dur = Number(e.target.value);
        document.getElementById("pgDurOut").textContent = state.dur.toFixed(1) + "×";
        renderAll();
      });
    }

    document.querySelectorAll(".code-tabs button").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".code-tabs button").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        state.lang = btn.getAttribute("data-lang");
        renderCode();
      });
    });

    const copyBtn = document.getElementById("pgCopy");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        if (codeEl && codeEl.dataset.raw) F.copyText(codeEl.dataset.raw, "Snippet copied — go ship it");
      });
    }
    const replayBtn = document.getElementById("pgReplay");
    if (replayBtn) replayBtn.addEventListener("click", () => F.replay(stage));
    const resetBtn = document.getElementById("pgReset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        Object.assign(state, defaults);
        if (sizeRange) { sizeRange.value = state.size; document.getElementById("pgSizeOut").textContent = state.size + "px"; }
        if (durRange) { durRange.value = state.dur; document.getElementById("pgDurOut").textContent = state.dur.toFixed(1) + "×"; }
        if (picker) {
          Array.from(picker.children).forEach((c, i) => c.classList.toggle("is-active", picks[i] === state.id));
        }
        if (swatchWrap) {
          Array.from(swatchWrap.querySelectorAll(".swatch")).forEach((x, i) => {
            x.classList.toggle("is-active", colors[i] === state.color);
          });
        }
        document.querySelectorAll(".code-tabs button").forEach((b) => {
          b.classList.toggle("is-active", b.getAttribute("data-lang") === state.lang);
        });
        renderAll();
        F.toast("Playground reset");
      });
    }
    renderAll();

    /* ---------- showcase toggles ---------- */
    const likeBtn = document.getElementById("likeBtn");
    if (likeBtn) {
      likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("is-liked");
        F.replay(likeBtn);
        F.toast(likeBtn.classList.contains("is-liked") ? "Added to favorites" : "Removed from favorites");
      });
    }

    const playBtn = document.getElementById("playBtn");
    const playIcon = document.getElementById("playIcon");
    let playing = false;
    function paintPlay() {
      if (!playIcon) return;
      const icon = F.iconRecord(playing ? "pause" : "play");
      playIcon.textContent = "";
      playIcon.appendChild(F.makeIcon(icon, { size: 23 }));
      if (playBtn) playBtn.setAttribute("aria-label", playing ? "Pause" : "Play");
      F.replay(playBtn);
    }
    if (playBtn) {
      paintPlay();
      playBtn.addEventListener("click", () => {
        playing = !playing;
        paintPlay();
      });
    }
  });
})();
