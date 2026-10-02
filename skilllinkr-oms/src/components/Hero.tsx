import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Search, ArrowRight, ShieldCheck, Send, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowSteps = [
  { name: 'Create', icon: <Search size={14} /> },
  { name: 'Submit', icon: <Send size={14} /> },
  { name: 'Review', icon: <Eye size={14} /> },
  { name: 'Verify', icon: <ShieldCheck size={14} /> },
  { name: 'Publish', icon: <CheckCircle2 size={14} /> },
  { name: 'Discover', icon: <Search size={14} /> },
];

export const Hero = () => {
  return (
    <section className="relative pt-16 pb-10 md:pt-24 md:pb-14 lg:pt-28 lg:pb-20" id="overview">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-cyan/5 via-brand-light to-brand-light -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Copy */}
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-wider text-brand-gray uppercase mb-4">SkillLinkr OMS</p>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-brand-dark leading-[1.1] mb-6">
              One Platform for <br />
              <span className="text-gradient">Every Campus Opportunity.</span>
            </h1>
            <p className="text-lg text-brand-gray mb-8 leading-relaxed">
              Submit, verify, manage, and publish campus opportunities through one structured workflow.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/signup" className="bg-brand-dark text-white px-6 py-3 rounded-full font-medium hover:bg-black transition-all hover:-translate-y-0.5 shadow-md hover:shadow-lg">
                Get Started
              </Link>
              <Link to="/opportunities" className="flex items-center gap-2 text-brand-dark font-medium px-6 py-3 rounded-full border border-brand-border hover:bg-brand-secondary transition-colors">
                Explore Opportunities <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm font-medium text-brand-gray">
              {workflowSteps.map((step, idx) => (
                <React.Fragment key={step.name}>
                  <span className="flex items-center gap-1.5 bg-white border border-brand-border px-3 py-1.5 rounded-full shadow-sm">
                    {step.name}
                  </span>
                  {idx < workflowSteps.length - 1 && (
                    <ArrowRight size={14} className="text-brand-border hidden md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Visual */}
        <div className="relative h-[500px] w-full flex items-center justify-center overflow-visible">
          <motion.div
            className="absolute z-20 w-[320px] bg-white rounded-2xl border border-brand-border shadow-2xl p-6"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-28 -mx-6 -mt-6 mb-4 bg-gray-100 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" alt="Hackathon" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-bold text-brand-dark text-lg mb-1">National Coding Challenge</h3>
                <p className="text-sm text-brand-gray">Hackathon</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-brand-gray">Society</span>
                <span className="font-medium">Tech Society</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-gray">Date</span>
                <span className="font-medium">18 Oct 2026</span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <p className="text-xs text-brand-gray mb-2 uppercase tracking-wide">Status</p>
              <div className="flex items-center gap-2 text-brand-cyan font-medium bg-brand-cyan/10 w-fit px-3 py-1.5 rounded-full text-sm">
                <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                Under Review
              </div>
            </div>
          </motion.div>

          {/* Floating UI Elements */}
          <motion.div
            className="absolute z-10 top-10 left-0 bg-white border border-brand-border shadow-lg rounded-xl p-4 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center">
              <Send size={16} className="text-brand-gray" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-dark">Tech Society</p>
              <p className="text-[10px] text-brand-gray">Opportunity Submitted</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-30 right-0 top-1/3 bg-white border border-brand-border shadow-lg rounded-xl p-4 flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="w-8 h-8 rounded-full bg-brand-cyan/10 flex items-center justify-center">
              <Eye size={16} className="text-brand-cyan" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-dark">Campus Ambassador</p>
              <p className="text-[10px] text-brand-cyan font-medium">Reviewing</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 bottom-10 right-0 bg-white border border-brand-border shadow-lg rounded-xl p-4 flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center">
              <CheckCircle2 size={16} className="text-brand-green" />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-dark">SkillLinkr</p>
              <p className="text-[10px] text-brand-green font-medium">Published to Students</p>
            </div>
          </motion.div>

          {/* Connection Lines (Abstract) */}
          <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 500 500" fill="none">
            <motion.path
              d="M100 150 C 150 150, 200 250, 250 250"
              stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.path
              d="M250 250 C 300 250, 350 150, 400 150"
              stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
