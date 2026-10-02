import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Building2, LayoutDashboard, ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';

export const Signup = () => {
  const [role, setRole] = useState<'student' | 'college' | 'creator' | null>(null);

  const roles = [
    { id: 'student', title: 'Student', desc: 'Discover and apply for opportunities.', icon: User },
    { id: 'college', title: 'College', desc: 'Verify and manage your campus.', icon: Building2 },
    { id: 'creator', title: 'Opportunity Creator', desc: 'Publish and reach students.', icon: LayoutDashboard },
  ];

  return (
    <main className="min-h-screen bg-transparent flex flex-col justify-center py-16 md:py-24 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <Logo className="h-12 w-12" />
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-dark">
          Join SkillLinkr
        </h2>
        <p className="mt-2 text-center text-sm text-brand-gray">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-brand-cyan hover:text-brand-cyan/80">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white py-8 px-4 shadow-xl shadow-brand-dark/5 sm:rounded-[2rem] sm:px-10 border border-brand-border"
        >
          <AnimatePresence mode="wait">
            {!role ? (
              <motion.div
                key="select-role"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-brand-dark">I am a...</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {roles.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setRole(r.id as any)}
                      className="flex flex-col items-center p-6 bg-brand-light rounded-2xl border-2 border-brand-border hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all group text-center"
                    >
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-gray group-hover:text-brand-cyan mb-4 transition-colors">
                        <r.icon size={24} />
                      </div>
                      <h4 className="font-bold text-brand-dark mb-2">{r.title}</h4>
                      <p className="text-xs text-brand-gray">{r.desc}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="mb-6 flex items-center gap-4">
                  <button onClick={() => setRole(null)} className="text-sm font-medium text-brand-gray hover:text-brand-dark">← Back</button>
                  <h3 className="text-xl font-bold text-brand-dark flex-1 text-center pr-8">
                    {roles.find(r => r.id === role)?.title} Signup
                  </h3>
                </div>
                
                <form className="space-y-5" action="#" method="POST">
                  {role === 'college' && (
                    <div>
                      <label className="block text-sm font-medium text-brand-gray">College Name</label>
                      <input type="text" required className="mt-1 block w-full rounded-xl border border-brand-border px-3 py-3 bg-brand-secondary/50 focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm outline-none" />
                    </div>
                  )}
                  {role === 'creator' && (
                    <div>
                      <label className="block text-sm font-medium text-brand-gray">Society/Organization Name</label>
                      <input type="text" required className="mt-1 block w-full rounded-xl border border-brand-border px-3 py-3 bg-brand-secondary/50 focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm outline-none" />
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-gray">First Name</label>
                      <input type="text" required className="mt-1 block w-full rounded-xl border border-brand-border px-3 py-3 bg-brand-secondary/50 focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-gray">Last Name</label>
                      <input type="text" required className="mt-1 block w-full rounded-xl border border-brand-border px-3 py-3 bg-brand-secondary/50 focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm outline-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-gray">Email address</label>
                    <input type="email" required className="mt-1 block w-full rounded-xl border border-brand-border px-3 py-3 bg-brand-secondary/50 focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm outline-none" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-brand-gray">Password</label>
                    <input type="password" required className="mt-1 block w-full rounded-xl border border-brand-border px-3 py-3 bg-brand-secondary/50 focus:border-brand-cyan focus:ring-brand-cyan sm:text-sm outline-none" />
                  </div>

                  <div className="pt-2">
                    <button type="button" className="flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-brand-dark py-3.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none transition-colors">
                      Complete Signup <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
};
