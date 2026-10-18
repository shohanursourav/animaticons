// Media & playback, audio, photography, devices & hardware.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
  camera, play, pause,
} from "../dsl.mjs";

const P = [];

/* ================= media & playback ================= */
{
  const CAT = "media";
  P.push(icon("play", CAT, ["start", "resume", "triangle"], play(11.4, 12, 8, A.pop())));
  P.push(icon("pause", CAT, ["hold", "stop briefly"], pause(12, 12, 6.4, A.pop())));
  P.push(icon("stop", CAT, ["halt", "square"], rect(7, 7, 10, 10, 2, A.pop())));
  P.push(icon("play-circle", CAT, ["start round", "media button"], circle(12, 12, 8.6, A.draw()) + play(11.4, 12, 5, A.pop(0.12))));
  P.push(icon("pause-circle", CAT, ["hold round", "media button"], circle(12, 12, 8.6, A.draw()) + pause(12, 12, 4, A.pop(0.12))));
  P.push(icon("stop-circle", CAT, ["halt round", "media button"], circle(12, 12, 8.6, A.draw()) + rect(9.2, 9.2, 5.6, 5.6, 1.2, A.pop(0.12))));
  P.push(icon("skip-back", CAT, ["previous track", "rewind to start"],
    polygon("18,5.6 18,18.4 8,12", A.pop()) + line(6, 5.6, 6, 18.4, A.draw(0.12))));
  P.push(icon("skip-forward", CAT, ["next track", "to end"],
    rot(polygon("18,5.6 18,18.4 8,12", A.pop()) + line(6, 5.6, 6, 18.4, A.draw(0.12)), 180)));
  P.push(icon("fast-backward", CAT, ["rewind", "double back"],
    polygon("12.4,5.6 12.4,18.4 4,12", A.pop(0)) + polygon("20,5.6 20,18.4 11.6,12", A.pop(0.08))));
  P.push(icon("fast-forward", CAT, ["ahead", "double forward"],
    polygon("11.6,5.6 11.6,18.4 20,12", A.pop(0)) + polygon("4,5.6 4,18.4 12.4,12", A.pop(0.08))));
  P.push(icon("step-back", CAT, ["previous step", "frame back"],
    rect(5, 5.4, 3, 13.2, 1.2, A.pop()) + polygon("19,5.4 19,18.6 9,12", A.pop(0.1))));
  P.push(icon("step-forward", CAT, ["next step", "frame forward"],
    rect(16, 5.4, 3, 13.2, 1.2, A.pop()) + polygon("5,5.4 5,18.6 15,12", A.pop(0.1))));
  P.push(icon("eject", CAT, ["stop and open", "media out"],
    polygon("12,4.6 19,13.2 5,13.2", A.pop()) + line(5, 17.4, 19, 17.4, A.draw(0.12))));
  P.push(icon("record", CAT, ["capture", "red dot", "rec"],
    circle(12, 12, 8.6, A.draw()) + circle(12, 12, 4.4, A.pulse(0.1))));
  P.push(icon("clapperboard", CAT, ["movie", "action", "film slate"],
    path("M3.6 9.4h16.8v9.2a1.8 1.8 0 0 1-1.8 1.8H5.4a1.8 1.8 0 0 1-1.8-1.8Z", A.draw()) +
    path("M3.6 9.4 5.2 4.2 20 6.8l-1.2 2.6", A.draw(0.1)) +
    line(8.6, 4.8, 7.2, 9.2, A.draw(0.14)) + line(13.2, 5.5, 11.8, 9.2, A.draw(0.17))));
  P.push(icon("film", CAT, ["cinema", "movie strip", "video"],
    rect(3.4, 4.6, 17.2, 14.8, 2, A.draw()) + line(8, 4.6, 8, 19.4, A.draw(0.1)) + line(16, 4.6, 16, 19.4, A.draw(0.12)) +
    [7, 12, 17].map((y, i) => rect(4.6, y - 1, 2.2, 2, 0.6, A.pop(0.14 + i * 0.03)) + rect(17.2, y - 1, 2.2, 2, 0.6, A.pop(0.16 + i * 0.03))).join("")));
  P.push(icon("tv", CAT, ["television", "screen", "watch"],
    rect(3, 5, 18, 12, 2, A.draw()) + line(8.4, 20.4, 15.6, 20.4, A.draw(0.1)) + line(12, 17, 12, 20.4, A.draw(0.13))));
  P.push(icon("monitor-play", CAT, ["screencast", "video screen"],
    rect(2.8, 4.4, 18.4, 12.6, 2, A.draw()) + play(11.4, 10.6, 5, A.pop(0.12)) + line(8.4, 20.4, 15.6, 20.4, A.draw(0.16))));
  P.push(icon("picture-in-picture", CAT, ["pip", "floating video", "overlay"],
    rect(2.8, 4.4, 18.4, 15.2, 2, A.draw()) + rect(11.4, 11, 8, 6.8, 1.4, A.pop(0.12)) + line(2.8, 8.6, 21.2, 8.6, A.draw(0.16))));
  P.push(icon("captions", CAT, ["subtitles", "cc", "text on video"],
    rect(2.8, 5, 18.4, 14, 2.4, A.draw()) +
    path("M9.6 10.2a2.6 2.6 0 1 0 0 3.6", A.draw(0.12)) + path("M16.6 10.2a2.6 2.6 0 1 0 0 3.6", A.draw(0.16))));
  P.push(icon("playlist", CAT, ["queue", "tracks", "list music"],
    line(4, 6, 16, 6, A.draw()) + line(4, 10.4, 16, 10.4, A.draw(0.06)) + line(4, 14.8, 12, 14.8, A.draw(0.1)) +
    path("M18.6 9.4v7.2", A.draw(0.14)) + circle(17, 17, 1.8, A.pop(0.18))));
  P.push(icon("gallery", CAT, ["images", "photos", "pictures"],
    rect(3, 5, 13.4, 14, 2, A.draw()) + path("M16.4 9h2.6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8.6a2 2 0 0 1-2-2v-2.4", A.draw(0.1)) +
    circle(8, 9.8, 1.5, A.pop(0.14)) + polyline("4.6,17 8.6,12.8 11.4,15.6 13.6,13.2 16.2,16", A.draw(0.18))));
  P.push(icon("disc", CAT, ["cd", "dvd", "media disc"], circle(12, 12, 8.6, A.draw()) + circle(12, 12, 2.4, A.pop(0.12))));
  P.push(icon("radio-tower", CAT, ["broadcast", "antenna", "live"],
    line(8.6, 20.6, 12, 8.4, A.draw()) + line(15.4, 20.6, 12, 8.4, A.draw(0.06)) + line(6.4, 20.6, 17.6, 20.6, A.draw(0.1)) +
    path("M7.6 5.2a6.6 6.6 0 0 0 0 9.2", A.draw(0.14)) + path("M16.4 5.2a6.6 6.6 0 0 1 0 9.2", A.draw(0.17)) +
    circle(12, 6.4, 1.6, A.pop(0.2))));
}

/* ================= audio & volume ================= */
{
  const CAT = "audio";
  const speaker = (extra) => path("M4 9.4h3.4L12 5.2v13.6l-4.6-4.2H4Z", extra);
  P.push(icon("volume-low", CAT, ["sound on", "speaker low"], speaker(A.draw()) + path("M15.2 9.6a3.4 3.4 0 0 1 0 4.8", A.draw(0.12))));
  P.push(icon("volume", CAT, ["sound", "speaker", "audio"], speaker(A.draw()) + path("M15.2 9.6a3.4 3.4 0 0 1 0 4.8", A.draw(0.1)) + path("M17.6 7.2a7 7 0 0 1 0 9.6", A.draw(0.16))));
  P.push(icon("volume-high", CAT, ["loud", "max sound", "speaker up"],
    speaker(A.draw()) + path("M15.2 9.6a3.4 3.4 0 0 1 0 4.8", A.draw(0.1)) + path("M17.6 7.2a7 7 0 0 1 0 9.6", A.draw(0.14)) + path("M20 4.8a10.6 10.6 0 0 1 0 14.4", A.draw(0.18))));
  P.push(icon("volume-off", CAT, ["mute", "silent", "no sound"],
    speaker(A.draw()) + cross(16.6, 12, 3.2, A.pop(0.12))));
  P.push(icon("headphones", CAT, ["listen", "audio", "support"],
    path("M4.2 14.6v-2.2a7.8 7.8 0 0 1 15.6 0v2.2", A.draw()) +
    rect(3.2, 13.8, 3.6, 6, 1.8, A.pop(0.12)) + rect(17.2, 13.8, 3.6, 6, 1.8, A.pop(0.16))));
  P.push(icon("headset", CAT, ["headphones mic", "support call", "gaming audio"],
    path("M4.2 14.6v-2.2a7.8 7.8 0 0 1 15.6 0v2.2", A.draw()) +
    rect(3.2, 13.8, 3.6, 6, 1.8, A.pop(0.12)) + rect(17.2, 13.8, 3.6, 6, 1.8, A.pop(0.16)) +
    path("M19 19.8v.6a2 2 0 0 1-2 2h-3", A.draw(0.2))));
  P.push(icon("ear", CAT, ["hearing", "listen", "sound in"],
    path("M7 8.2a5 5 0 0 1 10 0c0 3.4-2.6 4-3.4 6.2-.7 2-.4 4.6-2.8 5.4a3 3 0 0 1-2.7-4.4", A.draw()) +
    path("M9.6 8.4a2.5 2.5 0 0 1 4.8.6c0 1.6-1.3 2-1.8 3.2", A.draw(0.12))));
  P.push(icon("mic", CAT, ["microphone", "record voice", "speak"],
    rect(9.2, 3.2, 5.6, 10.2, 2.8, A.pop()) + path("M5.8 11.6a6.2 6.2 0 0 0 12.4 0", A.draw(0.12)) +
    line(12, 17.8, 12, 20.6, A.draw(0.16)) + line(8.8, 20.6, 15.2, 20.6, A.draw(0.2))));
  P.push(icon("mic-off", CAT, ["mute mic", "no voice", "silent"],
    rect(9.2, 3.2, 5.6, 10.2, 2.8, A.pop()) + path("M5.8 11.6a6.2 6.2 0 0 0 12.4 0", A.draw(0.1)) +
    line(12, 17.8, 12, 20.6, A.draw(0.14)) + line(3.4, 3, 20.6, 21, A.draw(0.18))));
  P.push(icon("music", CAT, ["note", "song", "melody"],
    path("M9.4 18.2V6.4l10-2.2v11.6", A.draw()) + circle(7, 18.2, 2.5, A.pop(0.12)) + circle(17, 15.8, 2.5, A.pop(0.16))));
  P.push(icon("music-2", CAT, ["notes", "song", "duo"],
    path("M8 17.4V7l9-2v9.8", A.draw()) + circle(6, 17.4, 2.1, A.pop(0.12)) + circle(15, 14.8, 2.1, A.pop(0.16)) +
    line(8, 7, 17, 5, A.draw(0.18))));
  P.push(icon("music-4", CAT, ["notes many", "score", "melody"],
    path("M7 16.8V8.2l5-1.2v8.2", A.draw()) + path("M12 15.2l5-1.2V5.8", A.draw(0.08)) +
    circle(5.4, 16.8, 1.9, A.pop(0.12)) + circle(10.4, 15.2, 1.9, A.pop(0.15)) + circle(15.4, 14, 1.9, A.pop(0.18))));
  P.push(icon("audio-lines", CAT, ["waveform bars", "equalizer", "spectrum"],
    [3.6, 6.8, 10, 13.2, 16.4, 19.6].map((x, i) => {
      const h = [7, 11, 15, 9, 13, 6][i];
      return line(x, 12 - h / 2, x, 12 + h / 2, A.bounce(0.04 * i));
    }).join("")));
  P.push(icon("waveform", CAT, ["voice", "sound wave", "pulse audio"],
    path("M2.8 12h2.4l2-6 2.6 12 2.6-14 2.6 16 2.4-10 2 2h3", A.draw())));
  P.push(icon("vibrate", CAT, ["phone buzz", "haptic"],
    rect(8.2, 4.2, 7.6, 15.6, 2, A.pop()) + path("M4.6 9.4a7 7 0 0 0 0 5.2", A.draw(0.12)) + path("M19.4 9.4a7 7 0 0 1 0 5.2", A.draw(0.16))));
  P.push(icon("vibrate-off", CAT, ["no buzz", "silent phone"],
    rect(8.2, 4.2, 7.6, 15.6, 2, A.pop()) + path("M4.6 9.4a7 7 0 0 0 0 5.2", A.draw(0.1)) + path("M19.4 9.4a7 7 0 0 1 0 5.2", A.draw(0.14)) + line(3.4, 3, 20.6, 21, A.draw(0.18))));
  P.push(icon("speaker", CAT, ["box audio", "sound box"],
    rect(5, 3.4, 14, 17.2, 2.2, A.draw()) + circle(12, 15, 3.2, A.pop(0.12)) + circle(12, 7.6, 1.5, A.pop(0.16))));
  P.push(icon("radio", CAT, ["music box", "fm", "receiver"],
    rect(3, 8, 18, 12, 2, A.draw()) + circle(14.6, 14, 3.4, A.pop(0.12)) + circle(7.6, 12.2, 1.2, A.pop(0.16)) + circle(7.6, 16, 1.2, A.pop(0.19)) +
    path("M8,8 18,4.4", A.draw(0.2))));
}

/* ================= photography ================= */
{
  const CAT = "photo";
  P.push(icon("camera", CAT, ["photo", "shot", "picture"], camera(A.draw())));
  P.push(icon("camera-plus", CAT, ["new photo", "add shot"], camera(A.draw()) + plus(18.8, 5.6, 2.2, A.pop(0.14))));
  P.push(icon("camera-off", CAT, ["no photo", "disable camera"], camera(A.draw()) + line(3.4, 3, 20.6, 21, A.draw(0.14))));
  P.push(icon("aperture", CAT, ["lens", "exposure", "blades"],
    circle(12, 12, 8.6, A.draw()) +
    path("M12 3.4 8.6 9.6", A.draw(0.1)) + path("M20.6 12 13.4 12", A.draw(0.12)) +
    path("M15.2 19.6 11.6 12.8", A.draw(0.14)) + path("M8.2 20 11.2 13", A.draw(0.16)) +
    path("M3.4 9.2 10.4 11.6", A.draw(0.18)) + path("M8.2 3.8 11.2 11", A.draw(0.2))));
  P.push(icon("image", CAT, ["picture", "photo file", "landscape"],
    rect(3.2, 4.6, 17.6, 14.8, 2.2, A.draw()) + circle(8.4, 9.6, 1.7, A.pop(0.12)) +
    polyline("4.6,18 9.6,12.4 12.6,15.4 15.4,12.2 19.4,16.4", A.draw(0.16))));
  P.push(icon("image-plus", CAT, ["new picture", "add photo"],
    rect(3.2, 4.6, 17.6, 14.8, 2.2, A.draw()) + circle(8.4, 9.6, 1.7, A.pop(0.12)) +
    polyline("4.6,18 9.6,12.4 12.6,15.4", A.draw(0.16)) + plus(17.6, 16.2, 2.2, A.pop(0.2))));
  P.push(icon("flash", CAT, ["lightning", "strobe", "zap"],
    path("M13.2 2.8 6 13.4h4.6L10 21.2 18 10.2h-4.8Z", A.draw())));
  P.push(icon("focus-lens", CAT, ["focus ring", "camera focus"],
    circle(12, 12, 5.4, A.draw()) + path("M12 2.8v3.2", A.draw(0.1)) + path("M12 18v3.2", A.draw(0.13)) +
    path("M2.8 12h3.2", A.draw(0.16)) + path("M18 12h3.2", A.draw(0.19))));
  P.push(icon("panorama", CAT, ["wide photo", "sweep shot"],
    ellipse(12, 12, 9.2, 5.6, A.draw()) + ellipse(12, 12, 4.4, 5.6, A.draw(0.12))));
  P.push(icon("shutter", CAT, ["camera shutter", "capture"],
    circle(12, 12, 8.6, A.draw()) + line(12, 3.4, 12, 8.2, A.draw(0.1)) + line(19.5, 16.3, 15.4, 13.9, A.draw(0.13)) +
    line(4.5, 16.3, 8.6, 13.9, A.draw(0.16))));
  P.push(icon("photo-film", CAT, ["gallery roll", "photos"],
    rect(3, 4.6, 18, 14.8, 2, A.draw()) + circle(8, 9.4, 1.5, A.pop(0.12)) + circle(16, 9.4, 1.5, A.pop(0.15)) +
    circle(8, 15, 1.5, A.pop(0.18)) + circle(16, 15, 1.5, A.pop(0.21))));
}

/* ================= devices & hardware ================= */
{
  const CAT = "devices";
  P.push(icon("smartphone", CAT, ["mobile", "phone device", "cell"],
    rect(7, 2.8, 10, 18.4, 2.6, A.draw()) + line(10.6, 5.4, 13.4, 5.4, A.draw(0.12)) + circle(12, 18.6, 0.7, A.pop(0.16))));
  P.push(icon("tablet", CAT, ["slate", "ipad", "device"],
    rect(4.6, 2.8, 14.8, 18.4, 2.4, A.draw()) + line(10, 5.2, 14, 5.2, A.draw(0.12)) + circle(12, 18.8, 0.7, A.pop(0.16))));
  P.push(icon("laptop", CAT, ["notebook computer", "macbook", "device"],
    rect(5, 5, 14, 9.6, 1.8, A.draw()) + path("M3 17.6h18l-.7 1.8a1.6 1.6 0 0 1-1.5 1H5.2a1.6 1.6 0 0 1-1.5-1Z", A.pop(0.12))));
  P.push(icon("monitor", CAT, ["screen", "desktop", "display"],
    rect(2.8, 4.2, 18.4, 12.6, 2, A.draw()) + line(8.4, 20.4, 15.6, 20.4, A.draw(0.1)) + line(12, 16.8, 12, 20.4, A.draw(0.13))));
  P.push(icon("keyboard", CAT, ["typing", "input", "keys"],
    rect(2.6, 6.2, 18.8, 11.6, 2, A.draw()) +
    [6.4, 9.2, 12, 14.8, 17.6].map((x, i) => line(x, 10, x, 10, A.pop(0.02 * i)) + circle(x, 10, 0.65, A.pop(0.03 * i))).join("") +
    line(7.4, 14, 16.6, 14, A.draw(0.16))));
  P.push(icon("mouse", CAT, ["cursor device", "click", "pointer"],
    rect(7, 2.8, 10, 18.4, 5, A.draw()) + line(12, 6.4, 12, 10.4, A.draw(0.12))));
  P.push(icon("printer", CAT, ["print", "paper out", "device"],
    path("M7 8.2V3.6h10v4.6", A.draw()) + rect(3.6, 8.2, 16.8, 8.4, 2, A.pop(0.1)) +
    rect(7, 13.8, 10, 6.6, 1.2, A.pop(0.16)) + circle(17, 11, 0.8, A.pop(0.2))));
  P.push(icon("server", CAT, ["rack", "backend", "host"],
    rect(3.6, 3.6, 16.8, 6.4, 1.8, A.pop()) + rect(3.6, 14, 16.8, 6.4, 1.8, A.pop(0.1)) +
    circle(7, 6.8, 0.9, A.pop(0.14)) + circle(7, 17.2, 0.9, A.pop(0.17))));
  P.push(icon("cpu", CAT, ["chip", "processor", "hardware"],
    rect(6.2, 6.2, 11.6, 11.6, 1.8, A.draw()) + rect(9.6, 9.6, 4.8, 4.8, 1, A.pop(0.1)) +
    [[10, 3.2, 10, 6.2], [14, 3.2, 14, 6.2], [10, 17.8, 10, 20.8], [14, 17.8, 14, 20.8],
     [3.2, 10, 6.2, 10], [3.2, 14, 6.2, 14], [17.8, 10, 20.8, 10], [17.8, 14, 20.8, 14]]
      .map((c, i) => line(c[0], c[1], c[2], c[3], A.draw(0.12 + i * 0.01))).join("")));
  P.push(icon("battery-full", CAT, ["power", "charge", "energy"],
    rect(2.8, 7.4, 15.6, 9.2, 2.2, A.draw()) + path("M18.4 10.2h1.6a1.6 1.6 0 0 1 1.6 1.6v.4a1.6 1.6 0 0 1-1.6 1.6h-1.6", A.draw(0.1)) +
    [5.4, 8.4, 11.4].map((x, i) => rect(x, 10, 1.6, 4, 0.6, A.pop(0.12 + i * 0.04))).join("")));
  P.push(icon("battery-low", CAT, ["low power", "charge soon", "energy"],
    rect(2.8, 7.4, 15.6, 9.2, 2.2, A.draw()) + path("M18.4 10.2h1.6a1.6 1.6 0 0 1 1.6 1.6v.4a1.6 1.6 0 0 1-1.6 1.6h-1.6", A.draw(0.1)) +
    rect(5.4, 10, 1.6, 4, 0.6, A.pop(0.14))));
  P.push(icon("plug", CAT, ["power plug", "connect energy", "socket"],
    path("M8.2 3.6v4.2M15.8 3.6v4.2", A.draw()) + path("M6 7.8h12v2.6a6 6 0 0 1-6 6 6 6 0 0 1-6-6Z", A.draw(0.08)) +
    line(12, 16.4, 12, 20.4, A.draw(0.16))));
  P.push(icon("sim-card", CAT, ["sim", "network card", "storage chip"],
    path("M6.2 3.6h7.6L18 7.8v12.6H6.2Z", A.draw()) +
    rect(8.6, 10.2, 6.8, 5.6, 1, A.pop(0.12)) + line(12, 10.2, 12, 15.8, A.draw(0.16)) + line(8.6, 13, 15.4, 13, A.draw(0.19))));
  P.push(icon("gamepad", CAT, ["controller", "play games", "console"],
    path("M6.8 8.4h10.4a5 5 0 0 1 4.8 5.2c-.2 2.6-1.8 4.2-3.4 4.2-1.4 0-2.2-1-3.2-2.2H8.6c-1 1.2-1.8 2.2-3.2 2.2-1.6 0-3.2-1.6-3.4-4.2A5 5 0 0 1 6.8 8.4Z", A.draw()) +
    line(7, 11.4, 7, 14.2, A.draw(0.12)) + line(5.6, 12.8, 8.4, 12.8, A.draw(0.15)) + circle(15.6, 11.6, 1, A.pop(0.18)) + circle(17.8, 13.6, 1, A.pop(0.21))));
  P.push(icon("watch", CAT, ["smartwatch", "wearable", "time on wrist"],
    rect(7, 6.4, 10, 11.2, 2.6, A.draw()) + path("M9.2 6.4 9.8 2.8h4.4l.6 3.6", A.draw(0.1)) + path("M9.2 17.6l.6 3.6h4.4l.6-3.6", A.draw(0.13)) +
    polyline("12,9.4 12,12 13.8,13.2", A.pop(0.18))));
}

export default P;