/* Viking Infra Solutions — minimal site JS
   - mobile nav toggle
   - close menu on link click / resize
   - contact form: mailto fallback (no backend needed)
*/
(function () {
  "use strict";

  var toggle = document.querySelector(".nav__toggle");
  var links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 940) links.classList.remove("is-open");
    });
  }

  /* Current year in footer */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  /* Header gets a shadow once the page is scrolled */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Reveal-on-scroll — progressive enhancement.
     If IntersectionObserver is missing, nothing is hidden. */
  if ("IntersectionObserver" in window) {
    var targets = document.querySelectorAll(
      ".card, .split, .section-head, .project, .sectors li, .logos li, .stats > div, .hero__stat"
    );
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    targets.forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      io.observe(el);
    });
  }

  /* Contact form -> opens the visitor's email client.
     Replace this with a real form handler (Formspree, Netlify Forms, etc.)
     when you have hosting set up. */
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var to = form.getAttribute("data-mailto") || "info@example.com";
      var subject = encodeURIComponent(
        "Website enquiry from " + (data.get("name") || "visitor")
      );
      var body = encodeURIComponent(
        "Name: " + (data.get("name") || "") + "\n" +
        "Email: " + (data.get("email") || "") + "\n" +
        "Phone: " + (data.get("phone") || "") + "\n" +
        "Service: " + (data.get("service") || "") + "\n\n" +
        (data.get("message") || "")
      );
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }
})();
