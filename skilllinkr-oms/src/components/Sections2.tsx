import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck2, Search, Bell, History, Layers3, Network, Building2, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Capabilities = () => {
  const caps = [
    { icon: <Layers3 />, title: "Role-Based Access", desc: "Three controlled portals with different responsibilities." },
    { icon: <ShieldCheck />, title: "College Isolation", desc: "Ambassadors manage only their assigned colleges." },
    { icon: <FileCheck2 />, title: "Society Submission", desc: "Guided opportunity creation with complete details." },
    { icon: <Search />, title: "Review Workflow", desc: "Approve, reject, or request corrections before publication." },
    { icon: <CheckCircle2 />, title: "Automatic Publish", desc: "Valid same-college approval publishes directly." },
    { icon: <History />, title: "Status Tracking", desc: "Societies follow the full lifecycle of submissions." },
    { icon: <Bell />, title: "Notifications", desc: "Important status changes surfaced immediately." },
    { icon: <Network />, title: "Scalable Network", desc: "Expand across colleges without centralizing review." },
  ];

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-brand-light" id="capabilities">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-dark mb-16">Platform Capabilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caps.map((cap) => (
            <motion.div
              key={cap.title}
              whileHover={{ y: -5, borderColor: '#06b6d4' }}
              className="bg-white p-6 rounded-2xl border border-brand-border group transition-all"
            >
              <div className="text-brand-gray group-hover:text-brand-cyan mb-4 transition-colors">
                {React.cloneElement(cap.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <h4 className="font-bold text-brand-dark mb-2 text-sm">{cap.title}</h4>
              <p className="text-brand-gray text-xs leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Positioning = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-white text-center border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">The operational backbone for campus opportunities.</h2>
        <p className="text-xl text-brand-gray mb-16">SkillLinkr OMS gives societies an easy publishing workflow, Campus Ambassadors a college-specific verification system, and Admins a scalable governance layer.</p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 font-bold text-2xl md:text-4xl text-brand-gray/30">
          {['CREATE', 'VERIFY', 'MANAGE', 'PUBLISH'].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, color: '#0F172A' }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-brand-dark text-white text-center">
      <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
        <h2 className="text-4xl font-bold mb-6">Opportunities, managed the right way.</h2>
        <p className="text-brand-gray text-lg mb-12">Bring societies, Campus Ambassadors, and administrators into one structured opportunity ecosystem.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup" className="w-full sm:w-auto bg-brand-cyan hover:bg-brand-cyan/90 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2">
            <Building2 size={18} /> List an Opportunity
          </Link>
          <Link to="/colleges" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full font-medium transition-all flex items-center justify-center gap-2">
            <ShieldCheck size={18} /> Manage Your Campus
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-brand-secondary py-16 border-t border-brand-border">
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
      <div className="col-span-1 md:col-span-1">
        <Link to="/" className="flex items-center gap-3 mb-6">
          <Logo className="h-8 w-8" />
          <span className="font-bold text-xl text-brand-dark tracking-tight">SkillLinkr</span>
        </Link>
        <p className="text-brand-gray text-sm leading-relaxed">
          The structured ecosystem connecting students, colleges, societies, and opportunity creators.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Product</h4>
        <ul className="space-y-3 text-sm text-brand-gray">
          <li><Link to="/opportunities" className="hover:text-brand-cyan transition-colors">Opportunities</Link></li>
          <li><Link to="/#how-it-works" className="hover:text-brand-cyan transition-colors">How It Works</Link></li>
          <li><Link to="/colleges" className="hover:text-brand-cyan transition-colors">For Colleges</Link></li>
          <li><Link to="/creators" className="hover:text-brand-cyan transition-colors">For Creators</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Company</h4>
        <ul className="space-y-3 text-sm text-brand-gray">
          <li><Link to="/about" className="hover:text-brand-cyan transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact</Link></li>
          <li><Link to="/careers" className="hover:text-brand-cyan transition-colors">Careers</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Resources</h4>
        <ul className="space-y-3 text-sm text-brand-gray">
          <li><Link to="/faq" className="hover:text-brand-cyan transition-colors">FAQs</Link></li>
          <li><Link to="/help" className="hover:text-brand-cyan transition-colors">Help Center</Link></li>
          <li><Link to="/privacy" className="hover:text-brand-cyan transition-colors">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-brand-cyan transition-colors">Terms</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-8 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-brand-gray text-sm">© 2026 SkillLinkr</p>
      <div className="flex gap-4 text-brand-gray">
        {/* Social Icons would go here */}
      </div>
    </div>
  </footer>
);
