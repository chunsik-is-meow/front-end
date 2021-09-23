import React from 'react';
import DataTables from '../../components/Cards/DataTables.js';
import AITables from '../../components/Cards/AITables.js';

// components
import CardLineChart from '../../components/Cards/CardLineChart.js';
import CardBarChart from '../../components/Cards/CardBarChart.js';

export default function Dashboard() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-6 xl:mb-0 px-4'>
          <CardLineChart />
        </div>
        <div className='w-full xl:w-4/12 px-4'>
          <CardBarChart />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full xl:w-12/12 mb-6 xl:mb-0 px-4'>
          <DataTables />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full xl:w-12/12 mb-6 xl:mb-0 px-4'>
          <AITables />
        </div>
      </div>
    </>
  );
}
