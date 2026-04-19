// Homepage hero crossfade with click-to-select dots. Cycles the
// `is-active` class across .tmslab-hero-img elements every few
// seconds. CSS handles the actual opacity transition; this just
// flips which image is "on" and renders/wires the dot controls.
//
// Skipped entirely on single-image setups. Auto-rotation is
// skipped (but dots still work) when the user prefers reduced
// motion — manual control stays available.

(function () {
  "use strict";

  var hero = document.querySelector(".tmslab-hero");
  if (!hero) return;

  var imgs = hero.querySelectorAll(".tmslab-hero-img");
  if (imgs.length < 2) return;

  // 6s per slide = 5s hold + 1s CSS crossfade (see .tmslab-hero-img).
  var INTERVAL_MS = 6000;
  var prefersReduce =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var i = 0;
  var timer = null;

  function showIndex(next) {
    if (next === i) return;
    imgs[i].classList.remove("is-active");
    imgs[next].classList.add("is-active");
    if (dots[i]) {
      dots[i].classList.remove("is-active");
      dots[i].setAttribute("aria-current", "false");
    }
    if (dots[next]) {
      dots[next].classList.add("is-active");
      dots[next].setAttribute("aria-current", "true");
    }
    i = next;
  }

  function advance() {
    showIndex((i + 1) % imgs.length);
  }

  function startTimer() {
    if (prefersReduce) return;
    stopTimer();
    timer = window.setInterval(advance, INTERVAL_MS);
  }

  function stopTimer() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  // Build the dot controls. One <button> per image, live inside
  // a <nav> so screen readers announce the set as navigation.
  var dotNav = document.createElement("nav");
  dotNav.className = "tmslab-hero-dots";
  dotNav.setAttribute("aria-label", "Hero image navigation");

  var dots = [];
  for (var idx = 0; idx < imgs.length; idx++) {
    (function (target) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tmslab-hero-dot" + (target === 0 ? " is-active" : "");
      btn.setAttribute("aria-label", "Show image " + (target + 1) + " of " + imgs.length);
      btn.setAttribute("aria-current", target === 0 ? "true" : "false");
      btn.addEventListener("click", function () {
        showIndex(target);
        startTimer(); // reset auto-advance so user's pick stays visible for a full cycle
      });
      dotNav.appendChild(btn);
      dots.push(btn);
    })(idx);
  }

  hero.appendChild(dotNav);

  startTimer();
})();
