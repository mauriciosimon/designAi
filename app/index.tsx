'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold mb-4">DesignAI</h1>
      <p className="text-xl mb-8">Transform ideas into stunning designs in seconds</p>
      <a 
        href="/page" 
        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
      >
        Go to Main Page
      </a>
    </div>
  );
} 