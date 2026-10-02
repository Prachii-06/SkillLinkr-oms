import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { AnimatePresence, motion } from 'framer-motion';

// Map hash IDs → actual section element IDs in the DOM
const SECTION_MAP: Record<string, string> = {
  'how-it-works': 'workflow',
  'workflow':     'workflow',
  'roles':        'roles',
  'overview':     'overview',
  'capabilities': 'capabilities',
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smoothly scroll to a section, offsetting by the navbar's real height
  const scrollToSection = (hashId: string) => {
    const targetId = SECTION_MAP[hashId] ?? hashId;
    const el = document.getElementById(targetId);
    if (!el) return;

    const navbarHeight = headerRef.current?.offsetHeight ?? 72;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // After a route change that includes a hash, scroll once the page is painted
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const hashId = location.hash.replace('#', '');
      // rAF ensures the new page DOM is painted before we measure
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToSection(hashId);
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  const navLinks = [
    { label: 'Home',          path: '/' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'How It Works',  path: '/#how-it-works' },
    { label: 'For Colleges',  path: '/colleges' },
    { label: 'For Creators',  path: '/creators' },
    { label: 'About',         path: '/about' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    setMobileMenuOpen(false);

    if (!path.startsWith('/#')) return; // let normal <Link> handle it

    e.preventDefault();
    const hashId = path.split('#')[1];

    if (location.pathname !== '/') {
      // Navigate to home first, then scroll after render
      navigate('/');
      // scroll will be triggered by the useEffect above via location.hash
      // But navigate doesn't set hash, so we do it manually after nav:
      setTimeout(() => scrollToSection(hashId), 300);
    } else {
      scrollToSection(hashId);
      window.history.pushState(null, '', path);
    }
  };

  const isLinkActive = (path: string) => {
    if (path.startsWith('/#')) return false;
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path) && (path !== '/' || location.pathname === '/');
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-border py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-8 w-8" />
          <span className="font-bold text-xl tracking-tight text-brand-dark">SkillLinkr</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.path.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="text-sm font-medium text-brand-gray hover:text-brand-dark transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isLinkActive(link.path)
                    ? 'text-brand-dark font-bold'
                    : 'text-brand-gray hover:text-brand-dark'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-brand-dark hover:text-brand-cyan transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-sm font-medium bg-brand-dark text-white px-5 py-2.5 rounded-full hover:bg-black transition-all hover:shadow-md transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        <button
          className="lg:hidden text-brand-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-brand-border shadow-lg py-4 px-6 flex flex-col gap-4"
          >
            {navLinks.map((link) =>
              link.path.startsWith('/#') ? (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className="text-base font-medium text-brand-gray text-left"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium ${
                    isLinkActive(link.path) ? 'text-brand-dark font-bold' : 'text-brand-gray'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="h-px bg-brand-border w-full my-2"></div>
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-brand-dark text-left"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium bg-brand-dark text-white px-5 py-3 rounded-xl text-center shadow-sm"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
