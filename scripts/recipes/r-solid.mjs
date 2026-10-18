// Solid-friendly replacement designs — every icon here contains closed
// shapes so the Ember tint pack has something to glow. 116 designs, used
// in place of the pure-line icons that would look identical in both packs.
import {
  A, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
} from "../dsl.mjs";

const P = [];

/* ---------- local helpers ---------- */
const petalRing = (n, cx, cy, dist, w, h, delay = 0.05) =>
  Array.from({ length: n }, (_, i) =>
    rot(ellipse(cx, cy - dist, w, h, A.pop(delay * i)), (360 / n) * i, cx, cy)
  ).join("");

const rays = (n, cx, cy, r0, r1, delay = 0.03) =>
  Array.from({ length: n }, (_, i) =>
    rot(line(cx, cy - r0, cx, cy - r1, A.draw(delay * i)), (360 / n) * i, cx, cy)
  ).join("");

const ribbon = (extra = A.pop(0.16)) =>
  polygon("8,15.4 10,21.6 12,19.2 14,21.6 16,15.4", extra);

const smile = (cx, cy, w, extra = A.draw(0.14)) =>
  path(
    `M${cx - w} ${cy} Q${cx} ${cy + w * 0.95} ${cx + w} ${cy} Q${cx} ${cy + w * 0.5} ${cx - w} ${cy} Z`,
    extra
  );

const dots = (...pts) =>
  pts.map(([x, y, r = 0.85, d = 0.12], i) => circle(x, y, r, A.pop(d + i * 0.02))).join("");

/* ================================================================
   Seals & medals (15)
   ================================================================ */
{
  const CAT = "shapes";
  P.push(icon("seal-star", "symbols", ["award", "rosette", "sticker"], star(12, 9.6, 6.2, A.draw()) + sparkle(12, 9.6, 2.2, A.pop(0.14)) + ribbon()));
  P.push(icon("seal-heart", "symbols", ["award", "loved", "rosette"], star(12, 9.6, 6.2, A.draw()) + heart(A.pop(0.14), 12, 9.8, 0.36) + ribbon()));
  P.push(icon("seal-bolt", "symbols", ["award", "energy", "rosette"], star(12, 9.6, 6.2, A.draw()) + bolt(12, 9.8, 2.9, A.pop(0.14)) + ribbon()));
  P.push(icon("seal-check", "symbols", ["award", "verified", "rosette"], star(12, 9.6, 6.2, A.draw()) + check(9.2, 10, 5.4, A.pop(0.14)) + ribbon()));
  P.push(icon("seal-flower", "symbols", ["award", "bloom", "rosette"], star(12, 9.6, 6.2, A.draw()) + petalRing(5, 12, 9.6, 1.7, 0.9, 1.3, 0.03) + ribbon()));
  P.push(icon("seal-crown", "symbols", ["award", "royal", "rosette"], star(12, 9.6, 6.2, A.draw()) + polygon("9,10.8 9,8 11,9.4 12,7 13,9.4 15,8 15,10.8", A.pop(0.14)) + ribbon()));
  P.push(icon("seal-moon", "symbols", ["award", "night", "rosette"], star(12, 9.6, 6.2, A.draw()) + path("M13.6 7.2a2.7 2.7 0 1 0 0 4.8 2.2 2.2 0 0 1 0-4.8Z", A.pop(0.14)) + ribbon()));
  P.push(icon("seal-sun", "symbols", ["award", "bright", "rosette"], star(12, 9.6, 6.2, A.draw()) + circle(12, 9.6, 1.6, A.pop(0.12)) + rays(8, 12, 9.6, 2.4, 3.3, 0.02) + ribbon()));
  P.push(icon("medal-star", "symbols", ["prize", "award", "ribbon"], circle(12, 9, 5.4, A.draw()) + star(12, 9, 2.9, A.pop(0.12)) + ribbon(A.pop(0.2))));
  P.push(icon("medal-heart", "symbols", ["prize", "loved", "ribbon"], circle(12, 9, 5.4, A.draw()) + heart(A.pop(0.12), 12, 9.2, 0.42) + ribbon(A.pop(0.2))));
  P.push(icon("medal-laurel", "symbols", ["prize", "victory", "ribbon"], circle(12, 9, 5.4, A.draw()) + path("M9.2 12.2c0-3.4 1.4-5.6 2.8-6.4 1.4.8 2.8 3 2.8 6.4", A.draw(0.12)) + ribbon(A.pop(0.2))));
  P.push(icon("medal-ribbon", "symbols", ["prize", "medal", "honor"], circle(12, 9, 5.4, A.draw()) + circle(12, 9, 2.1, A.pop(0.12)) + ribbon(A.pop(0.2))));
  P.push(icon("badge-shield-star", "security", ["honor", "guard", "award"], path("M12 2.6 4.8 5.6v6c0 4.6 3 7.8 7.2 9.2 4.2-1.4 7.2-4.6 7.2-9.2v-6Z", A.draw()) + star(12, 10.6, 3, A.pop(0.14))));
  P.push(icon("badge-shield-check", "security", ["honor", "verified", "guard"], path("M12 2.6 4.8 5.6v6c0 4.6 3 7.8 7.2 9.2 4.2-1.4 7.2-4.6 7.2-9.2v-6Z", A.draw()) + check(9, 11, 5.8, A.pop(0.14))));
  P.push(icon("badge-shield-heart", "security", ["honor", "loved", "guard"], path("M12 2.6 4.8 5.6v6c0 4.6 3 7.8 7.2 9.2 4.2-1.4 7.2-4.6 7.2-9.2v-6Z", A.draw()) + heart(A.pop(0.14), 12, 11, 0.52)));
}

/* ================================================================
   Gems & geometry (12)
   ================================================================ */
{
  const CAT = "shapes";
  P.push(icon("gem-diamond", CAT, ["jewel", "prize", "crystal"],
    polygon("12,2.8 21,10 12,21.2 3,10", A.draw()) + line(3, 10, 21, 10, A.draw(0.1)) +
    line(7.2, 10, 12, 21.2, A.draw(0.15)) + line(16.8, 10, 12, 21.2, A.draw(0.18))));
  P.push(icon("gem-emerald", CAT, ["jewel", "cut", "crystal"],
    polygon("8.4,3.6 15.6,3.6 20.4,8.4 20.4,15.6 15.6,20.4 8.4,20.4 3.6,15.6 3.6,8.4", A.draw()) + polygon("8.4,8.4 15.6,8.4 15.6,15.6 8.4,15.6", A.pop(0.12))));
  P.push(icon("gem-crystal", CAT, ["jewel", "cluster", "crystal"],
    polygon("8,20.6 3.4,11.6 8,4.2 12,11.2", A.draw()) + polygon("12,20.6 12,11.2 16,4.2 20.6,11.6 16,20.6", A.draw(0.1))));
  P.push(icon("shape-yinyang", CAT, ["balance", "harmony", "duo"],
    circle(12, 12, 8.6, A.draw()) + path("M12 3.4a4.3 4.3 0 0 1 0 8.6 4.3 4.3 0 0 0 0 8.6 8.6 8.6 0 0 0 0-17.2Z", A.pop(0.12)) + circle(12, 7.7, 1.05, A.pop(0.18)) + circle(12, 16.3, 1.05, A.pop(0.2))));
  P.push(icon("shape-target-solid", CAT, ["aim", "bullseye", "goal"],
    circle(12, 12, 8.6, A.draw()) + circle(12, 12, 5.4, A.pop(0.1)) + circle(12, 12, 2.3, A.pop(0.16))));
  P.push(icon("shape-hourglass", CAT, ["time", "sand", "wait"],
    polygon("6.2,3.6 17.8,3.6 13.2,12 17.8,20.4 6.2,20.4 10.8,12", A.draw()) + rect(5, 2.2, 14, 2.2, 0.9, A.pop(0.14)) + rect(5, 19.6, 14, 2.2, 0.9, A.pop(0.18))));
  P.push(icon("shape-cube", CAT, ["box 3d", "block", "voxel"],
    polygon("12,3.4 20.2,8 20.2,16 12,20.6 3.8,16 3.8,8", A.draw()) + polygon("3.8,8 12,12.6 20.2,8", A.pop(0.1)) + line(12, 12.6, 12, 20.6, A.draw(0.16))));
  P.push(icon("shape-pyramid", CAT, ["triangle 3d", "delta", "monument"],
    polygon("12,3.2 21,19.8 3,19.8", A.draw()) + polygon("12,3.2 16.2,19.8 7.8,19.8", A.pop(0.12)) + line(12, 3.2, 12, 19.8, A.draw(0.18))));
  P.push(icon("shape-blob-sun", CAT, ["organic", "squish", "sun blob"],
    path("M12 3.2c4.2 0 7.2 2 8.2 5 1 3.2-.6 6.4-2.6 8.6-1.8 2.2-4.2 4-6.2 3.6-2.2-.4-3.8-2.4-5.4-4.6C4.2 13.4 3 10.8 3.8 8 4.8 4.8 7.8 3.2 12 3.2Z", A.draw()) + circle(12, 11.6, 2.2, A.pop(0.12))));
}

/* ================================================================
   Blooms & nature (12)
   ================================================================ */
{
  const CAT = "nature";
  P.push(icon("bloom-five", CAT, ["flower", "petals", "blossom"], petalRing(5, 12, 12, 5.2, 2.3, 3.6) + circle(12, 12, 2.3, A.pop(0.16))));
  P.push(icon("bloom-six", CAT, ["flower", "petals", "blossom"], petalRing(6, 12, 12, 5, 2.2, 3.4) + circle(12, 12, 2.1, A.pop(0.16))));
  P.push(icon("bloom-tulip", CAT, ["flower", "spring", "blossom"],
    path("M7.4 8.2c0 4.4 1.8 7.2 4.6 8.6 2.8-1.4 4.6-4.2 4.6-8.6-1.2 1.2-2.4 1.2-3 .2-.6 1.2-1.6 1.2-2.2 0-.6 1-1.8 1-3 .2Z", A.draw()) +
    line(12, 12.8, 12, 20.8, A.draw(0.12)) + path("M12 16.4c2.4 0 3.8-1.2 4-3.2-2.2-.2-3.6 1-4 3.2Z", A.pop(0.18))));
  P.push(icon("bloom-rose", CAT, ["flower", "romance", "blossom"],
    circle(12, 10.4, 6.2, A.draw()) + circle(12, 10.4, 3.9, A.draw(0.1)) + circle(12, 10.4, 1.7, A.pop(0.16)) +
    line(12, 16.6, 12, 20.8, A.draw(0.2)) + path("M12 18c2 0 3.2-1 3.4-2.6-1.9-.2-3 1-3.4 2.6Z", A.pop(0.22))));
  P.push(icon("bloom-sunflower", CAT, ["flower", "summer", "garden"],
    petalRing(12, 12, 12, 6.4, 1.5, 2.9, 0.02) + circle(12, 12, 3.4, A.pop(0.14))));
  P.push(icon("bloom-lotus", CAT, ["flower", "zen", "water"],
    path("M12 5.2c2.6 3.2 3.8 6.2 3.8 9.4 0 2.4-1.4 4.4-3.8 5.6-2.4-1.2-3.8-3.2-3.8-5.6 0-3.2 1.2-6.2 3.8-9.4Z", A.draw()) +
    path("M4.6 9.8c1.2 4 3.4 6.8 6.2 8-.4-3.8-2.2-6.6-6.2-8Z", A.draw(0.1)) +
    path("M19.4 9.8c-1.2 4-3.4 6.8-6.2 8 .4-3.8 2.2-6.6 6.2-8Z", A.draw(0.14))));
  P.push(icon("bloom-clover", CAT, ["luck", "shamrock", "green"],
    circle(9.2, 9.2, 3.4, A.pop()) + circle(14.8, 9.2, 3.4, A.pop(0.06)) + circle(9.2, 14.8, 3.4, A.pop(0.12)) + circle(14.8, 14.8, 3.4, A.pop(0.18)) +
    line(12, 17.4, 12.4, 21, A.draw(0.22))));
  P.push(icon("bloom-daisy", CAT, ["flower", "petals", "spring"], petalRing(8, 12, 12, 5.6, 1.8, 3, 0.03) + circle(12, 12, 2.4, A.pop(0.16))));
  P.push(icon("bloom-bud", CAT, ["flower", "growing", "promise"],
    drop(12, 9.4, 5.2, A.draw()) + line(12, 14, 12, 20.8, A.draw(0.12)) +
    path("M12 16.2c2.4 0 3.8-1.2 4-3.2-2.2-.2-3.6 1-4 3.2Z", A.pop(0.18))));
  P.push(icon("nature-acorn", CAT, ["seed", "forest", "autumn"],
    path("M12 4.2c3 0 5.2 1.8 5.2 4 0 5.6-2.2 10.4-5.2 12.2-3-1.8-5.2-6.6-5.2-12.2 0-2.2 2.2-4 5.2-4Z", A.draw()) +
    rect(6.2, 5.6, 11.6, 3.2, 1.6, A.pop(0.12)) + line(12, 2.6, 12, 5.4, A.draw(0.18))));
  P.push(icon("nature-pinecone", CAT, ["seed", "forest", "winter"],
    ellipse(12, 12.6, 5.6, 7.6, A.draw()) +
    [0, 1, 2].map((r) => [0, 1, 2].map((c) => ellipse(8.6 + c * 3.4, 8.2 + r * 3.8, 1.5, 1.8, A.pop(0.04 * (r + c)))).join("")).join("") +
    line(12, 3.4, 12, 5, A.draw(0.22))));
  P.push(icon("nature-mushroom-solid", CAT, ["forest floor", "fungi", "toadstool"],
    path("M3.8 12.2a8.2 8.2 0 0 1 16.4 0Z", A.draw()) +
    path("M8.8 12.2v3.6a3.2 3.2 0 0 0 6.4 0v-3.6", A.draw(0.12)) + circle(9, 9, 1.1, A.pop(0.16)) + circle(14.4, 8.2, 1.2, A.pop(0.2))));
}

/* ================================================================
   Sky (8)
   ================================================================ */
{
  const CAT = "weather";
  P.push(icon("sky-moon-full", CAT, ["night", "lunar", "moon"], circle(12, 12, 8.4, A.draw()) + circle(9.2, 10, 1.5, A.pop(0.12)) + circle(14, 13.6, 1.9, A.pop(0.16)) + circle(13.4, 8.6, 1, A.pop(0.2))));
  P.push(icon("sky-moon-crescent", CAT, ["night", "lunar", "crescent"],
    path("M19.4 14.6A8.4 8.4 0 0 1 9 4.2a8.4 8.4 0 1 0 10.4 10.4Z", A.draw())));
  P.push(icon("sky-planet", CAT, ["space", "orbit", "saturn"],
    circle(12, 11.4, 5.4, A.draw()) + ellipse(12, 13, 9.4, 2.8, A.draw(0.12)) + sparkle(19, 4.6, 1.7, A.pop(0.2))));
  P.push(icon("sky-comet", CAT, ["shooting star", "meteor", "wish"],
    circle(17.2, 7, 3.4, A.draw()) + path("M14.2 9.6 3.4 17.8c-.8.6-.6 1.8.4 2.2l2.8 1c1 .4 1.8 0 2.4-.8L16.6 12Z", A.draw(0.1))));
  P.push(icon("sky-rainbow", CAT, ["arc", "color bands", "clear sky"],
    path("M3 18.4a9 9 0 0 1 18 0v1.2a1 1 0 0 1-1 1h-2.6v-2.2h-11v2.2H4a1 1 0 0 1-1-1Z", A.draw()) +
    path("M6.2 18.4a5.8 5.8 0 0 1 11.6 0v2.2h-2.6v-2.2Z", A.pop(0.12))));
  P.push(icon("sky-puff", CAT, ["cloud", "fluffy", "soft"], cloud(12, 12.4, 7.8, A.draw())));
  P.push(icon("sky-shooting-star", CAT, ["wish", "magic", "night"],
    star(16.4, 8, 4.4, A.pop()) + path("M12.8 11.6 3.6 20.4 6 21l8.6-9", A.draw(0.12)) + sparkle(6, 5.6, 1.6, A.pop(0.18))));
}

/* ================================================================
   Fruit & treats (16)
   ================================================================ */
{
  const CAT = "food";
  P.push(icon("fruit-apple", CAT, ["fruit", "snack", "healthy"],
    path("M12 8c-4.2-2.4-8 .4-8 4.2 0 4.6 3.2 8.8 5.2 8.8 1.2 0 1.8-.6 2.8-.6s1.6.6 2.8.6c2 0 5.2-4.2 5.2-8.8 0-3.8-3.8-6.6-8-4.2Z", A.draw()) +
    path("M12 7c0-2 1.2-3.2 3-3.6", A.draw(0.12)) + path("M12 5.8c-1.2-1-2.6-1.2-3.8-.6", A.draw(0.16))));
  P.push(icon("fruit-lemon", CAT, ["citrus", "fruit", "sour"],
    ellipse(12, 12, 8.2, 5.6, A.draw()) + ellipse(12, 12, 5.2, 3.2, A.pop(0.12)) + circle(12, 12, 1.3, A.pop(0.18))));
  P.push(icon("fruit-cherry", CAT, ["fruit", "duo", "sweet"],
    circle(8.2, 16, 3.8, A.draw()) + circle(15.8, 16.4, 3.8, A.draw(0.1)) +
    path("M8.2 12.2C8.2 7.6 11 5 14.2 4.2", A.draw(0.16)) + path("M15.8 12.6c0-4-2.2-6.6-5-8", A.draw(0.18))));
  P.push(icon("fruit-strawberry", CAT, ["berry", "fruit", "sweet"],
    path("M12 21c-4 0-7.2-4-7.2-8.2 0-2.6 2.2-4.8 5-4.8h4.4c2.8 0 5 2.2 5 4.8 0 4.2-3.2 8.2-7.2 8.2Z", A.draw()) +
    path("M9.2 8 7 5.2M12 8l.2-3.4M14.8 8 17 5.2", A.draw(0.12)) +
    dots([10, 12.6, 0.7, 0.16], [14, 12.6, 0.7, 0.18], [12, 15.2, 0.7, 0.2], [10, 17, 0.6, 0.22], [14, 17, 0.6, 0.24])));
  P.push(icon("fruit-pear", CAT, ["fruit", "green", "snack"],
    path("M12 5.2c1.6 1.4 1.6 3 0 4.2 2.8 1 4.6 3.6 4.6 6.2 0 3.2-2 5.4-4.6 5.4s-4.6-2.2-4.6-5.4c0-2.6 1.8-5.2 4.6-6.2-1.6-1.2-1.6-2.8 0-4.2Z", A.draw()) +
    line(12, 3.4, 12, 5.2, A.draw(0.14))));
  P.push(icon("fruit-orange", CAT, ["citrus", "fruit", "vitamin"],
    circle(12, 12, 8, A.draw()) + line(12, 4.2, 12, 8, A.draw(0.12)) + line(12, 16, 12, 19.8, A.draw(0.14)) +
    line(4.2, 12, 8, 12, A.draw(0.16)) + line(16, 12, 19.8, 12, A.draw(0.18)) + circle(12, 12, 1.4, A.pop(0.2))));
  P.push(icon("fruit-watermelon", CAT, ["slice", "fruit", "summer"],
    path("M3.4 10.2c5.2-5 12-5 17.2 0-1.4 6-6.6 10.4-8.6 10.4S4.8 16.2 3.4 10.2Z", A.draw()) +
    dots([8.2, 11.4, 0.85, 0.14], [12, 10, 0.85, 0.17], [15.6, 11.6, 0.85, 0.2], [11, 14.4, 0.85, 0.23])));
  P.push(icon("fruit-lime", CAT, ["citrus", "fruit", "fresh"],
    circle(12, 12, 8, A.draw()) + circle(12, 12, 5.6, A.draw(0.1)) + petalRing(6, 12, 12, 3, 1.2, 2, 0.03) + circle(12, 12, 1, A.pop(0.2))));
  P.push(icon("fruit-peach", CAT, ["fruit", "summer", "sweet"],
    path("M12 7.2c-3.8-2-7.6.2-7.6 4.4 0 4.6 3.2 9 7.6 9s7.6-4.4 7.6-9c0-4.2-3.8-6.4-7.6-4.4Z", A.draw()) +
    path("M12 7.2c-.8-1.8-.2-3.2 1.6-3.8", A.draw(0.12)) + path("M10.4 11.2a2.6 2.6 0 0 1 1.6-1.8", A.draw(0.16))));
  P.push(icon("treat-cupcake", CAT, ["dessert", "bakery", "sweet"],
    path("M7 10.6h10l-1 8.2a1.6 1.6 0 0 1-1.6 1.4H9.6a1.6 1.6 0 0 1-1.6-1.4Z", A.draw()) +
    path("M7.4 10.6a4.6 4.6 0 0 1 9.2 0Z", A.pop(0.1)) + circle(12, 5.2, 1.4, A.pop(0.16))));
  P.push(icon("treat-donut", CAT, ["dessert", "ring", "sweet"],
    circle(12, 12, 8.4, A.draw()) + circle(12, 12, 3.2, A.draw(0.1)) +
    dots([8, 8.6, 0.8, 0.14], [15.8, 8.4, 0.8, 0.16], [7.8, 15, 0.8, 0.18], [16, 15.4, 0.8, 0.2], [12, 17.4, 0.8, 0.22])));
  P.push(icon("treat-lollipop", CAT, ["candy", "sweet", "swirl"],
    circle(12, 8.4, 5.8, A.draw()) + move(arc(3.2, -90, 180, A.draw(0.1)), 0, -3.6) + move(arc(1.4, -90, 120, A.draw(0.14)), 0, -3.6) +
    line(12, 14.2, 12, 20.8, A.draw(0.18))));
  P.push(icon("treat-candy", CAT, ["candy", "sweet", "wrapped"],
    rect(7, 8.6, 10, 6.8, 3.2, A.pop()) + polygon("7,8.6 2.8,5.8 2.8,18.2 7,15.4", A.pop(0.1)) + polygon("17,8.6 21.2,5.8 21.2,18.2 17,15.4", A.pop(0.16))));
  P.push(icon("treat-icecream", CAT, ["dessert", "cone", "summer"],
    path("M7.2 10.6a4.8 4.8 0 0 1 9.6 0Z", A.draw()) + polygon("7.6,10.6 16.4,10.6 12,20.8", A.draw(0.1)) +
    circle(10, 7.6, 1.6, A.pop(0.16)) + circle(13.6, 7.2, 1.6, A.pop(0.2))));
  P.push(icon("treat-cookie", CAT, ["biscuit", "snack", "sweet"],
    circle(12, 12, 8.4, A.draw()) +
    dots([8.6, 9.6, 1.1, 0.12], [14.2, 8.4, 1, 0.15], [15.6, 13.6, 1.1, 0.18], [9.8, 15, 1, 0.21], [12.4, 12, 0.9, 0.24])));
}

/* ================================================================
   Faces (8)
   ================================================================ */
{
  const CAT = "moods";
  const eyes2 = (x1, x2, y, d = 0.12) => circle(x1, y, 1, A.pop(d)) + circle(x2, y, 1, A.pop(d + 0.03));
  P.push(icon("face-sun", CAT, ["happy", "bright", "character"],
    circle(12, 12, 5.4, A.draw()) + rays(8, 12, 12, 6.4, 8.4, 0.02) + eyes2(10.3, 13.7, 11.2) + smile(12, 13.8, 1.7)));
  P.push(icon("face-moon", CAT, ["sleepy", "night", "character"],
    path("M18.6 13.6A7.2 7.2 0 0 1 9.8 4.8a7.4 7.4 0 1 0 8.8 8.8Z", A.draw()) +
    eyes2(11.2, 14.4, 11.4) + smile(12.8, 13.4, 1.2)));
  P.push(icon("face-star", CAT, ["shiny", "character", "rating"],
    star(12, 12, 8.4, A.draw()) + eyes2(10.2, 13.8, 11.6) + smile(12, 13.8, 1.5)));
  P.push(icon("face-cloud", CAT, ["dreamy", "soft", "character"],
    cloud(12, 12.2, 7.4, A.draw()) + eyes2(10.2, 13.8, 11.8) + smile(12, 13.6, 1.5)));
  P.push(icon("face-flower", CAT, ["petal pal", "blossom", "character"],
    petalRing(8, 12, 12, 5.6, 1.9, 3, 0.03) + circle(12, 12, 3.4, A.draw(0.12)) + eyes2(10.9, 13.1, 11.6, 0.65) + smile(12, 13, 1)));
  P.push(icon("face-heart", CAT, ["loved", "adoring", "character"],
    heart(A.draw(), 12, 11.8, 1.02) + eyes2(10.2, 13.8, 10.8, 0.8) + smile(12, 12.6, 1.2)));
  P.push(icon("face-drop", CAT, ["dewy", "water pal", "character"],
    drop(12, 11.6, 8, A.draw()) + eyes2(10.2, 13.8, 12) + smile(12, 13.8, 1.5)));
  P.push(icon("face-blob", CAT, ["goo", "squish", "character"],
    path("M12 3.2c4.2 0 7.2 2 8.2 5 1 3.2-.6 6.4-2.6 8.6-1.8 2.2-4.2 4-6.2 3.6-2.2-.4-3.8-2.4-5.4-4.6C4.2 13.4 3 10.8 3.8 8 4.8 4.8 7.8 3.2 12 3.2Z", A.draw()) +
    eyes2(9.8, 13.8, 10.6) + smile(11.8, 12.6, 1.5)));
}

/* ================================================================
   Party & toys (8)
   ================================================================ */
{
  const CAT = "games";
  P.push(icon("party-balloon", CAT, ["celebrate", "party", "fun"],
    path("M12 15.2c-3.6 0-6-2.8-6-6.2 0-3.8 2.6-6.6 6-6.6s6 2.8 6 6.6c0 3.4-2.4 6.2-6 6.2Z", A.draw()) +
    polygon("10.8,15.2 12,16.8 13.2,15.2", A.pop(0.12)) + path("M12 16.8c-.8 1.4.8 2.2 0 3.6", A.draw(0.16))));
  P.push(icon("party-gift", CAT, ["present", "reward", "birthday"],
    rect(3.8, 8.4, 16.4, 4, 1.2, A.pop()) + path("M5.6 12.4v6a1.8 1.8 0 0 0 1.8 1.8h9.2a1.8 1.8 0 0 0 1.8-1.8v-6", A.draw(0.1)) +
    line(12, 8.4, 12, 20.2, A.draw(0.14)) + path("M12 8.4c-1.6-3.8-5.2-4.6-6-2.8-.7 1.7 1.6 2.8 6 2.8Z", A.pop(0.18)) +
    path("M12 8.4c1.6-3.8 5.2-4.6 6-2.8.7 1.7-1.6 2.8-6 2.8Z", A.pop(0.2))));
  P.push(icon("party-popper", CAT, ["celebrate", "confetti", "yay"],
    polygon("3.2,20.8 10.4,5.2 15.6,10.4", A.draw()) +
    circle(17.8, 5.4, 1, A.pop(0.12)) + circle(20.4, 9, 1, A.pop(0.15)) + circle(15.2, 3, 0.9, A.pop(0.18)) +
    path("M13.2 12.2c2.2-1 4.2-.6 5.6.8", A.draw(0.2)) + path("M13.8 15c2-.2 3.8.4 4.8 1.8", A.draw(0.22))));
  P.push(icon("party-pinwheel", CAT, ["spin", "toy", "wind"],
    [0, 90, 180, 270].map((d, i) => rot(path("M12 12c0-4 1.2-6.2 4.2-7.2.6 3.6-.6 5.8-4.2 7.2Z", A.pop(0.05 * i)), d)).join("") +
    circle(12, 12, 1.4, A.pop(0.2))));
  P.push(icon("party-dice", CAT, ["luck", "roll", "game night"],
    rect(4, 4, 16, 16, 3.4, A.draw()) +
    dots([8.4, 8.4, 1.2, 0.1], [15.6, 8.4, 1.2, 0.12], [12, 12, 1.2, 0.14], [8.4, 15.6, 1.2, 0.16], [15.6, 15.6, 1.2, 0.18])));
  P.push(icon("party-bow", CAT, ["ribbon", "gift wrap", "celebrate"],
    path("M11 11.4C8.8 8.2 5.4 6.2 3.4 7.4c-1.8 1.2-.8 4.8 1.6 6 1.2.6 2.4.8 3.4.8", A.draw()) +
    path("M13 11.4c2.2-3.2 5.6-5.2 7.6-4 1.8 1.2.8 4.8-1.6 6-1.2.6-2.4.8-3.4.8", A.draw(0.1)) +
    circle(12, 12.6, 2, A.pop(0.16)) + path("M10.2 14 8.2 20.6M13.8 14l2 6.6", A.draw(0.2))));
  P.push(icon("party-horn", CAT, ["celebrate", "noisemaker", "yay"],
    polygon("3.2,20.8 15.2,8.8 20.8,14.4 8.8,20.8", A.draw()) +
    circle(19.4, 5.2, 1, A.pop(0.12)) + circle(16, 3.4, 1, A.pop(0.15)) + sparkle(21, 9, 1.6, A.pop(0.2))));
}

/* ================================================================
   Pets (10)
   ================================================================ */
{
  const CAT = "animals";
  const petFace = (head, ears, eyesY, mouth) =>
    head + ears + dots([9.6, eyesY, 0.85, 0.12], [14.4, eyesY, 0.85, 0.15]) + mouth;
  P.push(icon("pet-cat", CAT, ["kitten", "pet", "meow"],
    petFace(
      path("M5 12c0-4 3.2-7 7-7s7 3 7 7-3 7.2-7 7.2-7-3.2-7-7.2Z", A.draw()),
      polygon("5.8,8 4.6,3.6 8.4,5.6", A.pop(0.08)) + polygon("18.2,8 19.4,3.6 15.6,5.6", A.pop(0.1)),
      11.6,
      path("M10.8 14.6a1.8 1.8 0 0 0 2.4 0", A.draw(0.18)))));
  P.push(icon("pet-dog", CAT, ["puppy", "pet", "friend"],
    petFace(
      path("M6 11.6c0-3.8 2.8-6.6 6-6.6s6 2.8 6 6.6c0 4.2-2.6 7.2-6 7.2s-6-3-6-7.2Z", A.draw()),
      ellipse(5.8, 11, 1.9, 3.4, A.pop(0.08)) + ellipse(18.2, 11, 1.9, 3.4, A.pop(0.1)),
      11.2,
      path("M10.6 14.4a2 2 0 0 0 2.8 0", A.draw(0.18)))));
  P.push(icon("pet-fox", CAT, ["fox", "pet", "clever"],
    petFace(
      path("M5 11.6c0-3.8 3-6.6 7-6.6s7 2.8 7 6.6c0 3.4-2.2 5.8-4.4 7.2H9.4C7.2 17.4 5 15 5 11.6Z", A.draw()),
      polygon("6,7 4,2.8 8.6,4.8", A.pop(0.08)) + polygon("18,7 20,2.8 15.4,4.8", A.pop(0.1)),
      11,
      polygon("12,13.4 10.8,15.4 13.2,15.4", A.pop(0.18)))));
  P.push(icon("pet-bear", CAT, ["bear", "pet", "cuddly"],
    petFace(
      circle(12, 12.6, 6.6, A.draw()),
      circle(6.6, 7, 2.4, A.pop(0.06)) + circle(17.4, 7, 2.4, A.pop(0.09)),
      11.8,
      circle(12, 14, 1, A.pop(0.18)))));
  P.push(icon("pet-panda", CAT, ["panda", "pet", "cute"],
    petFace(
      circle(12, 12.4, 6.8, A.draw()),
      circle(6.4, 7.2, 2.4, A.pop(0.06)) + circle(17.6, 7.2, 2.4, A.pop(0.09)) +
      ellipse(9.4, 11.4, 1.7, 2.1, A.pop(0.12)) + ellipse(14.6, 11.4, 1.7, 2.1, A.pop(0.15)),
      11.4,
      circle(12, 14.2, 0.9, A.pop(0.2)))));
  P.push(icon("pet-penguin", CAT, ["penguin", "pet", "tuxedo"],
    ellipse(12, 12.4, 5.8, 8, A.draw()) + ellipse(12, 14, 3.4, 5, A.pop(0.1)) +
    polygon("10.4,7.4 12,5.8 13.6,7.4", A.pop(0.14)) + dots([10.4, 10, 0.8, 0.16], [13.6, 10, 0.8, 0.18])));
  P.push(icon("pet-bee", CAT, ["bee", "pet", "buzz"],
    ellipse(12, 13, 5.2, 4.4, A.draw()) + line(8, 12, 16, 12, A.draw(0.1)) + line(8.8, 15, 15.2, 15, A.draw(0.12)) +
    ellipse(8, 7.2, 2.2, 3, A.pop(0.16)) + ellipse(16, 7.2, 2.2, 3, A.pop(0.2))));
  P.push(icon("pet-ladybug", CAT, ["ladybird", "pet", "lucky"],
    circle(12, 13, 6.4, A.draw()) + line(12, 6.8, 12, 19.2, A.draw(0.1)) +
    circle(8.2, 16, 0.9, A.pop(0.14)) + circle(15.8, 16, 0.9, A.pop(0.16)) + circle(8.6, 11.6, 0.9, A.pop(0.18)) + circle(15.4, 11.6, 0.9, A.pop(0.2)) +
    circle(12, 5.6, 1.7, A.pop(0.22))));
  P.push(icon("pet-owl", CAT, ["owl", "pet", "wise"],
    petFace(
      ellipse(12, 12.4, 6.4, 7.4, A.draw()),
      polygon("6.2,7.6 4.8,4 8.6,5.8", A.pop(0.08)) + polygon("17.8,7.6 19.2,4 15.4,5.8", A.pop(0.1)),
      11.2,
      polygon("12,13.2 10.9,15 13.1,15", A.pop(0.18)))));
  P.push(icon("pet-bunny", CAT, ["bunny", "pet", "hop"],
    path("M8.2 9.6C7 6.6 7.2 3.8 8.4 3.4c1.4-.4 2.8 2 3.2 5", A.draw()) +
    path("M12.6 8.6c1-3.2 2.8-5.4 4-4.8 1.2.8.4 3.8-1.2 6.2", A.draw(0.06)) +
    circle(11.8, 13.8, 5, A.draw(0.1)) + dots([9.8, 13, 0.8, 0.14], [13.8, 13, 0.8, 0.17]) +
    path("M10.8 15.8a1.6 1.6 0 0 0 2 0", A.draw(0.2))));
}

/* ================================================================
   Places (8)
   ================================================================ */
{
  const CAT = "places";
  P.push(icon("place-tent", CAT, ["camp", "outdoor", "adventure"],
    polygon("12,3.6 20.8,20.4 3.2,20.4", A.draw()) + polygon("12,12.6 15,20.4 9,20.4", A.pop(0.12))));
  P.push(icon("place-igloo", CAT, ["snow house", "arctic", "shelter"],
    path("M4 18.6v-2.8a8 8 0 0 1 16 0v2.8Z", A.draw()) + rect(2.8, 17, 18.4, 3.6, 1.4, A.pop(0.1)) +
    rect(10, 13.4, 4, 7.2, 2, A.pop(0.16))));
  P.push(icon("place-lighthouse", CAT, ["beacon", "coast", "tower"],
    polygon("9,8 15,8 16.2,20.4 7.8,20.4", A.draw()) + polygon("9.4,4 14.6,4 15,8 9,8", A.draw(0.08)) +
    rect(10.2, 11, 3.6, 2.6, 0.8, A.pop(0.12)) + circle(12, 2.8, 1.4, A.pop(0.16))));
  P.push(icon("place-castle", CAT, ["fortress", "kingdom", "historic"],
    path("M4.4 20.4V6.8l2.4 1.6 2.4-1.6 2.4 1.6 2.4-1.6 2.4 1.6 2.4-1.6v13.6Z", A.draw()) +
    rect(10, 14, 4, 6.4, 0.8, A.pop(0.12)) + circle(12, 10, 1.3, A.pop(0.16))));
  P.push(icon("place-house-solid", CAT, ["home", "shelter", "stay"],
    polygon("12,3.2 21.2,11 19.2,11 19.2,20.4 4.8,20.4 4.8,11 2.8,11", A.draw()) +
    rect(10, 14, 4, 6.4, 0.8, A.pop(0.12))));
  P.push(icon("place-hotair", CAT, ["balloon ride", "travel", "sky"],
    path("M12 3.2c3.8 0 6.4 3 6.4 6.8 0 4.2-3.4 7.2-5.2 8.4h-2.4c-1.8-1.2-5.2-4.2-5.2-8.4 0-3.8 2.6-6.8 6.4-6.8Z", A.draw()) +
    rect(10, 19.2, 4, 2.6, 0.8, A.pop(0.12)) + line(9.2, 16.4, 10.2, 19.2, A.draw(0.16)) + line(14.8, 16.4, 13.8, 19.2, A.draw(0.18))));
  P.push(icon("place-sailboat", CAT, ["boat", "sail", "voyage"],
    path("M4 15.4h16l-1.8 4.2H5.8Z", A.draw()) + line(12, 15.4, 12, 4.6, A.draw(0.1)) +
    path("M12 5.6c3.2.8 5.2 2.8 5.8 5.8H12Z", A.pop(0.14)) + path("M12 8.2 7.4 9.6l4.6 1.2Z", A.pop(0.18))));
  P.push(icon("place-well", CAT, ["wishing well", "village", "water"],
    polygon("7,8 17,8 15.4,18 8.6,18", A.draw()) + polygon("4.6,8 12,3.4 19.4,8", A.draw(0.08)) +
    circle(12, 5.4, 1.2, A.pop(0.14)) + line(12, 8, 12, 13, A.draw(0.18))));
}

/* ================================================================
   Media & keepsakes (10)
   ================================================================ */
{
  const CAT = "media";
  P.push(icon("media-note", CAT, ["music", "song", "melody"],
    ellipse(8.6, 17, 3.2, 2.6, A.pop()) + polygon("11,4.2 19.2,2.6 19.2,15.2 17,15.2 17,4.8 11,6Z", A.draw(0.1))));
  P.push(icon("media-double-note", CAT, ["music", "duo", "score"],
    ellipse(7, 17.2, 2.8, 2.3, A.pop()) + ellipse(16.4, 15.6, 2.8, 2.3, A.pop(0.08)) +
    polygon("9.2,4.4 19.2,2.6 19.2,13.6 17.2,13.6 17,4.6 9.2,6Z", A.draw(0.12)) + line(9.2, 6, 9.2, 17.2, A.draw(0.16))));
  P.push(icon("media-disco", CAT, ["disco", "party ball", "dance"],
    circle(12, 11, 7.2, A.draw()) + line(4.8, 11, 19.2, 11, A.draw(0.1)) + line(12, 3.8, 12, 18.2, A.draw(0.12)) +
    arc(12, 11, 4, -60, 60, A.draw(0.16)) + arc(12, 11, 4, 120, 240, A.draw(0.18)) + line(12, 18.2, 12, 21, A.draw(0.22))));
  P.push(icon("media-reel", CAT, ["film", "cinema", "retro"],
    circle(12, 12, 8.2, A.draw()) + dots([12, 6.4, 1.5, 0.1], [12, 17.6, 1.5, 0.13], [6.4, 12, 1.5, 0.16], [17.6, 12, 1.5, 0.19]) + circle(12, 12, 1.5, A.pop(0.22))));
  P.push(icon("media-trophy", CAT, ["award", "win", "champion"],
    path("M8 3.6h8v5a4 4 0 0 1-8 0Z", A.draw()) + path("M8 5.2H5.2a2.4 2.4 0 0 0 2.4 4.4", A.draw(0.1)) +
    path("M16 5.2h2.8a2.4 2.4 0 0 1-2.4 4.4", A.draw(0.12)) + line(12, 12.6, 12, 16, A.draw(0.16)) +
    polygon("8.2,19.8 9.4,16 14.6,16 15.8,19.8", A.pop(0.2)) + rect(6.4, 18.8, 11.2, 1.8, 0.8, A.pop(0.22))));
  P.push(icon("media-crown", CAT, ["royal", "king", "best"],
    polygon("3.6,8 8,11.4 12,5.6 16,11.4 20.4,8 18.2,17.8 5.8,17.8", A.draw()) + dots([8, 14.4, 0.9, 0.14], [12, 13.6, 0.9, 0.17], [16, 14.4, 0.9, 0.2])));
  P.push(icon("media-wand", CAT, ["magic", "ai assist", "generate"],
    polygon("14.6,2.8 16.4,6.6 20.6,7.2 17.6,10.4 18.4,14.6 14.6,12.6 10.8,14.6 11.6,10.4 8.6,7.2 12.8,6.6", A.draw()) +
    path("M6.2 12.8 3.2 20.8 11 17.6Z", A.pop(0.14)) + sparkle(20.4, 16.4, 1.8, A.pop(0.2))));
  P.push(icon("media-joystick", CAT, ["arcade", "game control", "play"],
    circle(12, 6, 2.4, A.pop()) + polygon("10.6,8.4 13.4,8.4 16,16.6 8,16.6", A.draw(0.08)) +
    rect(6.4, 16.6, 11.2, 3.6, 1.4, A.pop(0.16))));
  P.push(icon("media-cassette", CAT, ["retro", "tape", "mixtape"],
    rect(3.2, 5.6, 17.6, 12.8, 2.2, A.draw()) + circle(8.4, 11.4, 2.2, A.pop(0.1)) + circle(15.6, 11.4, 2.2, A.pop(0.14)) +
    rect(8.4, 15, 7.2, 2, 0.8, A.pop(0.18))));
}

/* ================================================================
   Love & keepsakes (9)
   ================================================================ */
{
  const CAT = "moods";
  P.push(icon("love-heart-solid", CAT, ["romance", "favorite", "like"],
    heart(A.draw(), 12, 11.8, 1.05)));
  P.push(icon("love-heart-badge", CAT, ["liked", "saved", "approved"],
    circle(12, 12, 8.6, A.draw()) + heart(A.pop(0.12), 12, 12.2, 0.62)));
  P.push(icon("love-twin-hearts", CAT, ["duo", "romance", "pair"],
    heart(A.draw(), 9, 10.2, 0.72) + heart(A.draw(0.1), 15.4, 13.4, 0.72) + sparkle(19.2, 6, 1.5, A.pop(0.2))));
  P.push(icon("love-heart-bloom", CAT, ["loved", "blossom", "care"],
    heart(A.draw(), 12, 9.4, 0.62) + petalRing(6, 12, 13.6, 3.8, 1.7, 2.6, 0.03) + circle(12, 13.6, 1.4, A.pop(0.18))));
  P.push(icon("love-note", CAT, ["valentine", "mail", "sweet"],
    rect(3.6, 5.2, 16.8, 13.6, 2.2, A.draw()) + path("M3.6 8.2 12 13.6 20.4 8.2", A.draw(0.1)) + heart(A.pop(0.16), 12, 12.2, 0.5)));
  P.push(icon("love-locket", CAT, ["keepsake", "charm", "memory"],
    circle(12, 13, 6.2, A.draw()) + heart(A.pop(0.12), 13, 13.2, 0.42) +
    path("M6 8.2a6 6 0 0 1 12 0", A.draw(0.16)) + circle(6, 8.4, 1, A.pop(0.2)) + circle(18, 8.4, 1, A.pop(0.22))));
  P.push(icon("love-kiss", CAT, ["peck", "xoxo", "cute"],
    heart(A.draw(), 12, 11.2, 0.92) + sparkle(6.2, 5.4, 1.7, A.pop(0.16)) + sparkle(18.4, 7, 1.4, A.pop(0.2))));
}

/* ================================================================
   Wayfinding for "On the Move" (5) & solid data marks (3)
   ================================================================ */
{
  const CAT = "moves";
  P.push(icon("nav-arrow-solid", CAT, ["direction", "up", "go"],
    polygon("12,2.8 20.6,11.4 16.2,11.4 16.2,21.2 7.8,21.2 7.8,11.4 3.4,11.4", A.draw())));
  P.push(icon("nav-compass", CAT, ["navigate", "direction", "travel"],
    circle(12, 12, 8.6, A.draw()) + polygon("16.4,7.6 13.6,13.6 7.6,16.4 10.4,10.4", A.pop(0.12))));
  P.push(icon("nav-pin", CAT, ["location", "map", "place"],
    path("M12 21.4c-3.2-4-6-7-6-10.2a6 6 0 0 1 12 0c0 3.2-2.8 6.2-6 10.2Z", A.draw()) + circle(12, 11, 2.3, A.pop(0.12))));
  P.push(icon("nav-flag", CAT, ["milestone", "goal", "waypoint"],
    polygon("6.2,3.2 19.4,4.6 17,10.6 19.4,16.2 6.2,14.8", A.draw()) + rect(4.2, 2.6, 2, 18.8, 1, A.pop(0.14))));
  P.push(icon("nav-route", CAT, ["journey", "path", "trip"],
    circle(5.6, 6, 2.6, A.pop()) + circle(18.4, 18, 2.6, A.pop(0.1)) +
    path("M5.6 8.6c0 4.4 2.2 6.8 6.2 6.8 3 0 4.6-1 6.6-3.2", A.draw(0.16))));
}
{
  const CAT = "charts";
  P.push(icon("chart-area-solid", CAT, ["analytics", "growth", "trend"],
    path("M3.4 18.6 8.2 12l3.6 3 5-7.2 3.8 4.6v6.2H3.4Z", A.draw()) + line(3.4, 20.4, 20.6, 20.4, A.draw(0.12))));
  P.push(icon("chart-donut-solid", CAT, ["analytics", "split", "report"],
    path('M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 1 0 0-17.6ZM12 7.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 1 1 0-8.8Z', 'fill-rule="evenodd" ' + A.draw()) +
    circle(12, 12, 2.2, A.pop(0.12))));
  P.push(icon("chart-bubble-solid", CAT, ["analytics", "scatter", "compare"],
    circle(8, 8, 3.6, A.pop()) + circle(15.6, 13, 4.6, A.pop(0.08)) + circle(8.2, 16.6, 2.6, A.pop(0.16))));
}
{
  const CAT = "science";
  P.push(icon("lab-flask-solid", CAT, ["experiment", "chemistry", "research"],
    path("M9.6 3.2h4.8v6l4.6 8.6a2.4 2.4 0 0 1-2.1 3.6H7.1a2.4 2.4 0 0 1-2.1-3.6l4.6-8.6Z", A.draw()) +
    circle(12, 16.4, 1.6, A.pop(0.14)) + circle(14.4, 18.2, 1, A.pop(0.18))));
}

export default P;
