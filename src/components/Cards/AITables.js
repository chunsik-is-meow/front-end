import React from 'react';
import PropTypes from 'prop-types';
import AIData from 'components/data/AIData';
import {Pagination} from 'components/Pagination/Pagination.js';
// components


const headattr = ['name', 'price', 'download', 'producer', 'date'];

const TableHeaderComponent = (props) => {
  const {attr, color} = props;
  if (attr === 'name') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 이름
      </th>
    );
  } else if (attr === 'price') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 가격
      </th>
    );
  } else if (attr === 'download') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 다운로드 횟수
      </th>
    );
  } else if (attr === 'producer') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 제작자
      </th>
    );
  } else {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 날짜
      </th>
    );
  }
};
const TableHead = (props) => {
  const {attrs} = props;
  return (
    <thead>
      <tr>
        {attrs.map((attr, idx) => <TableHeaderComponent key={`thead-${idx}`} attr={attr} color='light' />)}
      </tr>
    </thead>
  );
};

const TableBodyComponent = (props) => {
  const {item, attr, color} = props;
  if (attr === 'name') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center'>
        <span
          className={
            'ml-3 font-bold ' +
            +(color === 'light' ? 'text-blueGray-600' : 'text-white')
          }
        >
          {item[attr]}
        </span>
      </td>
    );
  } else if (attr === 'price') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {item[attr]} meow
      </td>
    );
  } else if (attr === 'download') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <i className='fas fa-circle text-emerald-500 mr-2' />{' '}
        {item[attr]}
      </td>
    );
  } else if (attr === 'producer') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <div className='flex'>
          {item[attr]}
        </div>
      </td>
    );
  } else {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <div className='flex items-center'>
          {item[attr]}
        </div>
      </td>
    );
  }
};

const TableRow = (props) => {
  const {item, attrs} = props;
  return (
    <tr>
      {attrs.map((attr, idx) => <TableBodyComponent key={`tbody2-${idx}`} item={item} attr={attr} />)}
    </tr>
  );
};

const TableBody = (props) => {
  const {items, attrs} = props;
  return (
    <tbody>
      {items.map((item, idx) => <TableRow key={`tbody-${idx}`} item={item} attrs={attrs} />)}
    </tbody>
  );
};


export default function AITable({color}) {
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
                AI Model
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <TableHead attrs={headattr}/>
            <TableBody attrs={headattr} items={AIData} />
          </table>
          <div className='m-4'>
            <Pagination/>
          </div>
        </div>
      </div>

    </>
  );
}

AITable.defaultProps = {
  color: 'light'
};

AITable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};
