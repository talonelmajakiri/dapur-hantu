# Design — Dapur Hantu (Haunted Kitchen)

## Overview

Aplikasi web satu halaman (SPA statis) tanpa backend. Semua data resep
disimpan di `recipes.js`, semua logika pencocokan adalah fungsi murni yang
bisa diuji di Node, dan semua tampilan dirender oleh `app.js`.

## Architecture

```
index.html      Struktur halaman + pemuatan CSS/JS
styles.css      Tema malam berhantu (CSS murni, tanpa framework)
recipes.js      Data 12 resep + fungsi murni pencocokan/pencarian
app.js          Render UI, state pilihan bahan, modal detail, suara
```

Tidak ada build step, tidak ada dependensi runtime. Font diambil dari Google
Fonts (Baloo 2 + Nunito) dengan fallback ke font sistem bila offline.

## Data Model

```js
{
  id: "nasi-goreng-tengah-malam",
  name: "Nasi Goreng Tengah Malam",
  desc: "…",
  emoji: "🍚",
  category: "Nasi",          // Nasi | Sup | Manis | Mie | Gorengan | Ayam | Telur | Sayur
  time: 20,                  // menit
  servings: 2,
  difficulty: "Mudah",       // Mudah | Sedang
  spook: 1,                  // 1–3, "Tingkat Seram" (hanya untuk seru-seruan)
  ingredients: ["2 piring nasi putih dingin", …],   // tampil, dengan takaran
  keys: ["nasi", "telur", …],                       // kunci pencocokan (normalisasi)
  steps: ["…", …],           // tepat 6 langkah
  tip: "…"                   // "Bisikan Hantu"
}
```

`PANTRY` adalah daftar ~25 bahan dapur yang bisa dipilih pengguna sebagai chip.

## Matching Algorithm

`matchCount(recipe, selected)` — jumlah `recipe.keys` yang ada di `selected`.

`rankRecipes(recipes, selected)` — urutkan salinan resep:
1. `matchCount` terbesar dulu,
2. lalu jumlah bahan yang belum dimiliki (`keys.length - matchCount`) terkecil,
3. lalu urutan asli (stabil).

Bila `selected` kosong, kembalikan urutan asli tanpa perubahan.

`searchRecipes(recipes, query)` — saring berdasarkan nama/deskripsi/kategori
(mengandung query, case-insensitive).

## UI Structure

- **Header:** bulan, koki hantu (SVG), judul "Dapur Hantu", tagline, tombol suara.
- **Hero:** "Ada bahan apa di dapurmu malam ini?" + chip bahan + tombol reset.
- **Filter bar:** kotak pencarian + filter kategori.
- **Grid resep:** kartu berisi emoji, nama, waktu/porsi/kesulitan, badge
  "Cocok X dari Y bahan" (bila bahan dipilih), dan "Tingkat Seram".
- **Modal detail:** bahan (✓ dimiliki / ○ belum), 6 langkah, Bisikan Hantu.
- **Footer:** kredit Dapur Apple Chery + Kiroween 2026.

## Theme Tokens

- Langit malam: `#14102e` → `#241a4d` (gradasi vertikal)
- Lentera hangat: `#ffb347` (aksen), `#f5a623`
- Hantu/kabut: `#e8e6ff` (teks pucat), kabut `rgba(232,230,255,0.06)`
- Kayu dapur: `#3a2a1e`
- Kartu: `rgba(255,255,255,0.06)` dengan border `rgba(255,179,71,0.25)`
- Teks utama: `#f4f1ff`, teks redup: `#b9b3d9`

Animasi: kabut bergerak (dua lapisan gradasi, keyframes 60s), kunang-kunang
(titik cahaya melayang), hantu melayang (translateY halus). Semua animasi
CSS murni; bila pengguna memakai `prefers-reduced-motion`, animasi dimatikan.

## Sound (opsional)

Tombol suara menghidupkan/mematikan ambience WebAudio: noise cokelat yang
difilter (desis wajan pelan) + bunyi "pop" acak pelan (api kayu). Audio hanya
dimulai setelah interaksi pengguna (aturan autoplay browser). Bila WebAudio
tidak tersedia, tombol disembunyikan — aplikasi tetap berfungsi penuh.

## Testing

- `node --check` untuk semua file JS.
- Server statis lokal (`python3 -m http.server`) + `curl` untuk memastikan
  semua file tersaji (HTTP 200).
- Smoke test Node untuk fungsi murni di `recipes.js`: tiga skenario
  (bahan nasi/telur, bahan pisang/santan, tanpa bahan) dengan hasil yang
  diharapkan tercetak.
