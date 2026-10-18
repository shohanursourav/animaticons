/* Animaticons runtime: icon rendering, motion, clipboard, palette, codegen. */
(function () {
  "use strict";

  const D = () => window.ANIMATICONS;

  /* ---------------- helpers ---------------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const pascal = (id) =>
    id
      .split(/[-_ ]+/)
      .filter(Boolean)
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("");
  const componentName = (id) => pascal(id) + "Icon";
  const fmt = (n) => n.toLocaleString("en-US");
  const esc = (s) =>
    String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  /* ---------------- icon mounting ---------------- */
  function svgInner(icon) {
    return icon.svg;
  }

  function makeIcon(icon, opts) {
    opts = opts || {};
    const span = document.createElement("span");
    span.className = "fi" + (opts.pack ? " pack-" + opts.pack : "") + (opts.cls ? " " + opts.cls : "");
    span.style.setProperty("--size", (opts.size || 24) + "px");
    if (opts.color) span.style.color = opts.color;
    if (opts.dur != null) span.style.setProperty("--dur", String(opts.dur));
    span.setAttribute("role", opts.label ? "img" : "presentation");
    if (opts.label) span.setAttribute("aria-label", opts.label);
    else span.setAttribute("aria-hidden", "true");
    span.dataset.id = icon.id;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.innerHTML = svgInner(icon);
    // per-element animation delays
    svg.querySelectorAll("[data-d]").forEach((el) => {
      el.style.setProperty("--d", el.getAttribute("data-d") || "0");
    });
    span.appendChild(svg);
    return span;
  }

  function mountIcon(el, icon, opts) {
    el.textContent = "";
    const node = makeIcon(icon, opts);
    el.appendChild(node);
    return node;
  }

  function replay(el) {
    const target = el.classList && el.classList.contains("fi") ? el : $(".fi", el);
    if (!target) return;
    target.classList.remove("play");
    void target.offsetWidth; // reflow to restart animations
    target.classList.add("play");
  }

  /* ---------------- clipboard + toast ---------------- */
  let toastTimer = null;
  function toast(msg, kind) {
    let el = $(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.innerHTML = "";
    const data = D();
    if (data) {
      const check = data.icons.find((i) => i.id === "check-circle");
      if (check) el.appendChild(makeIcon(check, { size: 17 }));
    }
    const t = document.createElement("span");
    t.textContent = msg;
    el.appendChild(t);
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function copyText(text, msg) {
    const done = () => toast(msg || "Copied to clipboard");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }
  function fallbackCopy(text, done) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  /* ---------------- codegen ---------------- */
  function svgSource(icon, opts) {
    opts = opts || {};
    const size = opts.size || 24;
    const color = opts.color || "currentColor";
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24"\n' +
      '  fill="none" stroke="' + color + '" stroke-width="2"\n' +
      '  stroke-linecap="round" stroke-linejoin="round">\n' +
      "  " + icon.svg.replace(/></g, ">\n  ") + "\n</svg>"
    );
  }

  function codeReact(icon, opts) {
    const name = componentName(icon.id);
    const pack = opts.pack || "aura";
    const pkg = (D().packs.find((p) => p.id === pack) || D().packs[0]).pkg;
    return (
      'import { ' + name + ' } from "' + pkg + '";\n\n' +
      "export function Example() {\n" +
      "  return (\n" +
      "    <" + name + "\n" +
      "      size={" + (opts.size || 24) + "}\n" +
      '      color="' + (opts.color || "currentColor") + '"\n' +
      "      duration={" + (opts.dur != null ? opts.dur : 1) + "}\n" +
      "    />\n" +
      "  );\n" +
      "}"
    );
  }

  function codeVue(icon, opts) {
    const name = componentName(icon.id);
    const pack = opts.pack || "aura";
    const pkg = "@animaticons/vue/" + pack;
    return (
      "<" + "script setup>\n" +
      'import { ' + name + ' } from "' + pkg + '";\n' +
      "<" + "/script>\n\n" +
      "<template>\n" +
      "  <" + name + "\n" +
      "    :size=\"" + (opts.size || 24) + "\"\n" +
      "    color=\"" + (opts.color || "currentColor") + "\"\n" +
      "    :duration=\"" + (opts.dur != null ? opts.dur : 1) + "\"\n" +
      "  />\n" +
      "</template>"
    );
  }

  function codeHtml(icon, opts) {
    const size = opts.size || 24;
    const color = opts.color || "currentColor";
    return (
      '<script type="module">\n' +
      '  import { createIcon } from "@animaticons/vanilla";\n' +
      '  import { ' + pascal(icon.id) + ' } from "@animaticons/vanilla/' + (opts.pack || "aura") + '";\n\n' +
      "  const el = createIcon(" + pascal(icon.id) + ", {\n" +
      "    size: " + size + ",\n" +
      '    color: "' + color + '",\n' +
      "    duration: " + (opts.dur != null ? opts.dur : 1) + ",\n" +
      "  });\n" +
      '  document.querySelector("#slot").append(el);\n' +
      "<" + "/script>"
    );
  }

  function highlight(code, lang) {
    let s = esc(code);
    if (lang === "svg" || lang === "html") {
      s = s
        .replace(/(&lt;\/?[a-zA-Z][\w-]*)/g, '<span class="tok-tag">$1</span>')
        .replace(/([a-zA-Z-:]+)=(&quot;.*?&quot;)/g, '<span class="tok-attr">$1</span>=<span class="tok-str">$2</span>');
    } else if (lang === "react" || lang === "vue") {
      s = s
        .replace(/\b(import|from|export|function|return|const|let|setup|script|template)\b/g, '<span class="tok-key">$1</span>')
        .replace(/(&quot;.*?&quot;|&#39;.*?&#39;)/g, '<span class="tok-str">$1</span>')
        .replace(/(&lt;\/?[A-Z][\w]*)/g, '<span class="tok-tag">$1</span>');
    }
    return s;
  }

  /* ---------------- search ---------------- */
  function scoreIcon(icon, q) {
    if (!q) return 1;
    const id = icon.id;
    const hay = id + " " + (icon.kw || []).join(" ") + " " + icon.cat;
    if (id === q) return 100;
    if (id.startsWith(q)) return 80;
    if (id.includes(q)) return 60;
    const words = q.split(/\s+/).filter(Boolean);
    if (words.every((w) => hay.includes(w))) return 40;
    // subsequence fuzzy
    let qi = 0;
    for (let i = 0; i < id.length && qi < q.length; i++) {
      if (id[i] === q[qi]) qi++;
    }
    return qi === q.length ? 12 : 0;
  }

  function searchIcons(q, opts) {
    opts = opts || {};
    const data = D();
    if (!data) return [];
    q = (q || "").trim().toLowerCase();
    const packs = opts.packs || null; // null = all
    const cat = opts.cat || null;
    const out = [];
    for (const icon of data.icons) {
      if (cat && icon.cat !== cat) continue;
      const sc = scoreIcon(icon, q);
      if (!sc) continue;
      const targets = packs || data.packs.map((p) => p.id);
      for (const pack of targets) {
        // no per-pack bias: keep both packs interleaved in results
        out.push({ icon, pack, score: sc });
      }
    }
    out.sort((a, b) => b.score - a.score || a.icon.id.localeCompare(b.icon.id));
    return opts.limit ? out.slice(0, opts.limit) : out;
  }

  function iconRecord(id) {
    return D().icons.find((i) => i.id === id) || null;
  }

  /* ---------------- command palette ---------------- */
  let paletteBuilt = false;
  let palSel = 0;
  let palItems = [];

  function buildPalette() {
    if (paletteBuilt) return;
    paletteBuilt = true;
    const back = document.createElement("div");
    back.className = "palette-backdrop";
    back.innerHTML =
      '<div class="palette" role="dialog" aria-label="Search icons">' +
      '  <div class="palette-input-row"></div>' +
      '  <div class="palette-results"></div>' +
      '  <div class="palette-foot"><span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span><span><kbd>Enter</kbd> to open</span><span><kbd>Esc</kbd> to close</span></div>' +
      "</div>";
    document.body.appendChild(back);
    const inputRow = $(".palette-input-row", back);
    const data = D();
    const findIcon = data ? data.icons.find((i) => i.id === "search") : null;
    if (findIcon) inputRow.appendChild(makeIcon(findIcon, { size: 20 }));
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Search 1,026 animated icons…";
    input.setAttribute("aria-label", "Search icons");
    input.autocomplete = "off";
    inputRow.appendChild(input);

    const results = $(".palette-results", back);
    const render = () => {
      const q = input.value.trim();
      palItems = searchIcons(q, { limit: 30 });
      palSel = 0;
      results.textContent = "";
      if (!palItems.length) {
        const empty = document.createElement("div");
        empty.className = "palette-empty";
        empty.textContent = "No icons match “" + q + "”. Try another word.";
        results.appendChild(empty);
        return;
      }
      palItems.forEach((item, i) => {
        const pack = data.packs.find((p) => p.id === item.pack);
        const cat = data.categories.find((c) => c.id === item.icon.cat);
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "palette-item" + (i === 0 ? " is-selected" : "");
        btn.appendChild(makeIcon(item.icon, { size: 26, pack: item.pack }));
        const meta = document.createElement("div");
        meta.innerHTML =
          '<div class="pi-name">' + esc(item.icon.id) + "</div>" +
          '<div class="pi-meta">' + esc(pack ? pack.name : item.pack) + " pack · " + esc(cat ? cat.name : item.icon.cat) + "</div>";
        btn.appendChild(meta);
        btn.addEventListener("click", () => go(item));
        btn.addEventListener("mouseenter", () => {
          palSel = i;
          syncSel(results);
        });
        results.appendChild(btn);
      });
      wireIconSlots(results);
    };
    const syncSel = (res) => {
      $$(".palette-item", res).forEach((el, i) => el.classList.toggle("is-selected", i === palSel));
      const el = $$(".palette-item", res)[palSel];
      if (el) el.scrollIntoView({ block: "nearest" });
    };
    const go = (item) => {
      closePalette();
      window.location.href = "icon.html?id=" + encodeURIComponent(item.icon.id) + "&pack=" + item.pack;
    };

    input.addEventListener("input", render);
    input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        palSel = Math.min(palSel + 1, palItems.length - 1);
        syncSel(results);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        palSel = Math.max(palSel - 1, 0);
        syncSel(results);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (palItems[palSel]) go(palItems[palSel]);
      }
    });
    back.addEventListener("click", (e) => {
      if (e.target === back) closePalette();
    });
    render();
  }

  function openPalette(prefill) {
    buildPalette();
    const back = $(".palette-backdrop");
    back.classList.add("open");
    $(".palette").classList.add("open");
    const input = $(".palette-input-row input", back);
    if (prefill != null) input.value = prefill;
    input.dispatchEvent(new Event("input"));
    input.focus();
    input.select();
    document.body.style.overflow = "hidden";
  }
  function closePalette() {
    const back = $(".palette-backdrop");
    if (!back) return;
    back.classList.remove("open");
    $(".palette").classList.remove("open");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", (e) => {
    const isMod = e.metaKey || e.ctrlKey;
    if (isMod && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const back = $(".palette-backdrop");
      if (back && back.classList.contains("open")) closePalette();
      else openPalette();
    } else if (e.key === "Escape") {
      closePalette();
    }
  });

  /* ---------------- hover / focus playback ----------------
     CSS :hover cannot reliably replay: a container (e.g. the icon grid)
     stays :hover while the pointer moves between its icons, so animations
     play once and never restart. Instead, every fresh pointer/focus entry
     forces a replay on the nearest icon. */
  function hoverRoot(target) {
    if (!target || !target.closest) return null;
    const fi = target.closest(".fi");
    if (fi) return fi;
    const host = target.closest("button, a, [data-icon], [data-hover-icon]");
    if (host) {
      const icons = host.querySelectorAll ? host.querySelectorAll(".fi") : [];
      if (icons.length === 1) return icons[0];
    }
    return null;
  }

  function wireHoverPlayback() {
    document.addEventListener("pointerover", (e) => {
      const root = hoverRoot(e.target);
      if (!root) return;
      if (e.relatedTarget && root.contains(e.relatedTarget)) return; // still inside
      replay(root);
    });
    document.addEventListener("pointerdown", (e) => {
      const root = hoverRoot(e.target);
      if (root) replay(root); // touch devices: tap = play
    });
    document.addEventListener("focusin", (e) => {
      const root = hoverRoot(e.target);
      if (root) replay(root);
    });
  }

  /* ---------------- shared UI wiring ---------------- */
  function wireCopyButtons(root) {
    $$("[data-copy]", root || document).forEach((btn) => {
      if (btn.dataset.wired) return;
      btn.dataset.wired = "1";
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-copy");
        if (val === "#code") {
          const block = btn.closest(".code-block");
          const pre = block && $("pre", block);
          if (pre) copyText(pre.innerText, "Code copied");
          return;
        }
        copyText(val, btn.getAttribute("data-copy-msg") || "Copied");
      });
    });
  }

  // icon placeholders: <span data-icon="bell" data-pack="aura" data-size="22"></span>
  function wireIconSlots(root) {
    $$("[data-icon]", root || document).forEach((slot) => {
      if (slot.dataset.mounted) return;
      const icon = iconRecord(slot.getAttribute("data-icon"));
      if (!icon) return;
      slot.dataset.mounted = "1";
      const size = Number(slot.getAttribute("data-size")) || 24;
      const pack =
        slot.getAttribute("data-pack") ||
        (slot.classList.contains("pack-ember") ? "ember" : "aura");
      const color = slot.getAttribute("data-color") || null;
      const label = slot.getAttribute("data-label") || null;
      mountIcon(slot, icon, { size, pack, color, label, dur: slot.getAttribute("data-dur") });
    });
  }

  /* ---------------- public API ---------------- */
  window.Animaticons = {
    $, $$, pascal, componentName, fmt, esc,
    makeIcon, mountIcon, replay,
    toast, copyText,
    svgSource, codeReact, codeVue, codeHtml, highlight,
    searchIcons, iconRecord,
    openPalette, closePalette,
    wireCopyButtons, wireIconSlots,
    ready(fn) {
      if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
      else fn();
    },
  };

  // auto-wire on load
  window.Animaticons.ready(() => {
    wireHoverPlayback();
    wireCopyButtons();
    wireIconSlots();
    $$("[data-open-palette]").forEach((btn) => {
      btn.addEventListener("click", () => openPalette());
    });
    // platform-aware shortcut hint: ⌘K on Apple, Ctrl K elsewhere
    const isApple = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
    if (!isApple) {
      $$("kbd").forEach((k) => {
        if (k.textContent.includes("⌘")) k.textContent = "Ctrl K";
      });
    }
  });
})();
