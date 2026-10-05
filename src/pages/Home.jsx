import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* 1. Full-Photo Hero Section */}
      <section className="relative min-h-[95vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image (Full Cover with offset to hide top green line) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/photos/training-gallery/Screenshot%202026-05-20%20201406.png"
            alt="Growmind Training Session"
            className="w-full h-[calc(100%+32px)] relative -top-[16px] object-cover object-center"
          />
          {/* Thin dark overlay to keep image visible but make white text readable */}
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full pt-20 pb-32 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <span className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
              Growmind Academy
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Upgrade Your Skills,<br />
              <span className="text-[#D4AF37]">Multiply</span> Your Results.
            </h1>
            <p className="text-sm sm:text-base md:text-xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed">
              We empower professionals and organizations with practical training, leadership skills, and growth strategies to drive real business results.
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
              <Link to="/program" className="inline-flex items-center justify-center gap-3 bg-[#004407] text-white px-5 py-3.5 md:px-8 md:py-4 rounded-md font-bold tracking-widest uppercase text-xs hover:bg-[#D4AF37] hover:text-[#004407] transition-all duration-300 shadow-md">
                Explore Our Program
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
              <Link to="/hubungi-kami" className="inline-flex items-center justify-center gap-3 bg-white/10 text-white border border-white/20 px-5 py-3.5 md:px-8 md:py-4 rounded-md font-bold tracking-widest uppercase text-xs hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm shadow-md">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics / Stats Component */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 md:px-12 -mt-16 md:-mt-20 mb-16 md:mb-24">
        <div className="bg-white rounded-sm shadow-[0_15px_50px_rgb(0,0,0,0.1)] p-6 md:p-14 border-t-4 border-[#004407]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center justify-center px-4 py-4 md:py-0">
              <span className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 font-mono">30+</span>
              <p className="text-sm font-bold text-[#004407] uppercase tracking-wider mb-2">Tahun</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">Rata-rata Pengalaman Praktisi</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-4 md:py-0">
              <span className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 font-mono">10+</span>
              <p className="text-sm font-bold text-[#004407] uppercase tracking-wider mb-2">Bank Terkemuka</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">Rekam Jejak Kerja Sama</p>
            </div>
            <div className="flex flex-col items-center justify-center px-4 py-4 md:py-0">
              <span className="text-4xl md:text-6xl font-extrabold text-[#D4AF37] mb-2 font-mono">60+</span>
              <p className="text-sm font-bold text-[#004407] uppercase tracking-wider mb-2">Sesi Pelatihan</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px] mx-auto">Telah Terlaksana dengan Sukses</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Trusted By Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-6 md:mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>Trusted by Leading Institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 transition-all duration-500">
            {['59d582eb42915bab5335d2ce08b67a35.png', 'a4aea4ff92706347f1545db50d6d79c5.png', 'b1cd7fd845ea973e6eac12ff163ed477.png', 'ca3aa19a487eea56668262fbd93ddfb0.png', 'ca4b239c53bd86dbd3d3968795d05c73.png', 'clipart863868.png', 'd13df73acdc7ae2703ce40c9d8d27cdf.png'].map((logo, index) => (
              <img key={index} src={`/photos/company-logos/${logo}`} alt="Partner Logo" className="h-8 md:h-12 object-contain hover:scale-110 transition-transform duration-300" />
            ))}
          </div>
        </div>
      </section>



      {/* Mentor Section */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-12 md:mb-20 space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#004407] tracking-tight animate-fade-in-up" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Meet Our Expert Mentors
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto pt-2 md:pt-4 font-light">
              Belajar langsung dari para praktisi dan ahli berpengalaman yang telah membuktikan kesuksesan di industri mereka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full group border border-gray-100 relative"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {/* Image Section */}
                <div className="w-full h-[260px] sm:h-[300px] md:h-[340px] relative overflow-hidden bg-gray-50">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col bg-white">
                  {/* Name and Basic Title */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-2">{mentor.name}</h3>
                    <div className="w-12 h-1 bg-[#D4AF37]"></div>
                  </div>

                  {/* Visual Badges for Titles */}
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {mentor.title.split('|').map((t, i) => (
                      <span key={i} className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#004407] bg-[#004407]/5 px-2.5 py-1 rounded-sm">
                        <span className="material-symbols-outlined text-[13px] text-[#D4AF37] mr-1">
                          {i === 0 ? 'stars' : i === 1 ? 'handshake' : 'podium'}
                        </span>
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-[15px] leading-relaxed text-[#333333] mb-6 md:mb-8 flex-1 font-normal">
                    {mentor.description}
                  </p>

                  {/* Connect / View Bio Section */}
                  <div className="mt-auto pt-4 md:pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Keahlian Utama</p>
                      <p className="text-xs md:text-sm font-medium text-[#004407] line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                        {mentor.expertise}
                      </p>
                    </div>

                    <button className="ml-4 flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#004407] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#004407] transition-colors duration-300 shadow-md">
                      <span className="material-symbols-outlined text-sm md:text-base">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const mentors = [
  {
    name: "Farid Munandar",
    title: "Senior Banking Executive | Sales Leader | Performance Trainer",
    description: "Praktisi leadership dengan 29+ tahun pengalaman di perbankan. Mantan Regional Head yang memimpin 400+ karyawan, serta tersertifikasi ToT, Professional Coaching, dan Master Hypnotherapy BNSP.",
    expertise: "Leadership, sales excellence, coaching, growth mindset, dan people management.",
    image: "/photos/Trainer/Farid Munandar.jpg"
  },
  {
    name: "Ridwan Susanto",
    title: "Senior Banking Professional | Trade Finance Expert",
    description: "Advisor senior Corporate Banking & Trade Finance dengan 31+ tahun pengalaman. Memiliki rekam jejak strategis di 10 bank ternama skala nasional dan internasional (HSBC, UBS, Rabobank, dll).",
    expertise: "Structured trade finance, supply chain finance, dan corporate relationship management.",
    image: "/photos/Trainer/Ridwan-Susanto.png"
  },
  {
    name: "Foiman Zega",
    title: "HR Professional | Public Speaker | Career Development Trainer",
    description: "HR Professional & Certified Public Speaker (BNSP) dengan 11+ tahun pengalaman. Memimpin 60+ sesi pelatihan dan sering dipercaya sebagai pembicara di perusahaan multinasional dan kampus top.",
    expertise: "Career preparation, interview skills, CV writing, service excellence, public speaking, dan personal branding.",
    image: "/photos/Trainer/FOIMAN-ZEGA.png"
  },
  {
    name: "Ambarwati Soemarsono",
    title: "Senior Banking Professional | Service Excellence | Communication Expert",
    description: "Profesional senior dengan 30+ tahun kapabilitas end-to-end operasional perbankan. Merintis karier dari frontliner hingga sukses memimpin sebagai Branch Manager dan Area Manager.",
    expertise: "Effective Communication, Customer Oriented, dan membangun budaya layanan frontline unggul.",
    image: "/photos/Trainer/AMBARWATI-SOEMARSONO.png"
  },
  {
    name: "Hendro Basuki",
    title: "Senior Trainer in Financial Compliance & Risk Management | Financial Crime Prevention Expert",
    description: "Pakar sistem kepatuhan dengan 30+ tahun pengalaman. Mantan Head of Financial Crime Compliance & AML Head, serta tersertifikasi Risk Management Level 4 (BSMR).",
    expertise: "Financial Crime Compliance, Anti Money Laundering (AML), Fraud Prevention, dan Risk Management.",
    image: "/photos/Trainer/HENDRO-BASUKI.png"
  },
  {
    name: "Fikri Zulfikar",
    title: "Bancassurance & Business Development Expert | Senior Trainer in Bancassurance & Leadership",
    description: "Pakar Bancassurance dengan 20+ tahun pengalaman asuransi dan perbankan. Mantan posisi strategis di perusahaan asuransi terkemuka (AXA Mandiri, Allianz Life, BNI Life).",
    expertise: "Qualified Wealth Planner (QWP), Qualified Chief Risk Officer (QCRO), Certified Risk Governance Professional (CRGP), serta Manajemen Umum Dana Pensiun (MUDP).",
    image: "/photos/Trainer/FIKRI-ZULFIKAR.png"
  }
];
