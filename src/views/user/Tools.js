import React from 'react';

// components
import ToolsTable from '../../components/Cards/ToolsTable.js';

export default function Tools() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-12/12 px-4'>
          <ToolsTable />
        </div>
      </div>
    </>
  );
}
