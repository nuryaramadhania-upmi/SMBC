
"use client";

import { useState } from "react";

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const [openAkreditasi, setOpenAkreditasi] = useState(true);
  const [openD4, setOpenD4] = useState(false);
  const [openSVM, setOpenSVM] = useState(false);
  const [openMesin, setOpenMesin] = useState(false);
  const [openPT, setOpenPT] = useState(false);

  /* =========================
        DASHBOARD DATA
  ========================== */

  const progressData = [
    {
      nama: "D4 Teknologi Rekayasa Logistik",
      progress: 85,
      color: "bg-blue-500",
      status: "Hampir Selesai",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      nama: "D3 Survei dan Pemetaan",
      progress: 65,
      color: "bg-green-500",
      status: "Revisi",
      statusColor: "bg-yellow-100 text-yellow-600",
    },
    {
      nama: "D3 Perawatan Mesin",
      progress: 55,
      color: "bg-yellow-500",
      status: "Belum Lengkap",
      statusColor: "bg-red-100 text-red-500",
    },
    {
      nama: "Akreditasi PT",
      progress: 40,
      color: "bg-red-500",
      status: "Revisi",
      statusColor: "bg-orange-100 text-orange-500",
    },
  ];

  /* =========================
      LED DATA PER PRODI
========================== */

const ledDataByProdi = {
  "d4-led": [
    {
      nama: "Visi, Misi, Tujuan, dan Strategi (VMTS)",
      progress: 90,
      color: "bg-blue-500",
    },
    {
      nama: "Tata Pamong, Tata Kelola, dan Kerja Sama",
      progress: 85,
      color: "bg-green-500",
    },
    {
      nama: "Mahasiswa",
      progress: 88,
      color: "bg-yellow-500",
    },
    {
      nama: "Sumber Daya Manusia",
      progress: 80,
      color: "bg-orange-500",
    },
    {
      nama: "Keuangan, Sarana, dan Prasarana",
      progress: 78,
      color: "bg-red-500",
    },
    {
      nama: "Pendidikan",
      progress: 92,
      color: "bg-cyan-500",
    },
    {
      nama: "Penelitian",
      progress: 75,
      color: "bg-purple-500",
    },
    {
      nama: "Pengabdian kepada Masyarakat (PkM)",
      progress: 70,
      color: "bg-pink-500",
    },
    {
      nama: "Luaran dan Capaian Tridharma",
      progress: 82,
      color: "bg-indigo-500",
    },
  ],

  "svm-led": [
    {
      nama: "Visi, Misi, Tujuan, dan Strategi (VMTS)",
      progress: 75,
      color: "bg-blue-500",
    },
    {
      nama: "Tata Pamong, Tata Kelola, dan Kerja Sama",
      progress: 70,
      color: "bg-green-500",
    },
    {
      nama: "Mahasiswa",
      progress: 80,
      color: "bg-yellow-500",
    },
    {
      nama: "Sumber Daya Manusia",
      progress: 68,
      color: "bg-orange-500",
    },
    {
      nama: "Keuangan, Sarana, dan Prasarana",
      progress: 60,
      color: "bg-red-500",
    },
    {
      nama: "Pendidikan",
      progress: 78,
      color: "bg-cyan-500",
    },
    {
      nama: "Penelitian",
      progress: 55,
      color: "bg-purple-500",
    },
    {
      nama: "Pengabdian kepada Masyarakat (PkM)",
      progress: 58,
      color: "bg-pink-500",
    },
    {
      nama: "Luaran dan Capaian Tridharma",
      progress: 62,
      color: "bg-indigo-500",
    },
  ],

  "mesin-led": [
    {
      nama: "Visi, Misi, Tujuan, dan Strategi (VMTS)",
      progress: 65,
      color: "bg-blue-500",
    },
    {
      nama: "Tata Pamong, Tata Kelola, dan Kerja Sama",
      progress: 60,
      color: "bg-green-500",
    },
    {
      nama: "Mahasiswa",
      progress: 70,
      color: "bg-yellow-500",
    },
    {
      nama: "Sumber Daya Manusia",
      progress: 55,
      color: "bg-orange-500",
    },
    {
      nama: "Keuangan, Sarana, dan Prasarana",
      progress: 50,
      color: "bg-red-500",
    },
    {
      nama: "Pendidikan",
      progress: 72,
      color: "bg-cyan-500",
    },
    {
      nama: "Penelitian",
      progress: 45,
      color: "bg-purple-500",
    },
    {
      nama: "Pengabdian kepada Masyarakat (PkM)",
      progress: 48,
      color: "bg-pink-500",
    },
    {
      nama: "Luaran dan Capaian Tridharma",
      progress: 52,
      color: "bg-indigo-500",
    },
  ],
};
const currentLedData =
  ledDataByProdi[
    selectedMenu as keyof typeof ledDataByProdi
  ] || [];

/* =========================
      AUTO CALCULATION
========================== */

// rata-rata progress
const averageProgress =
  currentLedData.length > 0
    ? Math.round(
        currentLedData.reduce(
          (total, item) => total + item.progress,
          0
        ) / currentLedData.length
      )
    : 0;

// dianggap lengkap jika >= 80
const completedCount =
  currentLedData.filter(
    (item) => item.progress >= 80
  ).length;

const incompleteCount =
  currentLedData.length - completedCount;

  /* =========================
      LED PT DATA
========================== */

const ledPTData = [
  {
    kategori: "Kriteria 1 — Budaya Mutu",
    progress: 85,
    items: [
      {
        nama: "SPMI berbasis risiko",
        progress: 90,
      },
      {
        nama: "Implementasi PPEPP",
        progress: 85,
      },
      {
        nama: "Laporan implementasi SPMI",
        progress: 80,
      },
      {
        nama: "Akreditasi seluruh program studi",
        progress: 85,
      },
    ],
  },

  {
    kategori: "Kriteria 2 — Relevansi Pendidikan",
    progress: 75,
    items: [
      {
        nama: "Kurikulum Outcome Based Education (OBE)",
        progress: 90,
      },
      {
        nama: "Ketersediaan tenaga kependidikan",
        progress: 70,
      },
      {
        nama: "Kecukupan dosen dan rasio dosen-mahasiswa",
        progress: 75,
      },
      {
        nama: "Sarana dan prasarana pembelajaran",
        progress: 65,
      },
      {
        nama: "Sistem TIK dan akses informasi",
        progress: 80,
      },
    ],
  },

  {
    kategori: "Kriteria 3 — Relevansi Penelitian",
    progress: 60,
    items: [
      {
        nama: "Roadmap dan pedoman penelitian",
        progress: 70,
      },
      {
        nama: "Proses penelitian",
        progress: 65,
      },
      {
        nama: "Luaran penelitian",
        progress: 55,
      },
      {
        nama: "Pengakuan dan rekognisi penelitian",
        progress: 50,
      },
    ],
  },

  {
    kategori: "Kriteria 4 — Relevansi Pengabdian kepada Masyarakat (PkM)",
    progress: 68,
    items: [
      {
        nama: "Roadmap dan pedoman PkM",
        progress: 75,
      },
      {
        nama: "Proses PkM",
        progress: 70,
      },
      {
        nama: "Luaran PkM",
        progress: 65,
      },
      {
        nama: "Pengakuan kepakaran profesional",
        progress: 60,
      },
    ],
  },

  {
    kategori: "Kriteria 5 — Tata Kelola dan Akuntabilitas",
    progress: 72,
    items: [
      {
        nama: "Statuta dan struktur organisasi",
        progress: 85,
      },
      {
        nama: "Sistem tata pamong dan mitigasi risiko",
        progress: 75,
      },
      {
        nama: "Sistem pengelolaan data berbasis TIK",
        progress: 70,
      },
      {
        nama: "Rencana strategis keuangan",
        progress: 65,
      },
    ],
  },

  {
    kategori: "Kriteria 6 — Luaran dan Capaian Tridharma",
    progress: 70,
    items: [
      {
        nama: "Luaran pendidikan",
        progress: 80,
      },
      {
        nama: "Luaran penelitian",
        progress: 70,
      },
      {
        nama: "Luaran PkM",
        progress: 65,
      },
      {
        nama: "Rekognisi nasional/internasional",
        progress: 60,
      },
    ],
  },
];

  /* =========================
        LKPS DATA
  ========================== */

  const lkpsData = [
  {
    nama: "Tabel 1 Visi Misi Tujuan Strategi PT dan UPPS serta Visi Keilmuan Program Studi",
    progress: 90,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 1 Kerjasama Tridharma Perguruan Tinggi - Pendidikan",
    progress: 75,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 1 Kerjasama Tridharma Perguruan Tinggi - Penelitian",
    progress: 70,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 1 Kerjasama Tridharma Perguruan Tinggi - Pengabdian kepada Masyarakat",
    progress: 65,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 2.b) Penggunaan Dana",
    progress: 80,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 3.a.1) Kurikulum dan Rencana Pembelajaran",
    progress: 85,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 3.a.2) Mata Kuliah dan Dokumen Pembelajaran",
    progress: 70,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 3.a.3) Integrasi Kegiatan Penelitian/PkM dalam Pembelajaran",
    progress: 60,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 3.a.4) Mata Kuliah Basic Science dan Matematika dalam Proses Pembelajaran",
    progress: 55,
    status: "Belum Lengkap",
    color: "bg-red-100 text-red-600",
  },
  {
    nama: "Tabel 3.a.5) Capstone Design dalam Proses Pembelajaran",
    progress: 50,
    status: "Belum Lengkap",
    color: "bg-red-100 text-red-600",
  },
  {
    nama: "Tabel 3.b) Penelitian DTPS",
    progress: 60,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 3.c) Pengabdian kepada Masyarakat DTPS",
    progress: 58,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 4.a) Profil Dosen",
    progress: 90,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 4.b) Data Tenaga Kependidikan Laboran / Teknisi / Administrator Sistem",
    progress: 75,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 4.c) Beban Kerja (BK) Dosen Tetap Perguruan Tinggi",
    progress: 82,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 4.d) Publikasi Ilmiah DTPS",
    progress: 68,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 4.e) Pagelaran/Pameran/Presentasi/Publikasi Ilmiah DTPS",
    progress: 70,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 4.f) Luaran Penelitian dan PkM oleh DTPS / DTPSPPI - HKI (Paten, Paten Sederhana)",
    progress: 45,
    status: "Belum Lengkap",
    color: "bg-red-100 text-red-600",
  },
  {
    nama: "Tabel 4.f) Luaran Penelitian dan PkM oleh DTPS / DTPSPPI - HKI (Hak Cipta, Desain Produk Industri, dll.)",
    progress: 55,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 4.f) Luaran Penelitian dan PkM oleh DTPS / DTPSPPI - Teknologi Tepat Guna, Produk Terstandarisasi, Produk Tersertifikasi",
    progress: 50,
    status: "Belum Lengkap",
    color: "bg-red-100 text-red-600",
  },
  {
    nama: "Tabel 4.f) Luaran Penelitian dan PkM oleh DTPS / DTPSPPI - Buku ber-ISBN, Book Chapter",
    progress: 75,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 4.g) Produk/Jasa DTPS yang Diadopsi oleh Industri/Masyarakat",
    progress: 40,
    status: "Belum Lengkap",
    color: "bg-red-100 text-red-600",
  },
  {
    nama: "Tabel 4.h) Kinerja DTPS Dalam Mendukung Keunggulan Kompetitif",
    progress: 60,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 4.i) Karya Ilmiah DTPS yang Disitasi",
    progress: 78,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 4.j) Pengakuan/Rekognisi Dosen",
    progress: 65,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 4.k) Pembimbing Lapangan",
    progress: 88,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 5.a) Prasarana dan Peralatan Utama Ruang Kelas/Ruang Diskusi/Laboratorium",
    progress: 70,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 5.b) Dokumen K3L di UPPS",
    progress: 95,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 5.c) Fasilitas K3L di UPPS",
    progress: 80,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 6.a) Jumlah Mahasiswa (Reguler & Asing)",
    progress: 85,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 6.b) IPK Lulusan",
    progress: 90,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 6.c.1) Prestasi Akademik Mahasiswa",
    progress: 65,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 6.c.2) Prestasi Non-akademik Mahasiswa",
    progress: 60,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 6.d) Masa Studi Lulusan Program Studi",
    progress: 85,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 7.a) Ketersediaan Dokumen/Buku Sistem Penjaminan Mutu Internal",
    progress: 95,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
];

  /* =========================
        LKPT DATA
  ========================== */

  const lkptData = [
  {
    nama: "Tabel 1. Akreditasi Program Studi",
    progress: 95,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 2. Sertifikasi Eksternal",
    progress: 80,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 3. Akreditasi Internasional Program Studi",
    progress: 60,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel II-1.A.1. Rasio Mahasiswa terhadap Dosen",
    progress: 90,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-1.A.4. Kecukupan Jumlah Dosen/Tenaga Pendidik Tetap Perguruan Tinggi",
    progress: 88,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-1.A.2. Kecukupan Jumlah Dosen/Tenaga Pendidik Tidak Tetap Perguruan Tinggi",
    progress: 70,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel II-1.A.3. Jabatan Akademik Guru Besar Program Studi Jenjang Doktor",
    progress: 65,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel II-1.C.1. Jabatan Akademik Dosen Tetap Perguruan Tinggi",
    progress: 90,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-1.C.4. Trend penurunan lulusan Program Studi jenjang S1, D4, D3",
    progress: 55,
    status: "Belum Lengkap",
    color: "bg-red-100 text-red-600",
  },
  {
    nama: "Tabel II-1.C.2. Rasio kelulusan tepat masa tempuh kurikulum pada program Sarjana/Sarjana Terapan",
    progress: 85,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-1.C.5. Rasio kelulusan tepat masa tempuh kurikulum pada program Diploma Tiga",
    progress: 80,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-1.C.3. Rasio kelulusan dalam dua kali masa tempuh kurikulum pada program Sarjana/Sarjana Terapan",
    progress: 78,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel II-1.C.6. Rasio kelulusan dalam dua kali masa tempuh kurikulum pada program Diploma Tiga",
    progress: 72,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel II-1.D.1. Kepuasan Pengguna Lulusan",
    progress: 90,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 2c. Tren penurunan mahasiswa baru pada jenjang S1, D4, D3",
    progress: 58,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel II-1.D.2. Prestasi Akademik/Non Akademik Mahasiswa",
    progress: 88,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-1.D.3. Waktu Tunggu Lulusan",
    progress: 84,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel II-2.C.1. Produktivitas Penelitian Dosen Tetap",
    progress: 70,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel II-2.C.2. Luaran Penelitian Dosen Tetap dalam bentuk publikasi artikel dalam 3 tahun saat TS",
    progress: 68,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel II-2.D.1. Judul artikel karya ilmiah dosen tetap yang disitasi dalam 3 tahun terakhir",
    progress: 75,
    status: "Revisi",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    nama: "Tabel 22. Tabel Karya Dosen Tetap yang terekognisi/diterapkan masyarakat",
    progress: 60,
    status: "Proses",
    color: "bg-orange-100 text-orange-600",
  },
  {
    nama: "Tabel 23. Kepesertaan mahasiswa yang eligible yang mengikuti MBKM saat TS",
    progress: 82,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 24. Pengukuran kepuasan stakeholder",
    progress: 92,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
  {
    nama: "Tabel 25. Audit Eksternal Keuangan",
    progress: 96,
    status: "Lengkap",
    color: "bg-green-100 text-green-600",
  },
];

  const menuClass =
    "flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-blue-600 transition cursor-pointer";

  const submenuClass =
    "ml-6 px-4 py-3 rounded-xl hover:bg-slate-700 transition cursor-pointer text-slate-300";
  const [filterProdi, setFilterProdi] = useState("Semua");
  const filteredProgress =
  filterProdi === "Semua"
    ? progressData
    : progressData.filter((item) => {

        if (filterProdi === "D4") {
          return item.nama.includes("D4");
        }

        if (filterProdi === "D3 SVM") {
          return item.nama.includes("Survei");
        }

        if (filterProdi === "D3 Mesin") {
          return item.nama.includes("Mesin");
        }

        return false;
      });

  return (
    <main className="flex min-h-screen bg-slate-100">

      {/* SIDEBAR */}
      <aside className="w-80 bg-[#071437] text-white p-6">

        <div className="mb-12">

          <h1 className="text-5xl font-extrabold">
            SiPANTAU
          </h1>

          <p className="text-slate-300 mt-4 text-lg leading-relaxed">
            Sistem Pemantauan Akreditasi dan Tracking Mutu
          </p>

        </div>

        <div className="space-y-4">

          {/* DASHBOARD */}
          <div
            className={`${menuClass} ${
              selectedMenu === "dashboard"
                ? "bg-blue-600"
                : ""
            }`}
            onClick={() => setSelectedMenu("dashboard")}
          >
            <span>📊 Dashboard</span>
          </div>

          {/* AKREDITASI PRODI */}
          <div>

            <div
              className={menuClass}
              onClick={() => setOpenAkreditasi(!openAkreditasi)}
            >
              <span>🏫 Akreditasi Prodi</span>

              <span>
                {openAkreditasi ? "▲" : "▼"}
              </span>
            </div>

            {openAkreditasi && (

              <div className="mt-2 space-y-2">

                {/* D4 */}
                <div>

                  <div
                    className={submenuClass}
                    onClick={() => setOpenD4(!openD4)}
                  >
                    D4 Teknologi Rekayasa Logistik
                  </div>

                  {openD4 && (

                    <div className="ml-6 mt-2 space-y-2">

                      <div
                        className={submenuClass}
                        onClick={() => setSelectedMenu("d4-led")}
                      >
                        LED
                      </div>

                      <div
                        className={submenuClass}
                        onClick={() => setSelectedMenu("d4-lkps")}
                      >
                        LKPS
                      </div>

                    </div>

                  )}

                </div>

                {/* SVM */}
                <div>

                  <div
                    className={submenuClass}
                    onClick={() => setOpenSVM(!openSVM)}
                  >
                    D3 Survei dan Pemetaan
                  </div>

                  {openSVM && (

                    <div className="ml-6 mt-2 space-y-2">

                      <div
                        className={submenuClass}
                        onClick={() => setSelectedMenu("svm-led")}
                      >
                        LED
                      </div>

                      <div
                        className={submenuClass}
                        onClick={() => setSelectedMenu("svm-lkps")}
                      >
                        LKPS
                      </div>

                    </div>

                  )}

                </div>

                {/* MESIN */}
                <div>

                  <div
                    className={submenuClass}
                    onClick={() => setOpenMesin(!openMesin)}
                  >
                    D3 Perawatan Mesin
                  </div>

                  {openMesin && (

                    <div className="ml-6 mt-2 space-y-2">

                      <div
                        className={submenuClass}
                        onClick={() => setSelectedMenu("mesin-led")}
                      >
                        LED
                      </div>

                      <div
                        className={submenuClass}
                        onClick={() => setSelectedMenu("mesin-lkps")}
                      >
                        LKPS
                      </div>

                    </div>

                  )}

                </div>

              </div>

            )}

          </div>

          {/* AKREDITASI PT */}
          <div>

            <div
              className={menuClass}
              onClick={() => setOpenPT(!openPT)}
            >
              <span>🏛️ Akreditasi PT</span>

              <span>
                {openPT ? "▲" : "▼"}
              </span>
            </div>

            {openPT && (

              <div className="ml-8 mt-3 space-y-2">

                <div
                  className={submenuClass}
                  onClick={() => setSelectedMenu("pt-led")}
                >
                  LED
                </div>

                <div
                  className={submenuClass}
                  onClick={() => setSelectedMenu("pt-lkpt")}
                >
                  LKPT
                </div>

              </div>

            )}

          </div>

        </div>

      </aside>

      {/* CONTENT */}
      <section className="flex-1 p-8 overflow-auto">

        {/* DASHBOARD */}
{selectedMenu === "dashboard" && (

  <div>

    {/* HEADER */}
    <div className="flex justify-between items-center mb-8">

      <div>

        <h1 className="text-6xl font-extrabold text-slate-800">
          Dashboard Akreditasi
        </h1>

        <p className="text-slate-500 text-xl mt-3">
          Monitoring Progress Akreditasi dan Tracking Mutu
        </p>

      </div>

      <div className="bg-white rounded-3xl shadow-md p-6 w-72">

        <p className="text-slate-500 text-lg">
          Total Progress
        </p>

        <h2 className="text-6xl font-extrabold text-blue-600 mt-2">
          72%
        </h2>

      </div>

    </div>

    {/* SUMMARY CARD */}
    <div className="grid grid-cols-4 gap-6 mb-8">

      {progressData.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl shadow-md p-6 hover:scale-105 transition"
        >

          <p className="text-gray-500 text-lg">
            {item.nama}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-600 mt-4">
            {item.progress}%
          </h2>

          <span
            className={`${item.statusColor} px-4 py-2 rounded-full text-sm font-semibold inline-block mt-4`}
          >
            {item.status}
          </span>

        </div>

      ))}

    </div>

    {/* DASHBOARD DETAIL */}
    <div className="grid grid-cols-3 gap-6">

      {/* GRAFIK */}
      <div className="col-span-2 bg-white rounded-3xl shadow-md p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-slate-800">
            Progress Akreditasi per Program Studi
          </h2>

          <select
          className="border rounded-xl px-4 py-2"
          value={filterProdi}
          onChange={(e) => setFilterProdi(e.target.value)}
>
            <option>Semua</option>
            <option>D4</option>
            <option>D3 SVM</option>
            <option>D3 Mesin</option>
          </select>

        </div>

        <div className="space-y-6">

          {filteredProgress.map((item, index) => (

            <div key={index}>

              <div className="flex justify-between mb-2">

                <span className="font-semibold text-slate-700">
                  {item.nama}
                </span>

                <span className="font-bold text-slate-800">
                  {item.progress}%
                </span>

              </div>

              <div className="w-full bg-slate-200 h-5 rounded-full overflow-hidden">

                <div
                  className={`${item.color} h-5 rounded-full`}
                  style={{ width: `${item.progress}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* DEADLINE */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          🚨 Deadline
        </h2>

        <div className="space-y-4">

          <div className="bg-red-50 border border-red-200 rounded-2xl p-4">

            <p className="font-bold text-red-600">
              D3 Perawatan Mesin
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Deadline 10 Mei 2025
            </p>

            <p className="text-red-500 font-bold mt-2">
              2 Hari Lagi
            </p>

          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">

            <p className="font-bold text-yellow-600">
              Akreditasi PT
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Deadline 13 Mei 2025
            </p>

            <p className="text-yellow-500 font-bold mt-2">
              5 Hari Lagi
            </p>

          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">

            <p className="font-bold text-blue-600">
              D3 Survei dan Pemetaan
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Deadline 18 Mei 2025
            </p>

            <p className="text-blue-500 font-bold mt-2">
              10 Hari Lagi
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="grid grid-cols-3 gap-6 mt-6">

      {/* RINGKASAN */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Ringkasan Dokumen
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-slate-100 rounded-2xl p-5">

            <p className="text-gray-500">
              Total Dokumen
            </p>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              154
            </h2>

          </div>

          <div className="bg-slate-100 rounded-2xl p-5">

            <p className="text-gray-500">
              Sudah Upload
            </p>

            <h2 className="text-4xl font-bold text-green-600 mt-2">
              120
            </h2>

          </div>

          <div className="bg-slate-100 rounded-2xl p-5">

            <p className="text-gray-500">
              Diverifikasi
            </p>

            <h2 className="text-4xl font-bold text-cyan-600 mt-2">
              95
            </h2>

          </div>

          <div className="bg-slate-100 rounded-2xl p-5">

            <p className="text-gray-500">
              Revisi
            </p>

            <h2 className="text-4xl font-bold text-red-500 mt-2">
              18
            </h2>

          </div>

        </div>

      </div>

      {/* ACTIVITY */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Aktivitas Terbaru
        </h2>

        <div className="space-y-5">

          <div className="border-l-4 border-green-500 pl-4">

            <p className="font-bold">
              D4 TRL Upload LED
            </p>

            <p className="text-sm text-gray-500">
              2 jam lalu
            </p>

          </div>

          <div className="border-l-4 border-yellow-500 pl-4">

            <p className="font-bold">
              D3 SVM Revisi LKPS
            </p>

            <p className="text-sm text-gray-500">
              5 jam lalu
            </p>

          </div>

          <div className="border-l-4 border-blue-500 pl-4">

            <p className="font-bold">
              Akreditasi PT Verifikasi
            </p>

            <p className="text-sm text-gray-500">
              1 hari lalu
            </p>

          </div>

        </div>

      </div>

      {/* LED VS LKPS */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          Progress LED vs LKPS
        </h2>

        <div className="space-y-5">

          {[
            {
              nama: "D4 TRL",
              led: 90,
              lkps: 80,
            },
            {
              nama: "D3 SVM",
              led: 70,
              lkps: 60,
            },
            {
              nama: "D3 Mesin",
              led: 60,
              lkps: 50,
            },
          ].map((item, index) => (

            <div key={index}>

              <div className="flex justify-between mb-2">

                <span className="font-semibold">
                  {item.nama}
                </span>

              </div>

              <div className="mb-2">

                <div className="flex justify-between text-sm">

                  <span>LED</span>

                  <span>{item.led}%</span>

                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">

                  <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{ width: `${item.led}%` }}
                  ></div>

                </div>

              </div>

              <div>

                <div className="flex justify-between text-sm">

                  <span>LKPS</span>

                  <span>{item.lkps}%</span>

                </div>

                <div className="w-full bg-slate-200 rounded-full h-3">

                  <div
                    className="bg-green-500 h-3 rounded-full"
                    style={{ width: `${item.lkps}%` }}
                  ></div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

)}

        {/* LED PRODI */}
        {selectedMenu.includes("led") &&
         !selectedMenu.includes("pt") && (

          <div>

            <h1 className="text-5xl font-bold text-slate-800 mb-8">
              LED
            </h1>

            <div className="grid grid-cols-4 gap-6 mb-8">

              <div className="bg-white rounded-3xl shadow-md p-6">
                <p className="text-gray-500 text-lg">
                  Total Kriteria
                </p>

                <h2 className="text-5xl font-extrabold text-blue-600 mt-3">
                  {currentLedData.length}
                </h2>
              </div>

              <div className="bg-white rounded-3xl shadow-md p-6">
                <p className="text-gray-500 text-lg">
                  Rata-rata Progress
                </p>

                <h2 className="text-5xl font-extrabold text-green-600 mt-3">
                  {averageProgress}%
                </h2>
              </div>

              <div className="bg-white rounded-3xl shadow-md p-6">
                <p className="text-gray-500 text-lg">
                  Sudah Lengkap
                </p>

                <h2 className="text-5xl font-extrabold text-cyan-600 mt-3">
                  {completedCount}
                </h2>
              </div>

              <div className="bg-white rounded-3xl shadow-md p-6">
                <p className="text-gray-500 text-lg">
                  Belum Lengkap
                </p>

                <h2 className="text-5xl font-extrabold text-red-500 mt-3">
                  {incompleteCount}
                </h2>
              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-md p-8">

              <div className="space-y-8">

                {currentLedData.map((item, index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-3">

                      <span className="font-semibold text-lg">
                        {item.nama}
                      </span>

                      <span className="font-bold">
                        {item.progress}%
                      </span>

                    </div>

                    <div className="w-full bg-slate-200 rounded-full h-5 overflow-hidden">

                      <div
                        className={`${item.color} h-5 rounded-full`}
                        style={{ width: `${item.progress}%` }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        )}

        {/* LED PT */}
{selectedMenu === "pt-led" && (

  <div>

    <div className="flex justify-between items-center mb-8">

  <div>

    <h1 className="text-5xl font-bold text-slate-800">
      LED Akreditasi PT
    </h1>

    <p className="text-slate-500 mt-2 text-lg">
      Monitoring Kriteria dan Butir Akreditasi Perguruan Tinggi
    </p>

  </div>

  <div className="bg-white rounded-3xl shadow-md px-8 py-6">

    <p className="text-slate-500 text-lg">
      Total Progress
    </p>

    <h2 className="text-5xl font-extrabold text-blue-600 mt-2">
      72%
    </h2>

  </div>

</div>

    <div className="space-y-6">

      {ledPTData.map((kategori, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl shadow-md p-8"
        >

          <div className="flex justify-between items-center mb-6">

  <div>

    <h2 className="text-2xl font-bold text-blue-700">
      {kategori.kategori}
    </h2>

  </div>

  <div className="flex items-center gap-4">

    <div className="w-40 bg-slate-200 rounded-full h-4">

      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{
          width: `${kategori.progress}%`,
        }}
      ></div>

    </div>

    <span className="font-bold text-blue-600 text-lg">
      {kategori.progress}%
    </span>

  </div>

</div>

          <div className="space-y-4">

            {kategori.items.map((item, idx) => (

              <div
                key={idx}
                className="flex items-center justify-between bg-slate-100 rounded-2xl px-5 py-4 hover:bg-slate-200 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>

                  <span className="font-medium text-slate-700">
                    {item.nama}
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-40 bg-slate-300 rounded-full h-3">

                    <div
                    className="bg-blue-500 h-3 rounded-full"
                    style={{
                      width: `${item.progress}%`,
                      }}
                      ></div>

                  </div>

                  <span className="font-bold text-blue-600">
                    {item.progress}%
                    </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>

)}

        {/* LKPS / LKPT */}
        {(selectedMenu.includes("lkps") ||
          selectedMenu.includes("lkpt")) && (

          <div>

            <h1 className="text-5xl font-bold text-slate-800 mb-8">
              {selectedMenu.includes("lkpt")
                ? "LKPT"
                : "LKPS"}
            </h1>

            {/* REKAP */}
            <div className="grid grid-cols-4 gap-6 mb-8">

              <div className="bg-white rounded-3xl shadow-md p-6">

                <p className="text-gray-500 text-lg">
                  Total Dokumen
                </p>

                <h2 className="text-5xl font-extrabold text-blue-600 mt-3">
                  {
                    selectedMenu.includes("lkpt")
                      ? lkptData.length
                      : lkpsData.length
                  }
                </h2>

              </div>

              <div className="bg-white rounded-3xl shadow-md p-6">

                <p className="text-gray-500 text-lg">
                  Progress Rata-rata
                </p>

                <h2 className="text-5xl font-extrabold text-green-600 mt-3">
                  74%
                </h2>

              </div>

              <div className="bg-white rounded-3xl shadow-md p-6">

                <p className="text-gray-500 text-lg">
                  Dokumen Lengkap
                </p>

                <h2 className="text-5xl font-extrabold text-cyan-600 mt-3">
                  28
                </h2>

              </div>

              <div className="bg-white rounded-3xl shadow-md p-6">

                <p className="text-gray-500 text-lg">
                  Perlu Revisi
                </p>

                <h2 className="text-5xl font-extrabold text-red-500 mt-3">
                  12
                </h2>

              </div>

            </div>

            {/* TABLE */}
            <div className="bg-white rounded-3xl shadow-md p-8 overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="border-b text-left text-gray-500">

                    <th className="p-4">
                      Dokumen
                    </th>

                    <th className="p-4">
                      Progress
                    </th>

                    <th className="p-4">
                      Status
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {(
                    selectedMenu.includes("lkpt")
                      ? lkptData
                      : lkpsData
                  ).map((item, index) => (

                    <tr
                      key={index}
                      className="border-b hover:bg-slate-50"
                    >

                      <td className="p-4 font-medium">
                        {item.nama}
                      </td>

                      <td className="p-4 w-[35%]">

                        <div className="flex items-center gap-4">

                          <div className="w-full bg-slate-200 rounded-full h-4">

                            <div
                              className="bg-blue-500 h-4 rounded-full"
                              style={{ width: `${item.progress}%` }}
                            ></div>

                          </div>

                          <span className="font-bold">
                            {item.progress}%
                          </span>

                        </div>

                      </td>

                      <td className="p-4">

                        <span
                          className={`${item.color} px-4 py-2 rounded-full text-sm font-semibold`}
                        >
                          {item.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        )}

      </section>

    </main>
  );
}

