# Requirements — Dapur Hantu (Haunted Kitchen)

> Spec Kiroween 2026 · Kategori: Costume Contest · Repo: dapur-hantu
> Status: v1 (fondasi, 22 Nov 2026)

## Introduction

Dapur Hantu adalah aplikasi web resep masakan rumahan Indonesia bertema dapur
berhantu gaya Ghibli: koki hantu yang ramah, lentera hangat, kabut malam, dan
kunang-kunang. Pengguna memasukkan bahan yang ada di dapurnya, lalu aplikasi
menyarankan resep yang cocok dari 12 resep asli e-book Dapur Apple Chery.

Aplikasi ini dibangun sebagai situs statis (HTML/CSS/JS) tanpa backend dan
tanpa build step, supaya bisa dibuka lokal dan di-host di mana saja.

## Requirements

### Requirement 1 — Cari resep dari bahan di dapur

**User Story:** Sebagai pengguna yang bingung mau masak apa, saya ingin
memasukkan bahan yang ada di dapur saya, sehingga aplikasi menyarankan resep
yang bisa saya masak.

#### Acceptance Criteria

1. WHEN pengguna memilih satu atau lebih bahan dari daftar bahan dapur,
   THE SYSTEM SHALL menampilkan resep yang diurutkan berdasarkan jumlah bahan
   yang cocok (terbanyak dulu).
2. WHEN sebuah resep ditampilkan setelah bahan dipilih, THE SYSTEM SHALL
   menunjukkan jumlah bahan yang cocok (mis. "Cocok 4 dari 6 bahan").
3. WHEN tidak ada bahan yang dipilih, THE SYSTEM SHALL menampilkan semua resep
   dalam urutan aslinya.
4. WHEN pengguna mengetik di kotak pencarian, THE SYSTEM SHALL menyaring resep
   berdasarkan nama resep.

### Requirement 2 — Detail resep

**User Story:** Sebagai pengguna yang menemukan resep menarik, saya ingin
melihat bahan, langkah, dan tipsnya, sehingga saya bisa langsung memasak.

#### Acceptance Criteria

1. WHEN pengguna membuka sebuah resep, THE SYSTEM SHALL menampilkan daftar
   bahan lengkap dengan takaran, 6 langkah memasak, waktu, porsi, dan tingkat
   kesulitan.
2. WHEN resep dibuka setelah bahan dipilih, THE SYSTEM SHALL menandai bahan
   yang sudah dimiliki pengguna dan bahan yang belum dimiliki.
3. WHEN resep dibuka, THE SYSTEM SHALL menampilkan satu tips dapur
   ("Bisikan Hantu").

### Requirement 3 — Tema dapur berhantu

**User Story:** Sebagai pengunjung hackathon, saya ingin suasana dapur
berhantu yang hangat dan lucu (bukan menakutkan), sehingga aplikasi terasa
unik dan berkesan.

#### Acceptance Criteria

1. THE SYSTEM SHALL menampilkan tema malam berhantu: langit malam, lentera
   hangat, kabut bergerak, dan koki hantu.
2. THE SYSTEM SHALL tetap mudah dibaca: kontras teks cukup untuk semua kartu
   dan detail resep.

### Requirement 4 — Berfungsi lokal tanpa server

**User Story:** Sebagai pengembang, saya ingin aplikasi berjalan sebagai situs
statis, sehingga mudah diuji lokal dan di-host di mana saja.

#### Acceptance Criteria

1. THE SYSTEM SHALL berjalan sebagai situs statis (HTML/CSS/JS) yang bisa
   dibuka langsung dari file atau server statis lokal, tanpa backend dan
   tanpa build step.
2. THE SYSTEM SHALL memuat 12 resep asli dari e-book Dapur Apple Chery
   (Nasi Goreng Tengah Malam, Sup Ayam Beruap, Pancake Ceri Pagi Hari,
   Mie Goreng Jawa, Ramen Ayam ala Jepang, Pisang Goreng Madu,
   Tempe Goreng Krispi, Ayam Goreng Mentega, Martabak Manis Teflon,
   Telur Balado, Sayur Lodeh, Kolak Pisang Ubi).

### Requirement 5 — Kesiapan Kiroween

**User Story:** Sebagai peserta Kiroween 2026, saya ingin repo memenuhi syarat
hackathon, sehingga proyek bisa disubmit.

#### Acceptance Criteria

1. THE REPOSITORY SHALL berisi direktori /.kiro dengan specs dan steering docs.
2. THE REPOSITORY SHALL berisi file lisensi open source (MIT) di root.
3. THE PROJECT SHALL mendokumentasikan penggunaan Kiro secara jujur
   di KIRO-USAGE.md (tanpa mengarang).
