import React from 'react';
import PropTypes from 'prop-types';
import PublicData from '../data/PublicData.js';

// components
// import TableDropdown from 'components/Dropdowns/TableDropdown.js';

const headattr = ['name', 'desc', 'download', 'org', 'date'];

const TableHeaderComponent = (props) => {
  const {attr, color} = props;
  return (
    <th
      className={
        'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
        (color === 'light'
          ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
          : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
      }
    >
      {attr}
    </th>
  );
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
  } else if (attr === 'desc') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {item[attr]}
      </td>
    );
  } else if (attr === 'download') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <i className='fas fa-circle text-emerald-500 mr-2' />{' '}
        {item[attr]}
      </td>
    );
  } else if (attr === 'org') {
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


export default function DataTable({color}) {
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
                공공데이터
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <TableHead attrs={headattr}/>
            <TableBody attrs={headattr} items={PublicData} />
          </table>
        </div>
      </div>
    </>
  );
}

DataTable.defaultProps = {
  color: 'light'
};

DataTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};
