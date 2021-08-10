import React from 'react';

// components
import MyPageTable from '../../components/Cards/MyPageTables.js';

export default function Transaction() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-12/12 px-4'>
          <MyPageTable />
        </div>
      </div>
    </>
  );
}
