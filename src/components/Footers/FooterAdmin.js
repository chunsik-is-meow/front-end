import React from 'react';

export default function FooterAdmin() {
  return (
    <>
      <footer className='block py-4'>
        <div className='container mx-auto px-4'>
          <hr className='mb-4 border-b-1 border-blueGray-200' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-12/12 px-4'>
              <div className='text-sm text-blueGray-500 font-semibold pb-3 text-center md:text-left'>
                PNU Graduation assignment © {new Date().getFullYear()}                MOT by team Vanilla Delight.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
