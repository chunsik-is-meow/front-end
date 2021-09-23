import React, {useState} from 'react';
import ReactFileReader from 'react-file-reader';
import DataService from '../../services/data.service';
import AuthService from '../../services/auth.service';

export default function DataUploadForm() {
  const currentUser = AuthService.getCurrentUser();

  const [fileName, setFileName] = useState('');
  const [version, setVersion] = useState('');
  const [uploader, setUploader] = useState(currentUser.username);
  const [owner, setOwner] = useState('');
  const [description, setDescription] = useState('');
  const [contents, setContents] = useState('');

  const onChangeFileName = (e) => {
    const value = e.target.value;
    setFileName(value);
  };

  const onChangeVersion = (e) => {
    const value = e.target.value;
    setVersion(value);
  };

  const onChangeUploader = (e) => {
    const value = e.target.value;
    setUploader(value);
  };

  const onChangeOwner = (e) => {
    const value = e.target.value;
    setOwner(value);
  };

  const onChangeDescription = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleDataFiles = (files) => {
    let reader = new FileReader();
    reader.onload = async (e) => {
      const encodingContents = Buffer.from(reader.result).toString('base64');
      // alert(encodingContents);
      setContents(encodingContents);
    };
    reader.readAsText(files[0]);
  };

  const handleUpload = async () => {
    const date = new Date();
    const timestamp = date.getFullYear() +
              '-' + (date.getMonth() + 1) +
              '-' + date.getDate() +
              '-' + date.getHours() +
              '-' + date.getMinutes() +
              '-' + date.getSeconds();

    const params = [uploader, fileName, version, description, owner, contents, timestamp];
    const result = await DataService.UploadData(params);
    if (result.status === 200) {
      alert('업로드에 성공하였습니다.');
    } else {
      alert('업로드에 실패하였습니다.');
    }
  };

  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0'>
        <form onSubmit={handleUpload}>
          <div className='rounded-t bg-white mb-0 px-6 py-6'>
            <div className='text-center flex justify-between'>
              <h3 className='text-blueGray-700 text-lg font-bold'>공공 데이터 업로드</h3>
              <button
                className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                type='submit'
              >
                업로드하기
              </button>
            </div>
          </div>
          <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2 inline'
                htmlFor='grid-password'
              >
                file name
              </label>
              <input
                type='text'
                className=' inline border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                placeholder='filename'
                onChange={onChangeFileName}
              />
            </div>
            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2 inline'
                htmlFor='grid-password'
              >
                file version
              </label>
              <input
                type='text'
                className=' inline border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                placeholder='1.0'
                onChange={onChangeVersion}
              />
            </div>
            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2 inline'
                htmlFor='grid-password'
              >
                uploader
              </label>
              <input
                type='text'
                className=' inline border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                value={currentUser.username}
                onChange={onChangeUploader}
              />
            </div>
            <div className='relative w-full mb-3'>
              <label
                className='block container md uppercase text-blueGray-600 text-xs font-bold mb-2 '
                htmlFor='grid-password'
              >
                owner (org)
              </label>
              <input
                type='text'
                className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                placeholder='organization'
                onChange={onChangeOwner}
              />
            </div>
            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                description
              </label>
              <input
                type='text'
                className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                placeholder='description'
                onChange={onChangeDescription}
              />
            </div>
            <div className='relative w-full mb-3'>
              <label
                className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                htmlFor='grid-password'
              >
                file contents
              </label>
              <ReactFileReader handleFiles={handleDataFiles} fileTypes={'.csv'}>
                <button
                  className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-2 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
                  type='button'
                >
                  파일 선택하기
                </button>
              </ReactFileReader>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
