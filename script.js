(function () {
  "use strict";

  var config = window.DAINISHA_CONFIG || {};

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- WhatsApp / contact links ---------- */
  function buildWhatsAppLink() {
    var number = (config.WHATSAPP_NUMBER || "").replace(/[^\d]/g, "");
    if (!number || config.WHATSAPP_NUMBER === "REPLACE_WITH_NUMBER") return "#";
    return "https://wa.me/" + number;
  }

  var waLink = buildWhatsAppLink();
  ["ctaWhatsappPrimary", "ctaWhatsappSecondary"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", waLink);
  });

  var igLink = document.getElementById("footerInstagram");
  if (igLink && config.INSTAGRAM_URL && config.INSTAGRAM_URL !== "REPLACE_WITH_URL") {
    igLink.setAttribute("href", config.INSTAGRAM_URL);
  }
  var ytLink = document.getElementById("footerYoutube");
  if (ytLink && config.YOUTUBE_URL && config.YOUTUBE_URL !== "REPLACE_WITH_URL") {
    ytLink.setAttribute("href", config.YOUTUBE_URL);
  }
  var liLink = document.getElementById("footerLinkedin");
  if (liLink && config.LINKEDIN_URL && config.LINKEDIN_URL !== "REPLACE_WITH_URL") {
    liLink.setAttribute("href", config.LINKEDIN_URL);
  }

  /* ---------- Scroll reveal (subtle, one treatment) ---------- */
  var revealTargets = document.querySelectorAll(
    ".problem-card, .stage, .service-block, .timeline-step, .who-card, .work-card, .why-item"
  );

  revealTargets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();
