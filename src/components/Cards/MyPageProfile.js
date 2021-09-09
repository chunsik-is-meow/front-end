import React, {useState, useEffect} from 'react';
import AuthService from '../../services/auth.service';
import TradeService from '../../services/trade.service';
import DataService from '../../services/data.service';
import AIService from '../../services/ai.service';

export default function MyPageProfile() {
  const currentUser = AuthService.getCurrentUser();
  const [currentMeow, setCurrentMeow] = useState('');
  const [userBuyDataCount, setuserBuyDataCount] = useState('');
  const [userBuyModelCount, setUserBuyModelCount] = useState('');
  const [userTransactionCount, setTransactionCount] = useState('');

  useEffect(async () => {
    const meow = await TradeService.GetCurrnetMeow(currentUser.username);
    const data = await DataService.GetUserBuyDataCount(currentUser.username);
    const model = await AIService.GetUserBuyModelCount(currentUser.username);
    const trans = await TradeService.GetTransactionCount(currentUser.username);

    setCurrentMeow(meow);
    setuserBuyDataCount(data);
    setUserBuyModelCount(model);
    setTransactionCount(trans);
  });

  return (
    <>
      <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16'>
        <div className='px-6'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full px-4 flex justify-center'>
              <div className='relative'>
                <img
                  alt='...'
                  src={require('assets/img/chunsik.png').default}
                  className='shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px'
                />
              </div>
            </div>
            <div className='w-full px-4 text-center mt-20'>
              <div className='flex justify-center py-4 lg:pt-4 pt-8'>
                <div className='mr-4 p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                    {userBuyDataCount}
                  </span>
                  <span className='text-sm text-blueGray-400'>공공 데이터</span>
                </div>
                <div className='mr-4 p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                    {userBuyModelCount}
                  </span>
                  <span className='text-sm text-blueGray-400'>인공지능 모델</span>
                </div>
                <div className='lg:mr-4 p-3 text-center'>
                  <span className='text-xl font-bold block uppercase tracking-wide text-blueGray-600'>
                    {userTransactionCount}
                  </span>
                  <span className='text-sm text-blueGray-400'>거래내역</span>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center mt-6'>
            <h3 className='text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2'>
              <strong>{currentUser.username}</strong>
            </h3>
          </div>
          <div className='mt-10 py-10 border-t border-blueGray-200 text-center'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full lg:w-9/12 px-4'>
                <p className='mb-4 text-lg leading-relaxed text-blueGray-700'>
                  보유 MEOW: {currentMeow}
                </p>
                <a
                  href='#pablo'
                  className='font-normal text-lightBlue-500'
                  onClick={(e) => e.preventDefault()}
                >
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
