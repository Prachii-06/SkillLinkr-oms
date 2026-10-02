import React from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, LayoutDashboard, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Creators = () => {
  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4">For Opportunity Creators</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] mb-6">
              Create. Verify. <span className="text-brand-cyan">Reach.</span>
            </h1>
            <p className="text-lg text-brand-gray mb-10 leading-relaxed">
              For student societies, college clubs, and event organizers. Structured creation flow to get your opportunities verified and in front of thousands of students.
            </p>
            <Link to="/signup" className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-all shadow-md">
              Create an Opportunity <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '01', icon: FileText, title: 'Create Opportunity', desc: 'Fill in details, upload posters, and set criteria in a structured form.' },
            { step: '02', icon: Send, title: 'Submit for Verification', desc: 'Your opportunity is routed to your college Ambassador automatically.' },
            { step: '03', icon: ShieldCheckIcon, title: 'Get Verified', desc: 'Receive feedback, make corrections if needed, and get approved.' },
            { step: '04', icon: LayoutDashboard, title: 'Reach Students', desc: 'Once published, it appears on the global feed for students to discover.' },
          ].map((item, i) => (
            <motion.div 
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-8 rounded-[2rem] border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 relative group"
            >
              <div className="text-5xl font-black text-brand-light absolute top-6 right-6 transition-colors group-hover:text-brand-cyan/10">{item.step}</div>
              <div className="w-14 h-14 rounded-2xl bg-brand-secondary flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
                <item.icon size={24} />
              </div>
              <h3 className="font-bold text-xl text-brand-dark mb-3 relative z-10">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

// Helper component since ShieldCheck wasn't imported from lucide-react initially in this file snippet
const ShieldCheckIcon = ({size}: {size:number}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
