import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Network, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Colleges = () => {
  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4">For Colleges</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark leading-[1.1] mb-6">
              Build a Connected <br/>
              <span className="text-gradient">Opportunity Ecosystem</span>
            </h1>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed max-w-lg">
              Empower your campus. Verify opportunities, manage submissions, maintain quality, and connect your students with the wider network.
            </p>
            <Link to="/signup" className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-all hover:-translate-y-0.5 shadow-md">
              Register Your College <ArrowRight size={18} />
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] bg-brand-light rounded-[2rem] border border-brand-border p-8 flex flex-col shadow-xl"
          >
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-cyan/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/20 rounded-full blur-3xl"></div>
            
            <div className="flex justify-between items-center mb-8 border-b border-brand-border pb-4 relative z-10">
              <div>
                <h3 className="font-bold text-brand-dark text-lg">College Dashboard</h3>
                <p className="text-xs text-brand-gray">KIIT University View</p>
              </div>
              <div className="bg-white p-2 rounded-lg border border-brand-border shadow-sm">
                <ShieldCheck className="text-brand-cyan" size={20} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
              <div className="bg-white p-4 rounded-xl border border-brand-border shadow-sm">
                <div className="text-xs text-brand-gray font-bold mb-1">PENDING VERIFICATION</div>
                <div className="text-2xl font-black text-brand-dark">12</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-brand-border shadow-sm">
                <div className="text-xs text-brand-gray font-bold mb-1">TOTAL REACH</div>
                <div className="text-2xl font-black text-brand-cyan">14.2K</div>
              </div>
            </div>

            <div className="bg-white flex-1 rounded-xl border border-brand-border shadow-sm p-4 relative z-10 flex flex-col gap-3">
              <div className="text-xs font-bold text-brand-dark mb-1">Recent Submissions</div>
              {[1, 2].map(i => (
                <div key={i} className="flex items-center justify-between p-3 bg-brand-secondary rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">S</div>
                    <div>
                      <div className="text-xs font-bold text-brand-dark">Hackathon 2026</div>
                      <div className="text-[10px] text-brand-gray">Tech Society</div>
                    </div>
                  </div>
                  <div className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded font-bold">Review</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Workflow */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-dark mb-12">The Verification Workflow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 relative z-10">
             <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-brand-border -z-10"></div>
             {[
               { icon: Network, title: 'Create', desc: 'Societies submit' },
               { icon: ShieldCheck, title: 'Review', desc: 'Ambassador checks' },
               { icon: ShieldCheck, title: 'Verify', desc: 'Ensure quality' },
               { icon: Network, title: 'Publish', desc: 'Goes live' },
               { icon: Users, title: 'Reach', desc: 'Students discover' }
             ].map((step, i) => (
               <motion.div 
                 key={step.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col items-center bg-white p-4 rounded-2xl w-full md:w-auto"
               >
                 <div className="w-12 h-12 bg-brand-secondary border border-brand-border rounded-xl flex items-center justify-center text-brand-dark mb-3">
                   <step.icon size={20} />
                 </div>
                 <h4 className="font-bold text-sm text-brand-dark">{step.title}</h4>
                 <p className="text-xs text-brand-gray">{step.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </main>
  );
};
