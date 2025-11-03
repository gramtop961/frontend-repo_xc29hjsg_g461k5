import React from 'react';
import { Leaf, Sprout, ShieldCheck, Recycle } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-green-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-green-700 font-semibold text-lg">
          <Leaf className="h-6 w-6 text-green-600" />
          Farm Fusion Innovation
        </a>
        <ul className="hidden sm:flex items-center gap-6 text-sm text-green-800">
          <li><a className="hover:text-green-600 transition-colors" href="#crop">Crop Recommendation</a></li>
          <li><a className="hover:text-green-600 transition-colors" href="#disease">Disease Prediction</a></li>
          <li><a className="hover:text-green-600 transition-colors" href="#sustainable">Sustainable Farming</a></li>
        </ul>
        <div className="sm:hidden flex items-center gap-3 text-green-700">
          <a href="#crop" aria-label="Crop"><Sprout className="h-5 w-5" /></a>
          <a href="#disease" aria-label="Disease"><ShieldCheck className="h-5 w-5" /></a>
          <a href="#sustainable" aria-label="Sustainable"><Recycle className="h-5 w-5" /></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;