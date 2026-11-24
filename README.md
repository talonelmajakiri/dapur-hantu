# Dapur Hantu — Haunted Kitchen

Aplikasi web resep masakan rumahan Indonesia bertema dapur berhantu gaya
Ghibli. Masukkan bahan yang ada di dapurmu, dan koki hantu akan menyarankan
resep yang cocok dari 12 resep asli e-book **Dapur Apple Chery**.

Proyek ini dibuat untuk **Kiroween 2026** (Devpost, kategori Costume
Contest). Sudah terdaftar; batas kirim 5 Desember 2026 05:00 WIB.

## Cara menjalankan (lokal)

Tidak butuh build, tidak butuh backend. Pilih salah satu:

```bash
# 1. Buka langsung file-nya di browser:
#    klik dua kali index.html

# 2. Atau lewat server statis lokal:
python3 -m http.server 8901
# lalu buka http://localhost:8901/
```

## Fitur v1

- Pilih bahan yang ada di dapur → resep diurutkan berdasarkan kecocokan
  ("Cocok X dari Y bahan")
- Cari resep berdasarkan nama
- Filter berdasarkan kategori (Nasi, Mie, Ayam, Sup, Manis, Gorengan,
  Telur, Sayur)
- Detail resep: bahan + takaran (bahan yang dimiliki ditandai),
  6 langkah memasak, waktu, porsi, kesulitan, dan "Bisikan Hantu" (tips)
- Tema malam berhantu: lentera hangat, kabut bergerak, kunang-kunang,
  koki hantu
- Tombol suara: ambience desis wajan (WebAudio, opsional)

## Struktur repo

Lihat `.kiro/steering/structure.md`. Spek lengkap ada di
`.kiro/specs/dapur-hantu/` (requirements, design, tasks).

## Status

- v1 fondasi selesai 22 Nov 2026: spek + 12 resep + prototipe berfungsi.
- Uji browser sungguhan selesai 24 Nov 2026: 16/16 cek lolos (desktop +
  HP), tanpa error JS. Fonta disajikan lokal, tanpa CDN.
- Penggunaan Kiro dicatat secara jujur di `KIRO-USAGE.md` (Kiro belum
  dipakai menulis kode apa pun).

## Lisensi

MIT — lihat `LICENSE`.
