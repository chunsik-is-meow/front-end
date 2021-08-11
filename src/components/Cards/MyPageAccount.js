import React from 'react';

// components

export default function MyPageAccount() {
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <div className='rounded-t bg-white mb-0 px-6 py-6'>
          <div className='text-center flex justify-between'>
            <h6 className='text-blueGray-700 text-xl font-bold'>내 지갑</h6>
            <button
              className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
              type='button'
            >
              송금하기
            </button>
          </div>
        </div>
        <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
          <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
            지갑
          </h6>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-12/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  주소
                </label>
                <input
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='1Dd65sfWdY24JfCSHD4ygef5T3dfGG46dFDT4'
                />
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  라벨
                </label>
                <input
                  type='email'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='chunsik is meow'
                />
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  금액
                </label>
                <input
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='56000 meow'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}