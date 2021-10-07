import React, {useState, useEffect} from 'react';

// components
import CardStats from 'components/Cards/CardStats.js';
import WhiteCardStats from 'components/Cards/WhiteCardStat.js';
import TradeService from '../../services/trade.service';
import DataService from '../../services/data.service';
import AIService from '../../services/ai.service';
import AuthService from '../../services/auth.service';


export default function HeaderStats() {
  const [currentMeow, setCurrentMeow] = useState('');
  const [dataCount, setDataCount] = useState('');
  const [modelCount, setModelCount] = useState('');

  useEffect(async () => {
    const currentUser = AuthService.getCurrentUser();
    const meow = await TradeService.GetCurrnetMeow(currentUser.username);
    const allDataCount = await DataService.GetAllDataCount();
    const allModelCount = await AIService.GetAllModelCount();
    setCurrentMeow(meow);
    setDataCount(allDataCount);
    setModelCount(allModelCount);
  });


  return (
    <>
      {/* Header */}
      <div className='relative bg-blueGray-600 bg-opacity-70 md:pt-32 pb-32 pt-12'>
        <div className='px-4 md:px-10 mx-auto w-full '>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4 '>
                <WhiteCardStats
                  statSubtitle='BLOCK HEIGHT'
                  statTitle='21'
                  statArrow='up'
                  statPercent='1.48'
                  statPercentColor='text-red-500'
                  statDescripiron='sicence few seconds'
                  statIconName='fas fa-poll'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='NUMBER OF DATA'
                  statTitle={dataCount}
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron='sicence few seconds'
                  statIconName='fas fa-chart-bar'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <WhiteCardStats
                  statSubtitle='NUMBER OF AI-MODEL'
                  statTitle={modelCount}
                  statArrow='up'
                  statPercent='1.10'
                  statPercentColor='text-red-500'
                  statDescripiron='sicence few seconds'
                  statIconName='fas fa-brain'
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='MEOW COIN'
                  statTitle={currentMeow}
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-red-500'
                  statDescripiron='sicence few seconds'
                  statIconName='fas fa-coins'
                  statIconColor='bg-lightBlue-500'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
