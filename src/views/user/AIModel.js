import React from 'react';

// components

import AITables from '../../components/Cards/AITables.js';


export default function AIModel() {
  return (
    <>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full mb-12 px-4'>
          <AITables />
        </div>
       
      </div>
    </>
  );
}
