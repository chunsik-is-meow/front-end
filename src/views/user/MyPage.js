import React from 'react';

// components

import MyPageSettings from '../../components/Cards/MyPageSettings.js';
import MyPageProfile from '../../components/Cards/MyPageProfile.js';
import MyPageTable from '../../components/Cards/MyPageTable.js';

export default function MyPage() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-8/12 px-4'>
          <MyPageSettings />
          <MyPageTable />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <MyPageProfile />
        </div>
      </div>
    </>
  );
}
