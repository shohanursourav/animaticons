// Files, folders, editing, typography, mail & shipping.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
  folder, fileGlyph, envelope,
} from "../dsl.mjs";

const P = [];

/* ================= files & folders ================= */
{
  const CAT = "files";
  const body = (extra) => fileGlyph(5, 3, 14, 18, extra);
  P.push(icon("file", CAT, ["document", "page"], body(A.draw())));
  P.push(icon("file-text", CAT, ["document lines", "page", "notes"],
    body(A.draw()) + line(8.2, 11, 15.8, 11, A.draw(0.1)) + line(8.2, 14.5, 13.6, 14.5, A.draw(0.14))));
  P.push(icon("file-plus", CAT, ["new document", "add"], body(A.draw()) + plus(17.8, 17.8, 2.6, A.pop(0.12))));
  P.push(icon("file-check", CAT, ["approved document", "done"], body(A.draw()) + check(15.4, 18, 4.8, A.pop(0.12))));
  P.push(icon("file-x", CAT, ["rejected document", "remove"], body(A.draw()) + cross(17.8, 17.8, 2.2, A.pop(0.12))));
  P.push(icon("file-up", CAT, ["upload document", "import"], body(A.draw()) + polyline("15.2,20.4 17.8,17.6 20.4,20.4", A.pop(0.12)) + line(17.8, 17.8, 17.8, 13.6, A.draw(0.14))));
  P.push(icon("file-down", CAT, ["download document", "export"], body(A.draw()) + polyline("15.2,15.2 17.8,18 20.4,15.2", A.pop(0.12)) + line(17.8, 13.4, 17.8, 18, A.draw(0.14))));

  const fold = (extra) => folder(3, 5, 18, 14, extra);
  P.push(icon("folder", CAT, ["directory", "collection"], fold(A.draw())));
  P.push(icon("folder-open", CAT, ["directory open", "browse"],
    path("M3 17.5V6.6a1.6 1.6 0 0 1 1.6-1.6H9l2.2 2.6h8.2A1.6 1.6 0 0 1 21 9.2v1.4", A.draw()) +
    path("M3.2 19.2l2.2-6.4a1.6 1.6 0 0 1 1.5-1.1h13.4a1 1 0 0 1 .95 1.3l-2 6.2a1.6 1.6 0 0 1-1.5 1.1H4.7a1.5 1.5 0 0 1-1.5-1.1Z", A.draw(0.08))));
  P.push(icon("folder-plus", CAT, ["new folder", "add"], fold(A.draw()) + plus(18.2, 18.4, 2.6, A.pop(0.12))));
  P.push(icon("folder-check", CAT, ["folder done", "complete"], fold(A.draw()) + check(15.8, 18.6, 4.6, A.pop(0.12))));
  P.push(icon("folder-heart", CAT, ["favorite folder", "loved"], fold(A.draw()) + heart(A.pop(0.12), 18.2, 18.2, 0.34)));

  P.push(icon("copy", CAT, ["duplicate", "clone"],
    rect(8.5, 8.5, 11, 11, 2.2, A.draw()) + path("M5.5 15.5h-1a1.8 1.8 0 0 1-1.8-1.8V5.3a1.8 1.8 0 0 1 1.8-1.8h8.4a1.8 1.8 0 0 1 1.8 1.8v1", A.draw(0.1))));
  P.push(icon("clipboard", CAT, ["paste", "copy to"],
    path("M9 4.5H7.5A1.8 1.8 0 0 0 5.7 6.3v12.2a1.8 1.8 0 0 0 1.8 1.8h9a1.8 1.8 0 0 0 1.8-1.8V6.3a1.8 1.8 0 0 0-1.8-1.8H15", A.draw()) +
    rect(9, 3, 6, 3.2, 1.2, A.pop(0.1))));
  P.push(icon("clipboard-check", CAT, ["task done", "accepted"], 
    path("M9 4.5H7.5A1.8 1.8 0 0 0 5.7 6.3v12.2a1.8 1.8 0 0 0 1.8 1.8h9a1.8 1.8 0 0 0 1.8-1.8V6.3a1.8 1.8 0 0 0-1.8-1.8H15", A.draw()) +
    rect(9, 3, 6, 3.2, 1.2, A.pop(0.1)) + polyline("8.8,13.8 11,16.2 15.4,11.4", A.pop(0.14))));
  P.push(icon("clipboard-list", CAT, ["tasks", "checklist"],
    path("M9 4.5H7.5A1.8 1.8 0 0 0 5.7 6.3v12.2a1.8 1.8 0 0 0 1.8 1.8h9a1.8 1.8 0 0 0 1.8-1.8V6.3a1.8 1.8 0 0 0-1.8-1.8H15", A.draw()) +
    rect(9, 3, 6, 3.2, 1.2, A.pop(0.1)) + line(9.2, 11, 14.8, 11, A.draw(0.14)) + line(9.2, 14.2, 14.8, 14.2, A.draw(0.17)) + line(9.2, 17.4, 12.6, 17.4, A.draw(0.2))));

  P.push(icon("save", CAT, ["floppy", "store", "keep"],
    path("M5.5 4.5h10.2L19.5 8.3v10.2a1.8 1.8 0 0 1-1.8 1.8H6.3a1.8 1.8 0 0 1-1.8-1.8V6.3a1.8 1.8 0 0 1 1.8-1.8Z", A.draw()) +
    path("M8.2 4.5v4.6h6.4V4.5", A.draw(0.1)) + rect(8, 13.2, 8, 5.2, 1, A.pop(0.16))));
  P.push(icon("download", CAT, ["save to disk", "get"],
    line(12, 4.2, 12, 14.4, A.draw()) + polyline("7.6,10.2 12,14.6 16.4,10.2", A.pop(0.1)) +
    path("M4.5,16.4 v1.9 a2 2 0 0 0 2 2 h11 a2 2 0 0 0 2-2 v-1.9", A.draw(0.14))));
  P.push(icon("upload", CAT, ["send up", "publish"],
    line(12, 19.8, 12, 9.6, A.draw()) + polyline("7.6,13.8 12,9.4 16.4,13.8", A.pop(0.1)) +
    path("M4.5,7.6 v-1.9 a2 2 0 0 1 2-2 h11 a2 2 0 0 1 2 2 v1.9", A.draw(0.14))));
  P.push(icon("archive", CAT, ["box store", "vault"],
    rect(4, 4.5, 16, 4.4, 1.4, A.pop()) + path("M5.4 8.9v8.6a2 2 0 0 0 2 2h9.2a2 2 0 0 0 2-2V8.9", A.draw(0.1)) +
    line(9.8, 12.6, 14.2, 12.6, A.draw(0.16))));
  P.push(icon("trash", CAT, ["delete", "remove", "bin"],
    path("M4.6 6.6h14.8", A.draw()) + path("M8.2 6.6V5.2a1.6 1.6 0 0 1 1.6-1.6h4.4a1.6 1.6 0 0 1 1.6 1.6v1.4", A.draw(0.06)) +
    path("M6.4 6.6l.9 12.1a1.8 1.8 0 0 0 1.8 1.7h5.8a1.8 1.8 0 0 0 1.8-1.7l.9-12.1", A.draw(0.1)) +
    line(10.2, 10.4, 10.2, 16.8, A.draw(0.16)) + line(13.8, 10.4, 13.8, 16.8, A.draw(0.19))));
  P.push(icon("paperclip", CAT, ["attach", "attachment"],
    path("M18.4 11.2 12 17.6a3.7 3.7 0 0 1-5.2-5.2l7-7a2.6 2.6 0 0 1 3.7 3.7l-7 7a1.5 1.5 0 0 1-2.1-2.1l6.4-6.4", A.draw())));
  P.push(icon("bookmark", CAT, ["save mark", "flag", "tag"],
    path("M7 3.8h10a1.6 1.6 0 0 1 1.6 1.6v15L12 16.2 5.4 20.4V5.4A1.6 1.6 0 0 1 7 3.8Z", A.draw())));
  P.push(icon("sticky-note", CAT, ["memo", "post it", "note"],
    path("M4.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8.2l-5.8 5.8H6.5a2 2 0 0 1-2-2Z", A.draw()) +
    path("M13.7 19.5v-4a1.8 1.8 0 0 1 1.8-1.8h4", A.draw(0.12))));
  P.push(icon("book-open", CAT, ["read", "docs"],
    path("M12 6.8C10.4 5.4 8 4.8 4.5 4.8v13c3.5 0 5.9.6 7.5 2 1.6-1.4 4-2 7.5-2v-13c-3.5 0-5.9.6-7.5 2Z", A.draw()) +
    line(12, 7, 12, 19.6, A.draw(0.12))));
  P.push(icon("book", CAT, ["library", "read", "volume"],
    path("M6.5 3.6h11a1.8 1.8 0 0 1 1.8 1.8v13.2a1.8 1.8 0 0 1-1.8 1.8h-11", A.draw()) +
    path("M6.5 3.6a1.8 1.8 0 0 0-1.8 1.8v13.2a1.8 1.8 0 0 0 1.8 1.8", A.draw(0.08)) +
    line(8.8, 8, 15, 8, A.draw(0.14))));
  P.push(icon("layers", CAT, ["stack", "sheets", "copies"],
    path("M12 3.6 3.4 8 12 12.4 20.6 8Z", A.draw()) + path("M3.4 12.6 12 17l8.6-4.4", A.draw(0.1)) + path("M3.4 16.8 12 21.2l8.6-4.4", A.draw(0.16))));
  P.push(icon("stack", CAT, ["pile", "layers", "queue"],
    rect(7.5, 3.5, 9, 4, 1.4, A.pop()) + rect(7.5, 10, 9, 4, 1.4, A.pop(0.1)) + rect(7.5, 16.5, 9, 4, 1.4, A.pop(0.2))));
  P.push(icon("inbox", CAT, ["receive", "mailbox"],
    path("M3.5 13.4 6 5.8a1.8 1.8 0 0 1 1.7-1.2h8.6A1.8 1.8 0 0 1 18 5.8l2.5 7.6", A.draw()) +
    path("M3.5 13.4v4.6a1.8 1.8 0 0 0 1.8 1.8h13.4a1.8 1.8 0 0 0 1.8-1.8v-4.6h-5l-1 2.2h-5l-1-2.2Z", A.draw(0.08))));
  P.push(icon("outbox", CAT, ["send", "dispatch"],
    path("M3.5 13.4 6 5.8a1.8 1.8 0 0 1 1.7-1.2h8.6A1.8 1.8 0 0 1 18 5.8l2.5 7.6", A.draw()) +
    path("M3.5 13.4v4.6a1.8 1.8 0 0 0 1.8 1.8h13.4a1.8 1.8 0 0 0 1.8-1.8v-4.6h-5l-1 2.2h-5l-1-2.2Z", A.draw(0.08)) +
    line(12, 15.8, 12, 8.6, A.draw(0.16)) + polyline("9.6,11 12,8.4 14.4,11", A.pop(0.18))));
  P.push(icon("package", CAT, ["box", "parcel", "ship"],
    path("M12 3.2 3.6 7.4v9.2L12 20.8l8.4-4.2V7.4Z", A.draw()) +
    path("M3.8 7.6 12 11.8l8.2-4.2", A.draw(0.1)) + path("M12 11.8v9", A.draw(0.14)) +
    path("M7.8 5.2 16.2 9.6", A.draw(0.18))));
  P.push(icon("box", CAT, ["container", "carton"],
    rect(4, 7.2, 16, 12.6, 2, A.draw()) + line(4, 11, 20, 11, A.draw(0.1)) + line(12, 7.4, 12, 20, A.draw(0.14))));
}

/* ================= editing & type ================= */
{
  const CAT = "editing";
  P.push(icon("pen", CAT, ["write", "edit", "draw"],
    path("M4.5 19.5l1-4 10-10a2.1 2.1 0 0 1 3 3l-10 10Z", A.draw()) + line(13.2, 7.8, 16.2, 10.8, A.draw(0.12))));
  P.push(icon("pencil", CAT, ["write", "edit note"],
    path("M5 19l.9-3.6L15.4 5.9a1.8 1.8 0 0 1 2.6 0l1.1 1.1a1.8 1.8 0 0 1 0 2.6L9.6 19.1Z", A.draw()) +
    line(13.6, 7.2, 16.8, 10.4, A.draw(0.12))));
  P.push(icon("eraser", CAT, ["remove ink", "clear"],
    path("M8.2 19.6 4.4 15.8a1.8 1.8 0 0 1 0-2.6l8.4-8.4a1.8 1.8 0 0 1 2.6 0l4.8 4.8a1.8 1.8 0 0 1 0 2.6l-7.2 7.2Z", A.draw()) +
    line(8.2, 7.4, 16.4, 15.6, A.draw(0.1)) + line(8, 19.6, 19.4, 19.6, A.draw(0.16))));
  P.push(icon("highlighter", CAT, ["marker", "emphasize"],
    path("M6.2 14.2l6.4-8.4a2 2 0 0 1 2.8-.5l2.6 1.8a2 2 0 0 1 .5 2.9l-5.4 7.2H8.6Z", A.draw()) +
    path("M6.4 14.2h6.2v2.2a1.8 1.8 0 0 1-1.8 1.8H8.2a1.8 1.8 0 0 1-1.8-1.8Z", A.draw(0.12))));
  P.push(icon("crop", CAT, ["trim", "frame"],
    path("M6.2 2.8v13.6a1.6 1.6 0 0 0 1.6 1.6h13.4", A.draw()) +
    path("M2.8 6.2h13.6a1.6 1.6 0 0 1 1.6 1.6v13.4", A.draw(0.08))));
  P.push(icon("scissors", CAT, ["cut", "snip"],
    circle(6.4, 6.4, 2.6, A.pop()) + circle(6.4, 17.6, 2.6, A.pop(0.08)) +
    line(8.5, 7.6, 19.6, 18.2, A.draw(0.12)) + line(8.5, 16.4, 19.6, 5.8, A.draw(0.16))));
  P.push(icon("paintbrush", CAT, ["brush", "art"],
    path("M14.2 4.4 19.6 9.8 12.4 17l-4-4Z", A.draw()) +
    path("M8.4 13l-2.2 2.2c-.9.9-1 2.2-.6 3.4.5 1.4-.7 2.6-2.1 2.4 2 1.6 4.8 1.4 6.3-.1.9-.9.9-2.2 0-3.1Z", A.draw(0.12))));
  P.push(icon("palette", CAT, ["colors", "design", "art"],
    path("M12 3.4a8.6 8.6 0 0 0 0 17.2c1.3 0 2-1 1.6-2-.6-1.6.5-2.8 2.2-2.8h1.7a2.7 2.7 0 0 0 2.7-2.7c0-4.7-3.7-8.5-8.2-8.5Z", A.draw()) +
    circle(8.2, 10, 1.15, A.pop(0.12)) + circle(11.8, 7.4, 1.15, A.pop(0.16)) + circle(16, 8.8, 1.15, A.pop(0.2)) + circle(7.6, 14.2, 1.15, A.pop(0.24))));
  P.push(icon("eyedropper", CAT, ["pick color", "sample"],
    path("M4.2 19.8l.9-3.3 8-8a2.1 2.1 0 0 1 3 3l-8 8Z", A.draw()) +
    path("M12.8 7.2l3.2 3.2", A.draw(0.1)) + path("M15.6 3.2a2.4 2.4 0 0 1 3.4 3.4l-1.8 1.8-3.4-3.4Z", A.pop(0.14))));
  P.push(icon("stamp", CAT, ["imprint", "mark", "official"],
    path("M9.2 4.6a2.8 2.8 0 0 1 5.6 0c0 2.2-1.1 3-1.1 4.8h-3.4c0-1.8-1.1-2.6-1.1-4.8Z", A.draw()) +
    rect(7, 12.2, 10, 3, 1.2, A.pop(0.1)) + rect(5, 17.4, 14, 3, 1.2, A.pop(0.16)) + line(12, 9.6, 12, 12.2, A.draw(0.14))));
  P.push(icon("ruler", CAT, ["measure", "size"],
    rect(3.4, 8.2, 17.2, 7.6, 1.8, A.draw()) +
    [6.4, 9.4, 12.4, 15.4, 18.4].map((x, i) => line(x, 8.2, x, i % 2 === 0 ? 12.4 : 10.8, A.draw(0.06 + i * 0.02))).join("")));
  P.push(icon("compass", CAT, ["navigate", "direction tool"],
    circle(12, 12, 8.6, A.draw()) + path("M15.2 8.8l-2 5.2-5.2 2 2-5.2Z", A.pop(0.12))));
  P.push(icon("shapes", CAT, ["forms", "geometry", "design"],
    circle(7.6, 7.6, 4, A.pop()) + rect(12.2, 12.2, 8.2, 8.2, 1.4, A.pop(0.1)) + polygon("16.2,3.6 20.4,10.6 12,10.6", A.pop(0.2))));
  P.push(icon("type", CAT, ["text", "font", "typography"],
    polyline("6,7 12,5.4 18,7", A.draw()) + line(12, 5.6, 12, 18.4, A.draw(0.1)) + line(8.8, 18.4, 15.2, 18.4, A.draw(0.14))));
  P.push(icon("type-bold", CAT, ["strong", "heading"],
    path("M8 5.5h4.6a3.2 3.2 0 0 1 0 6.4H8Z", A.draw()) + path("M8 11.9h5.4a3.3 3.3 0 0 1 0 6.6H8Z", A.draw(0.1))));
  P.push(icon("type-italic", CAT, ["emphasis", "slant"],
    line(10, 5.4, 16, 5.4, A.draw()) + line(8, 18.6, 14, 18.6, A.draw(0.08)) + line(13.6, 5.4, 10.4, 18.6, A.draw(0.12))));
  P.push(icon("underline", CAT, ["emphasis", "text"],
    path("M7 4.2v6.4a5 5 0 0 0 10 0V4.2", A.draw()) + line(5.6, 20, 18.4, 20, A.draw(0.12))));
  P.push(icon("strikethrough", CAT, ["cross out", "cancel text"],
    path("M16.4 6.6c-.7-1.5-2.3-2.4-4.2-2.4-2.5 0-4.4 1.3-4.4 3.2 0 1.3.8 2.2 2.4 2.8", A.draw()) +
    line(5, 12, 19, 12, A.draw(0.1)) + path("M8.4 13.8c0 2.4 1.9 4 4.2 4 2.3 0 3.9-1.1 4.2-2.9", A.draw(0.14))));
  P.push(icon("align-left", CAT, ["text align", "paragraph"],
    line(4, 6.5, 20, 6.5, A.draw()) + line(4, 10.5, 14, 10.5, A.draw(0.06)) + line(4, 14.5, 20, 14.5, A.draw(0.1)) + line(4, 18.5, 12, 18.5, A.draw(0.14))));
  P.push(icon("align-center", CAT, ["text align", "paragraph"],
    line(4, 6.5, 20, 6.5, A.draw()) + line(7, 10.5, 17, 10.5, A.draw(0.06)) + line(4, 14.5, 20, 14.5, A.draw(0.1)) + line(8, 18.5, 16, 18.5, A.draw(0.14))));
  P.push(icon("align-right", CAT, ["text align", "paragraph"],
    line(4, 6.5, 20, 6.5, A.draw()) + line(10, 10.5, 20, 10.5, A.draw(0.06)) + line(4, 14.5, 20, 14.5, A.draw(0.1)) + line(12, 18.5, 20, 18.5, A.draw(0.14))));
  P.push(icon("align-justify", CAT, ["text align", "paragraph"],
    line(4, 6.5, 20, 6.5, A.draw()) + line(4, 10.5, 20, 10.5, A.draw(0.06)) + line(4, 14.5, 20, 14.5, A.draw(0.1)) + line(4, 18.5, 20, 18.5, A.draw(0.14))));
  P.push(icon("list", CAT, ["bullet points", "items"],
    circle(5, 7, 1.15, A.pop()) + line(8.6, 7, 20, 7, A.draw(0.06)) +
    circle(5, 12, 1.15, A.pop(0.08)) + line(8.6, 12, 20, 12, A.draw(0.1)) +
    circle(5, 17, 1.15, A.pop(0.16)) + line(8.6, 17, 20, 17, A.draw(0.14))));
  P.push(icon("list-ordered", CAT, ["numbered", "items"],
    line(9, 6, 20, 6, A.draw()) + line(9, 12, 20, 12, A.draw(0.06)) + line(9, 18, 20, 18, A.draw(0.1)) +
    path("M4,4.4 5.6,4v4", A.draw(0.12)) + path("M4,10.6h2l-2,2.6h2.2", A.draw(0.15)) + path("M4,16.2h1.8l-1.4,1.6a1.2 1.2 0 1 1-.8,2", A.draw(0.18))));
  P.push(icon("indent", CAT, ["align in", "paragraph"],
    line(10, 6.5, 20, 6.5, A.draw()) + line(10, 12, 20, 12, A.draw(0.06)) + line(10, 17.5, 20, 17.5, A.draw(0.1)) +
    polyline("4,8.4 7,11 4,13.6", A.pop(0.14)) + line(4.2, 11, 7.8, 11, A.draw(0.16))));
  P.push(icon("outdent", CAT, ["align out", "paragraph"],
    line(10, 6.5, 20, 6.5, A.draw()) + line(10, 12, 20, 12, A.draw(0.06)) + line(10, 17.5, 20, 17.5, A.draw(0.1)) +
    polyline("7,8.4 4,11 7,13.6", A.pop(0.14)) + line(4.2, 11, 7.8, 11, A.draw(0.16))));
  P.push(icon("quote", CAT, ["citation", "blockquote"],
    path("M9.6 6.4c-3 1-4.8 3.4-4.8 6.6v4.6h5.4v-5.2H7.4c0-2 .8-3.4 2.6-4.2Z", A.draw()) +
    path("M19 6.4c-3 1-4.8 3.4-4.8 6.6v4.6h5.4v-5.2h-2.8c0-2 .8-3.4 2.6-4.2Z", A.draw(0.12))));
}

/* ================= mail & shipping ================= */
{
  const CAT = "mail";
  P.push(icon("mail", CAT, ["email", "envelope", "letter"], envelope(3.5, 5.5, 17, 13, A.draw())));
  P.push(icon("mail-open", CAT, ["email open", "read"],
    path("M3.4 10.2 12 4.2l8.6 6v8.2a1.8 1.8 0 0 1-1.8 1.8H5.2a1.8 1.8 0 0 1-1.8-1.8Z", A.draw()) +
    path("M3.6 10.4 12 15.6l8.4-5.2", A.draw(0.1))));
  P.push(icon("mail-plus", CAT, ["new email", "compose"], envelope(3.5, 5.5, 17, 13, A.draw()) + plus(18.6, 18.6, 2.4, A.pop(0.14))));
  P.push(icon("mail-check", CAT, ["email sent", "delivered"], envelope(3.5, 5.5, 17, 13, A.draw()) + check(15.8, 18.8, 4.6, A.pop(0.14))));
  P.push(icon("send", CAT, ["paper plane", "dispatch", "message"],
    path("M20.6 3.4 3.8 10.2l6.4 2.6 2.6 6.4Z", A.draw()) + path("M20.6 3.4 10.2 12.8", A.draw(0.12))));
  P.push(icon("send-horizontal", CAT, ["mail sent", "share right"],
    path("M3.4 12h14.2", A.draw()) + polyline("12.6,6.6 18,12 12.6,17.4", A.pop(0.1)) + circle(20, 12, 1.6, A.pop(0.16))));
  P.push(icon("at-sign", CAT, ["mention", "email handle"],
    circle(12, 12, 3.6, A.draw()) + path("M15.6 12v1.6a2.8 2.8 0 0 0 5.2 1.2A9 9 0 1 0 17 19.2", A.draw(0.1))));
  P.push(icon("rss", CAT, ["feed", "subscribe", "broadcast"],
    circle(5.6, 18.4, 1.35, A.pop()) + path("M4.2 11.2a8.6 8.6 0 0 1 8.6 8.6", A.draw(0.08)) + path("M4.2 5.4a14.4 14.4 0 0 1 14.4 14.4", A.draw(0.14))));
  P.push(icon("mailbox", CAT, ["post box", "letters"],
    path("M4 12.5a6 6 0 0 1 6-6h8.6a1.8 1.8 0 0 1 1.8 1.8v8.4a1.8 1.8 0 0 1-1.8 1.8H6a2 2 0 0 1-2-2Z", A.draw()) +
    path("M10 6.5v12", A.draw(0.1)) + line(13.4, 10, 18, 10, A.draw(0.14)) + path("M10 12.5H5.6a2 2 0 0 0 0 4H8", A.draw(0.18))));
  P.push(icon("shipping-box", CAT, ["delivery", "parcel"],
    path("M3.4 8.2 12 4l8.6 4.2v7.6L12 20l-8.6-4.2Z", A.draw()) + path("M3.6 8.2 12 12.4l8.4-4.2", A.draw(0.1)) +
    line(12, 12.4, 12, 20, A.draw(0.14))));
  P.push(icon("truck", CAT, ["delivery", "transport", "shipping"],
    path("M2.8 6.8h11.4v9.4H2.8Z", A.draw()) + path("M14.2 10h3.4l3 3.2v3h-6.4Z", A.draw(0.08)) +
    circle(7, 18, 2, A.pop(0.14)) + circle(17.4, 18, 2, A.pop(0.18))));
  P.push(icon("plane", CAT, ["flight", "send fast", "airmail"],
    path("M20.6 3.4 10 14", A.draw()) + path("M20.6 3.4l-6.8 17.2-3.8-6.6-6.6-3.8Z", A.draw(0.08))));
  P.push(icon("return", CAT, ["reply back", "arrow back"],
    path("M9 6.4 4.6 10.8 9 15.2", A.draw()) + path("M4.8 10.8h9.6a4.8 4.8 0 0 1 0 9.6h-3.2", A.draw(0.1))));
}

export default P;
