import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Sections2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Opportunities } from './pages/Opportunities';
import { Colleges } from './pages/Colleges';
import { Creators } from './pages/Creators';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-brand-dark overflow-x-hidden selection:bg-brand-cyan/20 relative">
        {/* Global Ambient Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-brand-light overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/10 blur-[120px] mix-blend-multiply opacity-70 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-green/10 blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-400/10 blur-[120px] mix-blend-multiply opacity-70 animate-blob animation-delay-4000"></div>
          {/* Very Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
