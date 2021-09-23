import React from 'react';
import DataTables from '../../components/Cards/DataTables.js';

export default function Data() {
  return (
    <>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full mb-6 px-4'>
          <DataTables />
        </div>
      </div>
    </>
  );
}
