import React from 'react';

// components

import DataUploadForm from '../../components/Cards/DataUploadForm.js';
import MyPageProfile from '../../components/Cards/MyPageProfile.js';

export default function DataUpload() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-8/12 px-4'>
          <DataUploadForm />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <MyPageProfile />
        </div>
      </div>
    </>
  );
}
