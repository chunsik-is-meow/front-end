import React from 'react';

// components

export default function CardSellTokenTable() {
  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3 className='font-semibold text-base text-blueGray-700'>
                매도
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
                  hyoeun
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,600
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>2%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200'>
                        <div
                          style={{width: '2%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  yohan
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,610
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>3%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200'>
                        <div
                          style={{width: '4%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  Google
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,620
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>5%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200'>
                        <div
                          style={{width: '7%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  hana
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,663
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>7%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200'>
                        <div
                          style={{width: '10%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  segin
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,680
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>10%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200'>
                        <div
                          style={{width: '12%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500'
                        />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left'>
                  gihun
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  1,690
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <div className='flex items-center'>
                    <span className='mr-2'>11%</span>
                    <div className='relative w-full'>
                      <div className='overflow-hidden h-2 text-xs flex rounded bg-lightBlue-200'>
                        <div
                          style={{width: '13%'}}
                          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-lightBlue-500'
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
