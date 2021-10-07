import React from 'react';
import PropTypes from 'prop-types';

// components
import TableDropdown from 'components/Dropdowns/TableDropdown.js';

export default function ToolsTable() {
  return (
    <>
      <div
        className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
        <div className='rounded-t mb-0 px-4 py-3 border-0'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full px-4 py-3 max-w-full flex-grow flex-1'>
              <h3 className={'font-semibold text-lg text-blueGray-700'}>
                네트워크 관리 도구
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
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'}>
                  NAME
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'}>
                  URL
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'}>
                  STATUS
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'}/>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/explorer.PNG').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold text-blueGray-600'}>
                    Hyperledger Explorer
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <a href='http://localhost:8080'> 바로가기 </a>
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-emerald-500 mr-2' /> running
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/prometheus.PNG').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold text-blueGray-600'}>
                    Prometheus
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <a href='http://localhost:9090'> 바로가기 </a>
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-emerald-500 mr-2' /> running
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
                  <img
                    src={require('assets/img/grafana.PNG').default}
                    className='h-12 w-12 bg-white rounded-full border'
                    alt='...'
                  />{' '}
                  <span
                    className={
                      'ml-3 font-bold text-blueGray-600'}>
                    Grafana
                  </span>
                </th>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <a href='http://localhost:9091'> 바로가기 </a>
                </td>
                <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
                  <i className='fas fa-circle text-emerald-500 mr-2' /> running
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
