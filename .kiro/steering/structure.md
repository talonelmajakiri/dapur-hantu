# Steering — Structure (Dapur Hantu)

```
dapur-hantu/
├── index.html                 Halaman utama (satu halaman)
├── styles.css                 Tema dapur berhantu
├── app.js                     Logika UI (render, state, modal, suara)
├── recipes.js                 Data 12 resep + fungsi murni pencocokan
├── README.md                  Cara menjalankan + status proyek
├── KIRO-USAGE.md              Catatan JUJUR pemakaian Kiro
├── LICENSE                    MIT
├── .gitignore
└── .kiro/
    ├── steering/
    │   ├── product.md         Visi, merek, prinsip produk
    │   ├── tech.md            Stack + konvensi teknis
    │   └── structure.md       File ini
    └── specs/
        └── dapur-hantu/
            ├── requirements.md
            ├── design.md
            └── tasks.md
```

## Aturan penamaan

- File resep dan data: huruf kecil, kata dipisah `-`.
- ID resep: slug dari nama (mis. `nasi-goreng-tengah-malam`).
- Satu tanggung jawab per file: data di `recipes.js`, tampilan di
  `index.html`/`styles.css`, interaksi di `app.js`.

## Alur kerja

1. Ubah spek dulu (requirements/design/tasks) bila perilaku berubah.
2. Baru ubah kode.
3. Uji (`node --check`, server statis + curl, smoke test Node).
4. Baru commit dengan pesan yang jelas.
