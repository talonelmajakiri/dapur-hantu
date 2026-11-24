# Tasks — Dapur Hantu (v1 fondasi, 22 Nov 2026)

> Checklist pelaksanaan spec. Centang `[x]` hanya bila sudah dikerjakan dan
> diuji. Jangan menandai selesai sebelum ada bukti pengujian.

## Fase 1 — Spek (spec-driven)

- [x] Tulis requirements.md (EARS, 5 requirement)
- [x] Tulis design.md (arsitektur, data model, algoritma, tema)
- [x] Tulis tasks.md (file ini)
- [x] Tulis steering docs (.kiro/steering/: product, tech, structure)

## Fase 2 — Data resep

- [x] Salin 12 resep asli dari e-book Dapur Apple Chery ke recipes.js
      (bahan + takaran, 6 langkah, tips, waktu, porsi, kesulitan)
- [x] Tambahkan kunci pencocokan (keys) dan daftar bahan dapur (PANTRY)

## Fase 3 — Prototipe web

- [x] index.html — struktur halaman (header, hero, chip bahan, filter,
      grid resep, modal detail, footer)
- [x] styles.css — tema dapur berhantu (langit malam, lentera, kabut,
      kunang-kunang, koki hantu SVG)
- [x] recipes.js — data + fungsi murni (matchCount, rankRecipes,
      searchRecipes), bisa diuji di Node
- [x] app.js — render chip/kartu/modal, pencarian, filter kategori,
      tombol suara WebAudio

## Fase 4 — Pengujian

- [x] `node --check` semua file JS lolos
- [x] Server statis lokal + curl: semua file tersaji HTTP 200
- [x] Smoke test Node: pencocokan bahan bekerja untuk 3 skenario
- [x] Uji manual di browser sungguhan (klik chip, buka modal, tombol suara)
      — SELESAI 24 Nov 2026: 16/16 cek lolos di Chromium sungguhan
      (CDP): 12 kartu, 25 chip, 9 kategori, ranking bahan, badge cocok,
      modal + Bisikan Hantu, Escape menutup, pencarian, filter kategori,
      reset, empty state, tanpa error JS/konsol dan tanpa request gagal.
      Uji di desktop 1280px dan HP 390px.
- [x] Perbaikan dari hasil uji: bulan tidak lagi menutupi judul di HP
      (moon 40px, judul 2rem), fonta disajikan lokal (fonts/baloo2.woff2 +
      nunito.woff2, OFL) supaya situs berfungsi tanpa CDN, favicon hantu
      inline (SVG data URI).

## Fase 5 — Dokumen hackathon

- [x] README.md (cara menjalankan + status)
- [x] LICENSE (MIT)
- [x] .gitignore
- [x] KIRO-USAGE.md — catatan JUJUR pemakaian Kiro (tanpa mengarang)
- [x] Commit awal git (b5a2214, branch main, 14 file)

## Berikutnya (revisi hari-hari berikut)

- [ ] Pakai Kiro (akun Free pengguna, atas persetujuan pengguna) untuk
      iterasi: perbaikan UI, animasi, dan fitur baru
- [ ] Tambah foto/ilustrasi tiap resep
- [ ] Mode "Masak bareng hantu" (langkah demi langkah dengan timer)
- [ ] Simpan bahan favorit di localStorage
- [x] Rekam video demo (<3 menit) — SELESAI 24 Nov 2026:
      `dapur-hantu-demo.mp4` (49,7 dtk, 1280x720, 30fps, H.264,
      1,8 MB): kartu judul 3 dtk + rekaman layar aplikasi asli 42,6 dtk
      (pilih bahan, ranking, modal resep, cari "pancake", filter Manis,
      tombol suara) + kartu akhir 4 dtk. Frame 0 terverifikasi isi asli
      (bukan blank). Direkam via Xvfb + Chromium + ffmpeg x11grab.
- [x] Tulis draf deskripsi Devpost — SELESAI 24 Nov 2026:
      `DEVPOST-DRAFT.md` (jujur soal Kiro: belum dipakai menulis kode).
- [ ] Deploy ke hosting statis (URL publik untuk submit) — menunggu repo
      GitHub publik + GitHub Pages (butuh login GitHub — `gh` belum login,
      tidak ada kredensial tersimpan; perlu parent agent / browser task).
- [ ] Submit Devpost — HANYA atas persetujuan pengguna, setelah repo +
      deploy URL ada.
