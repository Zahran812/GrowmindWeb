import React from 'react';
import { Link } from 'react-router-dom';

export default function TentangKami() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-section-padding pb-section-padding overflow-hidden upward-momentum-bg">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-gutter items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary animate-fade-in-up uppercase">
                TENTANG KAMI
            </h1>
            <div className="font-body-lg text-body-lg text-on-surface-variant max-w-lg space-y-4">
              <p>
                  Growmind Academy dari <strong>PT. Tri Tunggal Bumi Nusantara</strong> adalah lembaga Pengembangan dan pemberdayaan Sumber Daya Manusia yang berfokus pada peningkatan kompetensi individu dan organisasi agar mampu beradaptasi, tumbuh, dan unggul di tengah perubahan dunia kerja yang dinamis.
              </p>
              <p>
                  Kami percaya bahwa keberhasilan organisasi bertumpu pada SDM yang kompeten, berkarakter, dan berdaya saing. Oleh karena itu, setiap program kami dirancang secara aplikatif, relevan dengan kebutuhan industri, serta berorientasi pada hasil nyata.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-64 md:h-96 rounded-lg overflow-hidden level-2-shadow group">
            <img 
                alt="Tentang Growmind Academy" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/photos/tentang_kami.png" 
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-surface-container-low p-6 md:p-8 rounded-xl level-1-shadow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <span className="material-symbols-outlined text-[32px]">visibility</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 uppercase">Visi</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                    Menjadi lembaga yang memberikan manfaat nyata bagi masyarakat dan dunia kerja melalui pengembangan sumber daya manusia terkemuka yang berkomitmen menghasilkan SDM yang kompeten, berintegritas, dan berdaya saing.
                </p>
            </div>
            {/* Misi */}
            <div className="bg-surface-container-low p-6 md:p-8 rounded-xl level-1-shadow hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-tertiary mb-6">
                    <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4 uppercase">Misi</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <span className="material-symbols-outlined text-primary-container mr-3 mt-0.5">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">Menyediakan layanan pelatihan, outsourcing, dan konsultasi SDM yang berkualitas dan berbasis kebutuhan industri, guna menghasilkan sumber daya manusia yang kompeten dan siap kerja.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-symbols-outlined text-primary-container mr-3 mt-0.5">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">Membangun SDM yang berintegritas, profesional, dan berdaya saing, melalui pengembangan kompetensi, karakter, serta penerapan standar etika kerja yang tinggi.</span>
                    </li>
                    <li className="flex items-start">
                        <span className="material-symbols-outlined text-primary-container mr-3 mt-0.5">check_circle</span>
                        <span className="font-body-md text-body-md text-on-surface-variant">Menjalin kemitraan strategis dan menerapkan tata kelola yang profesional, untuk memastikan keberlanjutan layanan serta memberikan nilai tambah bagi klien dan pemangku kepentingan.</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai-Nilai Perusahaan */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">Nilai-Nilai Perusahaan</h2>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mx-auto">
                Prinsip dan fondasi utama yang menjadi panduan dalam setiap langkah kami (BEST).
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* B */}
            <div className="bg-surface p-6 rounded-lg level-1-shadow flex items-start gap-4 hover:bg-primary/5 transition-colors duration-300">
                <div className="text-display-lg text-primary-container font-bold opacity-30 select-none">B</div>
                <div>
                    <h4 className="font-headline-sm text-[20px] font-semibold text-primary mb-2">Bermanfaat</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Menjadikan kemanfaatan bagi manusia dan masyarakat sebagai tujuan utama dalam setiap layanan, program, dan keputusan perusahaan.</p>
                </div>
            </div>
            {/* E */}
            <div className="bg-surface p-6 rounded-lg level-1-shadow flex items-start gap-4 hover:bg-primary/5 transition-colors duration-300">
                <div className="text-display-lg text-primary-container font-bold opacity-30 select-none">E</div>
                <div>
                    <h4 className="font-headline-sm text-[20px] font-semibold text-primary mb-2">Etis</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Menjunjung tinggi kejujuran, tanggung jawab, dan etika profesional dalam membangun kepercayaan dengan seluruh pemangku kepentingan.</p>
                </div>
            </div>
            {/* S */}
            <div className="bg-surface p-6 rounded-lg level-1-shadow flex items-start gap-4 hover:bg-primary/5 transition-colors duration-300">
                <div className="text-display-lg text-primary-container font-bold opacity-30 select-none">S</div>
                <div>
                    <h4 className="font-headline-sm text-[20px] font-semibold text-primary mb-2">Solutif</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Menghadirkan solusi yang inovatif, tepat sasaran, dan relevan untuk menjawab tantangan dunia kerja maupun kebutuhan klien.</p>
                </div>
            </div>
            {/* T */}
            <div className="bg-surface p-6 rounded-lg level-1-shadow flex items-start gap-4 hover:bg-primary/5 transition-colors duration-300">
                <div className="text-display-lg text-primary-container font-bold opacity-30 select-none">T</div>
                <div>
                    <h4 className="font-headline-sm text-[20px] font-semibold text-primary mb-2">Tangguh</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">Memiliki daya juang tinggi, adaptif terhadap perubahan, dan senantiasa tangguh dalam menghadapi dinamika industri.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofi Logo */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-4 order-1 flex justify-center bg-surface-container-low p-6 md:p-8 rounded-2xl level-2-shadow group">
                <img 
                    src="/photos/GROWMIND VECTOR.png" 
                    alt="Logo Growmind Academy" 
                    className="w-full max-w-[200px] md:max-w-[250px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <div className="md:col-span-8 order-2 space-y-6">
                <h2 className="font-headline-md text-headline-md text-primary mb-6">Filosofi Logo</h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">auto_awesome</span>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            <strong>Tiga Elemen Terpadu</strong> melambangkan sinergi antara pengetahuan, keterampilan, dan sikap (knowledge, skill, mindset).
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">sync</span>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            <strong>Bentuk dinamis dan saling terhubung</strong> mencerminkan kolaborasi, kesinambungan, dan pertumbuhan berkelanjutan.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim mr-3 mt-1">looks_one</span>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            <strong>Angka "1" sebagai elemen pusat</strong> melambangkan keunggulan, tujuan bersama, dan standar kualitas tertinggi, sekaligus menegaskan bahwa manusia merupakan fokus utama dalam setiap aktivitas perusahaan.
                        </p>
                    </div>
                </div>
                
                <div className="pt-4">
                    <h3 className="font-headline-sm text-[20px] font-semibold text-primary mb-3">Warna:</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="w-4 h-4 rounded-full bg-blue-600 mr-3 shadow-sm"></span>
                            <span className="font-body-md text-body-md text-on-surface-variant"><strong>Biru:</strong> profesionalisme, kepercayaan, dan stabilitas</span>
                        </li>
                        <li className="flex items-center">
                            <span className="w-4 h-4 rounded-full bg-green-600 mr-3 shadow-sm"></span>
                            <span className="font-body-md text-body-md text-on-surface-variant"><strong>Hijau:</strong> pertumbuhan, pengembangan, dan keberlanjutan</span>
                        </li>
                        <li className="flex items-center">
                            <span className="w-4 h-4 rounded-full bg-yellow-400 mr-3 shadow-sm"></span>
                            <span className="font-body-md text-body-md text-on-surface-variant"><strong>Kuning:</strong> energi, optimisme, dan potensi unggul</span>
                        </li>
                    </ul>
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <p className="font-body-md text-body-md text-primary font-medium italic">
                        "Keseluruhan logo menegaskan komitmen kami dalam membangun SDM yang unggul dan bernilai tinggi."
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Komitmen Kami */}
      <section className="py-20 bg-primary text-on-primary">
          <div className="max-w-4xl mx-auto px-margin-mobile md:px-gutter text-center space-y-8">
              <h2 className="font-display-lg-mobile md:font-display-lg">Komitmen Kami</h2>
              <p className="font-body-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Kami berkomitmen menjadi mitra strategis yang memberikan manfaat nyata bagi manusia dengan menciptakan sumber daya manusia yang unggul, adaptif, dan siap menghadapi tantangan masa depan, demi kemajuan individu dan organisasi secara berkelanjutan.
              </p>
              <div className="pt-4">
                <Link to="/hubungi-kami" className="inline-block bg-tertiary-fixed text-primary-container px-6 py-3.5 md:px-8 md:py-4 rounded font-label-caps text-label-caps uppercase hover:bg-tertiary-fixed-dim transition-colors ambient-shadow-l1 hover:ambient-shadow-l2 transform hover:-translate-y-0.5 duration-200 shadow-xl text-xs md:text-sm">
                    Mulai Perjalanan Anda
                </Link>
              </div>
          </div>
      </section>
    </>
  );
}
