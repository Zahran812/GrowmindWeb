import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Program from './pages/Program';
import HubungiKami from './pages/HubungiKami';
import TentangKami from './pages/TentangKami';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background text-on-background font-body-md antialiased selection:bg-tertiary selection:text-on-tertiary">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/program" element={<Program />} />
            <Route path="/hubungi-kami" element={<HubungiKami />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
