import React from 'react';

export const Pagination = () => {
  return (
    <div className='py-2'>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            <a href='#pablo' className='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 text-white bg-lightBlue-500'>
                            1
            </a>
          </li>
          <li>
            <a href='#pablo' className='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500'>
                            2
            </a>
          </li>
          <li>
            <a href='#pablo' className='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500'>
                            3
            </a>
          </li>
          <li>
            <a href='#pablo' className='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500'>
                            4
            </a>
          </li>
          <li>
            <a href='#pablo' className='first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 bg-white text-lightBlue-500'>
                            5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
