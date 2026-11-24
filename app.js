/* Dapur Hantu — logika UI (render, state, modal, suara).
 * Data + fungsi murni ada di recipes.js.
 */

(function () {
  "use strict";

  var selected = new Set();
  var activeCategory = "Semua";
  var query = "";

  var chipsEl = document.getElementById("chips");
  var gridEl = document.getElementById("grid");
  var infoEl = document.getElementById("resultInfo");
  var emptyEl = document.getElementById("emptyState");
  var searchEl = document.getElementById("searchInput");
  var catEl = document.getElementById("categoryFilter");
  var modalEl = document.getElementById("modal");
  var modalBodyEl = document.getElementById("modalBody");
  var soundBtn = document.getElementById("soundBtn");

  var CATEGORIES = ["Semua", "Nasi", "Mie", "Ayam", "Sup", "Manis", "Gorengan", "Telur", "Sayur"];

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function spookLabel(n) {
    var ghosts = "";
    for (var i = 0; i < n; i++) ghosts += "👻";
    return ghosts + " Tingkat Seram " + n + "/3";
  }

  /* --- Render chip bahan --- */
  PANTRY.forEach(function (item) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "chip";
    b.textContent = item;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      if (selected.has(item)) {
        selected.delete(item);
        b.classList.remove("on");
        b.setAttribute("aria-pressed", "false");
      } else {
        selected.add(item);
        b.classList.add("on");
        b.setAttribute("aria-pressed", "true");
      }
      renderGrid();
    });
    chipsEl.appendChild(b);
  });

  document.getElementById("resetBtn").addEventListener("click", function () {
    selected.clear();
    var chips = chipsEl.querySelectorAll(".chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.remove("on");
      chips[i].setAttribute("aria-pressed", "false");
    }
    renderGrid();
  });

  /* --- Filter kategori --- */
  CATEGORIES.forEach(function (cat) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "cat" + (cat === "Semua" ? " on" : "");
    b.textContent = cat;
    b.addEventListener("click", function () {
      activeCategory = cat;
      var btns = catEl.querySelectorAll(".cat");
      for (var i = 0; i < btns.length; i++) btns[i].classList.remove("on");
      b.classList.add("on");
      renderGrid();
    });
    catEl.appendChild(b);
  });

  searchEl.addEventListener("input", function () {
    query = searchEl.value;
    renderGrid();
  });

  /* --- Daftar resep yang tampil --- */
  function visibleRecipes() {
    var list = rankRecipes(RECIPES, Array.from(selected));
    if (activeCategory !== "Semua") {
      list = list.filter(function (r) { return r.category === activeCategory; });
    }
    return searchRecipes(list, query);
  }

  function renderGrid() {
    var list = visibleRecipes();
    gridEl.innerHTML = "";
    emptyEl.hidden = list.length !== 0;

    if (selected.size > 0) {
      infoEl.textContent = "Bahan dipilih: " + selected.size + " · " + list.length +
        " resep, diurutkan dari yang paling cocok.";
    } else if (query) {
      infoEl.textContent = list.length + " resep cocok dengan \"" + query + "\".";
    } else {
      infoEl.textContent = "12 resep dari e-book Dapur Apple Chery — pilih bahan di atas untuk mencari yang bisa kamu masak.";
    }

    list.forEach(function (r) {
      var card = document.createElement("article");
      card.className = "card";
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Lihat resep " + r.name);

      var m = selected.size > 0 ? matchCount(r, Array.from(selected)) : -1;
      var matchHtml = "";
      if (m >= 0) {
        var cls = m >= Math.ceil(r.keys.length / 2) ? "match" : "match low";
        matchHtml = '<span class="' + cls + '">Cocok ' + m + " dari " + r.keys.length + " bahan</span>";
      }

      card.innerHTML =
        '<div class="card-emoji" aria-hidden="true">' + r.emoji + "</div>" +
        "<h3>" + esc(r.name) + "</h3>" +
        "<p>" + esc(r.desc) + "</p>" +
        '<div class="meta"><span>⏱ ' + r.time + " mnt</span><span>🍽 " + r.servings +
        " porsi</span><span>📶 " + esc(r.difficulty) + "</span><span>🏷 " + esc(r.category) + "</span></div>" +
        matchHtml + '<span class="spook">' + spookLabel(r.spook) + "</span>";

      function open() { openModal(r); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      gridEl.appendChild(card);
    });
  }

  /* --- Modal detail --- */
  function openModal(r) {
    var m = matchCount(r, Array.from(selected));
    var ingHtml = r.ingredients.map(function (ing) {
      var have = false;
      for (var i = 0; i < r.keys.length; i++) {
        if (ing.toLowerCase().indexOf(r.keys[i]) !== -1 && selected.has(r.keys[i])) { have = true; break; }
      }
      var cls = selected.size > 0 ? (have ? "ing-have" : "ing-miss") : "";
      var mark = selected.size > 0 ? (have ? "✓ " : "○ ") : "• ";
      return '<li class="' + cls + '">' + mark + esc(ing) + "</li>";
    }).join("");

    var stepsHtml = r.steps.map(function (s) {
      return "<li>" + esc(s) + "</li>";
    }).join("");

    var matchLine = "";
    if (selected.size > 0) {
      matchLine = "<p><strong>Kamu punya " + m + " dari " + r.keys.length +
        " bahan kunci resep ini.</strong></p>";
    }

    modalBodyEl.innerHTML =
      '<div class="card-emoji" aria-hidden="true">' + r.emoji + "</div>" +
      '<h2 id="modalTitle">' + esc(r.name) + "</h2>" +
      '<div class="meta"><span>⏱ ' + r.time + " mnt</span><span>🍽 " + r.servings +
      " porsi</span><span>📶 " + esc(r.difficulty) + "</span><span>🏷 " + esc(r.category) +
      '</span></div><p style="color:var(--ink-dim)">' + esc(r.desc) + "</p>" +
      matchLine +
      "<h3>Bahan</h3><ul>" + ingHtml + "</ul>" +
      "<h3>Cara Membuat</h3><ol>" + stepsHtml + "</ol>" +
      '<div class="tip-box"><strong>👻 Bisikan Hantu:</strong> ' + esc(r.tip) + "</div>";

    modalEl.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalEl.hidden = true;
    document.body.style.overflow = "";
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  modalEl.addEventListener("click", function (e) {
    if (e.target === modalEl) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalEl.hidden) closeModal();
  });

  /* --- Suara dapur (WebAudio, opsional) --- */
  var audioCtx = null;
  var audioNodes = null;
  var soundOn = false;

  function startSound() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      audioCtx = new AC();
      var len = audioCtx.sampleRate * 2;
      var buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
      var data = buffer.getChannelData(0);
      var last = 0;
      for (var i = 0; i < len; i++) {
        var white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02; /* brown-ish noise */
        data[i] = last * 3.2;
      }
      var src = audioCtx.createBufferSource();
      src.buffer = buffer;
      src.loop = true;
      var filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 420;
      var gain = audioCtx.createGain();
      gain.gain.value = 0.0;
      gain.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      src.start();
      audioNodes = { src: src, gain: gain };
      return true;
    } catch (err) {
      return false;
    }
  }

  function stopSound() {
    if (audioNodes) {
      try {
        audioNodes.gain.gain.linearRampToValueAtTime(0.0, audioCtx.currentTime + 0.4);
        audioNodes.src.stop(audioCtx.currentTime + 0.5);
      } catch (err) { /* abaikan */ }
      audioNodes = null;
    }
    if (audioCtx) {
      try { audioCtx.close(); } catch (err) { /* abaikan */ }
      audioCtx = null;
    }
  }

  if (!window.AudioContext && !window.webkitAudioContext) {
    soundBtn.style.display = "none";
  } else {
    soundBtn.addEventListener("click", function () {
      soundOn = !soundOn;
      if (soundOn) {
        if (!startSound()) {
          soundOn = false;
          soundBtn.textContent = "🔇 Suara Dapur";
          soundBtn.setAttribute("aria-pressed", "false");
          return;
        }
        soundBtn.textContent = "🔊 Suara Dapur";
      } else {
        stopSound();
        soundBtn.textContent = "🔇 Suara Dapur";
      }
      soundBtn.setAttribute("aria-pressed", String(soundOn));
    });
  }

  renderGrid();
})();
