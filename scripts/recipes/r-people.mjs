// People, communication, alerts, moods.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
  chatBubble, bellPath, userGlyph, envelope,
} from "../dsl.mjs";

const P = [];

/* ================= people ================= */
{
  const CAT = "people";
  P.push(icon("user", CAT, ["person", "profile", "account"], userGlyph(12, 13.2, 6.6, A.draw())));
  P.push(icon("user-round", CAT, ["person", "avatar", "account"],
    circle(12, 8.4, 3.6, A.pop()) + path("M5.2 20a6.8 6.8 0 0 1 13.6 0", A.draw(0.1))));
  P.push(icon("user-plus", CAT, ["add person", "invite", "new account"],
    userGlyph(10.4, 13.2, 6.2, A.draw()) + plus(18.2, 8, 2.6, A.pop(0.14))));
  P.push(icon("user-check", CAT, ["verified person", "approved"],
    userGlyph(10.4, 13.2, 6.2, A.draw()) + check(15.6, 8.4, 4.8, A.pop(0.14))));
  P.push(icon("user-x", CAT, ["remove person", "block"],
    userGlyph(10.4, 13.2, 6.2, A.draw()) + cross(18.2, 8, 2.2, A.pop(0.14))));
  P.push(icon("user-search", CAT, ["find person", "people lookup"],
    userGlyph(9.6, 12.6, 5.6, A.draw()) + circle(17, 15.4, 3.1, A.draw(0.12)) + line(19.3, 17.7, 21.4, 19.8, A.draw(0.16))));
  P.push(icon("users", CAT, ["group", "team", "people"],
    userGlyph(9.2, 12.6, 5.4, A.draw()) + path("M15.4 5.6a3 3 0 0 1 0 5.8", A.draw(0.1)) +
    path("M16.6 12.6a5.8 5.8 0 0 1 5 5.8", A.draw(0.14))));
  P.push(icon("users-round", CAT, ["group", "team", "community"],
    circle(9.4, 8.6, 3.2, A.pop()) + path("M3.6 19.6a5.8 5.8 0 0 1 11.6 0", A.draw(0.1)) +
    circle(16.8, 9.4, 2.5, A.pop(0.14)) + path("M15.2 14.6a5 5 0 0 1 5.2 5", A.draw(0.18))));
  P.push(icon("id-card", CAT, ["badge", "identity", "contact"],
    rect(3, 5.2, 18, 13.6, 2.4, A.draw()) + circle(8.6, 11, 2.1, A.pop(0.1)) +
    path("M5.8 16.2a3.2 3.2 0 0 1 5.6 0", A.draw(0.14)) + line(14, 10, 18.2, 10, A.draw(0.16)) + line(14, 13.4, 18.2, 13.4, A.draw(0.19))));
  P.push(icon("contact", CAT, ["address book", "person card"],
    rect(4, 3.5, 16, 17, 2.4, A.draw()) + circle(12, 10, 2.5, A.pop(0.1)) +
    path("M8.2 17.4a4 4 0 0 1 7.6 0", A.draw(0.14)) + line(16.4, 3.5, 16.4, 20.5, A.draw(0.18))));
  P.push(icon("person-standing", CAT, ["figure", "human", "body"],
    circle(12, 4.8, 2.2, A.pop()) + line(12, 7.2, 12, 14.4, A.draw(0.08)) +
    polyline("8,9.4 12,11 16,9.4", A.draw(0.12)) + polyline("9.4,21 12,14.6 14.6,21", A.draw(0.16))));
  P.push(icon("handshake", CAT, ["deal", "agreement", "greet"],
    path("M8.2 12.2 5.4 9.4a1.6 1.6 0 0 1 2.2-2.2l2.6 2.6", A.draw()) +
    path("M13 6.4l4.4 4.4a1.6 1.6 0 0 1-2.2 2.2l-1.1-1.1", A.draw(0.06)) +
    path("M10.8 11.2l2.6 2.6a1.6 1.6 0 0 0 2.2 0l.2-.2", A.draw(0.1)) +
    path("M6.6 13.6 9 16a1.7 1.7 0 0 0 2.4 0 1.7 1.7 0 0 0 2.4 0 1.7 1.7 0 0 0 2.4 0l2.2-2.2", A.draw(0.14)) +
    path("M4.2 8.2 2.9 6.9M19.8 8.2l1.3-1.3M4.2 12.6H2.6M19.8 12.6h1.6", A.draw(0.18))));
  P.push(icon("accessibility", CAT, ["a11y", "universal access", "inclusive"],
    circle(12, 4.6, 1.9, A.pop()) + path("M4.8 8.2c4.8 1.6 9.6 1.6 14.4 0", A.draw(0.08)) +
    line(12, 8.4, 12, 14, A.draw(0.12)) + path("M12 14l-3 6.6", A.draw(0.16)) + path("M12 14l3 6.6", A.draw(0.18))));
  P.push(icon("wheelchair", CAT, ["accessibility", "mobility", "a11y"],
    circle(10.8, 4.4, 1.9, A.pop()) + path("M10.4 8v5h4.6l2.4 5.2", A.draw(0.08)) +
    circle(11.2, 15.6, 5, A.draw(0.12))));
}

/* ================= communication ================= */
{
  const CAT = "comms";
  P.push(icon("message-circle", CAT, ["chat", "comment", "talk"], chatBubble(4, 4.4, 16, 11, A.draw(), true)));
  P.push(icon("message-square", CAT, ["comment", "chat box", "feedback"],
    path("M4.5 5.2a1.8 1.8 0 0 1 1.8-1.8h11.4a1.8 1.8 0 0 1 1.8 1.8v8.2a1.8 1.8 0 0 1-1.8 1.8H9.4L5.6 19v-3.8a1.8 1.8 0 0 1-1.1-1.7Z", A.draw())));
  P.push(icon("message-dots", CAT, ["typing", "chat", "pending"],
    path("M20.2 12.2c0 4-3.7 7.2-8.2 7.2-1 0-2-.2-2.9-.5L4 20.2l1.3-3.4c-1-1.1-1.6-2.5-1.6-4.1 0-4 3.7-7.2 8.2-7.2s8.3 3.2 8.3 7.2Z", A.draw()) +
    circle(8.6, 12, 1, A.pop(0.14)) + circle(12, 12, 1, A.pop(0.18)) + circle(15.4, 12, 1, A.pop(0.22))));
  P.push(icon("messages", CAT, ["chat bubbles", "conversation", "thread"],
    path("M4 6.2a1.8 1.8 0 0 1 1.8-1.8h8.4a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8H7.6L4.6 15v-2.6A1.8 1.8 0 0 1 4 10.6Z", A.draw()) +
    path("M20 10.2a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8h-.4v2.6l-3-2.6h-5", A.draw(0.1))));
  P.push(icon("phone", CAT, ["call", "telephone", "ring"],
    path("M5.2 3.8h3.2l1.6 4-2 1.4a11.6 11.6 0 0 0 5.8 5.8l1.4-2 4 1.6v3.2a1.8 1.8 0 0 1-1.8 1.8A15.8 15.8 0 0 1 3.4 5.6a1.8 1.8 0 0 1 1.8-1.8Z", A.draw())));
  P.push(icon("phone-call", CAT, ["dial", "ringing", "outgoing"],
    path("M5.2 3.8h3.2l1.6 4-2 1.4a11.6 11.6 0 0 0 5.8 5.8l1.4-2 4 1.6v3.2a1.8 1.8 0 0 1-1.8 1.8A15.8 15.8 0 0 1 3.4 5.6a1.8 1.8 0 0 1 1.8-1.8Z", A.draw()) +
    path("M15.2 3.4a5.2 5.2 0 0 1 5.4 5.4", A.draw(0.12)) + path("M15 6.8a2 2 0 0 1 2.2 2.2", A.draw(0.16))));
  P.push(icon("phone-off", CAT, ["hang up", "missed call", "mute"],
    path("M5.2 3.8h3.2l1.6 4-2 1.4a11.6 11.6 0 0 0 5.8 5.8l1.4-2 4 1.6v3.2a1.8 1.8 0 0 1-1.8 1.8A15.8 15.8 0 0 1 3.4 5.6a1.8 1.8 0 0 1 1.8-1.8Z", A.draw()) +
    line(3.4, 3, 20.6, 21, A.draw(0.12))));
  P.push(icon("video", CAT, ["camera call", "record", "film call"],
    rect(3, 6.4, 12.4, 11.2, 2.4, A.draw()) + path("M15.4 10.4 21 7.2v9.6l-5.6-3.2Z", A.pop(0.12))));
  P.push(icon("video-off", CAT, ["no camera", "stop record"],
    rect(3, 6.4, 12.4, 11.2, 2.4, A.draw()) + path("M15.4 10.4 21 7.2v9.6l-5.6-3.2Z", A.pop(0.12)) + line(3, 3, 21, 21, A.draw(0.16))));
  P.push(icon("voicemail", CAT, ["missed call", "audio message"],
    circle(7.4, 14.6, 3.6, A.draw()) + circle(16.6, 14.6, 3.6, A.draw(0.08)) + line(7.4, 18.2, 16.6, 18.2, A.draw(0.14))));
  P.push(icon("podcast", CAT, ["audio show", "mic waves", "broadcast"],
    rect(9.6, 3.4, 4.8, 10, 2.4, A.pop()) + path("M6.2 11.6a5.8 5.8 0 0 0 11.6 0", A.draw(0.1)) +
    line(12, 17.4, 12, 20.6, A.draw(0.16)) + line(8.8, 20.6, 15.2, 20.6, A.draw(0.2))));
  P.push(icon("megaphone", CAT, ["announce", "broadcast", "promote"],
    path("M3.6 10.4v3.2a1.6 1.6 0 0 0 1.6 1.6h2.2l1.2 5.2h3.2l-1.2-5.2 9.4 3.2V5.6L7.4 9.4H5.2a1.6 1.6 0 0 0-1.6 1Z", A.draw()) +
    path("M18.6 11.2a2.6 2.6 0 0 1 0 3.6", A.draw(0.14))));
  P.push(icon("link", CAT, ["chain", "url", "connect"],
    path("M9.6 14.4a3.6 3.6 0 0 1 0-5.1l2.2-2.2a3.6 3.6 0 0 1 5.1 5.1l-1.2 1.2", A.draw()) +
    path("M14.4 9.6a3.6 3.6 0 0 1 0 5.1l-2.2 2.2a3.6 3.6 0 0 1-5.1-5.1l1.2-1.2", A.draw(0.1))));
  P.push(icon("link-off", CAT, ["unlink", "broken url", "disconnect"],
    path("M9.6 14.4a3.6 3.6 0 0 1-.7-3.9", A.draw()) + path("M8.2 9.2l2.2-2.2a3.6 3.6 0 0 1 5.1 5.1l-1.2 1.2", A.draw(0.06)) +
    path("M14.4 9.6a3.6 3.6 0 0 1 .7 3.9", A.draw(0.1)) + line(3.4, 3, 20.6, 21, A.draw(0.14))));
  P.push(icon("bell-announce", CAT, ["ring", "notice", "alert sound"],
    path("M12 4.6c-2.7 0-4.6 2-4.6 4.8 0 3.4-1 4.6-1.8 5.5-.4.4-.1 1.1.5 1.1h11.8c.6 0 .9-.7.5-1.1-.8-.9-1.8-2.1-1.8-5.5 0-2.8-1.9-4.8-4.6-4.8z", A.swing()) +
    path("M10 18.6a2.1 2.1 0 0 0 4 0", A.draw(0.12)) + path("M4.2 5.6A9.4 9.4 0 0 1 2.8 8.4", A.draw(0.16)) + path("M19.8 5.6A9.4 9.4 0 0 0 21.2 8.4", A.draw(0.2))));
  P.push(icon("paper-plane-heart", CAT, ["send love", "care", "message"],
    path("M20.6 3.4 3.8 10.2l6.4 2.6 2.6 6.4Z", A.draw()) + heart(A.pop(0.16), 13.4, 12.4, 0.34)));
}

/* ================= alerts & status ================= */
{
  const CAT = "alerts";
  P.push(icon("bell", CAT, ["notification", "ring", "alert"], path(bellPath(), A.swing()) + path("M10 18.6a2.1 2.1 0 0 0 4 0", A.draw(0.12))));
  P.push(icon("bell-ring", CAT, ["notification on", "ringing"], path(bellPath(), A.swing()) + path("M10 18.6a2.1 2.1 0 0 0 4 0", A.draw(0.1)) + path("M4.2 5.6A9.4 9.4 0 0 1 2.8 8.4", A.draw(0.14)) + path("M19.8 5.6A9.4 9.4 0 0 0 21.2 8.4", A.draw(0.18))));
  P.push(icon("bell-off", CAT, ["mute notifications", "silent"],
    path("M8.2 5.2c.8-.4 1.7-.6 2.6-.6 2.7 0 4.6 2 4.6 4.8 0 3.4 1 4.6 1.8 5.5.4.4.1 1.1-.5 1.1H8.4", A.draw()) +
    path("M6.8 7.2c-.3 1.2-.5 2.3-.5 2.8 0 3.4-1 4.6-1.8 5.5-.4.4-.1 1.1.5 1.1H12", A.draw(0.08)) +
    path("M10 18.6a2.1 2.1 0 0 0 4 0", A.draw(0.12)) + line(3.6, 3, 20.4, 21, A.draw(0.16))));
  P.push(icon("bell-plus", CAT, ["subscribe", "add alert"],
    path(bellPath(), A.swing()) + path("M10 18.6a2.1 2.1 0 0 0 4 0", A.draw(0.1)) + plus(18.8, 6, 2.4, A.pop(0.16))));
  P.push(icon("bell-dot", CAT, ["new notification", "unread"],
    path(bellPath(), A.swing()) + path("M10 18.6a2.1 2.1 0 0 0 4 0", A.draw(0.1)) + circle(18.6, 5.8, 2.2, A.pop(0.16))));
  P.push(icon("alert-circle", CAT, ["warning round", "important", "error"],
    circle(12, 12, 8.6, A.draw()) + line(12, 7.6, 12, 12.8, A.draw(0.1)) + circle(12, 16, 0.9, A.pop(0.16))));
  P.push(icon("alert-triangle", CAT, ["warning", "caution", "attention"],
    path("M10.2 4.2 2.8 17.4a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.8 4.2a2 2 0 0 0-3.6 0Z", A.draw()) +
    line(12, 9.4, 12, 13.4, A.draw(0.12)) + circle(12, 16.6, 0.9, A.pop(0.18))));
  P.push(icon("alert-octagon", CAT, ["stop alert", "block", "error"],
    polygon("8.2,3.6 15.8,3.6 20.4,8.2 20.4,15.8 15.8,20.4 8.2,20.4 3.6,15.8 3.6,8.2", A.draw()) +
    line(12, 7.6, 12, 12.8, A.draw(0.1)) + circle(12, 16, 0.9, A.pop(0.16))));
  P.push(icon("info", CAT, ["information", "about", "details"],
    circle(12, 12, 8.6, A.draw()) + line(12, 11.2, 12, 16.2, A.draw(0.1)) + circle(12, 8, 0.9, A.pop(0.16))));
  P.push(icon("help-circle", CAT, ["question", "support", "faq"],
    circle(12, 12, 8.6, A.draw()) +
    path("M9.4 9.4a2.7 2.7 0 0 1 5.3.7c0 1.7-2.4 2.1-2.4 3.9", A.draw(0.1)) + circle(12, 16.4, 0.9, A.pop(0.16))));
  P.push(icon("check-circle", CAT, ["success", "done", "complete"],
    circle(12, 12, 8.6, A.draw()) + polyline("7.8,12.2 10.8,15.2 16.4,9.2", A.pop(0.12))));
  P.push(icon("x-circle", CAT, ["close", "cancel", "failed"],
    circle(12, 12, 8.6, A.draw()) + cross(12, 12, 3.8, A.pop(0.12))));
  P.push(icon("shield-alert", CAT, ["security warning", "unsafe"],
    path("M12 3.2 4.8 6v5.8c0 4.6 3 7.6 7.2 9 4.2-1.4 7.2-4.4 7.2-9V6Z", A.draw()) +
    line(12, 8.6, 12, 12.8, A.draw(0.12)) + circle(12, 15.8, 0.9, A.pop(0.18))));
  P.push(icon("shield-check", CAT, ["secure", "verified", "protected"],
    path("M12 3.2 4.8 6v5.8c0 4.6 3 7.6 7.2 9 4.2-1.4 7.2-4.4 7.2-9V6Z", A.draw()) +
    polyline("8.6,11.6 11.2,14.2 15.6,9.6", A.pop(0.14))));
  P.push(icon("siren", CAT, ["alarm", "emergency", "alert sound"],
    path("M6.8 18.4a5.2 5.2 0 0 1 10.4 0Z", A.draw()) + line(12, 13.2, 12, 8.6, A.draw(0.1)) +
    rect(9, 3.4, 6, 4.2, 1.6, A.pop(0.14)) + line(4, 21, 20, 21, A.draw(0.18)) +
    path("M5.6 6.2 3.4 4.6M18.4 6.2l2.2-1.6", A.draw(0.2))));
  P.push(icon("flag", CAT, ["report", "mark", "milestone"],
    line(5.2, 3.4, 5.2, 20.6, A.draw()) +
    path("M5.2 4.2h11.4l-1.8 3.6 1.8 3.6H5.2Z", A.draw(0.1))));
  P.push(icon("flag-triangle", CAT, ["milestone", "report alert"],
    line(5.2, 3.4, 5.2, 20.6, A.draw()) + path("M5.2 4.2h13.4L12 9.6Z", A.pop(0.12))));
  P.push(icon("badge-check", CAT, ["verified", "award", "proof"],
    path("M12 3.2l2 2.2 2.9-.6.6 2.9 2.7 1.3-1.3 2.7 1.3 2.7-2.7 1.3-.6 2.9-2.9-.6-2 2.2-2-2.2-2.9.6-.6-2.9-2.7-1.3 1.3-2.7-1.3-2.7 2.7-1.3.6-2.9 2.9.6Z", A.draw()) +
    polyline("9,12.1 11.3,14.4 15.2,10.2", A.pop(0.14))));
  P.push(icon("badge-alert", CAT, ["stamped warning", "review", "flagged"],
    path("M12 3.2l2 2.2 2.9-.6.6 2.9 2.7 1.3-1.3 2.7 1.3 2.7-2.7 1.3-.6 2.9-2.9-.6-2 2.2-2-2.2-2.9.6-.6-2.9-2.7-1.3 1.3-2.7-1.3-2.7 2.7-1.3.6-2.9 2.9.6Z", A.draw()) +
    line(12, 8.4, 12, 12.6, A.draw(0.14)) + circle(12, 15.6, 0.9, A.pop(0.18))));
  P.push(icon("clock-alert", CAT, ["late", "overdue", "time warning"],
    circle(12, 12, 8.6, A.draw()) + polyline("12,7.2 12,12.2 15.2,13.8", A.draw(0.12)) +
    path("M18.4 3.6a2.6 2.6 0 0 1 2 2.6", A.draw(0.18))));
}

/* ================= moods & emoji ================= */
{
  const CAT = "moods";
  P.push(icon("smile", CAT, ["happy", "emoji", "face"], circle(12, 12, 8.6, A.draw()) + circle(9, 10, 1, A.pop(0.1)) + circle(15, 10, 1, A.pop(0.14)) + path("M8.4 14.2a4.4 4.4 0 0 0 7.2 0", A.draw(0.18))));
  P.push(icon("laugh", CAT, ["joy", "funny", "face"], circle(12, 12, 8.6, A.draw()) + path("M8,9.6 a1.4 1.4 0 0 1 2 0", A.draw(0.1)) + path("M14,9.6 a1.4 1.4 0 0 1 2 0", A.draw(0.13)) + path("M7.8 13.2a4.8 4.8 0 0 0 8.4 0Z", A.pop(0.18))));
  P.push(icon("wink", CAT, ["playful", "hint", "face"], circle(12, 12, 8.6, A.draw()) + line(8, 10, 10, 10, A.draw(0.1)) + circle(15, 10, 1, A.pop(0.14)) + path("M8.4 14.2a4.4 4.4 0 0 0 7.2 0", A.draw(0.18))));
  P.push(icon("meh", CAT, ["neutral", "unsure", "face"], circle(12, 12, 8.6, A.draw()) + circle(9, 10, 1, A.pop(0.1)) + circle(15, 10, 1, A.pop(0.14)) + line(8.8, 15, 15.2, 15, A.draw(0.18))));
  P.push(icon("frown", CAT, ["sad", "disappointed", "face"], circle(12, 12, 8.6, A.draw()) + circle(9, 10, 1, A.pop(0.1)) + circle(15, 10, 1, A.pop(0.14)) + path("M8.4 15.8a4.4 4.4 0 0 1 7.2 0", A.draw(0.18))));
  P.push(icon("surprised", CAT, ["wow", "shock", "face"], circle(12, 12, 8.6, A.draw()) + circle(9, 9.6, 1, A.pop(0.1)) + circle(15, 9.6, 1, A.pop(0.14)) + ellipse(12, 15.2, 1.9, 2.4, A.pop(0.18))));
  P.push(icon("angry", CAT, ["mad", "upset", "face"],
    circle(12, 12, 8.6, A.draw()) + line(8, 8.6, 10.2, 9.8, A.draw(0.1)) + line(16, 8.6, 13.8, 9.8, A.draw(0.13)) +
    circle(9, 11, 0.9, A.pop(0.16)) + circle(15, 11, 0.9, A.pop(0.19)) + path("M8.6 16.4a4.2 4.2 0 0 1 6.8 0", A.draw(0.22))));
  P.push(icon("heart-eyes", CAT, ["love", "adore", "face"],
    circle(12, 12, 8.6, A.draw()) + heart(A.pop(0.1), 8.8, 9.8, 0.26) + heart(A.pop(0.15), 15.2, 9.8, 0.26) +
    path("M8.2 14.4a4.6 4.6 0 0 0 7.6 0", A.draw(0.2))));
}

export default P;
