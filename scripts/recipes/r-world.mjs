// Weather, nature, animals, travel & places, food & drink.
import {
  A, F, circle, ellipse, rect, line, path, polyline, polygon, group,
  rot, move, scale, cross, plus, minus, check, chevron, arrowHead,
  sparkle, star, heart, drop, bolt, cloud, sun, gear, badge, icon, arc, pt,
} from "../dsl.mjs";

const P = [];

/* ================= weather & sky ================= */
{
  const CAT = "weather";
  P.push(icon("sun", CAT, ["sunny", "day", "bright"], sun(12, 12, 8.4, A.spin(0), 8)));
  P.push(icon("sunset", CAT, ["evening", "horizon", "dusk"],
    path("M3.4 17.6h17.2", A.draw()) + arc(12, 17.6, 6, 180, 360, A.draw(0.08)) +
    line(12, 5, 12, 7.6, A.draw(0.12)) + line(4.8, 7.4, 6.6, 9.2, A.draw(0.15)) + line(19.2, 7.4, 17.4, 9.2, A.draw(0.18))));
  P.push(icon("sunrise", CAT, ["morning", "start of day", "dawn"],
    path("M3.4 17.6h17.2", A.draw()) + arc(12, 17.6, 6, 180, 360, A.draw(0.08)) +
    line(12, 4.2, 12, 7.2, A.draw(0.12)) + polyline("9.4,6.6 12,4 14.6,6.6", A.pop(0.15))));
  P.push(icon("cloud", CAT, ["overcast", "sky"], cloud(12, 12.4, 7.6, A.draw())));
  P.push(icon("cloud-sun", CAT, ["partly cloudy", "mixed sky"],
    sun(15.6, 8.4, 5.6, A.spin(), 7) + cloud(10.6, 14.2, 6.2, A.draw(0.1))));
  P.push(icon("cloud-rain", CAT, ["rainy", "drizzle", "shower"],
    cloud(12, 9.8, 6.6, A.draw()) + [8.4, 12, 15.6].map((x, i) => line(x, 15.2, x - 0.8, 19.4, A.drop(0.1 + i * 0.05))).join("")));
  P.push(icon("cloud-snow", CAT, ["snowy", "flurry", "winter"],
    cloud(12, 9.8, 6.6, A.draw()) +
    [8.4, 12, 15.6].map((x, i) => cross(x, 17, 1.4, A.pop(0.1 + i * 0.05))).join("")));
  P.push(icon("cloud-lightning", CAT, ["thunder", "storm", "electric"],
    cloud(12, 9.6, 6.6, A.draw()) + bolt(12, 17.4, 3.4, A.pop(0.12))));
  P.push(icon("cloud-drizzle", CAT, ["light rain", "misty", "drops"],
    cloud(12, 9.8, 6.6, A.draw()) +
    [7.6, 11, 14.4, 17].map((x, i) => drop(x, 16.6, 1.1, A.drop(0.08 + i * 0.04))).join("")));
  P.push(icon("wind", CAT, ["breeze", "air", "gust"],
    path("M3.4 8.4h9.2a2.6 2.6 0 1 0-2.5-3.2", A.draw()) +
    path("M3.4 12.4h13.8a2.8 2.8 0 1 1-2.7 3.5", A.draw(0.1)) +
    path("M3.4 16.6h6.8", A.draw(0.16))));
  P.push(icon("tornado", CAT, ["twister", "storm wind", "spout"],
    line(4, 5, 20, 5, A.draw()) + line(5.6, 8.2, 18.4, 8.2, A.draw(0.05)) +
    line(7, 11.4, 17, 11.4, A.draw(0.1)) + line(8.6, 14.6, 15.4, 14.6, A.draw(0.15)) +
    line(10, 17.8, 14, 17.8, A.draw(0.2)) + line(11.4, 21, 12.6, 21, A.draw(0.25))));
  P.push(icon("umbrella", CAT, ["rain cover", "shelter", "shade"],
    path("M12 3.4a8.6 8.6 0 0 1 8.6 8.6H3.4A8.6 8.6 0 0 1 12 3.4Z", A.draw()) +
    line(12, 12, 12, 18.2, A.draw(0.12)) + path("M12 18.2a2.2 2.2 0 0 1-4.2 0", A.draw(0.16))));
  P.push(icon("moon", CAT, ["night", "dark", "sleep"],
    path("M20 14.2A8.6 8.6 0 0 1 9.8 4 8.6 8.6 0 1 0 20 14.2Z", A.draw())));
  P.push(icon("moon-star", CAT, ["night clear", "starry", "dream"],
    path("M18.6 13A7.2 7.2 0 0 1 9.6 4 7.4 7.4 0 1 0 18.6 13Z", A.draw()) +
    sparkle(18.2, 5.4, 2.4, A.pop(0.14)) + sparkle(20, 10.2, 1.4, A.pop(0.2))));
  P.push(icon("stars", CAT, ["night sky", "sparkle sky", "magic"],
    star(12, 8.4, 4.6, A.pop()) + sparkle(5.8, 15.6, 2, A.pop(0.1)) + sparkle(18.4, 15, 2.4, A.pop(0.16))));
  P.push(icon("snowflake", CAT, ["winter", "freeze", "ice"],
    line(12, 3, 12, 21, A.draw()) + rot(line(12, 3, 12, 21, A.draw(0.04)), 60) + rot(line(12, 3, 12, 21, A.draw(0.04)), 120) +
    polyline("9.4,5.6 12,8 14.6,5.6", A.pop(0.12)) + polyline("9.4,18.4 12,16 14.6,18.4", A.pop(0.15))));
  P.push(icon("thermometer", CAT, ["temperature", "warmth", "celsius"],
    path("M14 14.8V5.6a2 2 0 0 0-4 0v9.2a4 4 0 1 0 4 0Z", A.draw()) +
    line(12, 9, 12, 14.4, A.draw(0.12)) + circle(12, 17, 1.8, A.pop(0.16))));
  P.push(icon("sun-dim", CAT, ["soft sun", "morning light", "dim"],
    sun(12, 12, 7, A.spin(), 4) + circle(12, 12, 3.2, A.fade(0.1))));
  P.push(icon("eclipse", CAT, ["moon over sun", "event", "shadow"],
    circle(12, 12, 8, A.draw()) + path("M12 4a8 8 0 0 0 0 16Z", A.pop(0.12))));
}

/* ================= nature & outdoors ================= */
{
  const CAT = "nature";
  P.push(icon("leaf", CAT, ["plant", "eco", "green"],
    path("M19.6 4.4C10.4 4.2 5.2 8.6 5.2 14.4c0 2.2 1.4 4.2 3.4 5.2 4.4-.4 8.8-3.2 11-15.2Z", A.draw()) +
    path("M5.6 19.2c2.2-3.8 5.4-7 9-9", A.draw(0.12))));
  P.push(icon("leaf-2", CAT, ["sprout", "eco", "foliage"],
    path("M12 20.6V10.2", A.draw()) + path("M12 13.4c-3.4 0-5.6-2-5.8-5.6 3.6-.4 5.8 1.4 5.8 5.6Z", A.draw(0.1)) +
    path("M12 16c3.2 0 5.2-1.8 5.4-5.2-3.4-.4-5.4 1.2-5.4 5.2Z", A.draw(0.16))));
  P.push(icon("tree", CAT, ["forest", "pine", "outdoors"],
    polygon("12,3.4 18,10.4 14.8,10.4 19.4,16 4.6,16 9.2,10.4 6,10.4", A.draw()) +
    line(12, 16, 12, 20.6, A.draw(0.14))));
  P.push(icon("flower", CAT, ["bloom", "blossom", "garden"],
    circle(12, 8.4, 2.6, A.pop()) + [0, 72, 144, 216, 288].map((d, i) => rot(ellipse(12, 5, 1.8, 2.6, A.pop(0.04 * i)), d)).join("") +
    line(12, 11.8, 12, 20.6, A.draw(0.18)) + path("M12 15.6c2.2 0 3.6-1.2 3.8-3.2-2-.2-3.4 1-3.8 3.2Z", A.draw(0.22))));
  P.push(icon("seedling", CAT, ["grow", "sprout", "beginning"],
    path("M12 20.4V9.8", A.draw()) + path("M12 12.8C8.6 12.8 6.4 10.8 6.2 7.2c3.6-.4 5.8 1.4 5.8 5.6Z", A.draw(0.1)) +
    path("M12 15.8c3.2 0 5.2-1.8 5.4-5.2-3.4-.4-5.4 1.2-5.4 5.2Z", A.draw(0.16)) + path("M8.4 20.4h7.2", A.draw(0.2))));
  P.push(icon("mountain", CAT, ["peak", "hike", "landscape"],
    path("M3 19.4 9.2 7.2l3.4 5.8 2-3 6.4 9.4Z", A.draw()) + circle(8.2, 10.6, 0, A.fade())));
  P.push(icon("mountain-snow", CAT, ["alpine", "snow peak", "climb"],
    path("M3 19.4 9.2 7.2l3.4 5.8 2-3 6.4 9.4Z", A.draw()) + path("M7.4 10.8 9.2 7.4l1.8 3.2", A.draw(0.12))));
  P.push(icon("river", CAT, ["stream", "water flow", "valley"],
    path("M3.4 7.2c2.8 0 2.8 3 5.6 3s2.8-3 5.6-3 2.8 3 5.6 3", A.draw()) +
    path("M3.4 13.2c2.8 0 2.8 3 5.6 3s2.8-3 5.6-3 2.8 3 5.6 3", A.draw(0.1))));
  P.push(icon("island", CAT, ["palm", "beach", "escape"],
    path("M4 18.6h16", A.draw()) + arc(12, 18.6, 7, 180, 360, A.draw(0.06)) +
    path("M12 12.6c0-3.4 2.4-5.4 5.2-5.6-.2 3.2-2.2 5.2-5.2 5.6Z", A.draw(0.12)) +
    path("M12 12.6c-.4-3-2.4-4.8-5-5.2.4 2.8 2.2 4.8 5 5.2Z", A.draw(0.16)) + line(12, 12.6, 12, 18.2, A.draw(0.2))));
  P.push(icon("cactus", CAT, ["desert", "succulent", "plant"],
    path("M12 20.6V7.2", A.draw()) + path("M8.4 12.2a2 2 0 0 1 0-4c1.4 0 2 1 2 2.4V12", A.draw(0.1)) +
    path("M15.6 14.2a2 2 0 0 0 0-4c-1.4 0-2 1-2 2.4V14", A.draw(0.14)) +
    path("M8 20.6h8", A.draw(0.2))));
  P.push(icon("branch", CAT, ["git branch", "fork", "split growth"],
    circle(6.6, 5.6, 2.1, A.pop()) + circle(6.6, 18.4, 2.1, A.pop(0.08)) + circle(17.4, 8.8, 2.1, A.pop(0.12)) +
    path("M6.6 7.7v8.6", A.draw(0.14)) + path("M6.6 12.8c0-2.2 1.8-4 4-4h4.7", A.draw(0.18))));
  P.push(icon("flame", CAT, ["fire", "warm", "burn"],
    path("M12 20.6c-3.6 0-6-2.4-6-5.6 0-4.2 3.6-5.8 4-11 2.8 1.6 4 4 4 6 1.2-.6 1.8-1.6 2-3 1.8 1.8 3 3.8 3 6.2 0 3-3 7.4-7 7.4Z", A.draw())));
  P.push(icon("droplets", CAT, ["water", "humidity", "wet"],
    drop(8.6, 9, 4, A.draw()) + drop(15.4, 14.6, 4, A.draw(0.1))));
  P.push(icon("mushroom", CAT, ["forest floor", "fungi", "toadstool"],
    path("M4.2 12.2a7.8 7.8 0 0 1 15.6 0Z", A.draw()) + path("M8.6 12.2v3.6a3.4 3.4 0 0 0 6.8 0v-3.6", A.draw(0.12)) +
    circle(9, 9, 1, A.pop(0.16)) + circle(14.4, 8.2, 1.1, A.pop(0.2))));
  P.push(icon("shell", CAT, ["beach find", "spiral", "ocean"],
    arc(12, 12, 8.4, 90, 270, A.draw()) + path("M3.6 12h16.8", A.draw(0.1)) +
    path("M6 15.2h12", A.draw(0.14)) + path("M8.6 18.4h6.8", A.draw(0.18))));
}

/* ================= animals & pets ================= */
{
  const CAT = "animals";
  P.push(icon("paw", CAT, ["pet", "animal", "dog cat"],
    ellipse(7.2, 7.6, 1.9, 2.4, A.pop()) + ellipse(12, 5.8, 1.9, 2.4, A.pop(0.05)) + ellipse(16.8, 7.6, 1.9, 2.4, A.pop(0.1)) +
    path("M12 10c-3.2 0-5.6 2.4-5.6 5 0 2.2 1.8 3.4 3.8 3 1-.2 2.6-.2 3.6 0 2 .4 3.8-.8 3.8-3 0-2.6-2.4-5-5.6-5Z", A.pop(0.15))));
  P.push(icon("dog", CAT, ["pet", "puppy", "friend"],
    path("M5.6 7.2 5 3.8l3.2 2h7.6l3.2-2-.6 3.4", A.draw()) +
    path("M5.6 7.2v5.2a6.4 6.4 0 0 0 12.8 0V7.2Z", A.draw(0.08)) +
    circle(9.4, 11.6, 0.8, A.pop(0.14)) + circle(14.6, 11.6, 0.8, A.pop(0.17)) + path("M10.4 14.8a2 2 0 0 0 3.2 0", A.draw(0.2))));
  P.push(icon("cat", CAT, ["pet", "kitten", "meow"],
    path("M5 12.2c0-4 3-6.8 7-6.8s7 2.8 7 6.8-3 7.2-7 7.2-7-3.2-7-7.2Z", A.draw()) +
    polygon("5.6,7.6 4.4,3.4 8.2,5.6", A.pop(0.1)) + polygon("18.4,7.6 19.6,3.4 15.8,5.6", A.pop(0.14)) +
    circle(9.4, 11.8, 0.8, A.pop(0.18)) + circle(14.6, 11.8, 0.8, A.pop(0.2)) + path("M11,14.6 12,15.6 13,14.6", A.draw(0.24))));
  P.push(icon("bird", CAT, ["flying", "tweet", "wing"],
    path("M4.2 12.4c0-4 3.2-7 7.2-7 4.2 0 6.6 2.6 8.4 6.4-2 .4-3.2 1.6-3.6 3.4-2.8.2-4.8 1-6.2 2.6-2.8 0-5.8-2.2-5.8-5.4Z", A.draw()) +
    circle(14.6, 8.6, 0.8, A.pop(0.12)) + path("M18.2 9l2.4-.8-1.8 1.8", A.pop(0.16))));
  P.push(icon("fish", CAT, ["swim", "sea life", "aquarium"],
    path("M3.6 12c2.8-3.6 6.2-5.4 10-5.4 3.2 0 5.6 1.4 6.8 3.8-1.2 2.4-3.6 3.8-6.8 3.8-3.8 0-7.2-1.8-10-5.4 0 2.2 0 4.6 0 3.2Z", A.draw()) +
    circle(8, 11, 0.8, A.pop(0.12)) + path("M17.2 8.2c-1.2 1.2-1.2 2.6 0 3.8", A.draw(0.16)) +
    path("M3.8 12 2 8.8v6.4Z", A.pop(0.2))));
  P.push(icon("butterfly", CAT, ["wings", "insect", "flutter"],
    path("M12 5.6v12.8", A.draw()) + path("M12 8.2C10.2 5 6.6 3.8 4.8 5.4c-1.8 1.8-.6 5 1.8 6.6-2 1.2-3 3.6-1.6 5 1.6 1.6 5 .2 7-2.4", A.draw(0.08)) +
    path("M12 8.2c1.8-3.2 5.4-4.4 7.2-2.8 1.8 1.8.6 5-1.8 6.6 2 1.2 3 3.6 1.6 5-1.6 1.6-5 .2-7-2.4", A.draw(0.12)) +
    path("M12 5.6 10.8 3.8M12 5.6 13.2 3.8", A.draw(0.18))));
  P.push(icon("snail", CAT, ["slow", "shell spiral", "garden"],
    circle(14, 13, 5.6, A.draw()) + arc(14, 13, 3, 0, 300, A.draw(0.1)) +
    path("M8.6 16.2H5.2c-1 0-1.6-.8-1.2-1.8l1-2.2", A.draw(0.14)) +
    path("M4.4 11.4c-.8-1.2-.6-2.2.4-2.6M6 9.6c-.4-1.2 0-2.2 1-2.4", A.draw(0.18))));
  P.push(icon("duck", CAT, ["bird pet", "pond", "quack"],
    path("M5.2 16.8c-1.2-2.6.2-5.8 3-6.8l.6-3.2 2.4 2.4c2.8.2 4.6 1.6 5.4 3.6 2 .4 3.8 1.8 4.4 4-1.2 2.8-4.2 4.4-7.8 4.4-4.6 0-7.6-1.2-8-4.4Z", A.draw()) +
    path("M11.4 8.8 15 8.2l-1 1.6", A.pop(0.12)) + circle(11, 7.6, 0.7, A.pop(0.16))));
  P.push(icon("bone", CAT, ["dog treat", "pet care"],
    path("M7.2 14.8a2.6 2.6 0 1 1-2.2-4 2.6 2.6 0 1 1 4-2.2l7.6 7.6a2.6 2.6 0 1 1 2.2 4 2.6 2.6 0 1 1-4 2.2Z", A.draw())));
  P.push(icon("horse", CAT, ["ride", "equestrian", "stable"],
    path("M6.4 19.6c0-5 1.4-8.2 4-10.2l-.8-3.4 3.2 1.8c2.8.2 4.8 1.6 6.4 4.2 1 1.8 1.2 4 .6 6Z", A.draw()) +
    path("M14.6 8l2.8-2.2.2 3.4", A.pop(0.12)) + circle(14.2, 9, 0.75, A.pop(0.16)) +
    path("M6.4 19.6h3.2l.8-4.4", A.draw(0.2))));
  P.push(icon("rabbit", CAT, ["bunny", "pet", "hop"],
    path("M8.2 9.6C7 6.6 7.2 3.8 8.4 3.4c1.4-.4 2.8 2 3.2 5", A.draw()) +
    path("M12.6 8.6c1-3.2 2.8-5.4 4-4.8 1.2.8.4 3.8-1.2 6.2", A.draw(0.06)) +
    circle(11.8, 13.8, 5, A.draw(0.12)) + circle(9.8, 13, 0.75, A.pop(0.16)) + circle(13.8, 13, 0.75, A.pop(0.19)) +
    path("M10.8 15.8a1.6 1.6 0 0 0 2 0", A.draw(0.22))));
}

/* ================= travel & places ================= */
{
  const CAT = "places";
  P.push(icon("map-pin", CAT, ["location", "place", "marker"],
    path("M12 21c4-4.4 6-7.6 6-10.2A6 6 0 0 0 6 10.8c0 2.6 2 5.8 6 10.2Z", A.draw()) + circle(12, 10.6, 2.3, A.pop(0.12))));
  P.push(icon("map", CAT, ["navigation", "atlas", "guide"],
    path("M3.4 6.2 8.8 4.2 15 6.4 20.6 4.2v13.6L15 20 8.8 17.8 3.4 19.8Z", A.draw()) +
    line(8.8, 4.2, 8.8, 17.8, A.draw(0.12)) + line(15, 6.4, 15, 20, A.draw(0.16))));
  P.push(icon("compass-2", CAT, ["explore", "direction", "navigate"],
    circle(12, 12, 8.6, A.draw()) + polygon("15.4,8.6 13.6,13.6 8.6,15.4 10.4,10.4", A.pop(0.12))));
  P.push(icon("globe", CAT, ["world", "earth", "international"],
    circle(12, 12, 8.6, A.draw()) + ellipse(12, 12, 3.6, 8.6, A.draw(0.1)) + line(3.6, 12, 20.4, 12, A.draw(0.14))));
  P.push(icon("plane-takeoff", CAT, ["departure", "flight", "airport"],
    path("M2.8 17.6h18.4", A.draw()) + path("M3.8 12.4 5.6 6.2l2.6 1.2 3.4-2.4 2 .8-1.4 3 4.6 2.4 3-1.2 1.2 1.8-3.4 2.6.2 3-2-.4-1.6-2.6-3.4 1.6-.2 2-1.8-.6-.4-3-2.8 1.2Z", A.draw(0.08))));
  P.push(icon("plane-landing", CAT, ["arrival", "flight", "airport"],
    path("M2.8 19.6h18.4", A.draw()) + path("M3.4 11.2l2-5.4 2.4 1 2.8-2 2 .8-1 2.8 4.6 2 3-1 1.2 1.6-3.2 2.4.2 2.8-2-.4-1.6-2.4-3.4 1.4-.2 1.8-1.8-.6-.4-2.8-2.8 1Z", A.draw(0.08))));
  P.push(icon("car", CAT, ["drive", "auto", "vehicle"],
    path("M4.4 14.4 5.8 9a1.8 1.8 0 0 1 1.8-1.4h8.8A1.8 1.8 0 0 1 18.2 9l1.4 5.4", A.draw()) +
    rect(3.4, 14.4, 17.2, 3.6, 1.6, A.pop(0.1)) + circle(7, 18.2, 1.6, A.pop(0.16)) + circle(17, 18.2, 1.6, A.pop(0.2))));
  P.push(icon("bus", CAT, ["transit", "public transport", "commute"],
    rect(4, 3.8, 16, 13.4, 2, A.draw()) + line(4, 11.6, 20, 11.6, A.draw(0.1)) +
    circle(7.6, 18.6, 1.5, A.pop(0.14)) + circle(16.4, 18.6, 1.5, A.pop(0.18)) + line(4, 14.4, 4, 17.2, A.draw(0.2)) + line(20, 14.4, 20, 17.2, A.draw(0.22))));
  P.push(icon("bike", CAT, ["cycle", "bicycle", "ride"],
    circle(6.2, 16.6, 3.4, A.draw()) + circle(17.8, 16.6, 3.4, A.draw(0.08)) +
    path("M6.2 16.6 10 8.6h4.2l3.6 8", A.draw(0.12)) + polyline("8.6,8.6 12,8.6 14.2,12", A.draw(0.16)) +
    line(12, 16.6, 15.2, 8.6, A.draw(0.2))));
  P.push(icon("train", CAT, ["rail", "metro", "subway"],
    rect(5, 3.6, 14, 12.4, 2.6, A.draw()) + line(5, 10.6, 19, 10.6, A.draw(0.1)) +
    circle(8.6, 13.2, 1, A.pop(0.14)) + circle(15.4, 13.2, 1, A.pop(0.17)) +
    polyline("8,20 10,16", A.draw(0.2)) + polyline("16,20 14,16", A.draw(0.22))));
  P.push(icon("ship", CAT, ["boat", "sail", "voyage"],
    path("M4 15.4h16l-1.8 4.2H5.8Z", A.draw()) + line(12, 15.4, 12, 4.6, A.draw(0.1)) +
    path("M12 5.6c3.2.8 5.2 2.8 5.8 5.8H12", A.draw(0.14)) + path("M12 8.2 7.4 9.6l4.6 1.2", A.draw(0.18))));
  P.push(icon("fuel", CAT, ["gas station", "petrol", "charge up"],
    path("M4.2 20.4V6.2a1.8 1.8 0 0 1 1.8-1.8h6.2a1.8 1.8 0 0 1 1.8 1.8v14.2H4.2Z", A.draw()) +
    path("M3.4 20.4h11.6", A.draw(0.1)) + path("M6.8 8h4.6v3.4H6.8Z", A.pop(0.14)) +
    path("M14 10h2.8a1.6 1.6 0 0 1 1.6 1.6v4.2a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V9.2l-2.4-2.4", A.draw(0.18))));
  P.push(icon("suitcase", CAT, ["luggage", "travel", "trip"],
    rect(4, 7.4, 16, 12.2, 2, A.draw()) + path("M9.2 7.4V5.8a1.6 1.6 0 0 1 1.6-1.6h2.4a1.6 1.6 0 0 1 1.6 1.6v1.6", A.draw(0.1)) +
    line(4, 12, 20, 12, A.draw(0.14))));
  P.push(icon("tent", CAT, ["camp", "outdoor stay", "adventure"],
    path("M12 4.2 3.4 19.6h17.2Z", A.draw()) + path("M12 4.2v15.4", A.draw(0.12)) +
    path("M9 19.6l3-5.4 3 5.4", A.draw(0.16))));
  P.push(icon("building", CAT, ["city", "office", "tower"],
    rect(5, 3.6, 14, 17, 1.8, A.draw()) +
    [7, 11, 15, 19].map((y, i) => [8.4, 12, 15.6].map((x, j) => rect(x - 1, y - 1, 2, 1.6, 0.4, A.pop(0.02 * (i + j)))).join("")).join("") +
    rect(10.2, 17, 3.6, 3.6, 0.6, A.pop(0.2))));
  P.push(icon("house", CAT, ["home", "shelter", "stay"],
    path("M3.6 11.4 12 3.6l8.4 7.8", A.draw()) + path("M5.6 9.6v9.2a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V9.6", A.draw(0.08)) +
    rect(10, 14, 4, 6.4, 0.8, A.pop(0.16))));
  P.push(icon("castle", CAT, ["fortress", "kingdom", "historic"],
    path("M4.4 20.4V6.8l2.4 1.6 2.4-1.6 2.4 1.6 2.4-1.6 2.4 1.6 2.4-1.6v13.6Z", A.draw()) +
    rect(10, 14.4, 4, 6, 0.8, A.pop(0.12)) + line(8, 4, 8, 2.4, A.draw(0.16)) +
    path("M8 2.4h3.2L9.8 3.8 11.2 5.2H8Z", A.pop(0.2))));
}

/* ================= food & drink ================= */
{
  const CAT = "food";
  P.push(icon("coffee", CAT, ["drink", "cafe", "cup"],
    path("M5 8.4h11v6.4a5 5 0 0 1-10 0Z", A.draw()) + path("M16 9.6h1.8a2.6 2.6 0 0 1 0 5.2H16", A.draw(0.1)) +
    line(4.2, 19.8, 16.8, 19.8, A.draw(0.14)) + path("M8 2.6c-.8 1.2-.8 2.2 0 3.4M11.4 2.6c-.8 1.2-.8 2.2 0 3.4", A.draw(0.18))));
  P.push(icon("cup", CAT, ["tea", "mug", "hot drink"],
    path("M5.2 4.6h10.6l-.8 13.6a1.8 1.8 0 0 1-1.8 1.6H7.8a1.8 1.8 0 0 1-1.8-1.6Z", A.draw()) +
    path("M5.2 4.6c2.8 1.2 7.8 1.2 10.6 0", A.draw(0.12))));
  P.push(icon("ice-cream", CAT, ["dessert", "cone", "sweet"],
    path("M7.2 10.4a4.8 4.8 0 0 1 9.6 0Z", A.draw()) + path("M7.6 10.4h8.8L12 20.6Z", A.draw(0.1)) +
    circle(10, 7.4, 0, A.fade()) + path("M9.6 8.2a1.4 1.4 0 1 1 1.8-1.8M13.8 7.4a1.4 1.4 0 1 1 1.4 1.8", A.draw(0.16))));
  P.push(icon("pizza", CAT, ["slice", "food", "cheese"],
    path("M12 3.4 4.2 18.2a15.6 15.6 0 0 0 15.6 0Z", A.draw()) + path("M6.2 12.4a11 11 0 0 0 11.6 0", A.draw(0.1)) +
    circle(10, 13.6, 1, A.pop(0.14)) + circle(13.8, 11, 1, A.pop(0.17)) + circle(11.6, 16.4, 1, A.pop(0.2))));
  P.push(icon("burger", CAT, ["fast food", "sandwich", "meal"],
    path("M4 8.6a8 8 0 0 1 16 0Z", A.draw()) + line(4, 12, 20, 12, A.draw(0.1)) +
    path("M4.4 15.2h15.2a3 3 0 0 1-3 3H7.4a3 3 0 0 1-3-3Z", A.draw(0.14))));
  P.push(icon("apple-fruit", CAT, ["fruit", "snack", "healthy"],
    path("M12 7c-4.4-2.6-8 .4-8 4.4 0 4.8 3.2 9 5.4 9 1.2 0 1.8-.6 2.6-.6s1.4.6 2.6.6c2.2 0 5.4-4.2 5.4-9 0-4-3.6-7-8-4.4Z", A.draw()) +
    path("M12 7c0-2 1.2-3.4 3-3.8", A.draw(0.12)) + path("M12 5.6c-1.2-1-2.6-1.2-3.8-.6", A.draw(0.16))));
  P.push(icon("carrot", CAT, ["vegetable", "healthy", "food"],
    path("M9.6 12.4 4.2 20.4c2.2 1 4.6-.2 8.4-4 2.4-2.4 4.2-5 5.2-7.4-2.6.4-5.4 1.2-8.2 3.4Z", A.draw()) +
    path("M17.8 9c.4-1.8 1.6-3 3.2-3.2-.2 1.8-1.2 3-3.2 3.2Z", A.draw(0.12)) +
    line(9, 13.2, 7.2, 15, A.draw(0.16)) + line(11, 15.2, 9.2, 17, A.draw(0.19))));
  P.push(icon("bottle", CAT, ["drink bottle", "beverage", "juice"],
    path("M10 2.6h4v3.2l1.4 2.2a4 4 0 0 1 .6 2.2v9a1.8 1.8 0 0 1-1.8 1.8H9.8a1.8 1.8 0 0 1-1.8-1.8v-9a4 4 0 0 1 .6-2.2L10 5.8Z", A.draw()) +
    line(8, 13, 16, 13, A.draw(0.12)) + line(8, 16.4, 16, 16.4, A.draw(0.16))));
  P.push(icon("cake-slice", CAT, ["dessert", "birthday", "treat"],
    path("M4.2 12.2c0-2 1.8-3.6 4-3.6h7.6c2.2 0 4 1.6 4 3.6v5.8a1.8 1.8 0 0 1-1.8 1.8H6a1.8 1.8 0 0 1-1.8-1.8Z", A.draw()) +
    path("M4.2 12.2c1.6 1.2 3.2 1.2 4.8 0 1.6 1.2 3.2 1.2 4.8 0 1.6 1.2 3.2 1.2 4.8 0", A.draw(0.1)) +
    line(12, 8.6, 12, 5.4, A.draw(0.16)) + circle(12, 4.2, 1, A.pop(0.2))));
  P.push(icon("utensils", CAT, ["cutlery", "dining", "restaurant"],
    path("M7 2.8v18.4", A.draw()) + path("M4.6 2.8v5.2a2.4 2.4 0 0 0 4.8 0V2.8", A.draw(0.1)) +
    path("M16.2 2.8c-1.8 2-2.4 4.2-2.4 7.4h3.6v8.2", A.draw(0.14))));
  P.push(icon("cocktail", CAT, ["drink", "bar", "party"],
    path("M4 4.6h16L12 13.4Z", A.draw()) + line(12, 13.4, 12, 19.8, A.draw(0.1)) + line(7.8, 19.8, 16.2, 19.8, A.draw(0.14)) +
    path("M16.6 4.6 19 2.6", A.draw(0.18)) + circle(18.4, 2.4, 1, A.pop(0.2))));
  P.push(icon("bowl", CAT, ["soup", "meal", "dish"],
    arc(12, 11, 8, 0, 180, A.draw()) + line(4, 11, 20, 11, A.draw(0.1)) +
    path("M8 4.6c-.6 1-.6 1.8 0 2.8M11 4c-.6 1-.6 1.8 0 2.8M14 4.6c-.6 1-.6 1.8 0 2.8", A.draw(0.16))));
}

export default P;
