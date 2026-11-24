/* Dapur Hantu — data resep + fungsi murni pencocokan.
 * 12 resep asli dari e-book Dapur Apple Chery.
 * Fungsi di file ini murni (tanpa DOM) sehingga bisa diuji di Node.
 */

const RECIPES = [
  {
    id: "nasi-goreng-tengah-malam",
    name: "Nasi Goreng Tengah Malam",
    desc: "Nasi sisa semalam jadi santapan tengah malam yang gurih dan bikin nagih.",
    emoji: "🍚",
    category: "Nasi",
    time: 20,
    servings: 2,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "2 piring nasi putih dingin",
      "2 butir telur",
      "5 siung bawang merah, iris tipis",
      "3 siung bawang putih, cincang",
      "3 buah cabai merah, iris serong",
      "3 sdm kecap manis",
      "1 sdt garam dan 1/2 sdt merica",
      "2 sdm minyak goreng",
      "Pelengkap: kerupuk dan irisan mentimun"
    ],
    keys: ["nasi", "telur", "bawang merah", "bawang putih", "cabai", "kecap manis"],
    steps: [
      "Panaskan minyak, tumis bawang merah, bawang putih, dan cabai sampai harum.",
      "Geser bumbu ke pinggir wajan, masukkan 1 telur, orak-arik sampai setengah matang.",
      "Masukkan nasi, aduk rata dengan api besar supaya nasi tidak menggumpal.",
      "Tuang kecap manis, garam, dan merica. Aduk sampai warna nasi merata dan agak kering.",
      "Goreng 1 telur lagi menjadi telur mata sapi.",
      "Sajikan nasi goreng dengan telur mata sapi, kerupuk, dan mentimun."
    ],
    tip: "Nasi dingin dari kulkas membuat nasi goreng tidak lembek dan butirannya terpisah bagus."
  },
  {
    id: "sup-ayam-beruap",
    name: "Sup Ayam Beruap",
    desc: "Kuah bening yang hangat dan menenangkan, pas untuk malam yang dingin atau badan yang kurang enak.",
    emoji: "🍲",
    category: "Sup",
    time: 45,
    servings: 4,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "500 gram ayam, potong 8 bagian",
      "2 buah wortel, potong bulat",
      "2 buah kentang, potong dadu",
      "3 siung bawang putih, geprek",
      "1 ruas jahe, geprek",
      "2 batang seledri dan 2 batang daun bawang, iris",
      "1,5 liter air",
      "Garam, merica, dan kaldu bubuk secukupnya"
    ],
    keys: ["ayam", "wortel", "kentang", "bawang putih", "jahe", "daun bawang"],
    steps: [
      "Rebus ayam sampai mendidih, buang buih yang naik ke permukaan supaya kuah bening.",
      "Masukkan bawang putih dan jahe, kecilkan api.",
      "Tambahkan wortel dan kentang, masak sampai empuk, sekitar 20 menit.",
      "Bumbui garam, merica, dan kaldu bubuk. Koreksi rasa.",
      "Taburi seledri dan daun bawang, matikan api.",
      "Sajikan selagi beruap dengan nasi hangat."
    ],
    tip: "Jangan mengaduk sup terlalu sering setelah sayur masuk, supaya wortel dan kentang tidak hancur."
  },
  {
    id: "pancake-ceri-pagi-hari",
    name: "Pancake Ceri Pagi Hari",
    desc: "Pancake lembut untuk sarapan akhir pekan, ditumpuk tinggi dengan mentega, madu, dan ceri di puncaknya.",
    emoji: "🥞",
    category: "Manis",
    time: 25,
    servings: 3,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "150 gram tepung terigu",
      "2 sdt baking powder",
      "2 sdm gula pasir",
      "1 butir telur",
      "200 ml susu cair",
      "2 sdm mentega, lelehkan",
      "Sejumput garam",
      "Topping: mentega, madu, dan ceri segar"
    ],
    keys: ["tepung terigu", "telur", "gula", "susu", "mentega"],
    steps: [
      "Campur tepung, baking powder, gula, dan garam dalam satu mangkuk.",
      "Di mangkuk lain, kocok telur, susu, dan mentega leleh.",
      "Tuang bahan basah ke bahan kering, aduk sebentar saja sampai tercampur. Adonan yang sedikit bergerindil itu wajar.",
      "Panaskan teflon anti lengket dengan api kecil, oles tipis mentega.",
      "Tuang 1 sendok sayur adonan, tunggu sampai muncul gelembung di permukaan, lalu balik sekali. Masak sampai kedua sisi keemasan.",
      "Tumpuk pancake, beri mentega, siram madu, dan letakkan ceri di atasnya."
    ],
    tip: "Jangan mengaduk adonan berlebihan — pancake jadi bantat. Aduk hanya sampai tepungnya tidak terlihat lagi."
  },
  {
    id: "mie-goreng-jawa",
    name: "Mie Goreng Jawa",
    desc: "Mie goreng gurih manis khas Jawa dengan sayur segar, dimasak cepat di wajan panas.",
    emoji: "🍜",
    category: "Mie",
    time: 25,
    servings: 2,
    difficulty: "Mudah",
    spook: 2,
    ingredients: [
      "200 gram mie telur kering, rebus setengah matang, tiriskan",
      "100 gram kol, iris kasar",
      "1 ikat sawi hijau, potong-potong",
      "2 butir telur",
      "4 siung bawang putih dan 3 siung bawang merah, haluskan",
      "3 sdm kecap manis",
      "1 sdm saus tiram",
      "Garam, merica, dan 2 batang daun bawang"
    ],
    keys: ["mie", "telur", "bawang putih", "bawang merah", "kecap manis", "daun bawang"],
    steps: [
      "Tumis bumbu halus sampai harum.",
      "Masukkan telur, orak-arik sampai matang.",
      "Masukkan kol dan sawi, tumis sampai layu.",
      "Masukkan mie, tuang kecap manis dan saus tiram.",
      "Aduk cepat dengan api besar sampai mie terbalut bumbu dan agak kering.",
      "Taburi daun bawang, koreksi rasa, sajikan hangat."
    ],
    tip: "Rebus mie hanya setengah matang, karena mie akan dimasak lagi di wajan. Mie yang terlalu matang di awal akan lembek."
  },
  {
    id: "ramen-ayam-ala-jepang",
    name: "Ramen Ayam ala Jepang",
    desc: "Kuah gurih hangat, mie kenyal, dan telur lembut — ramen rumahan tanpa bahan yang sulit dicari.",
    emoji: "🍜",
    category: "Mie",
    time: 40,
    servings: 2,
    difficulty: "Sedang",
    spook: 2,
    ingredients: [
      "1 bungkus mie ramen atau mie telur keriting",
      "200 gram dada ayam",
      "2 butir telur",
      "1 liter air untuk kuah",
      "3 siung bawang putih, geprek, dan 1 ruas jahe",
      "2 sdm kecap asin dan 1 sdm minyak wijen",
      "1 sdm kaldu ayam bubuk",
      "Daun bawang iris dan jagung manis pipil secukupnya"
    ],
    keys: ["mie", "ayam", "telur", "bawang putih", "jahe", "daun bawang"],
    steps: [
      "Rebus telur 7 menit, kupas, belah dua. Sisihkan.",
      "Rebus ayam bersama bawang putih dan jahe sampai matang. Angkat ayam, suwir kasar. Saring kuahnya.",
      "Bumbui kuah dengan kecap asin, minyak wijen, dan kaldu bubuk. Koreksi rasa.",
      "Rebus mie terpisah sampai kenyal, tiriskan, masukkan ke mangkuk.",
      "Siram kuah panas, tata ayam suwir, telur, jagung, dan daun bawang di atasnya.",
      "Sajikan segera selagi panas."
    ],
    tip: "Mie selalu direbus terpisah dari kuah, supaya kuah tetap bening dan mie tidak membuat kuah kental."
  },
  {
    id: "pisang-goreng-madu",
    name: "Pisang Goreng Madu",
    desc: "Pisang goreng renyah di luar, lembut di dalam, disiram madu hangat. Teman terbaik untuk teh sore.",
    emoji: "🍌",
    category: "Manis",
    time: 20,
    servings: 4,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "6 buah pisang kepok atau pisang raja, belah dua",
      "100 gram tepung terigu",
      "2 sdm tepung beras (supaya renyah)",
      "1 sdm gula pasir",
      "1/2 sdt garam dan 1/2 sdt vanili",
      "150 ml air dingin",
      "Minyak untuk menggoreng dan madu untuk siraman"
    ],
    keys: ["pisang", "tepung terigu", "gula", "madu"],
    steps: [
      "Campur tepung terigu, tepung beras, gula, garam, dan vanili.",
      "Tuang air dingin sedikit-sedikit sampai adonan kental seperti adonan bakwan.",
      "Celupkan pisang ke adonan sampai terbalut rata.",
      "Goreng dalam minyak panas dengan api sedang sampai keemasan dan renyah.",
      "Angkat, tiriskan sebentar di atas tisu dapur.",
      "Susun di piring, siram madu hangat, sajikan."
    ],
    tip: "Air dingin dan sedikit tepung beras adalah kunci kulit yang renyah lebih lama."
  },
  {
    id: "tempe-goreng-krispi",
    name: "Tempe Goreng Krispi",
    desc: "Tempe goreng renyah keemasan dengan bumbu ketumbar yang gurih. Lauk murah yang selalu habis duluan.",
    emoji: "🍢",
    category: "Gorengan",
    time: 25,
    servings: 4,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "1 papan tempe (sekitar 300 gram), iris tipis",
      "100 gram tepung terigu dan 2 sdm tepung beras",
      "3 siung bawang putih, haluskan",
      "1 sdt ketumbar bubuk",
      "1/2 sdt kunyit bubuk",
      "Garam secukupnya dan 150 ml air",
      "Daun bawang iris halus (boleh dilewatkan)"
    ],
    keys: ["tempe", "tepung terigu", "bawang putih"],
    steps: [
      "Campur semua tepung dan bumbu, tuang air sampai jadi adonan agak encer.",
      "Masukkan irisan daun bawang, aduk rata.",
      "Celupkan tempe satu per satu ke adonan.",
      "Goreng dalam minyak banyak yang panas, api sedang, sampai kering keemasan.",
      "Balik sekali saja supaya tidak menyerap banyak minyak.",
      "Angkat, tiriskan, sajikan dengan cabai rawit atau sambal kecap."
    ],
    tip: "Iris tempe tipis-tipis supaya hasilnya benar-benar krispi sampai ke dalam."
  },
  {
    id: "ayam-goreng-mentega",
    name: "Ayam Goreng Mentega",
    desc: "Ayam goreng berkilau dengan saus mentega yang gurih dan sedikit manis. Favorit keluarga di meja makan.",
    emoji: "🍗",
    category: "Ayam",
    time: 40,
    servings: 4,
    difficulty: "Sedang",
    spook: 2,
    ingredients: [
      "500 gram ayam, potong 10 bagian",
      "3 sdm mentega",
      "1 buah bawang bombai, iris",
      "3 siung bawang putih, cincang",
      "3 sdm kecap manis dan 1 sdm saus tiram",
      "1 sdm kecap Inggris (boleh dilewatkan)",
      "Garam, merica, dan perasan jeruk limau",
      "Minyak untuk menggoreng ayam"
    ],
    keys: ["ayam", "mentega", "bawang putih", "kecap manis"],
    steps: [
      "Lumuri ayam dengan garam dan merica, diamkan 15 menit.",
      "Goreng ayam sampai matang dan kecokelatan, angkat, tiriskan.",
      "Lelehkan mentega, tumis bawang bombai dan bawang putih sampai harum dan layu.",
      "Masukkan kecap manis, saus tiram, dan kecap Inggris, aduk sampai saus mengental dan berkilau.",
      "Masukkan ayam goreng, aduk cepat sampai semua potongan terbalut saus.",
      "Beri perasan jeruk limau, sajikan dengan nasi hangat."
    ],
    tip: "Masukkan ayam ke saus di akhir saja, supaya kulit ayam tetap renyah dan tidak lembek."
  },
  {
    id: "martabak-manis-teflon",
    name: "Martabak Manis Teflon",
    desc: "Martabak manis tebal dan bersarang, cukup pakai teflon di rumah. Isiannya bebas: cokelat, keju, atau kacang.",
    emoji: "🍰",
    category: "Manis",
    time: 35,
    servings: 4,
    difficulty: "Sedang",
    spook: 2,
    ingredients: [
      "250 gram tepung terigu",
      "3 sdm gula pasir",
      "1/2 sdt ragi instan dan 1/2 sdt baking powder",
      "1 butir telur",
      "300 ml susu cair hangat",
      "1/2 sdt soda kue (dimasukkan terakhir)",
      "Isian: mentega, meses cokelat, keju parut, susu kental manis"
    ],
    keys: ["tepung terigu", "gula", "telur", "susu", "keju", "cokelat"],
    steps: [
      "Campur tepung, gula, ragi, dan baking powder. Tuang susu hangat dan telur, aduk sampai licin.",
      "Diamkan adonan 30 menit sampai berbuih.",
      "Panaskan teflon dengan api paling kecil. Masukkan soda kue ke adonan, aduk rata.",
      "Tuang adonan ke teflon, putar teflon supaya terbentuk pinggiran. Tunggu sampai muncul banyak lubang sarang.",
      "Taburi sedikit gula, tutup teflon, masak sampai permukaan kering.",
      "Angkat, oles mentega selagi panas, beri isian, lipat dua, potong-potong."
    ],
    tip: "Teflon harus benar-benar panas merata sebelum adonan dituang, tapi apinya kecil — itu yang membuat sarangnya muncul."
  },
  {
    id: "telur-balado",
    name: "Telur Balado",
    desc: "Telur rebus berlumur sambal balado merah yang pedas gurih. Lauk sederhana yang bikin nambah nasi.",
    emoji: "🥚",
    category: "Telur",
    time: 30,
    servings: 4,
    difficulty: "Mudah",
    spook: 2,
    ingredients: [
      "6 butir telur, rebus dan kupas",
      "8 buah cabai merah besar",
      "5 buah cabai rawit merah (sesuai selera)",
      "6 siung bawang merah dan 3 siung bawang putih",
      "1 buah tomat merah",
      "2 lembar daun jeruk",
      "Garam, gula, dan minyak secukupnya"
    ],
    keys: ["telur", "cabai", "bawang merah", "bawang putih", "tomat"],
    steps: [
      "Goreng telur rebus sebentar sampai kulitnya sedikit berkerut dan kekuningan. Angkat.",
      "Haluskan cabai, bawang merah, bawang putih, dan tomat (ulek kasar lebih enak).",
      "Tumis bumbu halus dengan daun jeruk sampai harum dan minyaknya keluar, sekitar 8 menit.",
      "Bumbui garam dan sedikit gula, koreksi rasa.",
      "Masukkan telur, aduk pelan sampai terbalut sambal.",
      "Masak 3 menit lagi supaya bumbu meresap, sajikan."
    ],
    tip: "Tumis sambal sampai benar-benar matang dan berminyak — sambal yang kurang matang rasanya langu dan cepat basi."
  },
  {
    id: "sayur-lodeh",
    name: "Sayur Lodeh",
    desc: "Sayur berkuah santan gurih dengan labu siam, kacang panjang, dan tempe. Pasangan setia nasi dan ikan asin.",
    emoji: "🥬",
    category: "Sayur",
    time: 35,
    servings: 4,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "1 buah labu siam, potong korek api",
      "6 lonjor kacang panjang, potong 4 cm",
      "100 gram tempe, potong dadu",
      "500 ml santan encer dan 200 ml santan kental",
      "5 siung bawang merah dan 3 siung bawang putih, haluskan",
      "2 lembar daun salam dan 1 ruas lengkuas, geprek",
      "Garam dan gula secukupnya"
    ],
    keys: ["santan", "tempe", "bawang merah", "bawang putih"],
    steps: [
      "Rebus santan encer bersama bumbu halus, daun salam, dan lengkuas sampai mendidih.",
      "Masukkan labu siam dan tempe, masak sampai setengah empuk.",
      "Masukkan kacang panjang, masak sampai semua sayur empuk.",
      "Tuang santan kental, bumbui garam dan gula.",
      "Masak dengan api kecil sambil terus diaduk pelan supaya santan tidak pecah.",
      "Angkat begitu mendidih kembali, sajikan hangat."
    ],
    tip: "Setelah santan kental masuk, jangan berhenti mengaduk dan jangan sampai mendidih besar — santan akan pecah dan kuah jadi berminyak."
  },
  {
    id: "kolak-pisang-ubi",
    name: "Kolak Pisang Ubi",
    desc: "Penutup yang manis dan hangat: pisang dan ubi dalam kuah santan gula merah beraroma pandan.",
    emoji: "🥥",
    category: "Manis",
    time: 30,
    servings: 4,
    difficulty: "Mudah",
    spook: 1,
    ingredients: [
      "4 buah pisang kepok, potong serong",
      "200 gram ubi, kupas, potong dadu",
      "150 gram gula merah, sisir",
      "500 ml santan",
      "2 lembar daun pandan, simpulkan",
      "1/2 sdt garam",
      "500 ml air"
    ],
    keys: ["pisang", "ubi", "gula merah", "santan"],
    steps: [
      "Rebus air, gula merah, dan daun pandan sampai gula larut, lalu saring.",
      "Didihkan kembali air gula, masukkan ubi, masak sampai setengah empuk.",
      "Masukkan pisang, masak 5 menit.",
      "Tuang santan dan garam, kecilkan api.",
      "Aduk terus pelan-pelan sampai mendidih kecil, matikan api.",
      "Sajikan hangat, atau dinginkan dulu di kulkas untuk disajikan dingin."
    ],
    tip: "Pisang dimasukkan setelah ubi karena pisang lebih cepat empuk — kalau bersamaan, pisang akan hancur."
  }
];

const PANTRY = [
  "nasi", "telur", "ayam", "bawang merah", "bawang putih", "cabai",
  "kecap manis", "mie", "tepung terigu", "gula", "mentega", "susu",
  "keju", "cokelat", "pisang", "tempe", "wortel", "kentang", "santan",
  "ubi", "gula merah", "daun bawang", "jahe", "tomat", "madu"
];

/* --- Fungsi murni (tanpa DOM) --- */

function matchCount(recipe, selected) {
  const have = new Set(selected);
  return recipe.keys.filter(function (k) { return have.has(k); }).length;
}

function rankRecipes(recipes, selected) {
  if (!selected || selected.length === 0) return recipes.slice();
  return recipes
    .map(function (r, i) {
      return { r: r, i: i, m: matchCount(r, selected) };
    })
    .sort(function (a, b) {
      if (b.m !== a.m) return b.m - a.m;
      const missA = a.r.keys.length - a.m;
      const missB = b.r.keys.length - b.m;
      if (missA !== missB) return missA - missB;
      return a.i - b.i;
    })
    .map(function (x) { return x.r; });
}

function searchRecipes(recipes, query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return recipes.slice();
  return recipes.filter(function (r) {
    return (r.name + " " + r.desc + " " + r.category)
      .toLowerCase().indexOf(q) !== -1;
  });
}

/* Ekspor untuk Node (smoke test); di browser variabel global dipakai langsung. */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { RECIPES: RECIPES, PANTRY: PANTRY, matchCount: matchCount, rankRecipes: rankRecipes, searchRecipes: searchRecipes };
}
