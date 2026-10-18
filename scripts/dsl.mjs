// Tiny SVG DSL for the Animaticons icon generator.
// All geometry is original, drawn on a 24x24 grid with round caps/joins.

const n = (v) => {
  const r = Math.round(v * 100) / 100;
  return String(r);
};

const attr = (s) => (s ? " " + s : "");

/** Attribute bundles for animated elements. */
export const A = {
  pop: (d = 0) => `data-a="pop" data-d="${d}"`,
  fade: (d = 0) => `data-a="fade" data-d="${d}"`,
  up: (d = 0) => `data-a="up" data-d="${d}"`,
  down: (d = 0) => `data-a="down" data-d="${d}"`,
  left: (d = 0) => `data-a="left" data-d="${d}"`,
  right: (d = 0) => `data-a="right" data-d="${d}"`,
  rise: (d = 0) => `data-a="rise" data-d="${d}"`,
  drop: (d = 0) => `data-a="drop" data-d="${d}"`,
  wiggle: (d = 0) => `data-a="wiggle" data-d="${d}"`,
  spin: (d = 0) => `data-a="spin" data-d="${d}"`,
  swing: (d = 0) => `data-a="swing" data-d="${d}"`,
  pulse: (d = 0) => `data-a="pulse" data-d="${d}"`,
  shake: (d = 0) => `data-a="shake" data-d="${d}"`,
  tilt: (d = 0) => `data-a="tilt" data-d="${d}"`,
  stretch: (d = 0) => `data-a="stretch" data-d="${d}"`,
  blink: (d = 0) => `data-a="blink" data-d="${d}"`,
  bounce: (d = 0) => `data-a="bounce" data-d="${d}"`,
  sweep: (d = 0) => `data-a="sweep" data-d="${d}"`,
  draw: (d = 0) => `data-a="draw" data-d="${d}" pathLength="1"`,
};

/** Elements that can carry a soft tint fill in the Ember pack. */
export const F = (on = true) => (on ? `data-f="1"` : "");

export const circle = (cx, cy, r, extra = "") =>
  `<circle cx="${n(cx)}" cy="${n(cy)}" r="${n(r)}"${attr(extra)}/>`;

export const ellipse = (cx, cy, rx, ry, extra = "") =>
  `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(rx)}" ry="${n(ry)}"${attr(extra)}/>`;

export const rect = (x, y, w, h, rx = 2, extra = "") =>
  `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${n(rx)}"${attr(extra)}/>`;

export const line = (x1, y1, x2, y2, extra = "") =>
  `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}"${attr(extra)}/>`;

export const path = (d, extra = "") => `<path d="${d}"${attr(extra)}/>`;

export const polyline = (points, extra = "") =>
  `<polyline points="${points}"${attr(extra)}/>`;

export const polygon = (points, extra = "") =>
  `<polygon points="${points}"${attr(extra)}/>`;

export const group = (inner, extra = "") => `<g${attr(extra)}>${inner}</g>`;

/** Rotate a snippet around the canvas centre (or a custom pivot). */
export const rot = (inner, deg, cx = 12, cy = 12) =>
  deg === 0 ? inner : group(inner, `transform="rotate(${n(deg)} ${n(cx)} ${n(cy)})"`);

/** Translate a snippet. */
export const move = (inner, dx, dy) =>
  dx === 0 && dy === 0
    ? inner
    : group(inner, `transform="translate(${n(dx)} ${n(dy)})"`);

/** Uniform scale about a pivot. */
export const scale = (inner, s, cx = 12, cy = 12) =>
  group(inner, `transform="translate(${n(cx)} ${n(cy)}) scale(${n(s)}) translate(${n(-cx)} ${n(-cy)})"`);

/* ---------- composite primitives ---------- */

export const cross = (cx, cy, s, extra = "") =>
  line(cx - s, cy - s, cx + s, cy + s, extra) + line(cx - s, cy + s, cx + s, cy - s, extra);

export const plus = (cx, cy, s, extra = "") =>
  line(cx - s, cy, cx + s, cy, extra) + line(cx, cy - s, cx, cy + s, extra);

export const minus = (cx, cy, s, extra = "") => line(cx - s, cy, cx + s, cy, extra);

export const check = (x, y, s, extra = "") =>
  polyline(
    `${n(x)},${n(y)} ${n(x + s * 0.38)},${n(y + s * 0.42)} ${n(x + s)},${n(y - s * 0.52)}`,
    extra
  );

export const chevron = (cx, cy, s, extra = "") =>
  polyline(
    `${n(cx - s * 0.55)},${n(cy - s)} ${n(cx + s * 0.55)},${n(cy)} ${n(cx - s * 0.55)},${n(cy + s)}`,
    extra
  );

export const arrowHead = (cx, cy, s, extra = "") =>
  polyline(
    `${n(cx - s * 0.62)},${n(cy - s * 0.62)} ${n(cx)},${n(cy)} ${n(cx - s * 0.62)},${n(cy + s * 0.62)}`,
    extra
  );

export const sparkle = (cx, cy, s, extra = "") =>
  path(
    `M${n(cx)} ${n(cy - s)} Q${n(cx + s * 0.18)} ${n(cy - s * 0.18)} ${n(cx + s)} ${n(cy)} Q${n(cx + s * 0.18)} ${n(cy + s * 0.18)} ${n(cx)} ${n(cy + s)} Q${n(cx - s * 0.18)} ${n(cy + s * 0.18)} ${n(cx - s)} ${n(cy)} Q${n(cx - s * 0.18)} ${n(cy - s * 0.18)} ${n(cx)} ${n(cy - s)} Z`,
    extra
  );

export const star = (cx, cy, s, extra = "") => {
  const pts = [];
  for (let i = 0; i < 5; i++) {
    const ao = (-90 + i * 72) * (Math.PI / 180);
    const ai = (-90 + i * 72 + 36) * (Math.PI / 180);
    pts.push(`${n(cx + Math.cos(ao) * s)},${n(cy + Math.sin(ao) * s)}`);
    pts.push(`${n(cx + Math.cos(ai) * s * 0.46)},${n(cy + Math.sin(ai) * s * 0.46)}`);
  }
  return polygon(pts.join(" "), extra);
};

export const heartPath = (cx = 12, cy = 11, s = 1) =>
  `M${n(cx)} ${n(cy + 6.4 * s)} C${n(cx)} ${n(cy + 6.4 * s)} ${n(cx - 7.6 * s)} ${n(cy + 1.6 * s)} ${n(cx - 7.6 * s)} ${n(cy - 2.6 * s)} A${n(3.9 * s)} ${n(3.9 * s)} 0 0 1 ${n(cx)} ${n(cy - 3.4 * s)} A${n(3.9 * s)} ${n(3.9 * s)} 0 0 1 ${n(cx + 7.6 * s)} ${n(cy - 2.6 * s)} C${n(cx + 7.6 * s)} ${n(cy + 1.6 * s)} ${n(cx)} ${n(cy + 6.4 * s)} ${n(cx)} ${n(cy + 6.4 * s)} Z`;

export const heart = (extra = "", cx = 12, cy = 11, s = 1) => path(heartPath(cx, cy, s), extra);

export const drop = (cx, cy, s, extra = "") =>
  path(
    `M${n(cx)} ${n(cy - s)} C${n(cx + s * 0.95)} ${n(cy + s * 0.28)} ${n(cx + s * 0.62)} ${n(cy + s)} ${n(cx)} ${n(cy + s)} C${n(cx - s * 0.62)} ${n(cy + s)} ${n(cx - s * 0.95)} ${n(cy + s * 0.28)} ${n(cx)} ${n(cy - s)} Z`,
    extra
  );

export const bolt = (cx, cy, s, extra = "") =>
  path(
    `M${n(cx + s * 0.32)} ${n(cy - s)} L${n(cx - s * 0.52)} ${n(cy + s * 0.12)} L${n(cx - s * 0.02)} ${n(cy + s * 0.12)} L${n(cx - s * 0.32)} ${n(cy + s)} L${n(cx + s * 0.52)} ${n(cy - s * 0.12)} L${n(cx + s * 0.02)} ${n(cy - s * 0.12)} Z`,
    extra
  );

export const cloud = (cx, cy, s, extra = "") =>
  path(
    `M${n(cx - s * 0.95)} ${n(cy + s * 0.34)} A${n(s * 0.52)} ${n(s * 0.52)} 0 0 1 ${n(cx - s * 0.72)} ${n(cy - s * 0.38)} A${n(s * 0.62)} ${n(s * 0.62)} 0 0 1 ${n(cx + s * 0.16)} ${n(cy - s * 0.62)} A${n(s * 0.55)} ${n(s * 0.55)} 0 0 1 ${n(cx + s * 0.98)} ${n(cy - s * 0.02)} A${n(s * 0.44)} ${n(s * 0.44)} 0 0 1 ${n(cx + s * 0.7)} ${n(cy + s * 0.34)} Z`,
    extra
  );

export const sun = (cx, cy, s, extra = "", rays = 8) => {
  let out = circle(cx, cy, s * 0.52, extra);
  for (let i = 0; i < rays; i++) {
    const a = (i * 360) / rays;
    out += rot(
      line(cx, cy - s, cx, cy - s * 0.72, extra),
      a,
      cx,
      cy
    );
  }
  return out;
};

export const gear = (cx, cy, s, extra = "") => {
  let out = circle(cx, cy, s * 0.34, extra);
  const teeth = 8;
  for (let i = 0; i < teeth; i++) {
    const a = (i * 360) / teeth;
    out += rot(line(cx, cy - s, cx, cy - s * 0.7, extra), a, cx, cy);
  }
  out += circle(cx, cy, s * 0.72, extra);
  return out;
};

export const lockBody = (x, y, w, h, extra = "") => rect(x, y, w, h, 2.5, extra);

export const lockShackle = (cx, y, w, extra = "") =>
  path(
    `M${n(cx - w / 2)} ${n(y)} V${n(y - 2.6)} A${n(w / 2)} ${n(w / 2)} 0 0 1 ${n(cx + w / 2)} ${n(y - 2.6)} V${n(y)}`,
    extra
  );

export const envelope = (x, y, w, h, extra = "") =>
  rect(x, y, w, h, 2.5, extra) +
  path(`M${n(x + 0.6)} ${n(y + 1.2)} L${n(x + w / 2)} ${n(y + h * 0.62)} L${n(x + w - 0.6)} ${n(y + 1.2)}`, extra);

export const bellPath = () =>
  `M12 4.6c-2.7 0-4.6 2-4.6 4.8 0 3.4-1 4.6-1.8 5.5-.4.4-.1 1.1.5 1.1h11.8c.6 0 .9-.7.5-1.1-.8-.9-1.8-2.1-1.8-5.5 0-2.8-1.9-4.8-4.6-4.8z`;

export const chatBubble = (x, y, w, h, extra = "", tail = true) => {
  const rx = Math.min(w, h) * 0.32;
  let out = rect(x, y, w, h, rx, extra);
  if (tail) {
    out += path(
      `M${n(x + w * 0.22)} ${n(y + h - 0.2)} L${n(x + w * 0.2)} ${n(y + h + 3.4)} L${n(x + w * 0.48)} ${n(y + h - 0.2)}`,
      extra
    );
  }
  return out;
};

export const camera = (extra = "") =>
  rect(3, 7, 18, 13, 3, extra) +
  path(`M8 7 L9.4 4.4 H14.6 L16 7`, extra) +
  circle(12, 13.2, 3.4, extra);

export const play = (cx, cy, s, extra = "") =>
  path(
    `M${n(cx - s * 0.52)} ${n(cy - s * 0.78)} L${n(cx + s * 0.82)} ${n(cy)} L${n(cx - s * 0.52)} ${n(cy + s * 0.78)} Z`,
    extra
  );

export const pause = (cx, cy, s, extra = "") =>
  rect(cx - s * 0.62, cy - s * 0.8, s * 0.42, s * 1.6, 1.2, extra) +
  rect(cx + s * 0.2, cy - s * 0.8, s * 0.42, s * 1.6, 1.2, extra);

export const userGlyph = (cx, cy, s, extra = "") =>
  circle(cx, cy - s * 0.62, s * 0.44, extra) +
  path(
    `M${n(cx - s * 0.86)} ${n(cy + s)} A${n(s * 0.92)} ${n(s * 0.92)} 0 0 1 ${n(cx + s * 0.86)} ${n(cy + s)}`,
    extra
  );

export const folder = (x, y, w, h, extra = "") =>
  path(
    `M${n(x)} ${n(y + 2.4)} A2 2 0 0 1 ${n(x + 2)} ${n(y + 0.4)} H${n(x + w * 0.42)} L${n(x + w * 0.56)} ${n(y + 2.8)} H${n(x + w - 2)} A2 2 0 0 1 ${n(x + w)} ${n(y + 4.8)} V${n(y + h - 2)} A2 2 0 0 1 ${n(x + w - 2)} ${n(y + h)} H${n(x + 2)} A2 2 0 0 1 ${n(x)} ${n(y + h - 2)} Z`,
    extra
  );

export const fileGlyph = (x, y, w, h, extra = "") =>
  path(
    `M${n(x + 2.6)} ${n(y)} H${n(x + w - 4)} L${n(x + w)} ${n(y + 4)} V${n(y + h - 2)} A2 2 0 0 1 ${n(x + w - 2)} ${n(y + h)} H${n(x + 2)} A2 2 0 0 1 ${n(x)} ${n(y + h - 2)} V${n(y + 2)} A2 2 0 0 1 ${n(x + 2)} ${n(y)} Z`,
    extra
  ) + path(`M${n(x + w - 4)} ${n(y)} V${n(y + 4)} H${n(x + w)}`, extra);

/** Small corner badge used for state variants (plus / check / x / alert). */
export const badge = (kind, cx = 18.4, cy = 18.4, s = 3.4) => {
  if (kind === "none") return "";
  const extra = A.pop(0.12);
  if (kind === "plus") return plus(cx, cy, s * 0.72, extra);
  if (kind === "minus") return minus(cx, cy, s * 0.72, extra);
  if (kind === "check") return check(cx - s * 0.62, cy, s * 1.15, extra);
  if (kind === "x") return cross(cx, cy, s * 0.58, extra);
  if (kind === "alert") return line(cx, cy - s * 0.72, cx, cy + s * 0.18, extra) + circle(cx, cy + s * 0.56, 0.55, extra);
  if (kind === "star") return star(cx, cy, s * 0.9, extra);
  if (kind === "heart") return heart(extra, cx, cy + 0.4, 0.34);
  if (kind === "dot") return circle(cx, cy, s * 0.34, extra);
  return "";
};

/** Point on a circle at an angle (degrees, 0 = east, clockwise). */
export const pt = (cx, cy, r, deg) => [
  cx + r * Math.cos((deg * Math.PI) / 180),
  cy + r * Math.sin((deg * Math.PI) / 180),
];

/** Circular arc path. */
export const arc = (cx, cy, r, a0, a1, extra = "") => {
  const [x0, y0] = pt(cx, cy, r, a0);
  const [x1, y1] = pt(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 1 : 0;
  return path(
    `M${n(x0)} ${n(y0)} A${n(r)} ${n(r)} 0 ${large} ${sweep} ${n(x1)} ${n(y1)}`,
    extra
  );
};

/** Standard icon record helper. */
export const icon = (id, cat, kw, svg) => ({ id, cat, kw, svg });

/** Build N rotated copies of a base snippet as separate icons. */
export const dirSet = (ids, cat, kw, make) =>
  ids.map((id, i) => icon(id, cat, kw, make(i)));
