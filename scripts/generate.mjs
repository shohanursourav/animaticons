// Animaticons icon set generator -> js/icons-data.js
// Usage: node scripts/generate.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import core from "./recipes/r-core.mjs";
import files from "./recipes/r-files.mjs";
import people from "./recipes/r-people.mjs";
import media from "./recipes/r-media.mjs";
import world from "./recipes/r-world.mjs";
import biz from "./recipes/r-biz.mjs";
import shapes from "./recipes/r-shapes.mjs";
import solid from "./recipes/r-solid.mjs";
import {
  A, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, cross, sparkle, arc,
} from "./dsl.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Every published icon must contain at least one fillable shape so the
// Ember tint pack has something to glow. Pure-line designs (arrows,
// chevrons, operators...) are omitted and replaced by the solid-friendly
// set in r-solid.mjs.
const bodyHasFill = (body) =>
  /<(rect|circle|ellipse|polygon)[\s>]/.test(body) ||
  [...body.matchAll(/<path\b[^>]*\sd="([^"]*)"/g)].some(([, d]) => /[Zz]\s*$/.test(d.trim()));

const base = [...core, ...files, ...people, ...media, ...world, ...biz, ...shapes];
const lineOnly = base.filter((r) => !bodyHasFill(r.svg));
if (lineOnly.length) {
  console.log(`Omitting ${lineOnly.length} line-only designs (replaced by r-solid):`);
  console.log("  " + lineOnly.map((r) => r.id).join(", "));
}
const RECIPES = [...base.filter((r) => bodyHasFill(r.svg)), ...solid];

/** Display metadata for categories (order = sidebar order). */
export const CATEGORIES = [
  { id: "moves", name: "On the Move", kw: "arrows directions" },
  { id: "interface", name: "Panels & Controls", kw: "ui layout" },
  { id: "search", name: "Find & Focus", kw: "search zoom" },
  { id: "files", name: "Papers & Folders", kw: "documents files" },
  { id: "editing", name: "Marks & Editing", kw: "tools writing" },
  { id: "mail", name: "Post & Parcels", kw: "shipping email" },
  { id: "people", name: "People & Faces", kw: "users profiles" },
  { id: "comms", name: "Talk & Share", kw: "chat call" },
  { id: "alerts", name: "Heads Up", kw: "notifications status" },
  { id: "moods", name: "Moods", kw: "emoji faces" },
  { id: "media", name: "Play & Watch", kw: "video playback" },
  { id: "audio", name: "Sound", kw: "volume music" },
  { id: "photo", name: "Lens & Light", kw: "camera photos" },
  { id: "devices", name: "Gadgets", kw: "hardware devices" },
  { id: "weather", name: "Sky & Weather", kw: "forecast sun" },
  { id: "nature", name: "Wild & Green", kw: "outdoors plants" },
  { id: "animals", name: "Creature Friends", kw: "pets animals" },
  { id: "places", name: "Places & Travel", kw: "maps transit" },
  { id: "food", name: "Bites & Sips", kw: "food drink" },
  { id: "shopping", name: "Shop & Buy", kw: "commerce cart" },
  { id: "money", name: "Money", kw: "finance payments" },
  { id: "charts", name: "Charts & Numbers", kw: "analytics stats" },
  { id: "security", name: "Lock & Guard", kw: "privacy safety" },
  { id: "dev", name: "Build & Code", kw: "developer tools" },
  { id: "storage", name: "Data & Cloud", kw: "database files" },
  { id: "design", name: "Design Tools", kw: "creative vector" },
  { id: "gestures", name: "Hands & Cursors", kw: "pointers touch" },
  { id: "science", name: "Lab & Science", kw: "research physics" },
  { id: "home", name: "House & Tools", kw: "living furniture" },
  { id: "games", name: "Play & Party", kw: "fun games" },
  { id: "shapes", name: "Shapes & Sparks", kw: "geometry marks" },
  { id: "math", name: "Math & Logic", kw: "numbers symbols" },
  { id: "symbols", name: "Signs & Symbols", kw: "marks punctuation" },
];

// ---- validate & assemble -------------------------------------------------
/** Mark closed shapes so the Ember pack can tint them. */
function markFillable(svg) {
  return svg
    .replace(/<(circle|ellipse|rect|polygon)\b([^>]*?)\/>/g, (m, tag, attrs) =>
      /data-f=/.test(attrs) ? m : `<${tag}${attrs} data-f="1"/>`
    )
    .replace(/<path\b([^>]*?)\/>/g, (m, attrs) => {
      if (/data-f=/.test(attrs)) return m;
      const d = (attrs.match(/\bd="([^"]*)"/) || [])[1] || "";
      return /[Zz]\s*$/.test(d.trim()) ? `<path${attrs} data-f="1"/>` : m;
    });
}

const seen = new Set();
const icons = [];
for (const r of RECIPES) {
  if (!r || !r.id || !r.svg) {
    console.error("Bad recipe:", r && r.id);
    process.exit(1);
  }
  if (seen.has(r.id)) {
    console.error("Duplicate icon id:", r.id);
    process.exit(1);
  }
  seen.add(r.id);
  const cat = CATEGORIES.find((c) => c.id === r.cat);
  if (!cat) {
    console.error("Unknown category:", r.cat, "for", r.id);
    process.exit(1);
  }
  icons.push({ id: r.id, cat: r.cat, kw: r.kw || [], svg: markFillable(r.svg) });
}

// Category counts
const counts = {};
for (const i of icons) counts[i.cat] = (counts[i.cat] || 0) + 1;
const categories = CATEGORIES.map((c) => ({ ...c, count: counts[c.id] || 0 }));

// Target: exactly 513 base geometries so two packs give 1,026 icons.
const TARGET = 513;
if (icons.length > TARGET) {
  console.error(`Too many icons: ${icons.length} (target ${TARGET})`);
  process.exit(1);
}
if (icons.length < TARGET) {
  console.log(`Padding with abstract marks: need ${TARGET - icons.length} more`);
  let n = TARGET - icons.length;
  const recipes = [
    ["flare-1", sparkle(12, 12, 7, A.pop()), ["shine", "burst"]],
    ["flare-2", sparkle(8, 8, 4, A.pop()) + sparkle(16, 15, 5, A.pop(0.1)), ["shine", "double"]],
    ["flare-3", sparkle(12, 7, 3.4, A.pop()) + sparkle(7.4, 15.6, 2.6, A.pop(0.08)) + sparkle(16.8, 15, 3, A.pop(0.16)), ["shine", "triple"]],
    ["arc-1", arc(12, 12, 8, 200, 340, A.draw()) + arc(12, 12, 5, 200, 340, A.draw(0.1)), ["curve", "waves"]],
    ["arc-2", arc(12, 14, 7, 180, 360, A.draw()) + arc(12, 14, 4, 180, 360, A.draw(0.1)), ["curve", "arch"]],
    ["ring-2", circle(12, 12, 8, A.draw()) + circle(12, 12, 5.4, A.draw(0.08)) + circle(12, 12, 2.6, A.draw(0.16)), ["rings", "target"]],
    ["wave-1", path("M3 12c2-3.4 4-3.4 6 0s4 3.4 6 0 4-3.4 6 0", A.draw()), ["wave", "line"]],
    ["wave-2", path("M3 9c2-3 4-3 6 0s4 3 6 0 4-3 6 0", A.draw()) + path("M3 15c2-3 4-3 6 0s4 3 6 0 4-3 6 0", A.draw(0.1)), ["waves", "flow"]],
    ["zigzag-1", polyline("3,16 7,8 11,16 15,8 19,16", A.draw()), ["zigzag", "pulse line"]],
    ["dots-3", circle(6, 12, 1.6, A.pop()) + circle(12, 12, 1.6, A.pop(0.1)) + circle(18, 12, 1.6, A.pop(0.2)), ["dots", "trio"]],
    ["grid-2", rect(4, 4, 6.4, 6.4, 1.2, A.pop()) + rect(13.6, 4, 6.4, 6.4, 1.2, A.pop(0.08)) + rect(4, 13.6, 6.4, 6.4, 1.2, A.pop(0.16)) + rect(13.6, 13.6, 6.4, 6.4, 1.2, A.pop(0.24)), ["grid", "quad"]],
    ["crosshair-2", cross(12, 12, 6, A.draw()) + circle(12, 12, 8.6, A.draw(0.1)), ["plus ring", "aim"]],
    ["orbit-2", ellipse(12, 12, 8.6, 3.2, A.draw()) + rot(ellipse(12, 12, 8.6, 3.2, A.draw(0.1)), 90) + circle(12, 12, 1.6, A.pop(0.18)), ["orbit", "cross rings"]],
    ["steps-1", path("M4 18h4v-4h4v-4h4V6h4", A.draw()), ["stairs", "levels"]],
    ["pinwheel-1", [0, 90, 180, 270].map((d, i) => rot(path("M12 12c0-4 1-6 4-7 .6 3.4-.4 5.6-4 7Z", A.pop(0.05 * i)), d)).join(""), ["pinwheel", "spin"]],
    ["petal-4", [0, 90, 180, 270].map((d, i) => rot(ellipse(12, 7.6, 2.2, 4, A.pop(0.05 * i)), d)).join(""), ["petals", "flower mark"]],
    ["layered-1", polygon("12,4 20,8.6 12,13.2 4,8.6", A.draw()) + polyline("4,13 12,17.6 20,13", A.draw(0.12)), ["layers", "stack"]],
    ["prism-1", polygon("12,3.2 20.6,18.8 3.4,18.8", A.draw()) + line(12, 3.2, 12, 18.8, A.draw(0.12)) + line(7.6, 11, 16.4, 11, A.draw(0.16)), ["prism", "split"]],
    ["compass-rose", [0, 90, 180, 270].map((d, i) => rot(polygon("12,3 14,12 12,21 10,12", A.pop(0.05 * i)), d)).join("") + circle(12, 12, 1.4, A.pop(0.2)), ["rose", "directions"]],
    ["knot-1", path("M12 3.4c4 0 7 2.4 7 5.6 0 2.6-2 4-4.2 5.4-2 1.2-3 2.4-3 4.4a3.2 3.2 0 0 1-6.2 1", A.draw()), ["knot", "loop"]],
    ["flag-pennant", path("M5.2 3.4v17.2", A.draw()) + path("M5.2 4.2c4-1.6 8-1.6 12 0-4 1.6-8 1.6-12 0Z", A.draw(0.1)), ["pennant", "banner"]],
    ["hourglass-1", path("M6.4 3.4h11.2M6.4 20.6h11.2", A.draw()) + path("M7.4 3.4c0 4 2 6.2 4.6 8.6 2.6-2.4 4.6-4.6 4.6-8.6", A.draw(0.1)) + path("M7.4 20.6c0-4 2-6.2 4.6-8.6 2.6 2.4 4.6 4.6 4.6 8.6", A.draw(0.14)), ["hourglass", "time"]],
    ["beacon-1", circle(12, 12, 2.4, A.pulse()) + arc(12, 12, 5.2, -120, 120, A.draw(0.1)) + arc(12, 12, 8.2, -120, 120, A.draw(0.16)), ["beacon", "signal"]],
    ["stack-3", path("M12 3.4 21 8 12 12.6 3 8Z", A.draw()) + path("M3 12 12 16.6 21 12", A.draw(0.1)) + path("M3 16 12 20.6 21 16", A.draw(0.16)), ["stack", "triple"]],
    ["target-3", circle(12, 12, 8.4, A.draw()) + circle(12, 12, 4.6, A.draw(0.1)) + circle(12, 12, 1.4, A.pop(0.18)), ["target", "aim"]],
  ];
  for (let i = 0; i < n; i++) {
    const [id, svg, kw] = recipes[i % recipes.length];
    const suffix = i >= recipes.length ? `-${Math.floor(i / recipes.length) + 1}` : "";
    icons.push({ id: id + suffix, cat: "shapes", kw, svg: markFillable(svg) });
    counts.shapes = (counts.shapes || 0) + 1;
  }
  // refresh category counts
  for (const c of categories) c.count = counts[c.id] || 0;
}

if (icons.length !== TARGET) {
  console.error(`Icon count ${icons.length} != ${TARGET}`);
  process.exit(1);
}

// Sort icons: by category order, then name (so families sit together)
const catOrder = Object.fromEntries(categories.map((c, i) => [c.id, i]));
icons.sort((a, b) => catOrder[a.cat] - catOrder[b.cat] || a.id.localeCompare(b.id));

const data = {
  generator: "animaticons",
  total: TARGET * 2,
  perPack: TARGET,
  packs: [
    {
      id: "aura",
      name: "Aura",
      tagline: "Crisp line icons with a light, airy feel.",
      pkg: "@animaticons/react/aura",
      iconCount: TARGET,
    },
    {
      id: "ember",
      name: "Ember",
      tagline: "The same motion with soft tinted fills that glow.",
      pkg: "@animaticons/react/ember",
      iconCount: TARGET,
    },
  ],
  categories,
  icons,
};

const out = join(root, "js", "icons-data.js");
mkdirSync(join(root, "js"), { recursive: true });
writeFileSync(out, "// Generated by scripts/generate.mjs — do not edit by hand.\nwindow.ANIMATICONS = " + JSON.stringify(data) + ";\n");

// stats
const anims = {};
for (const i of icons) {
  for (const m of i.svg.matchAll(/data-a="([a-z]+)"/g)) anims[m[1]] = (anims[m[1]] || 0) + 1;
}
console.log(`Wrote ${out}`);
console.log(`Base geometries: ${icons.length}  Total icons (2 packs): ${icons.length * 2}`);
console.log("Categories:", categories.map((c) => `${c.id}:${c.count}`).join(", "));
console.log("Animations:", Object.entries(anims).map(([k, v]) => `${k}:${v}`).join(", "));
