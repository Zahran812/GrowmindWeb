import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-inverse-surface dark:bg-surface-container-lowest full-width mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-gutter py-section-padding max-w-container-max mx-auto font-body-md text-body-md font-label-caps text-label-caps">
        <div className="md:col-span-1">
          <div className="text-headline-sm font-headline-sm text-surface dark:text-primary font-bold mb-4 flex items-center gap-3">
             <img src="/photos/GROWMIND VECTOR.png" alt="Growmind Logo" className="h-8 w-auto brightness-0 invert dark:invert-0" />
             Growmind Academy
          </div>
          <p className="font-body-md text-body-md text-secondary-fixed-dim dark:text-secondary mb-6 normal-case">
              Empowering growth mindset across professional enterprises.
          </p>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-label-caps text-label-caps text-tertiary-fixed dark:text-tertiary mb-4 uppercase">Company</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="text-secondary-fixed-dim dark:text-secondary font-normal hover:text-tertiary-fixed-dim transition-colors font-body-md text-body-md">Beranda</Link></li>
            <li><Link to="/tentang-kami" className="text-secondary-fixed-dim dark:text-secondary font-normal hover:text-tertiary-fixed-dim transition-colors font-body-md text-body-md">Tentang Kami</Link></li>
            <li><Link to="/program" className="text-secondary-fixed-dim dark:text-secondary font-normal hover:text-tertiary-fixed-dim transition-colors font-body-md text-body-md">Program</Link></li>
            <li><Link to="#" className="text-secondary-fixed-dim dark:text-secondary font-normal hover:text-tertiary-fixed-dim transition-colors font-body-md text-body-md">Karir</Link></li>
            <li><Link to="#" className="text-secondary-fixed-dim dark:text-secondary font-normal hover:text-tertiary-fixed-dim transition-colors font-body-md text-body-md">Kebijakan Privasi</Link></li>
            <li><a href="https://www.instagram.com/growmindacademy_/" target="_blank" rel="noopener noreferrer" className="text-secondary-fixed-dim dark:text-secondary font-normal hover:text-tertiary-fixed-dim transition-colors font-body-md text-body-md flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">photo_camera</span> Instagram</a></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-label-caps text-label-caps text-tertiary-fixed dark:text-tertiary mb-4 uppercase">Contact</h4>
          <ul className="space-y-3">
            <li className="text-secondary-fixed-dim dark:text-secondary font-normal font-body-md text-body-md lowercase">info@growmindacademy.com</li>
            <li className="text-secondary-fixed-dim dark:text-secondary font-normal font-body-md text-body-md">+62 812 3456 7890</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-secondary-fixed-dim/20 text-tertiary-fixed dark:text-tertiary text-center md:text-left normal-case flex flex-col md:flex-row justify-between items-center gap-4">
            <span>© 2026 Growmind Academy. All rights reserved.</span>
            <span className="text-secondary-fixed-dim dark:text-secondary text-sm text-center md:text-right max-w-sm">
                JL. DUREN TIGA SELATAN NO 56 A, Desa/Kelurahan Duren Tiga, Kec. Pancoran, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta
            </span>
        </div>
      </div>
    </footer>
  );
}
