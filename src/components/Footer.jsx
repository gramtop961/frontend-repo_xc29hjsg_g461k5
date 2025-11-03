import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-green-100 bg-white/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-green-700 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Farm Fusion Innovation</p>
        <p className="text-green-700/70">Built with a light-green and pastel-yellow palette for a clean, modern look.</p>
      </div>
    </footer>
  );
};

export default Footer;