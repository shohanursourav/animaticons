/* Docs page: FAQ accordion + scroll-spy */
(function () {
  "use strict";
  const F = window.Animaticons;
  F.ready(() => {
    // FAQ accordion
    F.$$(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        item.classList.toggle("open");
      });
    });

    // scroll-spy
    const links = F.$$(".docs-side a");
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = "#" + e.target.id;
          links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === id));
        }
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach((s) => spy.observe(s));

    links.forEach((a) => {
      a.addEventListener("click", () => {
        links.forEach((x) => x.classList.remove("is-active"));
        a.classList.add("is-active");
      });
    });
  });
})();
