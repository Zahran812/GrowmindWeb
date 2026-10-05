import React from 'react';

export default function HubungiKami() {
  return (
    <>
      {/* Hero / Headline Section */}
      <section className="py-8 md:py-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 animate-fade-in-up">
              Ready to Cultivate Growth? Connect with Us.
          </h1>
          <p className="font-body-lg text-body-lg text-secondary">
              Whether you're looking to elevate your team's potential or seeking expert guidance for your own professional journey, our doors are always open. Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Content (Form & Details Grid) */}
      <section className="pb-section-padding px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-[0_4px_20px_-2px_rgba(26,93,26,0.05)] border border-surface-variant hover:shadow-[0_10px_25px_-5px_rgba(26,93,26,0.1)] transition-shadow duration-300">
            <form action="#" className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body-md text-body-md text-on-surface mb-2 font-medium" htmlFor="name">Name</label>
                  <input className="w-full rounded border-primary/20 bg-surface-bright text-on-surface focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed focus:outline-none transition-shadow py-3 px-4 font-body-md shadow-sm" id="name" name="name" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block font-body-md text-body-md text-on-surface mb-2 font-medium" htmlFor="company">Company</label>
                  <input className="w-full rounded border-primary/20 bg-surface-bright text-on-surface focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed focus:outline-none transition-shadow py-3 px-4 font-body-md shadow-sm" id="company" name="company" placeholder="Acme Corp" type="text" />
                </div>
              </div>
              <div>
                <label className="block font-body-md text-body-md text-on-surface mb-2 font-medium" htmlFor="email">Email Address</label>
                <input className="w-full rounded border-primary/20 bg-surface-bright text-on-surface focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed focus:outline-none transition-shadow py-3 px-4 font-body-md shadow-sm" id="email" name="email" placeholder="john@example.com" type="email" />
              </div>
              <div>
                <label className="block font-body-md text-body-md text-on-surface mb-2 font-medium" htmlFor="message">Message</label>
                <textarea className="w-full rounded border-primary/20 bg-surface-bright text-on-surface focus:border-tertiary-fixed focus:ring-1 focus:ring-tertiary-fixed focus:outline-none transition-shadow py-3 px-4 font-body-md shadow-sm" id="message" name="message" placeholder="How can we help you grow?" rows={5}></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full md:w-auto bg-tertiary-fixed text-primary-container font-label-caps text-label-caps px-8 py-4 rounded uppercase font-bold hover:bg-tertiary-fixed-dim transition-all shadow-[0_4px_6px_-1px_rgba(26,93,26,0.1)] hover:shadow-[0_10px_15px_-3px_rgba(26,93,26,0.2)] hover:-translate-y-0.5 flex justify-center items-center gap-2 group" type="submit">
                  Send Message
                  <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Info Cards */}
            <div className="bg-surface-container-low p-6 rounded-lg border border-surface-variant flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
              <div className="bg-surface-container-lowest p-3 rounded shadow-sm text-primary">
                <span className="material-symbols-outlined text-[24px]">call</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Phone</h3>
                <p className="font-body-md text-body-md text-secondary">+62 812 3456 7890</p>
                <p className="font-body-md text-body-md text-secondary">Mon-Fri, 9am - 5pm WIB</p>
              </div>
            </div>
            
            <div className="bg-surface-container-low p-6 rounded-lg border border-surface-variant flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
              <div className="bg-surface-container-lowest p-3 rounded shadow-sm text-primary">
                <span className="material-symbols-outlined text-[24px]">mail</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Email</h3>
                <a className="font-body-md text-body-md text-primary hover:text-primary-fixed-dim transition-colors font-medium lowercase" href="mailto:info@growmindacademy.com">
                    info@growmindacademy.com
                </a>
                <p className="font-body-md text-body-md text-secondary mt-1">For general inquiries</p>
              </div>
            </div>

            {/* Map Area */}
            <div className="rounded-lg overflow-hidden h-64 shadow-[0_4px_10px_-2px_rgba(26,93,26,0.1)] relative group">
              <img 
                  alt="Jakarta Map Location" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/photos/map_jakarta.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 text-surface">
                <h4 className="font-headline-sm text-body-lg font-bold">Jakarta Headquarters</h4>
                <p className="font-body-md text-body-md opacity-90 text-sm">JL. DUREN TIGA SELATAN NO 56 A, Desa/Kelurahan Duren Tiga, Kec. Pancoran, Kota Adm. Jakarta Selatan, Provinsi DKI Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
