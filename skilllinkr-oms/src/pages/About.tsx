import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <main className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-24">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">About <span className="text-brand-cyan">SkillLinkr</span></h1>
          <p className="text-xl text-brand-gray leading-relaxed">We are building the structured ecosystem connecting students, colleges, societies, and opportunity creators.</p>
        </motion.div>

        <div className="space-y-24">
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Problem</h2>
            <p className="text-brand-gray text-lg leading-relaxed">
              Campus opportunities are scattered. Students rely on fragmented WhatsApp groups, unverified posters, and disjointed platforms. Quality is hard to maintain, and reaching the right audience is even harder for creators.
            </p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">The Solution</h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-8">
              SkillLinkr OMS (Opportunity Management System) centralizes this workflow. It provides tools for societies to create structured posts, empowers campus ambassadors to verify them, and ensures students see only high-quality, verified opportunities.
            </p>
            
            {/* Ecosystem visual */}
            <div className="bg-brand-light rounded-[2rem] p-12 border border-brand-border flex flex-col items-center justify-center text-center">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-brand-border font-bold text-brand-dark text-lg mb-6 w-48">Students</div>
              <div className="h-10 w-px bg-brand-border mb-6 flex flex-col justify-center items-center">
                <div className="text-brand-cyan text-xs">▲ ▼</div>
              </div>
              <div className="bg-brand-dark text-white p-4 rounded-2xl shadow-md font-bold text-xl mb-6 w-56 border-2 border-brand-cyan/30">SkillLinkr Platform</div>
              <div className="flex gap-4 mb-6">
                <div className="w-px h-10 bg-brand-border rotate-45 transform origin-bottom-right"></div>
                <div className="w-px h-10 bg-brand-border"></div>
                <div className="w-px h-10 bg-brand-border -rotate-45 transform origin-bottom-left"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-border font-bold text-brand-dark text-sm">Colleges</div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-border font-bold text-brand-dark text-sm">Societies</div>
                <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-border font-bold text-brand-dark text-sm">Organizations</div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
};
