import React from 'react';
import AITables from '../../components/Cards/AITables.js';

export default function AIModel() {
  return (
    <>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full mb-6 px-4'>
          <AITables />
        </div>
      </div>
    </>
  );
}
