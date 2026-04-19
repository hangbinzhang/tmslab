// Flyer lightbox — vanilla JS, no dependencies. Built once on
// first flyer click/Enter/Space and reused across any future
// flyer thumbnails on the page.
//
// Markup contract: each trigger carries
//   class="tmslab-study-flyer-thumb"
//   data-flyer-src="<full image URL>"
//   data-flyer-caption="<caption text>"
//
// Close: backdrop click, × button, or Escape key.

(function () {
  "use strict";

  var thumbs = document.querySelectorAll(".tmslab-study-flyer-thumb");
  if (!thumbs.length) return;

  var lightbox = null;
  var img = null;
  var caption = null;
  var lastFocusedTrigger = null;

  function ensureLightbox() {
    if (lightbox) return;
    lightbox = document.createElement("div");
    lightbox.className = "tmslab-flyer-lightbox";
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.innerHTML = [
      '<div class="tmslab-flyer-lightbox-backdrop" data-flyer-close></div>',
      '<figure class="tmslab-flyer-lightbox-figure">',
      '  <img class="tmslab-flyer-lightbox-img" src="" alt="">',
      '  <figcaption class="tmslab-flyer-lightbox-caption"></figcaption>',
      "</figure>",
      '<button class="tmslab-flyer-lightbox-close" type="button" data-flyer-close aria-label="Close">&times;</button>',
    ].join("");
    document.body.appendChild(lightbox);

    img = lightbox.querySelector(".tmslab-flyer-lightbox-img");
    caption = lightbox.querySelector(".tmslab-flyer-lightbox-caption");

    lightbox.querySelectorAll("[data-flyer-close]").forEach(function (el) {
      el.addEventListener("click", closeFlyer);
    });
  }

  function openFlyer(trigger) {
    ensureLightbox();
    lastFocusedTrigger = trigger;
    var src = trigger.getAttribute("data-flyer-src") || "";
    var cap = trigger.getAttribute("data-flyer-caption") || "";
    img.src = src;
    img.alt = cap;
    caption.textContent = cap;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
    var closeBtn = lightbox.querySelector(".tmslab-flyer-lightbox-close");
    if (closeBtn) closeBtn.focus();
  }

  function closeFlyer() {
    if (!lightbox) return;
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === "function") {
      lastFocusedTrigger.focus();
    }
  }

  function isOpen() {
    return lightbox && lightbox.getAttribute("aria-hidden") === "false";
  }

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      openFlyer(thumb);
    });
    thumb.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openFlyer(thumb);
      }
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) {
      closeFlyer();
    }
  });
})();
