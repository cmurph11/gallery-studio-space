/* gallery studio space — global script (used by every page)
   1. Picks the mobile or desktop background video (every page).
   2. Shrinks the logo on phones if needed so each line fits on one line. */
(function () {
  var mobile = window.matchMedia('(max-width: 767px)');

  /* ---------- 1. background video ---------- */
  var video = document.querySelector('.bg-video');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function pickVideo() {
    if (!video) return;
    var isMobile = mobile.matches;
    var src = isMobile ? video.dataset.mobile : video.dataset.desktop;
    video.poster = isMobile ? video.dataset.posterMobile : video.dataset.posterDesktop;

    // Visitors who turned on "reduce motion" see the still poster only.
    if (reduceMotion.matches) return;

    if (video.getAttribute('src') !== src) {
      video.src = src;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    }
  }

  /* ---------- 2. fit the logo on phones ---------- */
  var logo = document.querySelector('.logo');
  function fitLogo() {
    if (!logo) return;
    logo.style.fontSize = '';                  // start from the size in style.css
    if (!mobile.matches) return;
    var edge = parseFloat(getComputedStyle(logo.closest('.site-header')).left) || window.innerWidth * 0.04;
    var available = (window.innerWidth - edge * 2) * 0.98;
    var widest = 0;
    logo.querySelectorAll('span').forEach(function (s) {
      var r = document.createRange();
      r.selectNodeContents(s);
      widest = Math.max(widest, r.getBoundingClientRect().width);
    });
    if (widest > available) {
      var size = parseFloat(getComputedStyle(logo).fontSize);
      logo.style.fontSize = (size * available / widest) + 'px';
    }
  }

  pickVideo();
  fitLogo();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitLogo);
  window.addEventListener('resize', fitLogo);
  if (mobile.addEventListener) mobile.addEventListener('change', function () { pickVideo(); fitLogo(); });
})();
