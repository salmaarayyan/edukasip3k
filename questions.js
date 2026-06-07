function getQuestions() {
  return [
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
      text: "Setelah memberikan 2 napas bantuan dalam CPR, apa yang dilakukan selanjutnya?",
      options: [
        "Menghentikan CPR dan menunggu ambulans",
        "Mengecek nadi korban selama 1 menit",
        "Melanjutkan 30 kompresi dada berikutnya",
        "Membalik posisi korban ke posisi tengkurap"
      ],
      answer: 2
    }
  ];
}

function getShuffledQuestions() {
  const qs = getQuestions();
  // Fisher-Yates shuffle
  for (let i = qs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [qs[i], qs[j]] = [qs[j], qs[i]];
  }
  return qs;
}
