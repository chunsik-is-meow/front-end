import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AIService from '../../services/ai.service';
import TradeService from '../../services/trade.service';
import AuthService from '../../services/auth.service.js';
import {Pagination} from '../Pagination/Pagination.js';
import {paginate} from '../Pagination/Pagenate.js';

const headattr = ['num', 'name', 'price', 'downloaded', 'owner', 'timestamp', 'add'];

export default function AITable({color}) {
  const [showModal, setShowModal] = useState(false);
  const currentUser = AuthService.getCurrentUser();

  const [datas, setDatas] = useState({
    data: '',
    pageSize: 5,
    currentPage: 1
  });

  useEffect(async () => {
    const AIData = await AIService.GetAIData();
    setDatas({...datas, data: AIData});
  }, []);

  const [modalDatas, setModalDatas] = useState({
    title: '',
    language: '',
    performance: '',
    description: '',
    uploader: '',
    version: '',
    price: ''
  });

  const handlePageChange = (page) => {
    setDatas({...datas, currentPage: page});
  };

  const {data, pageSize, currentPage} = datas;
  const pagedDates = paginate(data, currentPage, pageSize);

  const {length: count} = datas.data;
  if (count === 0) {
    return <p>인공지능 모델 정보가 없습니다.</p>;
  }

  const handleShowModal = (items) => {
    setModalDatas({title: items.name, language: items.language, performance: items.score, uploader: items.uploader, version: items.version, description: items.description, price: items.price});
    setShowModal(true);
  };

  const donwloadModelFile = async (filename, uploader, version) => {
    const date = new Date();
    const timestamp = date.getFullYear() +
              '-' + (date.getMonth() + 1) +
              '-' + date.getDate() +
              '-' + date.getHours() +
              '-' + date.getMinutes() +
              '-' + date.getSeconds();

    const modelKey = 'A_' + modalDatas.uploader + '_' + modalDatas.title + '_' + modalDatas.version;
    const params = [currentUser.username, modelKey, modalDatas.price, timestamp];
    await TradeService.BuyModel(params);
    const filedata = await AIService.DownloadModel(filename, currentUser.username, uploader, version);
    const url = window.URL.createObjectURL(new Blob([filedata]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${filename}.h5`);
    link.style.cssText = 'display:none';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

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
            <div className='relative w-full px-4 py-3 max-w-full flex-grow flex-1'>
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                인공지능 모델
              </h3>
            </div>
          </div>
        </div>
        {showModal ?
          <>
            <div
              className='justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none absolute focus:outline-none'
              style={{top: '2%', left: '20%', transform: 'translate( - 50 % ,  - 50 % )'}}
              onClick={() => setShowModal(false)}
            >
              <div className='relative my-6 mx-auto max-w-sm'
                style={{width: '330pt'}}>
                {/* content*/}
                <div className='border-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/* header*/}
                  <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                    <h3 className='text-3xl font-semibold'>
                      {modalDatas.title}
                    </h3>
                    <button
                      className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                      onClick={() => setShowModal(false)}
                    >
                      <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                      </span>
                    </button>
                  </div>
                  {/* body*/}
                  <div className='relative p-6 flex-auto'>
                    <p className=' m-4'>
                    언어: {modalDatas.language}
                    </p>
                    <p className='m-4'>
                    성능: {modalDatas.performance} %
                    </p>
                    <p className='m-4 text-blueGray-500 text-lg leading-relaxed'>
                    설명: {modalDatas.description}
                    </p>
                    <div className='border-0 box-border flex justify-center'>
                      <button
                        className='bg-emerald-500 justify-self-center m-4 text-white w-full active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150'
                        type='button'
                        onClick={() => donwloadModelFile(modalDatas.title, modalDatas.uploader, modalDatas.version)}
                      >
                      구매하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black' />
          </>
          : null}
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='items-center w-full bg-transparent border-collapse'>
            <TableHead attrs={headattr}/>
            <TableBody attrs={headattr} items={pagedDates} onShowModal={handleShowModal} />
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
  if (attr === 'num') {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > #
      </th>
    );
  } else if (attr === 'name') {
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
  } else if (attr === 'downloaded') {
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
  } else if (attr === 'owner') {
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
  } else if (attr === 'timestamp') {
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
  } else {
    return (
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
        }
      > 더보기
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
  const {item, attr, color, onShowModal} = props;
  if (attr === 'num') {
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
  } else if (attr === 'name') {
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
  } else if (attr === 'downloaded') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <i className='fas fa-circle text-emerald-500 mr-2' />{' '}
        {item[attr]}
      </td>
    );
  } else if (attr === 'owner') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <div className='flex'>
          {item[attr]}
        </div>
      </td>
    );
  } else if (attr === 'timestamp') {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <div className='flex items-center'>
          {item[attr]}
        </div>
      </td>
    );
  } else {
    return (
      <td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4'>
        <div className='flex items-center'>
          <button
            className='bg-blueGray-600 text-white active:bg-blueGray-700 uppercase text-sm px-4 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-1 ease-linear transition-all duration-150'
            type='button'
            onClick={() => onShowModal(item)}
          >
          더보기
          </button>
        </div>
      </td>
    );
  }
};

const TableRow = (props) => {
  const {item, attrs, onShowModal} = props;
  return (
    <tr>
      {attrs.map((attr, idx) => <TableBodyComponent onShowModal = {onShowModal} key={`tbody2-${idx}`} item={item} attr={attr}/>)}
    </tr>
  );
};

const TableBody = (props) => {
  const {items, attrs, onShowModal} = props;
  return (
    <tbody>
      {items.map((item, idx) => <TableRow onShowModal = {onShowModal}key={`tbody-${idx}`} item={item} attrs={attrs} />)}
    </tbody>
  );
};


AITable.defaultProps = {
  color: 'light'
};

AITable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};
