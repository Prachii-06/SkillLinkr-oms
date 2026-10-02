import React from 'react';

export const Logo = ({ className = "h-8 w-auto" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="80" cy="100" r="60" stroke="#10b981" strokeWidth="12" strokeLinecap="round" strokeDasharray="370 10" />
      <circle cx="120" cy="100" r="60" stroke="#06b6d4" strokeWidth="12" strokeLinecap="round" strokeDasharray="370 10" />
      <path d="M90 110L110 90" stroke="#10b981" strokeWidth="12" strokeLinecap="round" />
      <path d="M95 105C92.2386 102.239 87.7614 102.239 85 105C82.2386 107.761 82.2386 112.239 85 115L95 125C97.7614 127.761 102.239 127.761 105 125L108 122" stroke="#06b6d4" strokeWidth="10" strokeLinecap="round" fill="none" />
      <path d="M105 95C107.761 97.7614 112.239 97.7614 115 95C117.761 92.2386 117.761 87.7614 115 85L105 75C102.239 72.2386 97.7614 72.2386 95 75L92 78" stroke="#10b981" strokeWidth="10" strokeLinecap="round" fill="none" />
    </svg>
  );
};
