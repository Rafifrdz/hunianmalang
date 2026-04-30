# Hunian Malang - Jasa Pembuatan Website Properti

**Hunian Malang** adalah platform digital yang menyediakan layanan pembuatan website profesional khusus untuk agen properti, developer, dan pemilik villa di Malang. Dengan fokus pada desain modern, SEO-friendly, dan konversi tinggi, kami membantu properti Anda tampil lebih profesional dan menarik di pasar digital.

---

## 🚀 Fitur Utama

* **Desain Modern & Premium**: Tampilan profesional yang meningkatkan kepercayaan klien.
* **SEO Optimized**: Dibangun dengan struktur yang ramah mesin pencari untuk visibilitas maksimal.
* **Mobile Responsive**: Tampilan sempurna di desktop, tablet, dan smartphone.
* **Listing Management**: Sistem pengelolaan properti yang mudah digunakan.
* **Integrasi WhatsApp**: Tombol konsultasi instan untuk meningkatkan leads.
* **Fast Loading**: Performa tinggi untuk pengalaman pengguna terbaik.

---

## 🛠️ Teknologi yang Digunakan

* **React & Vite**: Framework JavaScript modern untuk kinerja optimal.
* **Tailwind CSS**: Utility-first CSS untuk desain yang cepat dan responsif.
* **Framer Motion**: Animasi halus untuk pengalaman pengguna yang imersif.
* **Lucide Icons**: Koleksi ikon modern dan ringan.

---

## 📂 Struktur Proyek

```
src/
├── components/
│   ├── Hero.tsx          # Hero section dengan animasi motion.
│   ├── Services.tsx      # Kartu layanan dengan ikon Lucide.
│   ├── Pricing.tsx       # Perbandingan paket harga.
│   ├── Contact.tsx       # Form kontak & integrasi WhatsApp.
│   └── Navbar.tsx        # Navigation bar dengan state scroll.
└── App.tsx             # Root component dengan routing dan layout.
```

---

## 🎨 Desain & UX

### Warna
* **Primary**: Emerald Green (`bg-emerald-600`) - Melambangkan kemakmuran dan kepercayaan.
* **Background**: White (`bg-white`) - Clean dan profesional.
* **Text**: Zinc (`text-zinc-900`) - Kontras tinggi untuk keterbacaan.

### Animasi
Semua elemen dirancang dengan `motion.div` untuk memberikan pengalaman yang premium:
* **Fade-in & Slide-up**: Elemen muncul dengan lembut saat halaman di-scroll.
* **Hover Effects**: Interaksi tombol yang halus dengan `scale-95`.
* **Smooth Transitions**: Transisi warna dan posisi yang responsif.

---

## 🎯 SEO & Structured Data

Website ini sudah dilengkapi dengan optimasi SEO dasar:

### 📄 index.html
* **Meta Tags**: Deskripsi dan keywords yang relevan.
* **Open Graph**: Tags untuk Facebook dan Twitter previews.
* **Canonical URL**: Mencegah duplikat konten.

### 📊 JSON-LD Structured Data
Implementasi schema.org untuk meningkatkan visibilitas di mesin pencari:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Hunian Malang",
  "description": "Jasa pembuatan website properti profesional...",
  "url": "https://hunianmalang.vercel.app/",
  "telephone": "+6282140857907",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Malang",
    "addressRegion": "Jawa Timur",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://wa.me/6282140857907"
  ]
}
```

---

## ⚡ Cara Menjalankan

1. **Clone repository** (jika ini dari git) atau buka folder proyek.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run development server**:
   ```bash
   npm run dev
   ```
4. **Buka browser** ke `http://localhost:3000`.

---

## 📝 Instalasi SEO Lanjutan

Untuk memastikan semua fitur SEO berfungsi penuh, pastikan file HTML memiliki konfigurasi yang benar. File `index.html` sudah dikonfigurasi untuk SEO.

### Verifikasi Schema
Anda dapat menggunakan **Google Rich Results Test** untuk memverifikasi implementasi JSON-LD:
1. Buka: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
2. Masukkan URL website Anda.
3. Klik "Test URL" untuk melihat hasil implementasi schema.

---

## 🤝 Kontribusi

Proyek ini adalah contoh implementasi website properti modern dengan fokus pada UX dan SEO. Anda dapat:
* Menambahkan lebih banyak halaman (tentang kami, portofolio).
* Mengintegrasikan database backend.
* Menambahkan fitur live chat (misal: Tawk.to atau JivoChat).
* Mengembangkan sistem manajemen properti yang lebih canggih.

---

## 📞 Hubungi Kami

Untuk bantuan atau pertanyaan lebih lanjut mengenai pengembangan website properti, hubungi kami:

**Email**: [EMAIL_ADDRESS]
**WhatsApp**: +62 821-4085-7907
**Website**: [https://hunianmalang.vercel.app/](https://hunianmalang.vercel.app/)

---

**Terima kasih telah menggunakan Hunian Malang!** 🏡✨

![React](https://img.shields.io/badge/React-16.8%2B-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-2.x-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-5.x-A1E6FF?style=for-the-badge&logo=framer-motion)
