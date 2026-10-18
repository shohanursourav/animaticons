// Core: arrows & moves, interface controls, search, math.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
} from "../dsl.mjs";

const P = []; // recipes

/* ================= arrows & moves ================= */
const CAT = "moves";

// plain arrows (4) — shaft + head
const arrowBase = (extra, headExtra) =>
  line(12, 19.5, 12, 4.5, extra) + polyline("7.6,9 12,4.4 16.4,9", headExtra);

P.push(icon("arrow-up", CAT, ["north", "top", "direction"], rot(arrowBase(A.draw(), A.pop(0.12)), 0)));
P.push(icon("arrow-right", CAT, ["east", "next", "direction"], rot(arrowBase(A.draw(), A.pop(0.12)), 90)));
P.push(icon("arrow-down", CAT, ["south", "bottom", "direction"], rot(arrowBase(A.draw(), A.pop(0.12)), 180)));
P.push(icon("arrow-left", CAT, ["west", "back", "direction"], rot(arrowBase(A.draw(), A.pop(0.12)), 270)));

// diagonal arrows (4)
for (const [id, deg] of [
  ["arrow-up-right", 45],
  ["arrow-down-right", 135],
  ["arrow-down-left", 225],
  ["arrow-up-left", 315],
]) {
  P.push(icon(id, CAT, ["diagonal", "direction"], rot(arrowBase(A.draw(), A.pop(0.12)), deg)));
}

// chevrons (4)
const chevBase = (e1, e2) => polyline("8,5 13,12 8,19", e1);
P.push(icon("chevron-up", CAT, ["caret", "collapse"], rot(polyline("5,15 12,8.6 19,15", A.draw()), 0)));
P.push(icon("chevron-right", CAT, ["caret", "expand"], rot(polyline("5,15 12,8.6 19,15", A.draw()), 90)));
P.push(icon("chevron-down", CAT, ["caret", "dropdown"], rot(polyline("5,15 12,8.6 19,15", A.draw()), 180)));
P.push(icon("chevron-left", CAT, ["caret", "previous"], rot(polyline("5,15 12,8.6 19,15", A.draw()), 270)));

// double chevrons (4)
const doubleChev = (e) =>
  polyline("6,13.4 11,8 16,13.4", e) + polyline("6,17.8 11,12.4 16,17.8", e);
P.push(icon("chevrons-up", CAT, ["collapse all", "double caret"], rot(doubleChev(A.draw()), 0)));
P.push(icon("chevrons-right", CAT, ["fast", "double caret"], rot(doubleChev(A.draw()), 90)));
P.push(icon("chevrons-down", CAT, ["expand all", "double caret"], rot(doubleChev(A.draw()), 180)));
P.push(icon("chevrons-left", CAT, ["back", "double caret"], rot(doubleChev(A.draw()), 270)));

// move arrows: arrow with a base rail
const moveBase = (e1, e2) =>
  line(12, 20, 12, 4, e1) + polyline("8,8.4 12,4 16,8.4", e2) + line(6.5, 20, 17.5, 20, e1);
P.push(icon("move-up", CAT, ["nudge", "align"], rot(moveBase(A.draw(), A.pop(0.12)), 0)));
P.push(icon("move-right", CAT, ["nudge", "align"], rot(moveBase(A.draw(), A.pop(0.12)), 90)));
P.push(icon("move-down", CAT, ["nudge", "align"], rot(moveBase(A.draw(), A.pop(0.12)), 180)));
P.push(icon("move-left", CAT, ["nudge", "align"], rot(moveBase(A.draw(), A.pop(0.12)), 270)));

// trending arrows: polyline + head
const trendBase = (e1, e2) =>
  polyline("3.5,17.5 9,11.5 13,15 20.5,6.5", e1) + polyline("15.4,6.4 20.8,6.2 20.6,11.6", e2);
P.push(icon("trend-up", CAT, ["growth", "chart arrow", "rising"], rot(trendBase(A.draw(), A.pop(0.14)), 0)));
P.push(icon("trend-right", CAT, ["forward", "chart arrow"], rot(trendBase(A.draw(), A.pop(0.14)), 90)));
P.push(icon("trend-down", CAT, ["decline", "chart arrow", "falling"], rot(trendBase(A.draw(), A.pop(0.14)), 180)));
P.push(icon("trend-left", CAT, ["rewind chart", "chart arrow"], rot(trendBase(A.draw(), A.pop(0.14)), 270)));

// corner arrows
const corner = (e1, e2) =>
  path("M19 5v6.5a3 3 0 0 1-3 3H5.5", e1) + polyline("9.6,18.2 5.4,14.6 9.6,10.8", e2);
P.push(icon("corner-down-left", CAT, ["reply", "return"], corner(A.draw(), A.pop(0.12))));
P.push(icon("corner-down-right", CAT, ["reply all", "forward"], rot(corner(A.draw(), A.pop(0.12)), -90)));
P.push(icon("corner-up-right", CAT, ["redo edge"], rot(corner(A.draw(), A.pop(0.12)), 180)));
P.push(icon("corner-up-left", CAT, ["undo edge"], rot(corner(A.draw(), A.pop(0.12)), 90)));

// login / logout
P.push(icon("log-in", CAT, ["sign in", "enter", "auth"],
  path("M14.5 4.5h3A2 2 0 0 1 19.5 6.5v11a2 2 0 0 1-2 2h-3", A.draw()) +
  polyline("9.4,8 13.6,12 9.4,16", A.pop(0.1)) + line(13, 12, 4.5, 12, A.draw(0.08))));
P.push(icon("log-out", CAT, ["sign out", "exit", "auth"],
  path("M9.5 4.5h-3A2 2 0 0 0 4.5 6.5v11a2 2 0 0 0 2 2h3", A.draw()) +
  polyline("14.6,8 18.8,12 14.6,16", A.pop(0.1)) + line(5, 12, 13.5, 12, A.draw(0.08))));

// external link
P.push(icon("external-link", CAT, ["open new", "pop out", "share"],
  path("M13.5 5.2h5.3v5.3", A.draw()) + line(18.8, 5.2, 11.2, 12.8, A.draw(0.08)) +
  path("M16.5 13.5v4.3a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4.3", A.draw(0.06))));

// expand / shrink
P.push(icon("expand", CAT, ["fullscreen", "grow", "open"],
  path("M9.2 4.5H4.5v4.7", A.draw()) + path("M14.8 4.5h4.7v4.7", A.draw(0.05)) +
  path("M19.5 14.8v4.7h-4.7", A.draw(0.1)) + path("M9.2 19.5H4.5v-4.7", A.draw(0.15))));
P.push(icon("shrink", CAT, ["minimize", "collapse frame", "compress"],
  path("M4.5 9.2h4.7V4.5", A.draw()) + path("M19.5 9.2h-4.7V4.5", A.draw(0.05)) +
  path("M14.8 19.5V14.8h4.7", A.draw(0.1)) + path("M9.2 19.5v-4.7H4.5", A.draw(0.15))));
P.push(icon("maximize", CAT, ["fullscreen", "frame", "fit"],
  rect(4.5, 4.5, 15, 15, 2.5, A.draw()) +
  polyline("8,12 11,15 16,9", A.pop(0.12))));
P.push(icon("minimize", CAT, ["exit fullscreen", "frame", "shrink"],
  rect(4.5, 4.5, 15, 15, 2.5, A.draw()) +
  polyline("8.5,9.5 12,13 15.5,9.5", A.pop(0.12))));

// swap
P.push(icon("swap-vertical", CAT, ["switch", "exchange", "sort"],
  path("M7.5 4.5v15", A.draw()) + polyline("4.2,8 7.5,4.4 10.8,8", A.pop(0.1)) +
  path("M16.5 19.5v-15", A.draw(0.06)) + polyline("13.2,16 16.5,19.6 19.8,16", A.pop(0.16))));
P.push(icon("swap-horizontal", CAT, ["switch", "exchange", "transfer"],
  rot(path("M7.5 4.5v15", A.draw()) + polyline("4.2,8 7.5,4.4 10.8,8", A.pop(0.1)) +
  path("M16.5 19.5v-15", A.draw(0.06)) + polyline("13.2,16 16.5,19.6 19.8,16", A.pop(0.16)), 90)));

// refresh / undo / redo / repeat / shuffle
const arcArrow = (cw, e1, e2) => {
  const a0 = cw ? -55 : 235;
  const a1 = cw ? 200 : 80;
  const body = arc(12, 12, 7.6, a0, a1, e1);
  const [hx, hy] = pt(12, 12, 7.6, a1);
  const head = cw
    ? polyline(`${hx - 3.1},${hy - 0.6} ${hx},${hy} ${hx - 0.7},${hy + 3.1}`, e2)
    : polyline(`${hx - 3.1},${hy + 0.6} ${hx},${hy} ${hx - 0.7},${hy - 3.1}`, e2);
  return body + head;
};
P.push(icon("refresh-cw", CAT, ["reload", "sync", "update"], arcArrow(true, A.draw(), A.pop(0.12))));
P.push(icon("refresh-ccw", CAT, ["restore", "sync", "rollback"], arcArrow(false, A.draw(), A.pop(0.12))));

P.push(icon("undo", CAT, ["back", "revert"],
  path("M8.2 6.6H15a5.4 5.4 0 0 1 0 10.8H7.5", A.draw()) +
  polyline("11,2.9 7,6.7 11,10.5", A.pop(0.1))));
P.push(icon("redo", CAT, ["forward", "reapply"],
  rot(path("M8.2 6.6H15a5.4 5.4 0 0 1 0 10.8H7.5", A.draw()) +
  polyline("11,2.9 7,6.7 11,10.5", A.pop(0.1)), 180)));

P.push(icon("repeat", CAT, ["loop", "cycle"],
  path("M16.5 6.5H8a3.6 3.6 0 0 0 0 7.2h8.5", A.draw()) +
  polyline("13.6,3.4 16.9,6.6 13.6,9.8", A.pop(0.1)) +
  path("M7.5 17.5H16a3.6 3.6 0 0 0 0-7.2H7.5", A.draw(0.08)) +
  polyline("10.4,20.6 7.1,17.4 10.4,14.2", A.pop(0.18))));
P.push(icon("repeat-1", CAT, ["loop once", "cycle"],
  path("M16.5 6.5H8a3.6 3.6 0 0 0 0 7.2h8.5", A.draw()) +
  polyline("13.6,3.4 16.9,6.6 13.6,9.8", A.pop(0.1)) +
  path("M7.5 17.5H16a3.6 3.6 0 0 0 0-7.2H7.5", A.draw(0.08)) +
  path("M10.6,20.4v-3.2l1.8-1", A.pop(0.18))));
P.push(icon("shuffle", CAT, ["random", "mix", "remix"],
  path("M16.5 4.5h4v4", A.draw()) + path("M3.5 19.5l17-15", A.draw(0.05)) +
  path("M16.5 15.5h4v4", A.draw(0.1)) + path("M3.5 4.5l17 15", A.draw(0.12)) +
  polyline("16.6,20 20.6,19.6 20.2,15.8", A.pop(0.16))));

// sort / rank arrows
P.push(icon("sort-asc", CAT, ["order low high", "arrange"],
  line(5, 7, 15, 7, A.draw()) + line(5, 12, 11.5, 12, A.draw(0.05)) + line(5, 17, 8.5, 17, A.draw(0.1)) +
  polyline("16,13.6 19.2,10 22,13.2", A.pop(0.12)) + line(19.2, 10, 19.2, 19, A.draw(0.14))));
  P.push(icon("sort-desc", CAT, ["order high low", "arrange"],
    line(5, 7, 8.5, 7, A.draw()) + line(5, 12, 11.5, 12, A.draw(0.05)) + line(5, 17, 15, 17, A.draw(0.1)) +
    polyline("16,10.4 19.2,14 22,10.8", A.pop(0.12)) + line(19.2, 5, 19.2, 14, A.draw(0.14))));

// share nodes
P.push(icon("share", CAT, ["send to", "network", "spread"],
  circle(18, 5.8, 2.6, A.pop()) + circle(6, 12, 2.6, A.pop(0.06)) + circle(18, 18.2, 2.6, A.pop(0.12)) +
  line(8.4, 10.7, 15.7, 7.1, A.draw(0.1)) + line(8.4, 13.3, 15.7, 16.9, A.draw(0.14))));


/* ================= interface ================= */
{
  const CAT = "interface";
  P.push(icon("menu", CAT, ["hamburger", "nav", "list"], line(4, 6.5, 20, 6.5, A.draw()) + line(4, 12, 20, 12, A.draw(0.06)) + line(4, 17.5, 20, 17.5, A.draw(0.12))));
  P.push(icon("more-vertical", CAT, ["kebab", "options", "dots"], circle(12, 5.8, 1.8, A.pop()) + circle(12, 12, 1.8, A.pop(0.08)) + circle(12, 18.2, 1.8, A.pop(0.16))));
  P.push(icon("more-horizontal", CAT, ["ellipsis", "options", "dots"], circle(5.8, 12, 1.8, A.pop()) + circle(12, 12, 1.8, A.pop(0.08)) + circle(18.2, 12, 1.8, A.pop(0.16))));
  P.push(icon("dots-grid", CAT, ["apps", "palette", "menu"], [6, 12, 18].map(y => [6, 12, 18].map(x => circle(x, y, 1.8, A.pop(0.02 * (x + y)))).join("")).join("")));
  P.push(icon("sidebar-left", CAT, ["panel", "layout", "drawer"], rect(3.5, 4.5, 17, 15, 2.5, A.draw()) + line(9.2, 4.5, 9.2, 19.5, A.draw(0.1))));
  P.push(icon("sidebar-right", CAT, ["panel", "layout", "drawer"], rect(3.5, 4.5, 17, 15, 2.5, A.draw()) + line(14.8, 4.5, 14.8, 19.5, A.draw(0.1))));
  P.push(icon("panel-top", CAT, ["header", "layout", "banner"], rect(3.5, 4.5, 17, 15, 2.5, A.draw()) + line(3.5, 9.8, 20.5, 9.8, A.draw(0.1))));
  P.push(icon("panel-bottom", CAT, ["footer", "layout", "dock"], rect(3.5, 4.5, 17, 15, 2.5, A.draw()) + line(3.5, 14.2, 20.5, 14.2, A.draw(0.1))));
  P.push(icon("layout-grid", CAT, ["dashboard", "tiles", "apps"],
    rect(4, 4, 7, 7, 1.8, A.pop()) + rect(13, 4, 7, 7, 1.8, A.pop(0.06)) +
    rect(4, 13, 7, 7, 1.8, A.pop(0.12)) + rect(13, 13, 7, 7, 1.8, A.pop(0.18))));
  P.push(icon("layout-list", CAT, ["rows", "feed", "lines"],
    rect(3.5, 5, 17, 4, 1.6, A.pop()) + rect(3.5, 11, 17, 4, 1.6, A.pop(0.08)) + rect(3.5, 17, 17, 4, 1.6, A.pop(0.16))));
  P.push(icon("layout-columns", CAT, ["split", "panes", "grid"], rect(3.5, 4.5, 17, 15, 2.5, A.draw()) + line(12, 4.5, 12, 19.5, A.draw(0.1))));
  P.push(icon("layout-rows", CAT, ["split", "panes", "grid"], rect(3.5, 4.5, 17, 15, 2.5, A.draw()) + line(3.5, 12, 20.5, 12, A.draw(0.1))));
  P.push(icon("sliders-horizontal", CAT, ["controls", "tune", "settings"],
    line(4, 7.5, 20, 7.5, A.draw()) + circle(9, 7.5, 2.1, A.pop(0.08)) +
    line(4, 16.5, 20, 16.5, A.draw(0.05)) + circle(15.5, 16.5, 2.1, A.pop(0.14))));
  P.push(icon("sliders-vertical", CAT, ["controls", "tune", "settings"],
    rot(line(4, 7.5, 20, 7.5, A.draw()) + circle(9, 7.5, 2.1, A.pop(0.08)) +
    line(4, 16.5, 20, 16.5, A.draw(0.05)) + circle(15.5, 16.5, 2.1, A.pop(0.14)), 90)));
  P.push(icon("toggle-left", CAT, ["switch off", "control", "off"],
    rect(2.8, 7.2, 18.4, 9.6, 4.8, A.draw()) + circle(7.4, 12, 2.5, A.pop(0.1))));
  P.push(icon("toggle-right", CAT, ["switch on", "control", "on"],
    rect(2.8, 7.2, 18.4, 9.6, 4.8, A.draw()) + circle(16.6, 12, 2.5, A.pop(0.1))));
  P.push(icon("drag-handle", CAT, ["grip", "reorder", "handle"],
    [8.5, 12, 15.5].map(y => [8.8, 15.2].map(x => circle(x, y, 1.8, A.pop(0.03 * y))).join("")).join("")));
  P.push(icon("command", CAT, ["keyboard", "shortcut", "key"],
    rect(9, 9, 6, 6, 1, A.pop()) +
    path("M9 9a3 3 0 1 1 6 0", A.draw(0.06)) + path("M9 15a3 3 0 1 0 6 0", A.draw(0.1)) +
    path("M9 9a3 3 0 1 0 0 6", A.draw(0.14)) + path("M15 9a3 3 0 1 1 0 6", A.draw(0.18))));
  P.push(icon("filter", CAT, ["funnel", "refine", "sort"],
    polyline("4,5.5 20,5.5 14.2,12.8 14.2,18.2 9.8,20.2 9.8,12.8", A.draw())));
  P.push(icon("settings", CAT, ["gear", "cog", "preferences"], gear(12, 12, 8, A.spin()) + circle(12, 12, 2.2, A.fade(0.2))));
  P.push(icon("settings-2", CAT, ["gear", "tune", "preferences"],
    line(4, 8, 14, 8, A.draw()) + line(17, 8, 20, 8, A.draw(0.04)) + circle(15.5, 8, 2, A.pop(0.08)) +
    line(4, 16, 7, 16, A.draw(0.06)) + line(10, 16, 20, 16, A.draw(0.1)) + circle(8.5, 16, 2, A.pop(0.14))));
  P.push(icon("eye", CAT, ["view", "visible", "watch"],
    path("M2.8 12S6.4 6.2 12 6.2 21.2 12 21.2 12 17.6 17.8 12 17.8 2.8 12 2.8 12Z", A.draw()) +
    circle(12, 12, 2.9, A.pop(0.12))));
  P.push(icon("eye-off", CAT, ["hidden", "invisible", "private"],
    path("M6 6.6C3.9 8.2 2.8 12 2.8 12s3.6 5.8 9.2 5.8c1.5 0 2.9-.4 4-1", A.draw()) +
    path("M9.8 6.6A9.6 9.6 0 0 1 12 6.2c5.6 0 9.2 5.8 9.2 5.8a17 17 0 0 1-2.4 3", A.draw(0.06)) +
    line(4, 4, 20, 20, A.draw(0.12))));
}

/* ================= search & focus ================= */
{
  const CAT = "search";
  P.push(icon("search", CAT, ["find", "magnify", "lookup"], circle(11, 11, 6.4, A.draw()) + line(15.9, 15.9, 20.2, 20.2, A.draw(0.12))));
  P.push(icon("search-x", CAT, ["find none", "no result", "clear"], circle(11, 11, 6.4, A.draw()) + line(15.9, 15.9, 20.2, 20.2, A.draw(0.12)) + line(8.8, 8.8, 13.2, 13.2, A.draw(0.16)) + line(13.2, 8.8, 8.8, 13.2, A.draw(0.2))));
  P.push(icon("zoom-in", CAT, ["magnify", "enlarge", "find"], circle(11, 11, 6.4, A.draw()) + line(15.9, 15.9, 20.2, 20.2, A.draw(0.12)) + plus(11, 11, 3, A.pop(0.16))));
  P.push(icon("zoom-out", CAT, ["magnify", "reduce", "find"], circle(11, 11, 6.4, A.draw()) + line(15.9, 15.9, 20.2, 20.2, A.draw(0.12)) + minus(11, 11, 3, A.pop(0.16))));
  P.push(icon("scan", CAT, ["capture", "reader", "frame"], path("M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9", A.draw()) + path("M15 4h2.5A2.5 2.5 0 0 1 20 6.5V9", A.draw(0.05)) + path("M20 15v2.5a2.5 2.5 0 0 1-2.5 2.5H15", A.draw(0.1)) + path("M9 19.5H6.5A2.5 2.5 0 0 1 4 17V15", A.draw(0.15)) + line(7, 12, 17, 12, A.draw(0.2))));
  P.push(icon("scan-eye", CAT, ["recognize", "reader", "view"], path("M4 9V6.5A2.5 2.5 0 0 1 6.5 4H9", A.draw()) + path("M15 4h2.5A2.5 2.5 0 0 1 20 6.5V9", A.draw(0.05)) + path("M20 15v2.5a2.5 2.5 0 0 1-2.5 2.5H15", A.draw(0.1)) + path("M9 19.5H6.5A2.5 2.5 0 0 1 4 17V15", A.draw(0.15)) + path("M7.6 12S9.4 9.4 12 9.4 16.4 12 16.4 12 14.6 14.6 12 14.6 7.6 12 7.6 12Z", A.pop(0.2))));
  P.push(icon("crosshair", CAT, ["target", "aim", "precision"], circle(12, 12, 7.2, A.draw()) + line(12, 2.8, 12, 6.2, A.draw(0.1)) + line(12, 17.8, 12, 21.2, A.draw(0.12)) + line(2.8, 12, 6.2, 12, A.draw(0.14)) + line(17.8, 12, 21.2, 12, A.draw(0.16))));
  P.push(icon("target", CAT, ["focus", "bullseye", "aim"], circle(12, 12, 8.4, A.draw()) + circle(12, 12, 5, A.draw(0.08)) + circle(12, 12, 1.7, A.pop(0.16))));
  P.push(icon("focus-frame", CAT, ["crop to", "select", "center"], rect(7, 7, 10, 10, 1.6, A.pop()) + path("M4 8V6a2 2 0 0 1 2-2h2", A.draw(0.08)) + path("M16 4h2a2 2 0 0 1 2 2v2", A.draw(0.12)) + path("M20 16v2a2 2 0 0 1-2 2h-2", A.draw(0.16)) + path("M8 20H6a2 2 0 0 1-2-2v-2", A.draw(0.2))));
  P.push(icon("locate-fixed", CAT, ["gps", "where", "position"], circle(12, 12, 3.2, A.pop()) + line(12, 2.6, 12, 5.8, A.draw(0.08)) + line(12, 18.2, 12, 21.4, A.draw(0.1)) + line(2.6, 12, 5.8, 12, A.draw(0.12)) + line(18.2, 12, 21.4, 12, A.draw(0.14))));
  P.push(icon("radar", CAT, ["signal scan", "sweep", "detect"], arc(12, 12, 8.6, -90, 0, A.draw()) + arc(12, 12, 5.4, -90, 0, A.draw(0.08)) + arc(12, 12, 2.2, -90, 0, A.draw(0.14)) + line(12, 12, 18.6, 8.2, A.draw(0.18))));
}

/* ================= math & numbers ================= */
{
  const CAT = "math";
  P.push(icon("plus", CAT, ["add", "new", "increase"], plus(12, 12, 7, A.draw())));
  P.push(icon("minus", CAT, ["subtract", "remove", "decrease"], minus(12, 12, 7, A.draw())));
  P.push(icon("equals", CAT, ["balance", "same"], line(5.5, 9.5, 18.5, 9.5, A.draw()) + line(5.5, 14.5, 18.5, 14.5, A.draw(0.08))));
  P.push(icon("not-equal", CAT, ["different", "compare"], line(5.5, 9.5, 18.5, 9.5, A.draw()) + line(5.5, 14.5, 18.5, 14.5, A.draw(0.08)) + line(9, 5.5, 7, 18.5, A.draw(0.14))));
  P.push(icon("divide", CAT, ["math", "split"], line(5.5, 12, 18.5, 12, A.draw()) + circle(12, 7.2, 1.85, A.pop(0.1)) + circle(12, 16.8, 1.85, A.pop(0.14))));
  P.push(icon("percent", CAT, ["ratio", "discount"], circle(7.6, 7.6, 2.3, A.pop()) + circle(16.4, 16.4, 2.3, A.pop(0.08)) + line(18, 6, 6, 18, A.draw(0.14))));
  P.push(icon("sigma", CAT, ["sum", "series", "total"], path("M17.5 6.2H7.2l5.4 5.8-5.4 5.8h10.3", A.draw())));
  P.push(icon("infinity", CAT, ["endless", "loop", "forever"], path("M8.2 8.2c2.3 0 3.4 3.8 5.6 3.8s3.3-3.8 5.6-3.8a3.8 3.8 0 0 1 0 7.6c-2.3 0-3.4-3.8-5.6-3.8S10.5 15.8 8.2 15.8a3.8 3.8 0 0 1 0-7.6Z", A.draw())));
  P.push(icon("calculator", CAT, ["math tool", "compute"], rect(5, 3.5, 14, 17, 2.5, A.draw()) + rect(8, 6.5, 8, 3.4, 1, A.pop(0.1)) + [8, 12, 16].map(x => [13.6, 17.2].map(y => circle(x, y, 0.95, A.pop(0.03 * x))).join("")).join("")));
  P.push(icon("pi", CAT, ["constant", "circle math"], path("M6.2 7h11.6M12 7v10.4", A.draw()) + path("M12 14.2c-1 2.3-2.4 3.2-3.7 3.2a2.2 2.2 0 0 1-2-2.8c.7-2 3.1-2.8 5.5-2", A.draw(0.12))));
  P.push(icon("binary", CAT, ["code numbers", "bits"], rect(4, 4.5, 16, 15, 2.5, A.draw()) + line(9, 9, 9, 15, A.draw(0.1)) + line(6.8, 9, 9, 9, A.draw(0.12)) + circle(15.5, 10, 1.1, A.pop(0.14)) + circle(15.5, 14.2, 1.1, A.pop(0.18))));
}

export default P;
