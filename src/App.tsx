/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  Globe,
  Search,
  Zap,
  ShieldCheck,
  CheckCircle,
  MessageSquare,
  Menu,
  X,
  Smartphone,
  Settings,
  ArrowRight,
  Target,
  Users,
  MapPin,
  Camera,
  Layout,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLayout, setCurrentLayout] = useState(0);

  const layouts = [
    { id: 1, src: '/web1.png', name: 'Modern Elite' },
    { id: 2, src: '/web2.png', name: 'Villa Panoramic' },
    { id: 3, src: '/web3.png', name: 'Estate Enterprise' },
    { id: 4, src: '/web1.png', name: 'Luxury Living' },
    { id: 5, src: '/web2.png', name: 'Minimalist Studio' },
    { id: 6, src: '/web3.png', name: 'Urban Apartment' },
    { id: 7, src: '/web1.png', name: 'Cozy Cottage' },
    { id: 8, src: '/web2.png', name: 'Beach House' },
    { id: 9, src: '/web3.png', name: 'Smart Home' }
  ];

  const nextLayout = () => setCurrentLayout((prev) => (prev + 1) % layouts.length);
  const prevLayout = () => setCurrentLayout((prev) => (prev - 1 + layouts.length) % layouts.length);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Harga', href: '#harga' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-zinc-900 overflow-x-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="https://hunianmalang.vercel.app/">
              <img src="/logohm.png" alt="Hunian Malang Logo" className="w-10 h-10 object-contain" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6282140857907"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-600 text-white rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md active:scale-95"
            >
              Mulai Konsultasi
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium py-3 px-4 hover:bg-gray-50 rounded-lg text-zinc-700"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/6282140857907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 mt-2 bg-emerald-600 text-white rounded-full text-center font-semibold"
                >
                  Mulai Konsultasi
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-26 md:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-emerald-50/50 rounded-bl-[100px] hidden md:block"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-semibold mb-6">
              <Zap className="w-3 h-3 fill-current" />
              <span>Solusi Digital Terpercaya untuk Agen Properti</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-900 leading-tight mb-6">
              Listing Properti Anda <br />
              <span className="text-emerald-600">Jadi Lebih Menarik</span>
            </h1>
            <p className="text-lg text-zinc-600 mb-10 max-w-lg leading-relaxed">
              Buat website profesional untuk Villa, Rumah, atau Apartemen Anda. Tingkatkan kepercayaan klien dengan desain eksklusif dan fitur listing modern.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/6282140857907"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center gap-2 group"
              >
                Konsultasi Sekarang
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-full font-bold hover:bg-zinc-50 transition-all shadow-sm">
                Lihat Paket
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=property-${i}`}
                      alt="Agent avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold">100+ Agen Properti & Developer</p>
                <p className="text-zinc-500">Telah mendigitalisasi aset mereka bersama kami</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 h-[400px] md:h-[550px] group">
              <img
                src="/villabanner.png"
                alt="Desain Website Villa Eksklusif Malang - Hunian Malang"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 text-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-xl">Villa Bambu NK</h3>
                    <p className="text-sm opacity-80 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> Karangploso,Malang
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </section>
      {/* Showcase Section */}
      <section id="tentang" className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/lantai 1 (8).jpg" className="w-full h-full object-cover" alt="Interior Properti Mewah Malang" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img src="/Meeting.jpg" className="w-full h-full object-cover" alt="Ruang Meeting Modern Real Estate" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img src="/villabanner.png" className="w-full h-full object-cover" alt="Landing Page Villa Malang" />
              </div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/lantai 2 (4).jpg" className="w-full h-full object-cover" alt="Fasilitas Kolam Renang Villa" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Pakar Website Properti</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-8 leading-tight">Mengapa Agen Top Menggunakan Jasa Kami?</h2>
            <div className="space-y-10 mt-12">
              {[
                {
                  title: 'Brand Eksklusif',
                  desc: 'Website bukan sekadar katalog, tapi representasi brand Anda yang profesional dan berkelas.',
                  icon: <Target className="w-5 h-5 text-emerald-500" />
                },
                {
                  title: 'Konversi Tinggi',
                  desc: 'Kami mendesain alur navigasi yang mengarahkan pengunjung untuk segera menghubungi WhatsApp Anda.',
                  icon: <Zap className="w-5 h-5 text-emerald-500" />
                },
                {
                  title: 'Optimasi SEO Lokal',
                  desc: 'Website mudah ditemukan oleh calon pembeli yang mencari properti di area tertentu.',
                  icon: <Search className="w-5 h-5 text-emerald-500" />
                },
                {
                  title: 'Security & Maintenance',
                  desc: 'Website aman dari serangan cyber dan kami bantu update rutin agar sistem selalu prima.',
                  icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-zinc-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Layout Selection — 3D Perspective Showcase */}
      <section className="py-16 md:py-24 bg-[#e8eaed] overflow-hidden relative">
        {/* Subtle gradient floor */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#dcdfe3] to-transparent pointer-events-none" />

        <div className="max-w-[1800px] mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 tracking-tight text-zinc-800">Portofolio</h2>

          <div className="relative h-[280px] md:h-[420px] flex items-center justify-center" style={{ perspective: '1800px' }}>
            {/* Navigation Arrows */}
            <button
              onClick={prevLayout}
              aria-label="Previous layout"
              className="absolute left-4 md:left-[18%] top-[45%] -translate-y-1/2 z-50 text-zinc-300 hover:text-zinc-600 transition-colors active:scale-90"
            >
              <ChevronLeft size={40} strokeWidth={1.2} />
            </button>
            <button
              onClick={nextLayout}
              aria-label="Next layout"
              className="absolute right-4 md:right-[18%] top-[45%] -translate-y-1/2 z-50 text-zinc-300 hover:text-zinc-600 transition-colors active:scale-90"
            >
              <ChevronRight size={40} strokeWidth={1.2} />
            </button>

            {/* 3D Fan Layout */}
            <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
              {layouts.map((layout, index) => {
                const offset = index - currentLayout;
                const absOffset = Math.abs(offset);
                const direction = offset > 0 ? 1 : -1;

                // Elegant rotation: ~40° for neighbors, capping at ~55°
                const rotateY = offset === 0 ? 0 : direction * -(35 + Math.min(absOffset - 1, 3) * 5);
                // Tighter spacing so cards overlap like in the reference
                const xShift = offset === 0 ? 0 : direction * (200 + (absOffset - 1) * 120);
                // Push further back progressively
                const zShift = offset === 0 ? 60 : (100 + absOffset * 1);
                // Center card is largest
                const cardScale = offset === 0 ? 1.05 : Math.max(0.6, 0.82 - absOffset * 0.04);
                // Fade out gracefully
                const cardOpacity = absOffset > 4 ? 0 : Math.max(0.25, 1 - absOffset * 0.18);

                return (
                  <motion.div
                    key={layout.id}
                    initial={false}
                    animate={{
                      rotateY,
                      x: xShift,
                      z: zShift,
                      scale: cardScale,
                      opacity: cardOpacity,
                    }}
                    transition={{ type: 'spring', stiffness: 120, damping: 22 }}
                    className="absolute cursor-pointer"
                    style={{
                      width: 'clamp(150px, 18vw, 280px)',
                      aspectRatio: '3 / 4',
                      transformStyle: 'preserve-3d',
                      zIndex: 100 - absOffset,
                      filter: absOffset > 0 ? `blur(${Math.min(absOffset * 0.4, 1.5)}px)` : 'none',
                    }}
                    onClick={() => setCurrentLayout(index)}
                  >
                    {/* Card */}
                    <div
                      className="w-full h-full bg-white rounded-lg overflow-hidden border border-zinc-200/80"
                      style={{
                        boxShadow: offset === 0
                          ? '0 30px 80px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.04)'
                          : '0 20px 50px -15px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.03)',
                      }}
                    >
                      <img
                        src={layout.src}
                        alt={`Website layout ${layout.name}`}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>

                    {/* Floor Reflection */}
                    <div
                      className="absolute left-0 w-full overflow-hidden pointer-events-none rounded-lg"
                      style={{
                        top: '100%',
                        height: '35%',
                        transform: 'scaleY(-1)',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.25), transparent 70%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.25), transparent 70%)',
                      }}
                    >
                      <img
                        src={layout.src}
                        className="w-full h-full object-cover object-top opacity-40"
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section — Alternating Zigzag */}
      <section id="layanan" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 block">Fitur Unggulan</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Teknologi Terbaik untuk Penjualan Aset</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Website yang kami bangun didesain khusus untuk memudahkan calon pembeli mengeksplorasi setiap sudut properti Anda.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {[
              {
                title: 'Mudah Dioperasikan',
                desc: 'Kami membuat sistem website property yang fungsionalitasnya mudah untuk Anda gunakan dan operasikan. Tidak perlu keahlian teknis — cukup klik dan kelola.',
                bullets: ['Tutorial Penggunaan PDF', 'Tutorial Penggunaan Video', 'Support & Bantuan Teknis'],
                image: '/fitur1.png',
              },
              {
                title: 'Halaman Admin Panel',
                desc: 'Memudahkan Anda dalam mengelola konten website property secara keseluruhan, mulai dari pasang listing sampai posting artikel.',
                bullets: ['Dashboard Intuitif', 'Upload Foto & Video', 'Edit Konten Real-time'],
                image: '/fitur2.png',
              },
              {
                title: 'Statistik Kunjungan',
                desc: 'Dilengkapi laporan statistik pengunjung tiap listing yang memberikan informasi terperinci tentang jumlah pengunjung, sumber, dan halaman yang paling banyak dikunjungi.',
                bullets: ['Laporan Harian & Bulanan', 'Sumber Trafik Detail', 'Analisis Perilaku Pengunjung'],
                image: '/fitur3.png',
              },
              {
                title: 'SEO Booster',
                desc: 'Dilengkapi SEO booster untuk website property Anda untuk meningkatkan ranking pencarian search engine agar mudah ditemukan calon pembeli.',
                bullets: ['Meta Tags Otomatis', 'Sitemap Generator', 'Optimasi Kecepatan'],
                image: '/fitur4.png',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${idx % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
              >
                {/* Text Side */}
                <div className={idx % 2 === 1 ? 'md:[direction:ltr]' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed mb-6">{feature.desc}</p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-700">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                        </div>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className={`relative ${idx % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 bg-zinc-50">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Decorative blob */}
                  <div className={`absolute -z-10 w-72 h-72 rounded-full blur-[80px] opacity-30 bg-emerald-200 ${idx % 2 === 0 ? '-top-10 -right-10' : '-top-10 -left-10'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="harga" className="py-20 bg-zinc-900 text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Investasi Terbaik untuk Bisnis Anda</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
              Pilih paket pembuatan website properti yang paling sesuai dengan target pasar Anda.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Essential Home',
                price: 'Rp 1.500.000',
                desc: 'Ideal untuk agen properti perorangan yang baru mulai.',
                features: ["Include Hosting 1 tahun", "Free Copywriting", "Integrasi Google Maps", "Tombol CTA WhatsApp", "Formulir Kontak / Email", "Free Domain 1 tahun", "Optimasi SEO Basic", "Free SSL / Keamanan", "Mobile Friendly", "Gratis Revisi Minor", "Optimasi Kecepatan", "4x Revisi Mayor"
                ],
                isPopular: false
              },
              {
                name: 'Villa Business',
                price: 'Rp 3.000.000',
                desc: 'Pilihan populer untuk kantor agen & penyewaan villa.',
                features: ["Free Copywriting", "Tampilan Modern", "Include Hosting 1 tahun", "Sistem Booking WA", "Tombol CTA WhatsApp", "Integrasi Google Maps", "4-5 Halaman", "Mobile Friendly", "Optimasi SEO Basic", "Desain Visual Kompleks", "Free Domain 1 tahun", "SSL & Keamanan Premium", "Maintenance 1 Bulan", "Optimasi Kecepatan"],
                isPopular: true
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                desc: 'Solusi lengkap untuk developer & korporat.',
                features: ["Fokus pada Trust", "Include Hosting 1 tahun", "Sistem Booking & Payment", "Tombol CTA WhatsApp", "Integrasi Google Maps", "Free Copywriting", "5–7 Halaman Utama", "Mobile Friendly", "Optimasi SEO Basic", "Design Modern", "Free Domain 1 tahun", "Maintenance 1 Bulan", "Optimasi Kecepatan"],
                isPopular: false
              }
            ].map((pkg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${pkg.isPopular
                  ? 'bg-emerald-600 border-emerald-500 shadow-2xl shadow-emerald-500/20 scale-105 z-10'
                  : 'bg-zinc-800/40 border-zinc-700/50 backdrop-blur-sm'
                  }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-emerald-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.1em] shadow-xl">
                    Paling Laris
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{pkg.price}</span>
                    {pkg.price !== 'Custom' && <span className="text-[10px] opacity-50">/unit</span>}
                  </div>
                </div>

                <a
                  href={`https://wa.me/6282140857907?text=${encodeURIComponent(`Halo, saya tertarik paket ${pkg.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 mb-6 rounded-xl font-bold transition-all active:scale-95 text-center text-xs ${pkg.isPopular
                    ? 'bg-white text-emerald-600 hover:bg-zinc-50'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                >
                  Pilih Paket
                </a>

                <div className="space-y-2.5">
                  {pkg.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[12px]">
                      <CheckCircle className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${pkg.isPopular ? 'text-emerald-200' : 'text-emerald-500'}`} />
                      <span className="opacity-80 leading-tight">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontak" className="py-24 px-4 bg-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-50/50 rounded-full -z-10 blur-[120px]"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-12 shadow-lg">
            <MessageSquare className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-8 tracking-tight">Konsultasikan Website <br /> <span className="text-emerald-600">Properti Impian Anda</span></h2>
          <p className="text-xl text-zinc-600 mb-12 font-light leading-relaxed">
            Tim ahli kami siap membantu Anda membangun kehadiran digital yang profesional untuk mempercepat closing unit properti Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={`https://wa.me/6282140857907?text=${encodeURIComponent("Halo, saya ingin berkonsultasi mengenai pembuatan website properti.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-200 hover:bg-emerald-700 transition-all flex items-center gap-4 group"
            >
              <MessageSquare className="w-6 h-6 fill-current" />
              Hubungi via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 pt-24 pb-12 border-t border-zinc-200 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <img src="/logohm.png" alt="Hunian Malang Logo" className="w-12 h-12 object-contain" />
            </div>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Solusi digital premium untuk agen real estate, villa owner, dan developer properti di seluruh Indonesia.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {[Globe, MessageSquare, Smartphone].map((Icon, i) => (
                <div key={i} className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-emerald-600 hover:border-emerald-200 transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-8 uppercase tracking-widest text-xs">Layanan</h4>
            <ul className="space-y-5 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Website Agen Personal</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Website Booking Villa</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Landing Page Perumahan</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Integrasi Market Sync</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-8 uppercase tracking-widest text-xs">Perusahaan</h4>
            <ul className="space-y-5 text-zinc-500 text-sm">
              <li><a href="#tentang" className="hover:text-emerald-600 transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Hasil Project</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Testimoni Klien</a></li>
              <li><a href="https://wa.me/6282140857907" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-8 uppercase tracking-widest text-xs">Bantuan</h4>
            <ul className="space-y-5 text-zinc-500 text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Panduan Dashboard</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Masa Berlangganan</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-xs font-medium">
          <p>© {new Date().getFullYear()} Hunianmalang</p>
        </div>
      </footer>
    </div>
  );
}

