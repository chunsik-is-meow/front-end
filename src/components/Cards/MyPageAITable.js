import React from 'react';
import ReactFileReader from 'react-file-reader';

export default function MyPageAITable() {
  const handleFiles = (files) => {
    let reader = new FileReader();
    reader.onload = function (e) {
      alert(reader.result);
    };
    reader.readAsText(files[0]);
  };

  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <div className='rounded-t bg-white mb-0 px-6 py-6'>
          <div className='text-center flex justify-between'>
            <h6 className='text-blueGray-700 text-xl font-bold'>내 AI 모델</h6>
            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
              <button
                className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                type='button'
              >
                공공데이터 업로드하기
              </button>
            </ReactFileReader>
            <ReactFileReader handleFiles={handleFiles} fileTypes={'.h5'}>
              <button
                className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                type='button'
              >
                인공지능 모델 업로드하기
              </button>
            </ReactFileReader>
          </div>
        </div>
      </div>
    </>
  );
}
