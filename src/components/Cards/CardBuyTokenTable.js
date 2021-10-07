import React from 'react';

// components

export default function CardBuyTokenTable() {
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className='font-semibold text-base text-blueGray-700'>
                매수
              </h3>
            </div>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1 text-right'>
              <button
                className='bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead className='thead-light'>
              <tr>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                  ID
                </th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                  Price
                </th>
                <th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px' />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  sindong
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,480
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>2%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
                        <div
                          style={{width: '2%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  hunsu
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,500
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>3%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
                        <div
                          style={{width: '3%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  kisu
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,520
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>5%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
                        <div
                          style={{width: '5%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  sugin
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,534
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>7%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
                        <div
                          style={{width: '7%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  juhun
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,570
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>10%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
                        <div
                          style={{width: '10%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  sugi
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,600
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>11%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-red-200'>
                        <div
                          style={{width: '11%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
