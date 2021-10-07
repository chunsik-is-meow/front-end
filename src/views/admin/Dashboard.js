import React from 'react';
import DataTables from '../../components/Cards/DataTables.js';
import AITables from '../../components/Cards/AITables.js';
import CardTokenChart from '../../components/Cards/CardTokenChart.js';
import MyPageTable from '../../components/Cards/MyPageTables.js';

export default function Dashboard() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-12/12 mb-6 xl:mb-0 px-4'>
          <DataTables />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full xl:w-12/12 mb-6 xl:mb-0 px-4'>
          <AITables />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full xl:w-12/12 mb-6 xl:mb-0 px-4'>
          <MyPageTable />
        </div>
      </div>
    </>
  );
}
