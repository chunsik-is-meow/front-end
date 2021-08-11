import React from 'react';
import _ from 'lodash';

export const Pagination = (props) => {
  const {itemsCount, pageSize, currentPage, onPageChange} = props;

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) {
    return null;
  }

  const pages = _.range(1, pageCount + 1);

  return (
    <div className='py-2'>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          {pages.map(page =>
            <li key={page} style={{cursor: 'pointer'}}>
              <a href='#pablo' onClick={() => onPageChange(page)} className={page === currentPage ?
                'bg-lightBlue-500 first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 text-white'
                : ' text-lightBlue-500 first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-lightBlue-500 text-white'}
              >
                {page}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
