import React from 'react';
import { Hero } from '../components/Hero';
import { ProblemVisual, TrustStructureScale, Roles, WorkflowTimeline, CollegeVerification } from '../components/Sections';
import { Capabilities, Positioning, FinalCTA } from '../components/Sections2';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <main>
      <Hero />
      <ProblemVisual />
      <TrustStructureScale />
      <Roles />
      <WorkflowTimeline />
      <CollegeVerification />

      {/* Society Product Demo — Step-by-step creation flow */}
      <section className="py-10 md:py-14 lg:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4">Society Experience</p>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-6">
                Simple for societies.<br />
                <span className="text-brand-gray">Structured for publication.</span>
              </h2>
              <p className="text-brand-gray text-lg leading-relaxed">Create an opportunity, preview it, submit for review, and track every stage — all from one portal.</p>
            </div>
            {/* Status journey */}
            <div className="flex flex-wrap gap-3 lg:justify-end items-center lg:pt-16">
              {[
                { label: 'Draft', color: 'bg-brand-gray/10 text-brand-gray border-brand-gray/20' },
                { label: 'Under Review', color: 'bg-amber-50 text-amber-600 border-amber-200' },
                { label: 'Correction Requested', color: 'bg-orange-50 text-orange-600 border-orange-200' },
                { label: 'Approved', color: 'bg-green-50 text-brand-green border-green-200' },
                { label: 'Published', color: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30' },
              ].map((s, i) => (
                <motion.span
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border ${s.color}`}
                >
                  {s.label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Big product mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[2rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] border border-brand-border overflow-hidden"
          >
            {/* Browser chrome */}
            <div className="h-11 bg-brand-light border-b border-brand-border flex items-center px-5 gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-brand-green"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white border border-brand-border rounded-md px-16 py-1 text-xs text-brand-gray">oms.skilllinkr.com/society/create</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row min-h-[420px]">
              {/* Sidebar: Steps */}
              <div className="w-full md:w-56 bg-brand-secondary border-r border-brand-border p-6 flex-shrink-0">
                <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-6">Submission Steps</p>
                <div className="space-y-1">
                  {[
                    { step: 1, label: 'Basic Details', done: true, active: false },
                    { step: 2, label: 'Opportunity Details', done: false, active: true },
                    { step: 3, label: 'Poster Upload', done: false, active: false },
                    { step: 4, label: 'Preview', done: false, active: false },
                    { step: 5, label: 'Submit', done: false, active: false },
                  ].map((s) => (
                    <div key={s.step} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${s.active ? 'bg-white shadow-sm border border-brand-border font-bold text-brand-dark' : s.done ? 'text-brand-green font-medium' : 'text-brand-gray'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black flex-shrink-0 ${s.active ? 'bg-brand-cyan text-white' : s.done ? 'bg-brand-green text-white' : 'bg-brand-border text-brand-gray'}`}>
                        {s.done ? '✓' : s.step}
                      </div>
                      {s.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content area */}
              <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-bold text-xl text-brand-dark">Opportunity Details</h3>
                    <p className="text-brand-gray text-sm mt-1">Describe the opportunity clearly for review.</p>
                  </div>
                  <motion.div
                    className="flex items-center gap-2 bg-amber-50 text-amber-600 border border-amber-200 px-3 py-1.5 rounded-full text-xs font-bold"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                    Saving Draft...
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-wide block mb-1.5">Title</label>
                    <div className="h-10 bg-brand-light border border-brand-border rounded-xl flex items-center px-4 text-sm text-brand-dark font-medium truncate">National Coding Challenge</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-wide block mb-1.5">Category</label>
                    <div className="h-10 bg-brand-light border border-brand-border rounded-xl flex items-center px-4 text-sm text-brand-dark">Hackathon</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-wide block mb-1.5">Date</label>
                    <div className="h-10 bg-brand-light border border-brand-border rounded-xl flex items-center px-4 text-sm text-brand-dark">18 Oct 2026</div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-brand-gray uppercase tracking-wide block mb-1.5">Mode</label>
                    <div className="h-10 bg-brand-light border border-brand-border rounded-xl flex items-center px-4 text-sm text-brand-dark">Hybrid</div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-xs font-bold text-brand-gray uppercase tracking-wide block mb-1.5">Description</label>
                  <div className="h-20 bg-brand-light border border-brand-border rounded-xl p-4 text-sm text-brand-gray/70 leading-relaxed overflow-hidden">
                    A 36-hour national hackathon focused on AI and machine learning solutions for real-world campus challenges...
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-brand-border gap-4">
                  <button className="w-full sm:w-auto text-sm text-brand-gray border border-brand-border px-5 py-2 rounded-xl hover:bg-brand-secondary transition-colors">Save Draft</button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto text-sm bg-brand-dark text-white px-6 py-2 rounded-xl font-medium shadow-md flex items-center justify-center gap-2"
                  >
                    Continue to Poster
                    <span>→</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Impact Visual */}
      <section className="py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-16">Students discover cleaner, verified opportunities.</h2>

          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center gap-4 text-sm font-bold text-brand-gray tracking-wider">
              <div>SOCIETY</div>
              <div className="h-8 w-px bg-brand-border"></div>
              <div>VERIFICATION</div>
              <div className="h-8 w-px bg-brand-border"></div>
              <div className="text-brand-green">APPROVED</div>
              <div className="h-8 w-px bg-brand-border"></div>
              <div className="text-brand-cyan">SKILLLINKR</div>
              <div className="h-8 w-px bg-brand-border"></div>
              <div className="text-brand-dark">STUDENT FEED</div>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
              {[
                { type: 'Hackathon', title: 'Global AI Hack', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=400&auto=format&fit=crop' },
                { type: 'Workshop', title: 'Web3 Masterclass', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop' },
                { type: 'Competition', title: 'Designathon 2026', img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=400&auto=format&fit=crop' },
                { type: 'Internship', title: 'Summer Analyst', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop' }
              ].map((item, i) => (
                <motion.div
                  key={item.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white border border-brand-border rounded-xl overflow-hidden text-left shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="w-full h-32 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs font-bold text-brand-cyan mb-1">{item.type}</div>
                    <div className="text-sm font-bold text-brand-dark">{item.title}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Capabilities />
      <Positioning />
      <FinalCTA />
    </main>
  );
};
