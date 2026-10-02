import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Building2, ShieldCheck, LayoutDashboard, Search, FileCheck2,
  Workflow, Network, Clock3, CheckCircle2, History, Globe2, Layers3, Settings2, Send, Eye
} from 'lucide-react';
import { Logo } from './Logo';

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export const ProblemVisual = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-white border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative">
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6 tracking-tight">From scattered posts to a <span className="text-brand-cyan">structured workflow.</span></h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Campus opportunities are often scattered across WhatsApp groups, posters, and scattered forms. OMS converts this chaos into an accountable, verified workflow.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-white to-brand-secondary p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-brand-border/60 overflow-hidden">
          {/* Decorative background grid */}
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            {/* Left side: Scattered chaos */}
            <div className="relative w-full md:w-[40%] h-72 flex items-center justify-center bg-white/40 rounded-3xl border border-white/60 backdrop-blur-sm">
              <div className="absolute inset-0 border border-brand-border border-dashed rounded-3xl opacity-50 m-4"></div>
              {['WhatsApp', 'Instagram', 'Posters', 'Emails', 'Forms'].map((item, i) => (
                <motion.div
                  key={item}
                  className="absolute bg-white px-4 py-2.5 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] text-xs font-bold text-brand-dark border border-brand-border z-10 flex items-center gap-2"
                  animate={{
                    x: [Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40],
                    y: [Math.random() * 80 - 40, Math.random() * 80 - 40, Math.random() * 80 - 40],
                    rotate: [Math.random() * 10 - 5, Math.random() * -10 + 5, Math.random() * 10 - 5]
                  }}
                  transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.5 }}
                  style={{ top: `${25 + (i * 12)}%`, left: `${15 + (i % 2 === 0 ? 10 : 40)}%` }}
                >
                  <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-red-400' : 'bg-amber-400'}`}></div>
                  {item}
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[5rem] font-black text-brand-gray/5 -rotate-12 select-none uppercase tracking-tighter">Chaos</span>
              </div>
            </div>

            {/* Center: Conversion */}
            <div className="hidden md:flex flex-col items-center justify-center relative">
              <motion.div
                className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center shadow-lg relative z-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Workflow className="text-white" size={28} />
              </motion.div>
              {/* Connecting lines */}
              <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-gradient-to-r from-transparent to-brand-border"></div>
              <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-gradient-to-l from-transparent to-brand-border"></div>
            </div>

            {/* Right side: Structured Workflow */}
            <div className="w-full md:w-[45%] flex flex-col gap-4 relative">
              <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-brand-cyan/20 via-brand-green/20 to-transparent"></div>
              {[
                { name: 'Society Creation', status: 'Submitted', color: 'bg-blue-500' },
                { name: 'Ambassador Review', status: 'Verified', color: 'bg-brand-cyan' },
                { name: 'Platform Publication', status: 'Live', color: 'bg-brand-green' }
              ].map((step, i) => (
                <motion.div
                  key={step.name}
                  className="bg-white border border-brand-border p-4 rounded-2xl shadow-sm relative z-10 hover:shadow-md transition-shadow group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${step.color} shadow-[0_0_10px_rgba(0,0,0,0.2)] ring-4 ring-white`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-bold text-brand-dark">{step.name}</div>
                      <div className="text-xs text-brand-gray mt-0.5 group-hover:text-brand-cyan transition-colors">Automated routing</div>
                    </div>
                    <div className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-full bg-brand-light border border-brand-border text-brand-dark`}>
                      {step.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TrustStructureScale = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(6,182,212,0.08),transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10">
          <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4">Foundation</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-5">The three pillars<br />of <span className="text-brand-cyan">OMS</span>.</h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">A system built to enforce accountability at scale without compromising speed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* TRUST */}
          <FadeIn delay={0}>
            <div className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:bg-white/8 hover:border-brand-green/30 transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Visual: Animated verification rings */}
              <div className="relative h-40 flex items-center justify-center mb-10">
                <motion.div className="absolute w-32 h-32 rounded-full border border-brand-green/20"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div className="absolute w-20 h-20 rounded-full border border-brand-green/40"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                />
                <div className="w-14 h-14 rounded-2xl bg-brand-green/15 border border-brand-green/30 flex items-center justify-center relative z-10">
                  <ShieldCheck className="text-brand-green" size={28} />
                </div>
                <motion.div
                  className="absolute top-4 right-8 bg-brand-green/10 border border-brand-green/20 rounded-xl px-3 py-1.5 text-xs text-brand-green font-bold"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  Verified
                </motion.div>
              </div>

              <span className="text-6xl font-black text-white/5 absolute top-6 right-8">01</span>
              <h3 className="text-2xl font-bold text-white mb-3">TRUST</h3>
              <p className="text-white/50 leading-relaxed">A verification layer sits between societies and students. No unreviewed opportunity ever reaches the feed.</p>
            </div>
          </FadeIn>

          {/* STRUCTURE */}
          <FadeIn delay={0.15}>
            <div className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:bg-white/8 hover:border-brand-cyan/30 transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Visual: Animated pipeline nodes */}
              <div className="relative h-40 flex items-center justify-center mb-10">
                <svg className="absolute w-full h-full" viewBox="0 0 240 120" fill="none">
                  {/* Connecting lines */}
                  <motion.line x1="50" y1="60" x2="120" y2="60" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                  <motion.line x1="120" y1="60" x2="190" y2="60" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4 4"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.5 }} />
                  {/* Nodes */}
                  <circle cx="50" cy="60" r="12" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
                  <circle cx="120" cy="60" r="14" fill="rgba(6,182,212,0.2)" stroke="rgba(6,182,212,0.8)" strokeWidth="1.5" />
                  <circle cx="190" cy="60" r="12" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.5)" strokeWidth="1.5" />
                  <text x="50" y="65" textAnchor="middle" fill="rgba(6,182,212,0.9)" fontSize="9" fontWeight="bold">SUB</text>
                  <text x="120" y="65" textAnchor="middle" fill="rgba(6,182,212,1)" fontSize="9" fontWeight="bold">REV</text>
                  <text x="190" y="65" textAnchor="middle" fill="rgba(6,182,212,0.9)" fontSize="9" fontWeight="bold">PUB</text>
                </svg>
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center z-10 opacity-0">
                  <Workflow className="text-brand-cyan" size={28} />
                </div>
              </div>

              <span className="text-6xl font-black text-white/5 absolute top-6 right-8">02</span>
              <h3 className="text-2xl font-bold text-white mb-3">STRUCTURE</h3>
              <p className="text-white/50 leading-relaxed">A clear chain replaces scattered coordination. Every opportunity moves through Submit → Review → Publish in order.</p>
            </div>
          </FadeIn>

          {/* SCALE */}
          <FadeIn delay={0.3}>
            <div className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 overflow-hidden hover:bg-white/8 hover:border-white/30 transition-all duration-500 h-full">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Visual: Expanding college network dots */}
              <div className="relative h-40 flex items-center justify-center mb-10">
                {[
                  { cx: 120, cy: 60, r: 10, delay: 0, label: 'HUB' },
                  { cx: 70, cy: 35, r: 7, delay: 0.2, label: 'A' },
                  { cx: 170, cy: 35, r: 7, delay: 0.4, label: 'B' },
                  { cx: 60, cy: 85, r: 7, delay: 0.6, label: 'C' },
                  { cx: 180, cy: 85, r: 7, delay: 0.8, label: 'D' },
                ].map((node, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: `${(node.cx / 240) * 100}%`, top: `${(node.cy / 120) * 100}%`, transform: 'translate(-50%,-50%)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + node.delay, type: 'spring', stiffness: 200 }}
                  >
                    <div className={`rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-[8px] font-black text-white/70`}
                      style={{ width: node.r * 2.5, height: node.r * 2.5 }}>
                      {node.label}
                    </div>
                  </motion.div>
                ))}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 120" fill="none">
                  {[[120, 60, 70, 35], [120, 60, 170, 35], [120, 60, 60, 85], [120, 60, 180, 85]].map(([x1, y1, x2, y2], i) => (
                    <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.15)" strokeWidth="1"
                      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }} />
                  ))}
                </svg>
              </div>

              <span className="text-6xl font-black text-white/5 absolute top-6 right-8">03</span>
              <h3 className="text-2xl font-bold text-white mb-3">SCALE</h3>
              <p className="text-white/50 leading-relaxed">Each college gets its own Ambassador. Admins govern the network without manually reviewing every submission.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};


export const Roles = () => {
  return (
    <section className="py-10 md:py-14 lg:py-20 bg-white relative overflow-hidden" id="roles">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-8">
          <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-3">Targeted Experience</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">One platform. <br /><span className="text-brand-gray">Three specific roles.</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <RoleCard
            title="SOCIETY"
            role="Opportunity Creator"
            desc="Create, submit, track, and manage opportunities for your college."
            icon={<Building2 size={24} />}
            colorClass="text-blue-500"
            uiMockup={
              <div className="bg-white border border-brand-border/60 p-4 rounded-xl text-xs space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                <div className="font-bold border-b border-brand-border/60 pb-3 flex items-center justify-between mt-1">
                  <span>Create Opportunity</span>
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-7 bg-brand-light rounded-md border border-brand-border flex items-center px-3 text-brand-gray/50 font-medium">Title...</div>
                  <div className="h-7 bg-brand-light rounded-md border border-brand-border flex items-center px-3 text-brand-gray/50 font-medium">Category...</div>
                </div>
                <div className="h-20 bg-brand-light rounded-lg border-2 border-brand-border border-dashed flex flex-col items-center justify-center text-blue-500 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors">
                  <span className="font-semibold">Upload Poster</span>
                  <span className="text-[10px] text-brand-gray mt-1">PNG, JPG up to 5MB</span>
                </div>
                <div className="mt-auto pt-4">
                  <motion.div className="h-9 bg-brand-dark rounded-md text-white flex items-center justify-center font-medium shadow-md cursor-pointer relative overflow-hidden" whileHover={{ scale: 1.02 }}>
                    Submit for Review
                  </motion.div>
                </div>
              </div>
            }
          />
          <RoleCard
            title="CAMPUS AMBASSADOR"
            role="College-Level Verifier"
            desc="Review opportunities from your assigned college and verify them before publication."
            icon={<ShieldCheck size={24} />}
            colorClass="text-brand-cyan"
            uiMockup={
              <div className="bg-white border border-brand-border/60 p-4 rounded-xl text-xs space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-blue-400"></div>
                <div className="font-bold border-b border-brand-border/60 pb-3 flex items-center justify-between mt-1">
                  <span>Pending Review</span>
                  <span className="bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded text-[10px]">KIIT</span>
                </div>
                <div className="bg-brand-light p-3 rounded-lg border border-brand-border">
                  <div className="font-bold text-sm mb-1 text-brand-dark">National Coding Challenge</div>
                  <div className="flex items-center gap-2 text-brand-gray mb-3">
                    <Building2 size={10} /> <span>Tech Society</span>
                  </div>
                  <div className="w-full h-12 rounded bg-cover bg-center opacity-80" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop)' }}></div>
                </div>
                <div className="flex gap-2 mt-auto pt-2">
                  <motion.div className="flex-1 h-9 bg-brand-green text-white rounded-md flex items-center justify-center font-medium shadow-md cursor-pointer" whileHover={{ scale: 1.05 }}>Approve</motion.div>
                  <motion.div className="flex-1 h-9 bg-red-50 text-red-600 rounded-md border border-red-200 flex items-center justify-center font-medium cursor-pointer" whileHover={{ scale: 1.05, backgroundColor: '#fef2f2' }}>Reject</motion.div>
                </div>
              </div>
            }
          />
          <RoleCard
            title="ADMIN"
            role="Global Control"
            desc="Manage the wider opportunity network, governance, configuration, and oversight."
            icon={<LayoutDashboard size={24} />}
            colorClass="text-brand-dark"
            uiMockup={
              <div className="bg-white border border-brand-border/60 p-4 rounded-xl text-xs space-y-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-dark to-brand-gray"></div>
                <div className="font-bold border-b border-brand-border/60 pb-3 flex items-center justify-between mt-1">
                  <span>Global Command Center</span>
                  <Settings2 size={14} className="text-brand-gray" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-brand-light p-3 rounded-lg border border-brand-border flex flex-col items-center justify-center gap-1 group-hover:border-brand-dark/30 transition-colors">
                    <span className="text-xl font-black text-brand-dark">42</span>
                    <span className="text-[10px] text-brand-gray uppercase">Colleges</span>
                  </div>
                  <div className="bg-brand-light p-3 rounded-lg border border-brand-border flex flex-col items-center justify-center gap-1 group-hover:border-brand-dark/30 transition-colors">
                    <span className="text-xl font-black text-brand-dark">180</span>
                    <span className="text-[10px] text-brand-gray uppercase">Societies</span>
                  </div>
                </div>
                <div className="mt-auto h-14 bg-gradient-to-br from-brand-light to-brand-secondary rounded-lg border border-brand-border flex items-center justify-center overflow-hidden relative">
                  <Globe2 className="text-brand-gray/20 absolute right-2 bottom-2" size={32} />
                  <div className="w-full px-3">
                    <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
                      <motion.div className="h-full bg-brand-cyan rounded-full" initial={{ width: "20%" }} whileInView={{ width: "75%" }} transition={{ duration: 1.5, ease: "easeOut" }} />
                    </div>
                    <div className="text-[10px] text-brand-gray mt-1.5">Network Health: Optimal</div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

const RoleCard = ({ title, role, desc, icon, uiMockup, colorClass }: any) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="bg-brand-secondary/50 border border-brand-border rounded-[2rem] p-8 flex flex-col h-full group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className={`p-4 bg-white rounded-2xl shadow-sm text-brand-gray group-hover:${colorClass} transition-colors duration-300 ring-1 ring-brand-border/50 group-hover:ring-${colorClass}/20`}>{icon}</div>
      <div>
        <h3 className="font-bold tracking-widest text-brand-gray text-[10px] mb-1">{title}</h3>
        <p className="font-bold text-brand-dark text-lg leading-tight">{role}</p>
      </div>
    </div>
    <div className="flex-1 mb-8">
      {uiMockup}
    </div>
    <p className="text-brand-gray text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export const WorkflowTimeline = () => {
  const steps = [
    { label: 'CREATE', icon: Search, color: 'text-brand-gray' },
    { label: 'SUBMIT', icon: Send, color: 'text-blue-400' },
    { label: 'REVIEW', icon: Eye, color: 'text-amber-400' },
    { label: 'VERIFY', icon: ShieldCheck, color: 'text-brand-cyan' },
    { label: 'PUBLISH', icon: CheckCircle2, color: 'text-brand-green' },
    { label: 'DISCOVER', icon: Search, color: 'text-white' }
  ];

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-brand-dark text-white overflow-hidden relative" id="workflow">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-cyan/5 via-brand-dark to-brand-dark -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10">
          <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-3">Controlled Lifecycle</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From creation to discovery.</h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">A strict publishing workflow keeps every opportunity accountable before it ever reaches a student.</p>
        </div>

        <div className="relative mt-12 pb-12">
          {/* Animated SVG Line connecting the nodes */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-1 -translate-y-1/2 hidden md:block">
            <svg className="w-full h-full" preserveAspectRatio="none">
              {/* Background faint line */}
              <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="8 8" />
              {/* Foreground animated line */}
              <motion.line
                x1="0" y1="50%" x2="100%" y2="50%"
                stroke="#06b6d4" strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.4, type: "spring", stiffness: 100 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-16 h-16 rounded-2xl bg-brand-dark border-2 border-white/10 flex items-center justify-center font-bold text-sm mb-6 shadow-xl transition-all duration-300">
                  {/* Glowing background ring that appears sequentially */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-brand-cyan/0"
                    initial={{ borderColor: "rgba(6, 182, 212, 0)" }}
                    whileInView={{ borderColor: "rgba(6, 182, 212, 1)", boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: (i * 0.4) + 0.3, duration: 0.5 }}
                  />
                  <step.icon size={24} className={`${step.color} z-10`} />
                </div>
                <motion.h4
                  className="font-bold tracking-widest text-[11px] text-brand-gray"
                  initial={{ color: "#64748B" }}
                  whileInView={{ color: "#FFFFFF" }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: (i * 0.4) + 0.3, duration: 0.3 }}
                >
                  {step.label}
                </motion.h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const colleges = [
  { name: 'KIIT', pos: { top: '8%', left: '50%' }, color: 'brand-cyan' },
  { name: 'VIT', pos: { top: '50%', left: '5%' }, color: 'brand-green' },
  { name: 'SRM', pos: { top: '50%', right: '5%' }, color: 'blue-500' },
  { name: 'NIT', pos: { bottom: '8%', left: '25%' }, color: 'amber-500' },
  { name: 'BITS', pos: { bottom: '8%', right: '25%' }, color: 'purple-500' },
];

export const CollegeVerification = () => {
  const [active, setActive] = React.useState<number | null>(null);

  return (
    <section className="py-10 md:py-14 lg:py-20 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <p className="text-brand-cyan font-bold tracking-widest text-sm uppercase mb-4">College Isolation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">Verification stays<br />within the campus.</h2>
            <p className="text-brand-gray text-lg leading-relaxed mb-8">Campus Ambassadors review opportunities only for their assigned college. Admins retain global visibility across the entire network.</p>

            <div className="space-y-4">
              {[
                { icon: ShieldCheck, text: 'Each Ambassador is bound to a single college.' },
                { icon: Eye, text: 'Admins see everything, Ambassadors see only their college.' },
                { icon: Network, text: 'Isolation is enforced at the API and database level, not just UI.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-brand-border shadow-sm"
                >
                  <div className="mt-0.5 p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan flex-shrink-0">
                    <item.icon size={16} />
                  </div>
                  <p className="text-sm text-brand-dark leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Interactive network vis */}
          <div className="relative h-[480px] w-full select-none">
            {/* SVG connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
              {/* Lines from center (Admin) to each college node */}
              {[
                [200, 200, 200, 35],
                [200, 200, 22, 200],
                [200, 200, 378, 200],
                [200, 200, 100, 360],
                [200, 200, 300, 360],
              ].map(([x1, y1, x2, y2], i) => (
                <motion.line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke={active === null || active === i ? '#06b6d4' : '#E2E8F0'}
                  strokeWidth={active === i ? '2.5' : '1.5'}
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                  style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                />
              ))}
            </svg>

            {/* Admin Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
                className="w-24 h-24 bg-brand-dark rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white border-2 border-brand-cyan/40"
              >
                <LayoutDashboard size={24} className="mb-1" />
                <span className="text-[10px] font-bold tracking-widest">ADMIN</span>
              </motion.div>
              <motion.div
                className="absolute -inset-2 rounded-[1.8rem] border-2 border-brand-cyan/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>

            {/* College Nodes */}
            {colleges.map((col, i) => (
              <motion.div
                key={col.name}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={col.pos}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, type: 'spring', stiffness: 120 }}
                onHoverStart={() => setActive(i)}
                onHoverEnd={() => setActive(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div className={`
                  bg-white rounded-2xl border-2 px-4 py-3 shadow-lg text-center min-w-[90px] transition-all duration-300
                  ${active === i ? 'border-brand-cyan shadow-brand-cyan/20 shadow-xl' : 'border-brand-border'}
                `}>
                  <div className={`text-sm font-black mb-1 transition-colors ${active === i ? 'text-brand-cyan' : 'text-brand-dark'}`}>{col.name}</div>
                  <div className="flex items-center justify-center gap-1 text-[10px] text-brand-gray">
                    <ShieldCheck size={9} className={active === i ? 'text-brand-cyan' : ''} />
                    <span>Ambassador</span>
                  </div>
                  {active === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-2 pt-2 border-t border-brand-border"
                    >
                      <div className="text-[9px] text-brand-cyan font-bold">Isolated Scope</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Hover hint */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-brand-gray/50 font-medium">
              Hover a college to see isolation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

