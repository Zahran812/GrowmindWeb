import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Program() {
  const [activeTab, setActiveTab] = useState('banking');
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-section-padding pb-section-padding overflow-hidden upward-momentum-bg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-gutter items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary animate-fade-in-up">
                Program & Layanan Kami
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Tingkatkan potensi tim dan organisasi Anda melalui program pelatihan komprehensif kami. Dirancang khusus untuk menanamkan 'Growth Mindset' di setiap lapisan perusahaan.
            </p>
          </div>
          <div className="order-1 md:order-2 relative h-64 md:h-96 rounded-lg overflow-hidden level-2-shadow group">
            <img 
                alt="Corporate training session" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/photos/training.png" 
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Program Categories - Tab System */}
      <section className="py-24 bg-[#F8F9FA]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#004407] mb-4">Katalog Layanan Spesifik</h2>
            <div className="w-16 md:w-24 h-1 bg-[#D4AF37] mx-auto mb-4 md:mb-6"></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-light">
                Solusi pelatihan yang dirancang khusus untuk menjawab tantangan di industri perbankan, kepatuhan, serta pengembangan sumber daya manusia.
            </p>
          </div>
          
          {/* Tabs Navigation (Minimalist Text-Based) */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16 mb-12 md:mb-16 border-b border-gray-200">
            {['banking', 'softskills', 'compliance'].map((tabKey) => {
              const labels = { banking: "Banking & Finance", softskills: "Core Soft Skills", compliance: "Compliance & Risk" };
              return (
                <button 
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`pb-4 text-sm sm:text-base md:text-lg font-semibold tracking-wide transition-all duration-300 relative ${activeTab === tabKey ? 'text-[#004407]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  {labels[tabKey]}
                  {/* Active Underline */}
                  <span className={`absolute bottom-[-1px] left-0 w-full h-[3px] bg-[#D4AF37] transform origin-left transition-transform duration-300 ${activeTab === tabKey ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </button>
              )
            })}
          </div>

          {/* Tabs Content (Cards) */}
          <div className="min-h-[400px]">
            {/* Banking & Finance Tab */}
            {activeTab === 'banking' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#004407] group-hover:bg-[#004407] group-hover:text-[#D4AF37] transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#105934] transition-colors duration-300">Trade Finance</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Membekali tim dengan keahlian mendalam terkait regulasi, instrumen, dan transaksi perdagangan domestik serta internasional.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#004407] group-hover:bg-[#004407] group-hover:text-[#D4AF37] transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">credit_score</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#105934] transition-colors duration-300">Credit & Lending</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Strategi analisis kredit komprehensif untuk memastikan kualitas aset yang sehat dan memitigasi risiko pinjaman secara efektif.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#004407] group-hover:bg-[#004407] group-hover:text-[#D4AF37] transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">settings_suggest</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#105934] transition-colors duration-300">Operational Banking</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Mengoptimalkan efisiensi, akurasi, dan keamanan standar operasional untuk keunggulan layanan perbankan harian.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            )}

            {/* Core Soft Skills Tab */}
            {activeTab === 'softskills' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#105934] group-hover:bg-[#105934] group-hover:text-white transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">psychology</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">Growth Mindset</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Menanamkan mentalitas pembelajar yang tangguh agar tim selalu siap beradaptasi, berinovasi, dan berkembang di tengah dinamika perubahan.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#105934] group-hover:bg-[#105934] group-hover:text-white transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">trending_up</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">Sales Excellence</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Menguasai teknik penjualan berbasis konsultasi dan relationship building untuk meningkatkan konversi dan retensi klien secara signifikan.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#105934] group-hover:bg-[#105934] group-hover:text-white transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">record_voice_over</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">Public Speaking</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Seni komunikasi persuasif dan memukau untuk menyampaikan gagasan, presentasi bisnis, dan memimpin rapat dengan penuh percaya diri.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            )}

            {/* Compliance & Risk Management Tab */}
            {activeTab === 'compliance' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up max-w-4xl mx-auto">
                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#004407] group-hover:bg-[#D4AF37] group-hover:text-[#004407] transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">gavel</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#105934] transition-colors duration-300">Anti Money Laundering (AML)</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Pemahaman esensial dan mutakhir mengenai regulasi kepatuhan untuk mendeteksi serta mencegah praktik pencucian uang di institusi keuangan.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 group border border-transparent hover:border-gray-100 flex flex-col relative overflow-hidden">
                  <div className="w-16 h-16 bg-[#F0F4F8] text-[#004407] group-hover:bg-[#D4AF37] group-hover:text-[#004407] transition-colors duration-500 flex items-center justify-center mb-8 rounded-sm">
                    <span className="material-symbols-outlined text-3xl">security</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#004407] mb-4 group-hover:text-[#105934] transition-colors duration-300">Financial Crime Prevention</h3>
                  <p className="text-sm md:text-[15px] text-gray-600 leading-relaxed font-light mb-8 flex-1">
                      Strategi taktis, investigatif, dan preventif dalam mengidentifikasi, menangkal, dan memitigasi berbagai bentuk kejahatan finansial masa kini.
                  </p>
                  <div className="mt-auto flex items-center text-[#D4AF37] font-bold text-xs tracking-widest uppercase opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn More <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Custom Program Banner */}
      <section className="py-24 bg-[#004407] relative overflow-hidden" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {/* Abstract Architectural Lines Overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 1px, transparent 1px), linear-gradient(-45deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-4 md:space-y-6">
            <div className="inline-block border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] px-3.5 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-1">
              Tailored Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Custom Program
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
              Butuh pelatihan khusus yang disesuaikan dengan target spesifik perusahaan Anda? Hubungi tim advisor kami untuk merancang kurikulum kustom yang menjawab tantangan unik bisnis Anda.
            </p>
          </div>
          
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link to="/hubungi-kami" className="inline-flex items-center justify-center gap-3 bg-white text-[#004407] px-6 py-4 md:px-8 md:py-5 rounded-sm font-bold tracking-wide hover:bg-[#D4AF37] hover:text-white transition-colors duration-300 shadow-xl group text-sm md:text-base w-full sm:w-auto">
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              Hubungi Advisor Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Training Gallery Section */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight mb-4 animate-fade-in-up">
              Galeri Pelatihan Kami
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
              Intip momen-momen inspiratif dan antusiasme peserta dalam berbagai sesi pelatihan yang telah kami selenggarakan.
            </p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden group break-inside-avoid ambient-shadow-l1 hover:ambient-shadow-l2 transition-shadow duration-300">
                <img 
                  src={img.src} 
                  alt={`Training Gallery ${idx + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="material-symbols-outlined text-white">zoom_in</span>
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

const galleryImages = [
  { src: "/photos/training-gallery/Screenshot 2026-05-16 at 18-34-58 Farid Munandar (@faridmunandar_) TikTok.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201349.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201355.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201406.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201416.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201422.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201428.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201433.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201439.png" },
  { src: "/photos/training-gallery/Screenshot 2026-05-20 201445.png" }
];
