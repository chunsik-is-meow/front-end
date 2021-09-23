import React from 'react';

// components
import AIUploadForm from '../../components/Cards/AIUploadForm.js';
import MyPageProfile from '../../components/Cards/MyPageProfile.js';

export default function ModelUpload() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-8/12 px-4'>
          <AIUploadForm />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <MyPageProfile />
        </div>
      </div>
    </>
  );
}
