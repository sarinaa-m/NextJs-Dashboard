'use client';

import React from 'react';
import { User, Loader2 } from 'lucide-react';

import Card from '../ui/Card';
import { UseUsers } from '@/api/github/querries';
import { DashboardList } from './components/DashboardList';
import Button from '../ui/Button';


const APIDataDashboard: React.FC = () => {
  const { data: users, isLoading, error, refetch: fetchData } = UseUsers();

  return (
    <Card className='overflow-y-scroll h-[80vh] '>
      <div className='flex mb-6 justify-between'>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <User size={24} />
          API Dashboard
        </h2>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="animate-spin text-blue-600" size={48} />
        </div>
      ) : error ? (
        <div className="text-center text-red-600 dark:text-red-400 py-8">
          <p className="font-medium">Error loading data</p>
          <p className="text-sm mt-2">{error.message}</p>
          <Button loading={isLoading} onClick={() => fetchData()} variant="secondary" className="mt-4">
            Try Again
          </Button>
        </div>
      ) : users?.length ? (
        <DashboardList users={users ?? []} fetchQueryData={fetchData} />
      ) : null}
    </Card>
  );
};

export default APIDataDashboard;


