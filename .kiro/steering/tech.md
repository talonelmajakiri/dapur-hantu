# Steering — Tech (Dapur Hantu)

## Stack

- Situs statis: HTML + CSS + JavaScript vanilla. Tanpa framework, tanpa
  build step, tanpa backend, tanpa database.
- Font: Google Fonts (Baloo 2 untuk judul, Nunito untuk isi) dengan fallback
  font sistem bila offline.
- Audio: WebAudio API (noise yang difilter) — opsional, dimulai hanya
  setelah interaksi pengguna.

## Konvensi

- Semua teks antarmuka berbahasa Indonesia.
- Data resep tinggal di `recipes.js` sebagai konstanta `RECIPES` dan
  `PANTRY`. Jangan mencampur data dengan logika render.
- Logika pencocokan/pencarian adalah fungsi murni di `recipes.js` dan harus
  bisa diuji di Node tanpa DOM (`module.exports` guard).
- `app.js` hanya mengurus DOM: render, state pilihan bahan, modal, suara.
- CSS memakai custom properties untuk token tema (lihat design.md).
- Jangan menambahkan dependensi runtime baru tanpa alasan yang dicatat.

## Kualitas

- `node --check` harus lolos untuk semua file JS sebelum commit.
- Fungsi murni harus punya smoke test Node (lihat design.md).
- Semua file harus tersaji HTTP 200 dari server statis lokal.
- Hormati `prefers-reduced-motion`: matikan animasi kabut/kunang-kunang.

## Yang TIDAK dilakukan

- Tidak ada panggilan API eksternal (selain font Google).
- Tidak ada penyimpanan data pengguna di server (belum ada server).
- Tidak ada kredensial, kunci API, atau rahasia apa pun di repo.
