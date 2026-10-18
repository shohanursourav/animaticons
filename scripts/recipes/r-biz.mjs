// Shopping, money, charts, security, coding, data & storage.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
  lockBody, lockShackle,
} from "../dsl.mjs";

const P = [];

/* ================= shopping ================= */
{
  const CAT = "shopping";
  P.push(icon("cart", CAT, ["shop", "buy", "basket"],
    path("M3.2 4.8h2.4l2.2 10.4h9.8l2-7.4H6.4", A.draw()) + circle(9, 19, 1.6, A.pop(0.12)) + circle(16.2, 19, 1.6, A.pop(0.16))));
  P.push(icon("cart-plus", CAT, ["add to cart", "buy more"],
    path("M3.2 4.8h2.4l2.2 10.4h9.8l2-7.4H6.4", A.draw()) + circle(9, 19, 1.6, A.pop(0.12)) + circle(16.2, 19, 1.6, A.pop(0.16)) +
    plus(17.8, 5.4, 2.2, A.pop(0.2))));
  P.push(icon("cart-check", CAT, ["checkout", "order placed"],
    path("M3.2 4.8h2.4l2.2 10.4h9.8l2-7.4H6.4", A.draw()) + circle(9, 19, 1.6, A.pop(0.12)) + circle(16.2, 19, 1.6, A.pop(0.16)) +
    check(15.2, 5.6, 4.4, A.pop(0.2))));
  P.push(icon("bag", CAT, ["shopping bag", "store", "purchase"],
    path("M5.4 7.8h13.2l-1 11.2a1.8 1.8 0 0 1-1.8 1.6H8.2a1.8 1.8 0 0 1-1.8-1.6Z", A.draw()) +
    path("M8.2 7.8V6.4a3.8 3.8 0 0 1 7.6 0v1.4", A.draw(0.12))));
  P.push(icon("bag-plus", CAT, ["new purchase", "add to bag"],
    path("M5.4 7.8h13.2l-1 11.2a1.8 1.8 0 0 1-1.8 1.6H8.2a1.8 1.8 0 0 1-1.8-1.6Z", A.draw()) +
    path("M8.2 7.8V6.4a3.8 3.8 0 0 1 7.6 0v1.4", A.draw(0.1)) + plus(18.6, 5.2, 2.2, A.pop(0.18))));
  P.push(icon("bag-heart", CAT, ["wishlist", "loved item", "gift"],
    path("M5.4 7.8h13.2l-1 11.2a1.8 1.8 0 0 1-1.8 1.6H8.2a1.8 1.8 0 0 1-1.8-1.6Z", A.draw()) +
    path("M8.2 7.8V6.4a3.8 3.8 0 0 1 7.6 0v1.4", A.draw(0.1)) + heart(A.pop(0.18), 18.4, 5.4, 0.32)));
  P.push(icon("tag", CAT, ["price tag", "label", "sale"],
    path("M3.8 4.8h8.4l8 8-7.6 7.6-8-8Z", A.draw()) + circle(8, 8.8, 1.4, A.pop(0.12))));
  P.push(icon("tags", CAT, ["labels", "price tags", "category"],
    path("M2.8 3.8h7.4l7.8 7.8-6.6 6.6-7.8-7.8Z", A.draw()) + circle(6.6, 7.6, 1.2, A.pop(0.1)) +
    path("M12.6 3.8h7.4v7.4l-3 3", A.draw(0.14)) + circle(17, 7, 1, A.pop(0.18))));
  P.push(icon("receipt", CAT, ["invoice", "bill", "proof of purchase"],
    path("M5.2 3.6h13.6v17.2l-2.2-1.5-2.3 1.5-2.3-1.5-2.3 1.5-2.3-1.5-2.2 1.5Z", A.draw()) +
    line(8.4, 8.4, 15.6, 8.4, A.draw(0.12)) + line(8.4, 12, 15.6, 12, A.draw(0.15))));
  P.push(icon("coupon", CAT, ["discount", "voucher", "promo"],
    path("M3.2 7.2a1.6 1.6 0 0 0 1.6-1.6h14.4a1.6 1.6 0 0 0 1.6 1.6v2a2.2 2.2 0 0 0 0 4.4v2a1.6 1.6 0 0 0-1.6 1.6H4.8a1.6 1.6 0 0 0-1.6-1.6v-2a2.2 2.2 0 0 0 0-4.4Z", A.draw()) +
    line(12, 8.2, 12, 14.6, A.draw(0.12), 0) + path("M10 12.4h4", A.draw(0.16))));
  P.push(icon("gift", CAT, ["present", "reward", "bonus"],
    rect(3.6, 8.2, 16.8, 4, 1.2, A.pop()) + path("M5.4 12.2v6.2a1.8 1.8 0 0 0 1.8 1.8h9.6a1.8 1.8 0 0 0 1.8-1.8v-6.2", A.draw(0.1)) +
    line(12, 8.2, 12, 20.2, A.draw(0.14)) + path("M12 8.2C10.4 4.4 6.8 3.6 6 5.4c-.7 1.7 1.6 2.8 6 2.8Z", A.draw(0.18)) +
    path("M12 8.2c1.6-3.8 5.2-4.6 6-2.8.7 1.7-1.6 2.8-6 2.8Z", A.draw(0.2))));
  P.push(icon("store", CAT, ["shop front", "market", "seller"],
    path("M4.2 9.2h15.6v9.2a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8Z", A.draw()) +
    path("M3.2 9.2 5 4.4h14l1.8 4.8", A.draw(0.1)) + path("M9.2 20.2v-5.6h5.6v5.6", A.draw(0.16))));
  P.push(icon("barcode", CAT, ["scan item", "sku", "product code"],
    [4.2, 6.4, 8.2, 10.8, 12.8, 15, 17.4, 19.4].map((x, i) =>
      line(x, 5.4, x, 18.6, A.draw(0.02 * i), 0) && line(x, 5.4, x, 18.6, A.draw(0.02 * i))).join("")));
  P.push(icon("scan-barcode", CAT, ["checkout scan", "product scan"],
    path("M4 8.4V6.4a2 2 0 0 1 2-2h2", A.draw()) + path("M16 4.4h2a2 2 0 0 1 2 2v2", A.draw(0.05)) +
    path("M20 15.6v2a2 2 0 0 1-2 2h-2", A.draw(0.1)) + path("M8 19.6H6a2 2 0 0 1-2-2v-2", A.draw(0.15)) +
    [7.4, 9.6, 12, 14.4, 16.6].map((x, i) => line(x, 8, x, 16, A.draw(0.16 + 0.02 * i))).join("")));
  P.push(icon("wallet", CAT, ["payments", "money bag", "pocket"],
    path("M3.6 6.4a1.8 1.8 0 0 1 1.8-1.8h12.2a1.6 1.6 0 0 1 1.6 1.6", A.draw()) +
    rect(3.6, 6.4, 16.8, 13, 2, A.draw(0.06)) + circle(16.4, 13, 1.5, A.pop(0.14))));
}

/* ================= money & finance ================= */
{
  const CAT = "money";
  P.push(icon("coin", CAT, ["cash", "currency", "money"],
    circle(12, 12, 8.4, A.draw()) + path("M14.4 9.2c-.7-.8-1.6-1.2-2.8-1.2-1.7 0-2.8.8-2.8 2 0 1.3 1 1.8 2.8 2.2 1.8.4 2.8.9 2.8 2.2s-1.2 2-2.9 2c-1.2 0-2.2-.4-2.9-1.2", A.draw(0.12)) +
    line(12, 6.4, 12, 17.6, A.draw(0.16))));
  P.push(icon("banknote", CAT, ["bill", "cash", "payment"],
    rect(2.8, 6.2, 18.4, 11.6, 2, A.draw()) + circle(12, 12, 2.8, A.pop(0.1)) +
    circle(6.6, 12, 0.9, A.pop(0.14)) + circle(17.4, 12, 0.9, A.pop(0.17))));
  P.push(icon("credit-card", CAT, ["payment card", "checkout", "bank"],
    rect(2.8, 5.2, 18.4, 13.6, 2.2, A.draw()) + line(2.8, 9.4, 21.2, 9.4, A.draw(0.1)) +
    line(6.2, 14.6, 10.4, 14.6, A.draw(0.14))));
  P.push(icon("chart-bars", "charts", ["analytics", "stats", "growth"],
    line(4, 20, 20, 20, A.draw()) + rect(5.6, 12, 3.2, 8, 1, A.pop(0.1)) + rect(10.4, 8, 3.2, 12, 1, A.pop(0.15)) + rect(15.2, 4.8, 3.2, 15.2, 1, A.pop(0.2))));
  P.push(icon("chart-line", "charts", ["trend line", "analytics", "report"],
    path("M3.4 20V4", A.draw()) + path("M3.4 20h17.2", A.draw(0.06)) +
    polyline("6.2,16 10,11.6 13.2,13.6 18.4,6.6", A.draw(0.12)) + circle(18.4, 6.6, 1.85, A.pop(0.18))));
  P.push(icon("chart-pie", "charts", ["share", "breakdown", "analytics"],
    arc(12, 12, 8.2, -90, 150, A.draw()) + line(12, 3.8, 12, 12, A.draw(0.1)) +
    path("M12 12l7 4.2", A.draw(0.14)) + arc(12, 12, 8.2, -90, 40, A.draw(0.18))));
  P.push(icon("money-bag", CAT, ["savings", "wealth", "prize"],
    path("M9.2 3.8h5.6L13 7.4c3.8 1.6 6 4.4 6 7.4 0 3.8-3 5.8-7 5.8s-7-2-7-5.8c0-3 2.2-5.8 6-7.4Z", A.draw()) +
    line(9.4, 7.2, 14.6, 7.2, A.draw(0.12)) + path("M12 10.8v5.4M13.8 12.2c-.5-.6-1.1-.9-1.9-.9-1 0-1.7.5-1.7 1.2 0 .8.6 1.1 1.7 1.3s1.7.5 1.7 1.3c0 .7-.7 1.2-1.7 1.2-.8 0-1.4-.3-1.8-.8", A.draw(0.16))));
  P.push(icon("hand-coins", CAT, ["give money", "tips", "support"],
    path("M3.4 12.4l3.2-2.8a1.6 1.6 0 0 1 2.2 0l4 3.6", A.draw()) +
    path("M8.2 13.2l4 3.6a1.6 1.6 0 0 0 2.2 0l6-5.4", A.draw(0.08)) +
    circle(16.6, 6.6, 3, A.pop(0.12)) + path("M6.4 12.6 4 15a1.7 1.7 0 0 0 0 2.4l1.6 1.6a1.7 1.7 0 0 0 2.4 0l1-1", A.draw(0.16))));
  P.push(icon("safe", CAT, ["vault", "secure funds", "deposit"],
    rect(3, 4, 18, 16, 2, A.draw()) + circle(11, 12, 4.2, A.draw(0.1)) +
    line(11, 12, 11, 15.2, A.draw(0.14)) + line(3, 20, 3, 22, A.draw(0.18)) + line(21, 20, 21, 22, A.draw(0.2))));
  P.push(icon("exchange", CAT, ["transfer", "swap money", "trade"],
    path("M3.6 8.2h13.6l-3-3", A.draw()) + path("M20.4 15.8H6.8l3 3", A.draw(0.1))));
}

/* ================= security ================= */
{
  const CAT = "security";
  P.push(icon("lock", CAT, ["secure", "private", "locked"],
    lockBody(6, 11, 12, 9, A.draw()) + lockShackle(12, 11, 6.6, A.draw(0.12))));
  P.push(icon("lock-open", CAT, ["unlocked", "access", "open"],
    lockBody(6, 11, 12, 9, A.draw()) + path("M8.4 11V8a3.6 3.6 0 0 1 7-.8", A.draw(0.12))));
  P.push(icon("lock-plus", CAT, ["new lock", "protect", "secure add"],
    lockBody(5.2, 11, 11, 8.6, A.draw()) + lockShackle(10.7, 11, 6, A.draw(0.1)) + plus(18.4, 7.4, 2.2, A.pop(0.16))));
  P.push(icon("key", CAT, ["password", "access", "unlock"],
    circle(8, 12, 4.2, A.draw()) + line(11.4, 12, 20, 12, A.draw(0.1)) + line(16.4, 12, 16.4, 15.4, A.draw(0.14)) + line(19, 12, 19, 14.8, A.draw(0.18))));
  P.push(icon("key-round", CAT, ["password round", "access", "credentials"],
    circle(8, 12, 4.2, A.draw()) + line(11.4, 12, 20.2, 12, A.draw(0.1)) + polyline("16,12 16,15.6 18.6,15.6", A.draw(0.14))));
  P.push(icon("shield", CAT, ["protection", "guard", "defense"],
    path("M12 3.2 4.8 6v5.8c0 4.6 3 7.6 7.2 9 4.2-1.4 7.2-4.4 7.2-9V6Z", A.draw())));
  P.push(icon("fingerprint", CAT, ["biometric", "identity", "scan print"],
    path("M5 8.2a9.4 9.4 0 0 1 14.6 2", A.draw()) + path("M18.6 14.2a7 7 0 0 1-.4 3.4", A.draw(0.06)) +
    path("M6.2 15.6a5.4 5.4 0 0 1-.4-2.2c0-3.4 2.6-5.6 6.2-5.6 3 0 5.2 1.4 5.8 3.6", A.draw(0.1)) +
    path("M8.2 12.2a3.8 3.8 0 0 1 7.4 1c0 1.6-.2 3.2-.8 4.6", A.draw(0.14)) +
    path("M10.4 11.8a1.8 1.8 0 0 1 3.4 1c0 1.8-.3 3.6-1 5", A.draw(0.18))));
  P.push(icon("eye-scan", CAT, ["biometric eye", "verify", "recognition"],
    path("M3 12s3.4-5.4 9-5.4 9 5.4 9 5.4-3.4 5.4-9 5.4-9-5.4-9-5.4Z", A.draw()) +
    circle(12, 12, 2.4, A.pop(0.1)) + path("M7.2 4.6C8.2 3.6 9.8 3 12 3", A.draw(0.16)) +
    path("M16.8 4.6C15.8 3.6 14.2 3 12 3", A.draw(0.18))));
  P.push(icon("bug", CAT, ["virus", "error", "debug"],
    path("M8.2 9.2a3.8 3.8 0 0 1 7.6 0v4.6a3.8 3.8 0 0 1-7.6 0Z", A.draw()) +
    path("M8.2 11H5M8.2 14.4 5.2 16M15.8 11H19M15.8 14.4l3 1.6", A.draw(0.1)) +
    path("M9 5.4 10.6 7.2M15 5.4 13.4 7.2", A.draw(0.14)) + line(12, 5.2, 12, 9, A.draw(0.18))));
  P.push(icon("virus-off", CAT, ["malware blocked", "safe", "clean"],
    circle(12, 12, 3.2, A.draw()) + [0, 60, 120, 180, 240, 300].map((d, i) =>
      rot(line(12, 4.8, 12, 6.8, A.draw(0.04 * i)), d) + rot(circle(12, 3.6, 1.1, A.pop(0.05 * i)), d)).join("") +
    line(3.4, 3, 20.6, 21, A.draw(0.2))));
  P.push(icon("security-camera", CAT, ["cctv", "surveillance", "monitoring"],
    path("M3.8 6.2l12.6-2.6 1.2 5.6L5 11.8Z", A.draw()) + path("M5 11.8l-1.4 3.4 12.6-2.6 1.4-3.4", A.draw(0.1)) +
    path("M8 13.8 6.4 18.4", A.draw(0.16)) + circle(8.6, 5.4, 1, A.pop(0.2))));
  P.push(icon("door", CAT, ["entry", "exit", "room"],
    path("M5.2 20.4V4.8a1.6 1.6 0 0 1 1.4-1.6l8-1.2a1.6 1.6 0 0 1 1.8 1.6v16.8H5.2Z", A.draw()) +
    line(3.4, 20.4, 20.6, 20.4, A.draw(0.1)) + circle(13.4, 12, 0.9, A.pop(0.16))));
  P.push(icon("vault", CAT, ["safe box", "secure storage", "bank vault"],
    rect(2.8, 4.4, 18.4, 15.2, 2.2, A.draw()) + circle(12, 12, 4.6, A.draw(0.1)) +
    line(12, 12, 15, 9, A.draw(0.14)) + line(2.8, 8, 21.2, 8, A.draw(0.18))));
}

/* ================= coding & dev ================= */
{
  const CAT = "dev";
  P.push(icon("code", CAT, ["source", "brackets", "develop"],
    polyline("8.2,7 3.6,12 8.2,17", A.draw()) + polyline("15.8,7 20.4,12 15.8,17", A.draw(0.08)) + line(13.2, 5, 10.8, 19, A.draw(0.14))));
  P.push(icon("terminal", CAT, ["console", "shell", "command line"],
    rect(2.8, 4.2, 18.4, 15.6, 2.2, A.draw()) + polyline("6.4,8.6 10,11.6 6.4,14.6", A.pop(0.12)) + line(11.8, 14.6, 16.4, 14.6, A.draw(0.16))));
  P.push(icon("git-branch", CAT, ["version control", "fork", "merge"],
    circle(6.4, 5.4, 2, A.pop()) + circle(6.4, 18.6, 2, A.pop(0.08)) + circle(17.6, 8.4, 2, A.pop(0.12)) +
    path("M6.4 7.4v9.2", A.draw(0.14)) + path("M6.4 13c0-2.6 2-4.6 4.6-4.6h4.6", A.draw(0.18))));
  P.push(icon("git-commit", CAT, ["version control", "checkpoint", "snap"],
    circle(12, 12, 3.4, A.pop()) + line(3, 12, 8.4, 12, A.draw(0.1)) + line(15.6, 12, 21, 12, A.draw(0.14))));
  P.push(icon("git-merge", CAT, ["branch join", "merge", "history"],
    circle(6.4, 5.4, 2, A.pop()) + circle(6.4, 18.6, 2, A.pop(0.08)) + circle(17.6, 18.6, 2, A.pop(0.12)) +
    path("M6.4 7.4v9.2", A.draw(0.14)) + path("M6.4 11.4c0 4 2.8 7.2 9.2 7.2", A.draw(0.18))));
  P.push(icon("pull-request", CAT, ["merge request", "review", "contribute"],
    circle(6.4, 5.4, 2, A.pop()) + circle(6.4, 18.6, 2, A.pop(0.08)) + circle(17.6, 5.4, 2, A.pop(0.12)) +
    path("M6.4 7.4v9.2", A.draw(0.14)) + path("M17.6 7.4v5c0 3.4-2.6 6.2-6.2 6.2", A.draw(0.18))));
  P.push(icon("bug-off", CAT, ["no bugs", "clean build", "debugged"],
    path("M8.2 9.2a3.8 3.8 0 0 1 7.6 0v4.6a3.8 3.8 0 0 1-7.6 0Z", A.draw()) +
    path("M8.2 11H5M15.8 11H19", A.draw(0.1)) + path("M9 5.4 10.6 7.2M15 5.4 13.4 7.2", A.draw(0.14)) +
    line(3.4, 3, 20.6, 21, A.draw(0.18))));
  P.push(icon("braces", CAT, ["curly brackets", "object", "json"],
    path("M9.2 3.6c-2 0-2.6 1-2.6 3v2.8c0 1.4-.8 2.2-2.2 2.6 1.4.4 2.2 1.2 2.2 2.6v2.8c0 2 .6 3 2.6 3", A.draw()) +
    path("M14.8 3.6c2 0 2.6 1 2.6 3v2.8c0 1.4.8 2.2 2.2 2.6-1.4.4-2.2 1.2-2.2 2.6v2.8c0 2-.6 3-2.6 3", A.draw(0.1))));
  P.push(icon("brackets", CAT, ["array", "square brackets", "code group"],
    path("M8.4 4.6H6a1.6 1.6 0 0 0-1.6 1.6v11.6A1.6 1.6 0 0 0 6 19.4h2.4", A.draw()) +
    path("M15.6 4.6H18a1.6 1.6 0 0 1 1.6 1.6v11.6a1.6 1.6 0 0 1-1.6 1.6h-2.4", A.draw(0.1))));
  P.push(icon("binary-code", CAT, ["bits", "ones and zeros", "machine"],
    line(8, 5, 8, 19, A.draw()) + line(5.6, 5, 8, 5, A.draw(0.08)) + line(5.6, 19, 8, 19, A.draw(0.1)) +
    circle(15.2, 6.4, 1.85, A.pop(0.14)) + circle(15.2, 12, 1.85, A.pop(0.17)) + circle(15.2, 17.6, 1.85, A.pop(0.2))));
  P.push(icon("rocket", CAT, ["launch", "deploy", "ship it"],
    path("M12 2.6c3 2.2 4.8 5.8 4.8 10.2l-2 3.6H9.2l-2-3.6C7.2 8.4 9 4.8 12 2.6Z", A.draw()) +
    circle(12, 10, 1.8, A.pop(0.12)) + path("M9.2 16.4l-2.6 2.2.8-4M14.8 16.4l2.6 2.2-.8-4", A.draw(0.16)) +
    path("M10.4 19.6c.5 1.3 1.2 2 1.6 2.2.4-.2 1.1-.9 1.6-2.2", A.pop(0.2))));
  P.push(icon("package-open", CAT, ["unbox", "release", "module"],
    path("M3.4 7.6 12 3.6l8.6 4v8.8L12 20.4l-8.6-4Z", A.draw()) + path("M3.6 7.8 12 11.8l8.4-4", A.draw(0.1)) +
    path("M12 11.8v8.6", A.draw(0.14)) + path("M7.8 5.6 16.2 9.6", A.draw(0.18))));
  P.push(icon("wand", CAT, ["magic", "ai assist", "generate"],
    path("M4.2 20.2 14.8 9.6", A.draw()) + path("M15.8 8.6l2-2", A.draw(0.08)) +
    sparkle(17.6, 6, 2.6, A.pop(0.12)) + sparkle(20, 11.4, 1.5, A.pop(0.16)) + sparkle(13.4, 3.2, 1.5, A.pop(0.2))));
}

/* ================= data & storage ================= */
{
  const CAT = "storage";
  P.push(icon("database", CAT, ["data", "server store", "db"],
    ellipse(12, 5.8, 7.2, 2.8, A.draw()) + path("M4.8 5.8v12.4c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8V5.8", A.draw(0.1)) +
    path("M4.8 12c0 1.5 3.2 2.8 7.2 2.8s7.2-1.3 7.2-2.8", A.draw(0.16))));
  P.push(icon("server-stack", CAT, ["cluster", "hosting", "rack"],
    rect(3.6, 3.6, 16.8, 5.4, 1.6, A.pop()) + rect(3.6, 10.4, 16.8, 5.4, 1.6, A.pop(0.1)) +
    rect(3.6, 17.2, 16.8, 3.6, 1.6, A.pop(0.2)) + circle(6.6, 6.3, 0.85, A.pop(0.05)) + circle(6.6, 13.1, 0.85, A.pop(0.12))));
  P.push(icon("hard-drive", CAT, ["disk", "storage", "backup"],
    rect(3, 8.4, 18, 7.2, 2, A.draw()) + path("M5.8 8.4 7.2 4.4h9.6l1.4 4", A.draw(0.1)) +
    circle(16.8, 12, 1.1, A.pop(0.16)) + line(6, 12, 11, 12, A.draw(0.2))));
  P.push(icon("cloud-upload", CAT, ["save to cloud", "sync up", "backup"],
    cloud(11.2, 12.8, 6.6, A.draw()) + line(11.2, 17.2, 11.2, 10.2, A.draw(0.12)) +
    polyline("8.2,13 11.2,9.8 14.2,13", A.pop(0.16))));
  P.push(icon("cloud-download", CAT, ["fetch from cloud", "sync down", "restore"],
    cloud(11.2, 12.8, 6.6, A.draw()) + line(11.2, 9.6, 11.2, 16.8, A.draw(0.12)) +
    polyline("8.2,14 11.2,17.2 14.2,14", A.pop(0.16))));
  P.push(icon("folder-sync", CAT, ["sync folder", "backup", "refresh data"],
    path("M3 17.5V6.6a1.6 1.6 0 0 1 1.6-1.6H9l2.2 2.6h8.2A1.6 1.6 0 0 1 21 9.2v1.4", A.draw()) +
    path("M3.2 19.2l2.2-6.4a1.6 1.6 0 0 1 1.5-1.1h13.4a1 1 0 0 1 .95 1.3l-2 6.2a1.6 1.6 0 0 1-1.5 1.1H4.7a1.5 1.5 0 0 1-1.5-1.1Z", A.draw(0.08)) +
    arc(11, 13.6, 2.4, -120, 90, A.draw(0.16)) + polyline("9.6,12 11.4,13.2 11.2,10.8", A.pop(0.2))));
  P.push(icon("table", CAT, ["spreadsheet", "grid data", "rows"],
    rect(3, 4.4, 18, 15.2, 1.8, A.draw()) + line(3, 9.2, 21, 9.2, A.draw(0.1)) + line(9, 4.4, 9, 19.6, A.draw(0.13)) +
    line(3, 14.4, 21, 14.4, A.draw(0.16))));
  P.push(icon("list-checks", CAT, ["todo", "tasks", "audit"],
    polyline("3.4,6.6 4.6,7.8 6.6,5.2", A.pop()) + line(8.6, 6.4, 20, 6.4, A.draw(0.06)) +
    polyline("3.4,12.6 4.6,13.8 6.6,11.2", A.pop(0.08)) + line(8.6, 12.4, 20, 12.4, A.draw(0.12)) +
    polyline("3.4,18.6 4.6,19.8 6.6,17.2", A.pop(0.16)) + line(8.6, 18.4, 20, 18.4, A.draw(0.18))));
  P.push(icon("activity", CAT, ["monitor", "pulse", "vitals"],
    path("M2.8 12h3.8l2-6.2 3.4 12.8 2.6-9 1.8 4.2h4.8", A.draw())));
  P.push(icon("gauge", CAT, ["speed", "meter", "performance"],
    path("M4.4 14.4A7.6 7.6 0 0 1 19.6 14.4Z", A.draw()) + line(12, 14.4, 16, 9.4, A.draw(0.12)) +
    circle(12, 14.4, 1.6, A.pop(0.16))));
  P.push(icon("timeline", CAT, ["history", "schedule line", "milestones"],
    line(4.4, 12, 19.6, 12, A.draw()) + circle(7, 12, 1.8, A.pop(0.08)) + circle(12, 12, 1.8, A.pop(0.12)) + circle(17, 12, 1.8, A.pop(0.16)) +
    line(7, 8.2, 7, 10.2, A.draw(0.18)) + line(12, 13.8, 12, 15.8, A.draw(0.2)) + line(17, 8.2, 17, 10.2, A.draw(0.22))));
  P.push(icon("cloud-cog", CAT, ["cloud settings", "configure", "auto sync"],
    cloud(11, 12.2, 6.4, A.draw()) + gear(16.2, 16.6, 3.6, A.spin(0.14)) + circle(16.2, 16.6, 1, A.fade(0.3))));
}

export default P;
