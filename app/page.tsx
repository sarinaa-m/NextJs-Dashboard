

import React from 'react';
import ContactForm from '@/components/ContactForm';
import APIDataDashboard from '@/components/dashboard/Dashboard';
import ThemeToggle from '@/components/ThemeToggle';
import FeatureCards from '@/components/FeatureCards';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { prefetchUsers } from '@/api/github/querries';

const Home = async () => {
  const queryClient = new QueryClient();

  await prefetchUsers(queryClient);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard App
          </h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <HydrationBoundary state={dehydrate(queryClient)}>
            <APIDataDashboard />
          </HydrationBoundary>
        </div>

        <FeatureCards />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-12 py-6 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
          <p>Built with Next.js 14, TypeScript, React, and Tailwind CSS</p>
          <p className="text-sm mt-2">Ready for Vercel deployment</p>
        </div>
      </footer>
    </div>
  );
}

export default Home