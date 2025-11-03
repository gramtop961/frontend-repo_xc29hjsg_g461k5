import React from 'react';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navbar />
      <main className="pt-20 pb-10 bg-[radial-gradient(ellipse_at_top_right,rgba(187,247,208,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(254,249,195,0.35),transparent_50%)]">
        <Sections />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;