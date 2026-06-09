// Bank soal: 30 soal P3K setara tingkat kesulitan
function getAllQuestions() {
  return [
    // ── PENANGANAN LUKA ──
    {
      text: "Langkah pertama yang harus dilakukan saat menemukan seseorang tidak sadarkan diri adalah...",
      options: [
        "Langsung melakukan CPR",
        "Memastikan keamanan lokasi dan memanggil bantuan",
        "Memberi minum air putih",
        "Mengguncang tubuh korban sekeras mungkin"
      ],
      answer: 1
    },
    {
      text: "Saat memberikan pertolongan pertama pada luka terbuka, hal pertama yang dilakukan setelah memastikan keamanan adalah...",
      options: [
        "Langsung menutup luka dengan kain apapun yang ada",
        "Mengoleskan pasta gigi pada luka",
        "Mencuci tangan dan membersihkan luka dengan air mengalir",
        "Memencet luka agar darah keluar semua"
      ],
      answer: 2
    },
    {
      text: "Berapa lama tekanan harus diberikan pada luka yang berdarah sebelum mengangkat kain penekan?",
      options: [
        "1–2 menit",
        "5–10 menit",
        "30 menit",
        "Hingga dokter tiba"
      ],
      answer: 1
    },
    {
      text: "Antiseptik sebaiknya dioleskan di mana saat merawat luka terbuka?",
      options: [
        "Langsung di dalam luka agar steril",
        "Di sekitar luka, bukan langsung di dalamnya",
        "Di seluruh area tubuh korban",
        "Tidak perlu antiseptik, cukup air saja"
      ],
      answer: 1
    },
    {
      text: "Kapan perban pada luka harus diganti?",
      options: [
        "Setiap 3 hari sekali tanpa kecuali",
        "Hanya jika korban merasa sakit",
        "Setiap hari atau ketika perban basah dan kotor",
        "Tidak perlu diganti sampai luka sembuh total"
      ],
      answer: 2
    },

    // ── MIMISAN ──
    {
      text: "Cara yang benar untuk menghentikan mimisan adalah...",
      options: [
        "Mendongakkan kepala ke belakang dan menutup hidung",
        "Menundukkan kepala sedikit ke depan dan memencet cuping hidung selama 10–15 menit",
        "Meniup hidung dengan keras",
        "Memasukkan kapas basah ke dalam lubang hidung"
      ],
      answer: 1
    },
    {
      text: "Mengapa kepala tidak boleh didongakkan ke belakang saat seseorang mimisan?",
      options: [
        "Karena akan menyebabkan sakit kepala",
        "Karena darah bisa mengalir ke tenggorokan dan menyebabkan mual atau tersedak",
        "Karena posisi itu memperlambat pembekuan darah",
        "Karena tekanan darah akan meningkat"
      ],
      answer: 1
    },
    {
      text: "Setelah mimisan berhenti, apa yang sebaiknya tidak dilakukan korban selama 15 menit ke depan?",
      options: [
        "Minum air putih",
        "Duduk dengan tenang",
        "Menghembuskan hidung atau menundukkan kepala",
        "Berbicara dengan penolong"
      ],
      answer: 2
    },
    {
      text: "Berapa lama mimisan yang berlangsung terus-menerus mengharuskan korban segera ke dokter?",
      options: [
        "Lebih dari 5 menit",
        "Lebih dari 15 menit",
        "Lebih dari 30 menit",
        "Lebih dari 1 jam"
      ],
      answer: 2
    },

    // ── TERSEDAK ──
    {
      text: "Pada teknik Heimlich maneuver untuk menangani tersedak, posisi tangan penolong berada di...",
      options: [
        "Di atas dada korban",
        "Di bawah tulang rusuk dan di atas pusar korban",
        "Di punggung korban",
        "Di leher korban"
      ],
      answer: 1
    },
    {
      text: "Berapa pukulan punggung yang diberikan sebelum melakukan hentakan perut pada teknik penanganan tersedak?",
      options: [
        "2 pukulan",
        "3 pukulan",
        "5 pukulan",
        "10 pukulan"
      ],
      answer: 2
    },
    {
      text: "Jika korban tersedak pingsan, tindakan yang tepat adalah...",
      options: [
        "Terus melakukan hentakan perut",
        "Menunggu korban sadar kembali",
        "Membaringkan korban dan memulai CPR",
        "Memberikan minum air agar benda asing terdorong"
      ],
      answer: 2
    },
    {
      text: "Untuk bayi berusia kurang dari 1 tahun yang tersedak, teknik yang digunakan adalah...",
      options: [
        "Heimlich maneuver persis seperti pada orang dewasa",
        "5 tepukan punggung dan 5 kompresi dada (bukan hentakan perut)",
        "Memasukkan jari ke dalam mulut bayi untuk mengambil benda",
        "Menggantung bayi terbalik dan menepuk punggungnya"
      ],
      answer: 1
    },

    // ── KERACUNAN ──
    {
      text: "Tindakan yang TIDAK boleh dilakukan saat menolong korban keracunan makanan adalah...",
      options: [
        "Membawa korban ke fasilitas kesehatan",
        "Memaksa korban muntah tanpa instruksi tenaga medis",
        "Mencatat makanan yang dikonsumsi korban",
        "Memberikan air putih jika korban masih sadar"
      ],
      answer: 1
    },
    {
      text: "Nomor layanan darurat yang dapat dihubungi saat terjadi keracunan di Indonesia adalah...",
      options: [
        "110",
        "113",
        "119",
        "118"
      ],
      answer: 2
    },
    {
      text: "Jika korban keracunan dalam keadaan tidak sadar, posisi yang tepat adalah...",
      options: [
        "Telentang dengan kaki diangkat",
        "Tengkurap agar tidak tersedak",
        "Posisi pemulihan (miring ke samping)",
        "Duduk bersandar ke tembok"
      ],
      answer: 2
    },
    {
      text: "Informasi apa yang paling penting dicatat saat terjadi kasus keracunan sebelum dibawa ke rumah sakit?",
      options: [
        "Nama lengkap dan alamat korban saja",
        "Zat atau makanan yang dikonsumsi, jumlah, waktu terpapar, dan gejala yang muncul",
        "Hanya gejala yang terlihat dari luar",
        "Riwayat penyakit korban di masa lalu"
      ],
      answer: 1
    },

    // ── PATAH TULANG ──
    {
      text: "Tanda-tanda patah tulang yang bisa diamati dari luar (fraktur terbuka) adalah...",
      options: [
        "Kulit kemerahan saja",
        "Tulang terlihat menembus atau menonjol melalui kulit",
        "Nyeri ringan saat digerakkan",
        "Pembengkakan kecil tanpa perubahan bentuk"
      ],
      answer: 1
    },
    {
      text: "Untuk imobilisasi patah tulang lengan bawah secara darurat, alat yang dapat digunakan adalah...",
      options: [
        "Handuk basah yang dililitkan erat",
        "Bidai (papan/stik) yang dilapisi kain dan dibalut perban",
        "Tali karet yang diikat sangat kencang",
        "Tidak perlu alat apapun, cukup istirahat"
      ],
      answer: 1
    },
    {
      text: "Tindakan yang TIDAK boleh dilakukan pada korban patah tulang adalah...",
      options: [
        "Mengimobilisasi area yang patah dengan bidai",
        "Mencoba meluruskan tulang yang patah",
        "Mengompres area bengkak dengan es yang dibungkus kain",
        "Membawa korban ke rumah sakit"
      ],
      answer: 1
    },
    {
      text: "Bagaimana cara memeriksa sirkulasi darah setelah bidai dipasang pada patah tulang?",
      options: [
        "Cukup dengan melihat apakah korban masih bernapas",
        "Memastikan area di bawah bidai tidak mati rasa, tidak dingin, dan tidak membiru",
        "Mengukur tekanan darah korban setiap 5 menit",
        "Melepas bidai dan memeriksa langsung kondisi tulangnya"
      ],
      answer: 1
    },
    {
      text: "Mengapa aspirin tidak boleh diberikan pada korban patah tulang?",
      options: [
        "Karena aspirin menyebabkan tulang sulit pulih",
        "Karena aspirin dapat meningkatkan perdarahan",
        "Karena aspirin membuat korban mengantuk",
        "Karena aspirin bereaksi negatif dengan perban"
      ],
      answer: 1
    },

    // ── CPR DASAR ──
    {
      text: "Rasio kompresi dada dan pernapasan buatan dalam CPR dewasa (satu penolong) yang direkomendasikan adalah...",
      options: [
        "15 : 1",
        "20 : 2",
        "30 : 2",
        "10 : 1"
      ],
      answer: 2
    },
    {
      text: "Berapa kedalaman ideal kompresi dada saat melakukan CPR pada orang dewasa?",
      options: [
        "1–2 cm",
        "3–4 cm",
        "5–6 cm",
        "7–8 cm"
      ],
      answer: 2
    },
    {
      text: "Setelah memberikan 2 napas bantuan dalam CPR, apa yang dilakukan selanjutnya?",
      options: [
        "Menghentikan CPR dan menunggu ambulans",
        "Mengecek nadi korban selama 1 menit",
        "Melanjutkan 30 kompresi dada berikutnya",
        "Membalik posisi korban ke posisi tengkurap"
      ],
      answer: 2
    },
    {
      text: "Berapa kecepatan kompresi dada yang dianjurkan saat melakukan CPR?",
      options: [
        "50–60 kompresi per menit",
        "70–80 kompresi per menit",
        "100–120 kompresi per menit",
        "150–160 kompresi per menit"
      ],
      answer: 2
    },
    {
      text: "Kondisi apa yang menandakan CPR boleh dihentikan?",
      options: [
        "Ketika penolong merasa lelah setelah 1 menit",
        "Ketika korban bernapas normal kembali atau petugas medis sudah tiba",
        "Ketika korban tidak merespons setelah 5 siklus CPR",
        "Ketika warna wajah korban mulai berubah"
      ],
      answer: 1
    },
    {
      text: "Apa yang dimaksud dengan Hands-Only CPR?",
      options: [
        "CPR yang dilakukan oleh dua orang penolong secara bergantian",
        "CPR yang hanya menggunakan satu tangan untuk kompresi",
        "Kompresi dada terus-menerus tanpa napas buatan, cocok bila penolong tidak terlatih",
        "CPR yang dilakukan sambil memanggil bantuan dengan tangan lain"
      ],
      answer: 2
    },
    {
      text: "Di mana posisi tangan yang benar saat melakukan kompresi dada pada CPR?",
      options: [
        "Di bagian atas dada dekat leher",
        "Di tengah dada, pada separuh bawah tulang dada",
        "Di sisi kiri dada tepat di atas jantung",
        "Di perut bagian atas"
      ],
      answer: 1
    }
  ];
}

// Ambil n soal secara acak dari bank soal
function getRandomQuestions(n = 10) {
  const all = getAllQuestions();
  const shuffled = [...all];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, n);
}

// Alias tetap agar tidak perlu ubah kode di pretest/posttest
function getQuestions()         { return getRandomQuestions(10); }
function getShuffledQuestions() { return getRandomQuestions(10); }
