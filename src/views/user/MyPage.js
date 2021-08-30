import React from 'react';

// components

import MyPageSettings from '../../components/Cards/MyPageSettings.js';
import MyPageProfile from '../../components/Cards/MyPageProfile.js';
import MyPageAITable from '../../components/Cards/MyPageAITable.js';

export default function MyPage() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-8/12 px-4'>
          <MyPageSettings />
          <MyPageAITable />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <MyPageProfile />
        </div>
      </div>
    </>
  );
}
