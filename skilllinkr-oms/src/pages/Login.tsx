import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export const Login = () => {
  return (
    <main className="min-h-screen bg-transparent flex flex-col justify-center py-16 md:py-24 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Link to="/">
            <Logo className="h-12 w-12" />
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-brand-dark">
          Welcome back to SkillLinkr
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white py-8 px-4 shadow-xl shadow-brand-dark/5 sm:rounded-2xl sm:px-10 border border-brand-border"
        >
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-gray">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-xl border border-brand-border px-3 py-3 placeholder-brand-gray/50 shadow-sm focus:border-brand-cyan focus:outline-none focus:ring-brand-cyan sm:text-sm bg-brand-secondary/50"
                  placeholder="you@college.edu"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-gray">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-xl border border-brand-border px-3 py-3 placeholder-brand-gray/50 shadow-sm focus:border-brand-cyan focus:outline-none focus:ring-brand-cyan sm:text-sm bg-brand-secondary/50"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-brand-border text-brand-cyan focus:ring-brand-cyan"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-brand-gray">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-brand-cyan hover:text-brand-cyan/80">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-xl border border-transparent bg-brand-dark py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-brand-border" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-brand-gray">Don't have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/signup"
                className="flex w-full justify-center rounded-xl border border-brand-border bg-white py-3 px-4 text-sm font-medium text-brand-dark shadow-sm hover:bg-brand-secondary transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};
