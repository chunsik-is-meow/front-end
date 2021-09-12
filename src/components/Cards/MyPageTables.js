import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import TradeService from '../../services/trade.service';
import AuthService from '../../services/auth.service';
import {Pagination} from '../Pagination/Pagination.js';
import {paginate} from '../Pagination/Pagenate.js';

// components
const headattr = ['from', 'to', 'price', 'timestamp'];

export default function MyPageTable({color}) {
  const currentUser = AuthService.getCurrentUser();

  const [datas, setDatas] = useState({
    data: '',
    pageSize: 5,
    currentPage: 1
  });

  useEffect(async () => {
    const transactionData = await TradeService.GetTransactionData(currentUser.username);
    setDatas({...datas, data: transactionData});
  }, []);

  const handlePageChange = (page) => {
    setDatas({...datas, currentPage: page});
  };

  const {data, pageSize, currentPage} = datas;
  const pagedDates = paginate(data, currentPage, pageSize);

  const {length: count} = datas.data;
  if (count === 0) {
    return <p>거래내역 정보가 없습니다.</p>;
  }

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
                거래 내역
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <TableHead attrs={headattr}/>
            <TableBody attrs={headattr} items={pagedDates}/>
          </table>
          <div className='m-4'>
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const TableHeaderComponent = (props) => {
  const {attr, color} = props;
  if (attr === 'from') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 보낸 사람
      </th>
    );
  } else if (attr === 'to') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 받는 사람
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
  if (attr === 'from') {
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
  } else if (attr === 'to') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {item[attr]}
      </td>
    );
  } else if (attr === 'price') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        {item[attr]} meow
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

MyPageTable.defaultProps = {
  color: 'light'
};

MyPageTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};
