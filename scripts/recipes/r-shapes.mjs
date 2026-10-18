// Shapes & marks, design tools, gestures, science, home, games.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
} from "../dsl.mjs";

const P = [];

/* ================= shapes & marks ================= */
{
  const CAT = "shapes";
  P.push(icon("shape-circle", CAT, ["round", "geometry", "ring base"], circle(12, 12, 8.2, A.draw())));
  P.push(icon("shape-ring", CAT, ["donut", "outline circle", "round"], circle(12, 12, 8.2, A.draw()) + circle(12, 12, 4.2, A.draw(0.12))));
  P.push(icon("shape-square", CAT, ["box", "geometry", "frame"], rect(4.2, 4.2, 15.6, 15.6, 2, A.draw())));
  P.push(icon("shape-rounded", CAT, ["soft square", "app tile", "frame"], rect(4.2, 4.2, 15.6, 15.6, 4.8, A.draw())));
  P.push(icon("shape-triangle", CAT, ["delta", "geometry", "pyramid"], polygon("12,3.8 21,19.6 3,19.6", A.draw())));
  P.push(icon("shape-diamond", CAT, ["rhombus", "gem base", "geometry"], polygon("12,2.8 21.2,12 12,21.2 2.8,12", A.draw())));
  P.push(icon("shape-pentagon", CAT, ["polygon", "geometry", "five sides"], polygon("12,3 21,10.2 17.2,20.6 6.8,20.6 3,10.2", A.draw())));
  P.push(icon("shape-hexagon", CAT, ["polygon", "cell", "geometry"], polygon("12,3 20.4,7.6 20.4,16.4 12,21 3.6,16.4 3.6,7.6", A.draw())));
  P.push(icon("shape-octagon", CAT, ["polygon", "stop base", "geometry"], polygon("8.2,3.4 15.8,3.4 20.6,8.2 20.6,15.8 15.8,20.6 8.2,20.6 3.4,15.8 3.4,8.2", A.draw())));
  P.push(icon("shape-star", CAT, ["rating base", "favorite base", "burst"], star(12, 12, 8.6, A.draw())));
  P.push(icon("shape-star-4", CAT, ["spark base", "shine", "north star"], sparkle(12, 12, 8.6, A.draw())));
  P.push(icon("heart", CAT, ["love", "like", "favorite"], heart(A.draw(), 12, 11.6, 1.06)));
  P.push(icon("shape-crescent", CAT, ["moon base", "night base", "arc"], path("M18.6 15.2A8 8 0 0 1 8.4 5 8 8 0 1 0 18.6 15.2Z", A.draw())));
  P.push(icon("shape-capsule", CAT, ["pill base", "stadium", "rounded bar"], rect(3, 8, 18, 8, 4, A.draw())));
  P.push(icon("shape-parallelogram", CAT, ["skew", "geometry", "slant"], polygon("7.6,4.6 21,4.6 16.4,19.4 3,19.4", A.draw())));
  P.push(icon("shape-cross", CAT, ["plus base", "medical base", "add"], polygon("8.6,3.4 15.4,3.4 15.4,8.6 20.6,8.6 20.6,15.4 15.4,15.4 15.4,20.6 8.6,20.6 8.6,15.4 3.4,15.4 3.4,8.6 8.6,8.6", A.draw())));
  P.push(icon("shape-blob", CAT, ["organic", "squish", "soft shape"], path("M12 3.4c3.8 0 6.6 1.6 7.8 4.6 1.2 3-.2 6-1.8 8.2-1.6 2.2-3.6 4-6 4s-4.6-1.2-6.2-3.4c-1.6-2.2-2.4-5-1.2-7.8C5.8 5.4 8.2 3.4 12 3.4Z", A.draw())));
  P.push(icon("seal", CAT, ["award base", "rosette", "sticker"], star(12, 10, 6.4, A.draw()) + polyline("8.2,15.2 6.6,21.2 12,18.6 17.4,21.2 15.8,15.2", A.draw(0.12))));
  P.push(icon("sparkles", CAT, ["shine", "magic new", "twinkle"], sparkle(9.2, 9.2, 5, A.pop()) + sparkle(16.8, 15.6, 3.2, A.pop(0.1)) + sparkle(17.4, 6.4, 1.8, A.pop(0.18))));
  P.push(icon("sparkle", CAT, ["glint", "shine", "new"], sparkle(12, 12, 8.2, A.pop())));
  P.push(icon("halo", CAT, ["ring above", "badge ring", "orbit"], circle(12, 12, 6.6, A.draw()) + ellipse(12, 6.4, 5.2, 1.6, A.draw(0.12))));
  P.push(icon("corner-marks", CAT, ["crop marks", "frame guides", "target frame"],
    path("M6 3.4H4.2A.8.8 0 0 0 3.4 4.2V6", A.draw()) + path("M18 3.4h1.8a.8.8 0 0 1 .8.8V6", A.draw(0.05)) +
    path("M20.6 18v1.8a.8.8 0 0 1-.8.8H18", A.draw(0.1)) + path("M6 20.6H4.2a.8.8 0 0 1-.8-.8V18", A.draw(0.15)) +
    circle(12, 12, 1.85, A.pop(0.2))));
  P.push(icon("hash", CAT, ["pound", "tag number", "channel"],
    line(9.4, 3.6,7.4, 20.4, A.draw()) + line(16.6, 3.6, 14.6, 20.4, A.draw(0.06)) +
    line(4.4, 8.6, 19.6, 8.6, A.draw(0.12)) + line(4.4, 15.4, 19.6, 15.4, A.draw(0.16))));
  P.push(icon("asterisk", CAT, ["star mark", "note", "wildcard"],
    line(12, 3.6, 12, 20.4, A.draw()) + rot(line(12, 3.6, 12, 20.4, A.draw(0.04)), 60) + rot(line(12, 3.6, 12, 20.4, A.draw(0.04)), 120)));
  P.push(icon("slash", CAT, ["divide mark", "no", "disabled"], circle(12, 12, 8.6, A.draw()) + line(5.8, 18.2, 18.2, 5.8, A.draw(0.12))));
  P.push(icon("dot", CAT, ["point", "bullet", "center"], circle(12, 12, 3.4, A.pulse())));
}

/* ================= design & color ================= */
{
  const CAT = "design";
  P.push(icon("swatch", CAT, ["color sample", "paint chip", "palette picker"],
    rect(3.4, 8.2, 11.6, 11.6, 2, A.draw()) + path("M15 8.2 20.2 3.4a1.6 1.6 0 0 1 2.2 2.2L17.2 10.4", A.draw(0.1)) +
    circle(8, 12.6, 1.5, A.pop(0.16))));
  P.push(icon("gradient", CAT, ["color fade", "blend", "fill"],
    rect(3.4, 3.4, 17.2, 17.2, 3, A.draw()) +
    line(3.4, 12, 20.6, 12, A.draw(0.1)) + line(3.4, 7, 20.6, 7, A.draw(0.12)) + line(3.4, 17, 20.6, 17, A.draw(0.14))));
  P.push(icon("pen-tool", CAT, ["vector", "anchor points", "design"],
    path("M12 2.8 4.6 20.6l7.4-3.4 7.4 3.4Z", A.draw()) + circle(12, 12, 1.8, A.pop(0.12))));
  P.push(icon("bezier", CAT, ["curve", "vector path", "anchor"],
    path("M4.4 19.6C6 8 18 8 19.6 19.6", A.draw()) + circle(4.4, 19.6, 1.8, A.pop(0.12)) + circle(19.6, 19.6, 1.8, A.pop(0.16)) +
    line(8.4, 12, 15.6, 12, A.draw(0.18)) + circle(8.4, 12, 1, A.pop(0.2)) + circle(15.6, 12, 1, A.pop(0.22))));
  P.push(icon("frame", CAT, ["artboard", "selection", "boundary"],
    path("M4.2 7.4h15.6", A.draw()) + path("M4.2 16.6h15.6", A.draw(0.05)) +
    path("M7.4 4.2v15.6", A.draw(0.1)) + path("M16.6 4.2v15.6", A.draw(0.15))));
  P.push(icon("ruler-combined", CAT, ["measure tool", "layout size", "guide"],
    rect(3.4, 8.4, 17.2, 7.2, 1.6, A.draw()) +
    line(7, 8.4, 7, 12, A.draw(0.1)) + line(10.6, 8.4, 10.6, 13.2, A.draw(0.12)) + line(14.2, 8.4, 14.2, 12, A.draw(0.14)) + line(17.8, 8.4, 17.8, 13.2, A.draw(0.16))));
  P.push(icon("slice", CAT, ["cut line", "export", "divide art"],
    path("M20.2 4.2 4.6 12.2", A.draw()) + path("M20.2 19.8 4.6 11.8", A.draw(0.06)) +
    circle(17.6, 6, 1.8, A.pop(0.14)) + circle(17.6, 18, 1.8, A.pop(0.18))));
  P.push(icon("layers-2", CAT, ["stack design", "sheets", "z-order"],
    path("M12 3.4 3.2 8 12 12.6 20.8 8Z", A.draw()) + path("M3.2 12.6 12 17.2l8.8-4.6", A.draw(0.1)) +
    path("M3.2 16.8 12 21.4l8.8-4.6", A.draw(0.16))));
  P.push(icon("stamp-design", CAT, ["brand mark", "watermark", "imprint tool"],
    circle(12, 9, 5.2, A.draw()) + rect(6.2, 16.2, 11.6, 3.2, 1.2, A.pop(0.12)) +
    line(12, 3.8, 12, 2.6, A.draw(0.18))));
}

/* ================= cursors & gestures ================= */
{
  const CAT = "gestures";
  P.push(icon("cursor", CAT, ["pointer", "mouse arrow", "click"], polygon("5.4,3.4 19.4,11.6 12.4,12.8 9,19.6", A.draw())));
  P.push(icon("cursor-click", CAT, ["tap", "select", "pointer action"],
    polygon("4.4,2.8 17.2,10.6 10.8,11.6 7.6,18", A.draw()) +
    path("M16.4 12.6a2.2 2.2 0 0 0 3 3M18.8 9.8a4.2 4.2 0 0 0 4.2 4.2M21.4 6.8a7 7 0 0 0 2.2 5.4", A.draw(0.12))));
  P.push(icon("hand-tap", CAT, ["touch", "press", "finger"],
    path("M9 11.2V6.4a1.8 1.8 0 0 1 3.6 0v4.2", A.draw()) +
    path("M12.6 10.6a1.6 1.6 0 0 1 3.2 0v1.4", A.draw(0.06)) +
    path("M15.8 12a1.6 1.6 0 0 1 3.2 0v3a5.6 5.6 0 0 1-5.6 5.6h-1a5 5 0 0 1-4-2l-3-4a1.7 1.7 0 0 1 2.6-2.1L9 13", A.draw(0.1))));
  P.push(icon("thumbs-up", CAT, ["like", "approve", "upvote"],
    path("M6.6 19.6V10h3.8l.4-4.4a1.6 1.6 0 0 1 3.1-.2c.3 1.1.1 2.2-.6 3.2h4a2 2 0 0 1 2 2.4l-1.2 6a2 2 0 0 1-2 1.6Z", A.draw()) +
    rect(3, 10, 3.6, 9.6, 1, A.pop(0.12))));
  P.push(icon("thumbs-down", CAT, ["dislike", "reject", "downvote"],
    rot(path("M6.6 19.6V10h3.8l.4-4.4a1.6 1.6 0 0 1 3.1-.2c.3 1.1.1 2.2-.6 3.2h4a2 2 0 0 1 2 2.4l-1.2 6a2 2 0 0 1-2 1.6Z", A.draw()) +
    rect(3, 10, 3.6, 9.6, 1, A.pop(0.12)), 180)));
  P.push(icon("grab", CAT, ["drag", "hold", "hand grip"],
    path("M8 12V6.6a1.6 1.6 0 0 1 3.2 0v4.2", A.draw()) +
    path("M11.2 10.8a1.5 1.5 0 0 1 3 0v1.2", A.draw(0.05)) +
    path("M14.2 12a1.5 1.5 0 0 1 3 0v2.8a5.6 5.6 0 0 1-5.6 5.6 5.2 5.2 0 0 1-3.2-1.1L5 16.4a1.6 1.6 0 0 1 2.2-2.2L8 15", A.draw(0.1)) +
    line(5.2, 8.4, 3.4, 7.4, A.draw(0.16)) + line(7, 4.8, 5.8, 3.2, A.draw(0.19))));
  P.push(icon("pointing", CAT, ["select up", "gesture", "indicate"],
    path("M11.4 19.8c-1 .4-2-.2-2.2-1.2l-.6-3.2c-.2-.8-.6-1.4-1-2.2a1.6 1.6 0 0 1 2.6-1.8l2.2 2.4V4.8a1.7 1.7 0 0 1 3.4 0v5.2", A.draw()) +
    path("M15.8 10.4a1.6 1.6 0 0 1 3.2 0v.8", A.draw(0.08)) +
    path("M19 11.4a1.5 1.5 0 0 1 1.8 1.4v1.4a7 7 0 0 1-7 7h-1.4a5.2 5.2 0 0 1-2.4-.6", A.draw(0.12))));
  P.push(icon("swipe", CAT, ["gesture slide", "scroll", "flick"],
    path("M8.4 11.2V6.6a1.5 1.5 0 0 1 3 0v3.8", A.draw()) +
    path("M11.4 10.4a1.4 1.4 0 0 1 2.8 0v1", A.draw(0.05)) +
    path("M14.2 11.6a1.4 1.4 0 0 1 2.8 0v2.6a5 5 0 0 1-5 5 4.8 4.8 0 0 1-3.1-1.1l-3.5-3.6a1.5 1.5 0 0 1 2-2.2L8.4 13", A.draw(0.1)) +
    path("M2.8 7.2c2-2.4 4.2-3.4 6.6-3", A.draw(0.16)) + polyline("6.2,2.6 9.8,3.8 8.2,7.2", A.pop(0.2))));
}

/* ================= science & lab ================= */
{
  const CAT = "science";
  P.push(icon("flask", CAT, ["chemistry", "experiment", "beaker"],
    path("M9.4 3.6v6L4.6 18a1.8 1.8 0 0 0 1.6 2.8h11.6a1.8 1.8 0 0 0 1.6-2.8l-4.8-8.4v-6", A.draw()) +
    line(8.2, 3.6, 15.8, 3.6, A.draw(0.1)) + line(6.8, 14, 17.2, 14, A.draw(0.14)) +
    circle(10, 16.6, 1.85, A.pop(0.18)) + circle(14, 17.2, 1.85, A.pop(0.2))));
  P.push(icon("atom", CAT, ["physics", "science", "nucleus"],
    circle(12, 12, 1.8, A.pop()) + ellipse(12, 12, 9.4, 3.6, A.draw(0.08)) +
    rot(ellipse(12, 12, 9.4, 3.6, A.draw(0.12)), 60) + rot(ellipse(12, 12, 9.4, 3.6, A.draw(0.16)), 120)));
  P.push(icon("microscope", CAT, ["research", "lab", "magnify science"],
    path("M6.2 20.4h13.2", A.draw()) + path("M7.6 20.4c-2.6-2.8-2.8-7-.4-10", A.draw(0.06)) +
    path("M10 6.6 12 4.6a2.2 2.2 0 0 1 3.2 3.2l-2 2", A.draw(0.1)) +
    path("M9 10.2l5.6-5.6 3 3-5.6 5.6Z", A.draw(0.14)) + path("M13.8 13.4a4 4 0 0 1 4 4v3", A.draw(0.18))));
  P.push(icon("dna", CAT, ["genetics", "helix", "biology"],
    path("M7 2.8c0 6 10 6.4 10 12.4S7 21.2 7 21.2", A.draw()) +
    path("M17 2.8c0 6-10 6.4-10 12.4s10 6 10 6", A.draw(0.08)) +
    [5.6, 8.8, 12, 15.2, 18.4].map((y, i) => line(8.2, y, 15.8, y, A.draw(0.12 + i * 0.02))).join("")));
  P.push(icon("magnet", CAT, ["attract", "horseshoe", "force"],
    path("M5.4 5.4v7.4a6.6 6.6 0 0 0 13.2 0V5.4", A.draw()) +
    line(5.4, 5.4, 9.4, 5.4, A.draw(0.1)) + line(14.6, 5.4, 18.6, 5.4, A.draw(0.12)) +
    line(5.4, 9, 9.4, 9, A.draw(0.15)) + line(14.6, 9, 18.6, 9, A.draw(0.18))));
  P.push(icon("telescope", CAT, ["stargazing", "observe", "space"],
    path("M3.4 12.6 15 6.4l2.4 4.4L5.8 17Z", A.draw()) + path("M15 6.4l2.8-3.2 2.6 4.8-3 2.8", A.draw(0.1)) +
    line(8, 14.8, 6.2, 20.8, A.draw(0.14)) + line(11.6, 13, 13.4, 20.8, A.draw(0.17))));
  P.push(icon("test-tube", CAT, ["sample", "lab tube", "chemistry"],
    path("M8.6 2.8v11.4a4.2 4.2 0 0 0 8.4 0V2.8", A.draw()) + line(6.8, 2.8, 18.8, 2.8, A.draw(0.1)) +
    line(6.8, 7.2, 8.6, 7.2, A.draw(0.14)) + line(17, 7.2, 18.8, 7.2, A.draw(0.17))));
  P.push(icon("orbit", CAT, ["satellite", "ellipse path", "system"],
    circle(12, 12, 2, A.pop()) + ellipse(12, 12, 9.4, 4, A.draw(0.08), 0) &&
    ellipse(12, 12, 9.4, 4, A.draw(0.08)) + rot(ellipse(12, 12, 9.4, 4, A.draw(0.12)), 60) +
    circle(20.4, 12, 1.3, A.pop(0.18))));
  P.push(icon("pill", CAT, ["medicine", "capsule", "health dose"],
    path("M10.2 4.2a4.4 4.4 0 0 1 6.2 0l3.4 3.4a4.4 4.4 0 0 1 0 6.2l-6 6a4.4 4.4 0 0 1-6.2 0l-3.4-3.4a4.4 4.4 0 0 1 0-6.2Z", A.draw()) +
    line(8.4, 15.6, 15.6, 8.4, A.draw(0.12))));
  P.push(icon("stethoscope", CAT, ["doctor", "medical check", "care"],
    path("M5.4 3.2v5a4 4 0 0 0 8 0v-5", A.draw()) + path("M9.4 12.2v2.6a5 5 0 0 0 5 5 5 5 0 0 0 5-5v-1.2", A.draw(0.1)) +
    circle(19.4, 11.6, 2, A.pop(0.16)) + line(4, 3.2, 6.8, 3.2, A.draw(0.2)) + line(11, 3.2, 13.8, 3.2, A.draw(0.22))));
}

/* ================= home & living ================= */
{
  const CAT = "home";
  P.push(icon("lamp", CAT, ["light", "desk lamp", "bright idea"],
    path("M8.4 4.4 12 2.8l3.6 1.6 3 7H5.4Z", A.draw()) + line(12, 11.4, 12, 17.4, A.draw(0.12)) +
    line(8.2, 20.8, 15.8, 20.8, A.draw(0.16))));
  P.push(icon("sofa", CAT, ["couch", "living room", "seat"],
    path("M5.2 11.2V8.4a2.2 2.2 0 0 1 4.4 0v2.8", A.draw()) + path("M14.4 11.2V8.4a2.2 2.2 0 0 1 4.4 0v2.8", A.draw(0.06)) +
    rect(3, 11.2, 18, 6, 1.8, A.pop(0.12)) + line(5.2, 17.2, 5.2, 19.8, A.draw(0.18)) + line(18.8, 17.2, 18.8, 19.8, A.draw(0.2))));
  P.push(icon("bed", CAT, ["sleep", "bedroom", "rest"],
    path("M3.4 7.2v12.4", A.draw()) + path("M3.4 12.6h17.2v7", A.draw(0.08)) +
    rect(6, 8.8, 6.4, 3.8, 1.2, A.pop(0.14)) + line(3.4, 19.6, 20.6, 19.6, A.draw(0.2))));
  P.push(icon("bathtub", CAT, ["bath", "wash", "clean"],
    path("M3.2 10.2h17.6v4a5 5 0 0 1-5 5H8.2a5 5 0 0 1-5-5Z", A.draw()) +
    path("M6 10.2V5.6a2.2 2.2 0 0 1 4.4 0", A.draw(0.1)) + line(4.6, 20.6, 6, 19.2, A.draw(0.14)) + line(19.4, 20.6, 18, 19.2, A.draw(0.17))));
  P.push(icon("fridge", CAT, ["kitchen", "cold storage", "appliance"],
    rect(5.4, 2.8, 13.2, 18.4, 2, A.draw()) + line(5.4, 9.2, 18.6, 9.2, A.draw(0.1)) +
    line(15.2, 6, 15.2, 7.8, A.draw(0.14)) + line(15.2, 11, 15.2, 13.2, A.draw(0.17))));
  P.push(icon("plant-pot", CAT, ["indoor plant", "decor", "green home"],
    path("M6.2 12.4h11.6l-1.2 7.2a1.6 1.6 0 0 1-1.6 1.4H9a1.6 1.6 0 0 1-1.6-1.4Z", A.draw()) +
    path("M12 12.4c0-3.6-2.4-6.2-6-6.8.4 3.6 2.6 6.2 6 6.8Z", A.draw(0.1)) +
    path("M12 12.4c0-3 1.8-5.2 4.8-6-.2 3.2-1.8 5.4-4.8 6Z", A.draw(0.16))));
  P.push(icon("wrench", CAT, ["tool", "repair", "settings fix"],
    path("M20.2 5.2a5 5 0 0 1-6.6 6.6l-6.8 6.8a2 2 0 0 1-2.8-2.8l6.8-6.8a5 5 0 0 1 6.6-6.6l-3 3 .6 3 3 .6Z", A.draw())));
  P.push(icon("hammer", CAT, ["build", "tool", "fix"],
    path("M14.4 4.2 19.8 9.6", A.draw()) + path("M17.2 3.2a3.4 3.4 0 0 1 3.6 3.6l-2.2.6-1.8-1.8Z", A.pop(0.1)) +
    path("M13.4 7.6 4.2 16.8a1.8 1.8 0 0 0 2.6 2.6l9.2-9.2Z", A.draw(0.14))));
  P.push(icon("screwdriver", CAT, ["tool", "adjust", "fix"],
    path("M18.2 2.6 21.4 5.8 12 15.2 8.8 12Z", A.draw()) + path("M8.8 12 5 15.8a1.7 1.7 0 1 0 2.4 2.4l3.8-3.8", A.draw(0.12))));
  P.push(icon("bucket", CAT, ["pail", "paint", "fill"],
    path("M4.2 8.2h15.6l-1.4 10.4a1.8 1.8 0 0 1-1.8 1.6H7.4a1.8 1.8 0 0 1-1.8-1.6Z", A.draw()) +
    path("M6.4 8.2a5.6 5.6 0 0 1 11.2 0", A.draw(0.12))));
  P.push(icon("blinds", CAT, ["window shade", "curtain", "light control"],
    rect(3.6, 3.2, 16.8, 3, 1, A.pop()) +
    [7.2, 10.4, 13.6, 16.8, 20].map((y, i) => line(5, y, 19, y, A.draw(0.04 * i))).join("") +
    line(12, 6.2, 12, 20.6, A.draw(0.2))));
  P.push(icon("mirror", CAT, ["reflect", "vanity", "glass"],
    rect(6, 2.8, 12, 13.2, 6, A.draw()) + line(12, 16, 12, 20.4, A.draw(0.12)) + line(8.2, 20.4, 15.8, 20.4, A.draw(0.16))));
}

/* ================= games & fun ================= */
{
  const CAT = "games";
  P.push(icon("dice", CAT, ["random game", "roll", "luck"],
    rect(4, 4, 16, 16, 3, A.draw()) + circle(8.6, 8.6, 1.15, A.pop(0.1)) + circle(15.4, 8.6, 1.15, A.pop(0.13)) +
    circle(12, 12, 1.15, A.pop(0.16)) + circle(8.6, 15.4, 1.15, A.pop(0.19)) + circle(15.4, 15.4, 1.15, A.pop(0.22))));
  P.push(icon("dice-5", CAT, ["five", "game cube", "chance"],
    rect(4, 4, 16, 16, 3, A.draw()) +
    [[8, 8], [16, 8], [12, 12], [8, 16], [16, 16]].map(([x, y], i) => circle(x, y, 1.15, A.pop(0.04 * i))).join("")));
  P.push(icon("joystick", CAT, ["arcade", "game control", "play"],
    path("M9 13.4a3 3 0 0 1 6 0v3.8a1.8 1.8 0 0 1-1.8 1.8h-2.4a1.8 1.8 0 0 1-1.8-1.8Z", A.draw()) +
    line(12, 13.4, 12, 6, A.draw(0.1)) + circle(12, 4.6, 1.6, A.pop(0.14)) +
    line(7, 19, 17, 19, A.draw(0.18))));
  P.push(icon("puzzle", CAT, ["piece", "jigsaw", "solve"],
    path("M8.2 3.6h7.6v3a2.2 2.2 0 1 0 4.4 0v3H18a2.2 2.2 0 1 0 0 4.4h1.8v3h-7.6", A.draw()) +
    path("M8.2 3.6v7.2a2.2 2.2 0 1 1-4.4 0v3H5.6a2.2 2.2 0 1 0 0 4.4H3.8v2.4h7.6", A.draw(0.1))));
  P.push(icon("trophy", CAT, ["award", "win", "champion"],
    path("M8 3.6h8v5a4 4 0 0 1-8 0Z", A.draw()) + path("M8 5.2H5.2a2.4 2.4 0 0 0 2.4 4.4", A.draw(0.1)) +
    path("M16 5.2h2.8a2.4 2.4 0 0 1-2.4 4.4", A.draw(0.12)) + line(12, 12.6, 12, 16, A.draw(0.16)) +
    path("M8.2 19.8h7.6l-1.2-3.8H9.4Z", A.pop(0.2)) + line(6.4, 19.8, 17.6, 19.8, A.draw(0.22))));
  P.push(icon("medal", CAT, ["prize", "achievement", "ribbon"],
    circle(12, 14.4, 5.2, A.draw()) + path("M8.6 10 6 3.4l4 2.2L12 2.8l2 2.8 4-2.2-2.6 6.6", A.draw(0.1)) +
    star(12, 14.4, 2.6, A.pop(0.16))));
  P.push(icon("cards", CAT, ["playing cards", "poker", "game night"],
    rect(4.2, 6.4, 10.4, 13.2, 1.8, A.draw()) + path("M9.8 5.2 17 3.8a1.6 1.6 0 0 1 2 1.2l2.4 10.8a1.6 1.6 0 0 1-1.2 2l-6 1.2", A.draw(0.1)) +
    heart(A.pop(0.16), 9.4, 11.6, 0.34)));
  P.push(icon("chess-pawn", CAT, ["board game", "strategy", "move piece"],
    circle(12, 6.6, 2.8, A.pop()) + path("M9.4 10.4h5.2l1 3.4c-1.6.8-2.4 2-2.6 3.6h-2c-.2-1.6-1-2.8-2.6-3.6Z", A.draw(0.1)) +
    rect(7.4, 17.4, 9.2, 2.6, 1, A.pop(0.18))));
  P.push(icon("balloon", CAT, ["party", "celebrate", "fun"],
    path("M12 15.2c-3.4 0-5.6-2.6-5.6-5.8 0-3.6 2.4-6.2 5.6-6.2s5.6 2.6 5.6 6.2c0 3.2-2.2 5.8-5.6 5.8Z", A.draw()) +
    path("M10.8 15.2 12 16.8l1.2-1.6", A.pop(0.12)) + path("M12 16.8c-.8 1.4.8 2.2 0 3.6", A.draw(0.16))));
  P.push(icon("confetti", CAT, ["celebration", "party pop", "yay"],
    path("M4 20.4 12.4 12", A.draw()) + path("M12.4 12l2-5 2.4 2.2 3.4-3.4", A.draw(0.08)) +
    circle(19.4, 4.4, 1.85, A.pop(0.12)) + rect(15.2, 3, 3, 3, 0.8, A.pop(0.15)) +
    cross(20, 9.2, 1, A.pop(0.18)) + cross(16.8, 7.6, 0.9, A.pop(0.2)) +
    path("M6.4 16.6a2.4 2.4 0 0 0 2.4 2.4", A.draw(0.22))));
  P.push(icon("music-box", CAT, ["jukebox", "fun tunes", "party music"],
    rect(4, 4, 16, 16, 2.4, A.draw()) + circle(12, 12.6, 4, A.draw(0.1)) + circle(12, 12.6, 1.2, A.pop(0.14)) +
    line(7, 7.6, 9, 7.6, A.draw(0.18)) + circle(17, 7.6, 0.9, A.pop(0.2))));
}

/* ================= symbols & logic ================= */
{
  const CAT = "symbols";
  P.push(icon("question", CAT, ["ask", "unknown", "help mark"], path("M8.2 8.6a3.9 3.9 0 0 1 7.6 1c0 2.5-3.6 3.1-3.6 5.7", A.draw()) + circle(12, 18, 1.85, A.pop(0.12))));
  P.push(icon("exclamation", CAT, ["important mark", "alert mark", "bang"], rect(10.7, 4.6, 2.6, 8.8, 1.3, A.draw()) + circle(12, 17.8, 1.6, A.pop(0.12))));
  P.push(icon("at", CAT, ["mention mark", "email mark", "handle"], circle(12, 12, 3.4, A.draw()) + path("M15.4 12v1.4a2.6 2.6 0 0 0 5 1A8.6 8.6 0 1 0 17 19.4", A.draw(0.1))));
  P.push(icon("ampersand", CAT, ["and", "join", "link mark"], path("M15.2 9.2a3.4 3.4 0 1 0-5.8 2.4L15.6 18a3.4 3.4 0 1 0 2.8-5.4c-1.8.2-3.6-.4-5.2-1.6", A.draw())));
  P.push(icon("paragraph", CAT, ["text block", "pilcrow", "writing"], path("M13.4 4.2h3.2M13.4 4.2v15.6M13.4 4.2c-3.6 0-6.4 2.8-6.4 6.2s2.8 6.2 6.4 6.2", A.draw()) + line(6.6, 19.8, 18, 19.8, A.draw(0.12))));
  P.push(icon("copyright", CAT, ["rights", "reserved", "legal"], circle(12, 12, 8.6, A.draw()) + path("M14.8 9.4a3.4 3.4 0 1 0 0 5.2", A.draw(0.12))));
  P.push(icon("registered", CAT, ["trademark", "r mark", "brand"], circle(12, 12, 8.6, A.draw()) + path("M9.4 16.6v-9h3a2.4 2.4 0 0 1 0 4.8H9.4", A.draw(0.12))));
  P.push(icon("degree", CAT, ["temperature mark", "angle", "circle small"], circle(8.2, 7.2, 2.4, A.draw()) + line(8.2, 12.4, 8.2, 19.6, A.draw(0.12)) + line(8.2, 16, 15.8, 12.6, A.draw(0.16)) + line(8.2, 12.4, 15.8, 19.6, A.draw(0.2))));
  P.push(icon("brackets-round", CAT, ["parentheses", "group", "enclose"], path("M8.2 3.6C6 6 5.2 8.6 5.2 12s.8 6 3 8.4", A.draw()) + path("M15.8 3.6c2.2 2.4 3 5 3 8.4s-.8 6-3 8.4", A.draw(0.1))));
  P.push(icon("arrows-expand", CAT, ["grow frame", "scale out", "bigger"], path("M4 10V4h6M20 10V4h-6M4 14v6h6M20 14v6h-6", A.draw())));
}

export default P;
