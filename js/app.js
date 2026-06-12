/* =========================================================
   A Curious Loop — app.js
   ========================================================= */

// ── Quote Engine ─────────────────────────────────────────

(function () {
  'use strict';

  // Only run on the quotes page
  const quoteText    = document.getElementById('quote-text');
  const quoteAuthor  = document.getElementById('quote-author');
  const btnPrev      = document.getElementById('btn-prev');
  const btnNext      = document.getElementById('btn-next');
  const quoteList    = document.getElementById('quote-list');

  if (!quoteText || typeof QUOTES === 'undefined' || QUOTES.length === 0) {
    if (quoteText) quoteText.textContent = '';
    if (quoteAuthor) quoteAuthor.textContent = '';
    return;
  }

  // ── State ───────────────────────────────────────────────

  // Shuffle a copy of the array for the random-walk experience
  const shuffled = shuffleArray([...QUOTES]);
  let currentIndex = 0;

  // ── Render ──────────────────────────────────────────────

  function renderQuote(index, direction) {
    const q = shuffled[index];

    // Fade out
    quoteText.classList.add('fade-out');
    quoteAuthor.classList.add('fade-out');

    setTimeout(function () {
      // Update content
      quoteText.textContent = '\u201C' + q.text + '\u201D';

      const attribution = q.source
        ? q.author + ' \u2014 ' + q.source
        : q.author;
      quoteAuthor.textContent = attribution;

      // Fade back in
      quoteText.classList.remove('fade-out');
      quoteAuthor.classList.remove('fade-out');
    }, 350);
  }

  function next() {
    currentIndex = (currentIndex + 1) % shuffled.length;
    renderQuote(currentIndex);
  }

  function prev() {
    currentIndex = (currentIndex - 1 + shuffled.length) % shuffled.length;
    renderQuote(currentIndex);
  }

  // ── Controls ────────────────────────────────────────────

  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   prev();
  });

  // ── Populate archive list ────────────────────────────────

  function buildArchive() {
    // Show all quotes in original (unsorted) order
    const fragment = document.createDocumentFragment();
    QUOTES.forEach(function (q) {
      const item = document.createElement('div');
      item.className = 'quote-item';

      const bq = document.createElement('blockquote');
      bq.textContent = '\u201C' + q.text + '\u201D';

      const cite = document.createElement('cite');
      cite.textContent = q.source
        ? q.author + ' \u2014 ' + q.source
        : q.author;

      item.appendChild(bq);
      item.appendChild(cite);
      fragment.appendChild(item);
    });
    quoteList.appendChild(fragment);
  }

  // ── Init ────────────────────────────────────────────────

  buildArchive();
  renderQuote(currentIndex);

  // ── Utility: Fisher-Yates shuffle ───────────────────────

  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }

}());

// ── Fade-in observer (all pages) ─────────────────────────

(function () {
  'use strict';

  if (!window.IntersectionObserver) return;

  const targets = document.querySelectorAll(
    '.research-item, .writing-item, .quote-item'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

}());
