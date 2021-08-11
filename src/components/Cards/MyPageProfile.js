import React from 'react';

// components

export default function MyPageProfile() {
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16'>
        <div className='px-6'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full px-4 flex justify-center'>
              <div className='relative'>
                <img
                  alt='...'
                  src={require('assets/img/team-2-800x800.jpg').default}
                  className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px'
                />
              </div>
            </div>
            <div className='w-full px-4 text-center mt-20'>
              <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                <div className='mr-4 p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                    22
                  </span>
                  <span className='text-sm text-blueGray-400'>공공 데이터</span>
                </div>
                <div className='mr-4 p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                    10
                  </span>
                  <span className='text-sm text-blueGray-400'>인공지능 모델</span>
                </div>
                <div className='lg:mr-4 p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                    89
                  </span>
                  <span className='text-sm text-blueGray-400'>거래내역</span>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-6'>
            <h3 className='text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2'>
              엄춘식
            </h3>
          </div>
          <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full lg:w-9/12 px-4'>
                <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                  An artist of considerable range, Jenna the name taken by
                  Melbourne-raised, Brooklyn-based Nick Murphy writes
                </p>
                <a
                  href='#pablo'
                  className='font-normal text-lightBlue-500'
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
