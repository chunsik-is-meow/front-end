import React from 'react';
import PropTypes from 'prop-types';

// components

import TableDropdown from 'components/Dropdowns/TableDropdown.js';

export default function MyPageTable({color}) {
  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }
      >
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                거래내역
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  모델명
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  금액
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  거래 날짜
                </th>

                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                />
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/bootstrap.jpg').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold ' +
                      +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                    }
                  >
                    Argon Design System
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  $2,500 USD
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-orange-500 mr-2' /> pending
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/angular.jpg').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold ' +
                      +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                    }
                  >
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  $1,800 USD
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-emerald-500 mr-2' />{' '}
                  completed
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/sketch.jpg').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold ' +
                      +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                    }
                  >
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  $3,150 USD
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-red-500 mr-2' /> delayed
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/react.jpg').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold ' +
                      +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  $4,400 USD
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-teal-500 mr-2' /> on
                  schedule
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/vue.jpg').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold ' +
                      +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                    }
                  >
                    React Material Dashboard
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  $2,200 USD
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-emerald-500 mr-2' />{' '}
                  completed
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

MyPageTable.defaultProps = {
  color: 'light'
};

MyPageTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};