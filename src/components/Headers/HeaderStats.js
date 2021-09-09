import React from 'react';

// components

import CardStats from 'components/Cards/CardStats.js';
import WhiteCardStats from 'components/Cards/WhiteCardStat.js';
import TradeService from '../../services/trade.service';
import AuthService from '../../services/auth.service';


export default function HeaderStats() {
  const currentUser = AuthService.getCurrentUser();
  const [currentMeow, setCurrentMeow] = useState('');

  useEffect(async () => {
    const meow = await TradeService.GetCurrnetMeow(currentUser.username);
    setCurrentMeow(meow);
  });
  const allDataCount = TradeService.GetAllDataCount();
  const allModelCount = TradeService.GetAllModelCount();

  return (
    <>
      {/* Header */}
      <div className='relative bg-purple-200 bg-opacity-70 md:pt-32 pb-32 pt-12'>
        <div className='px-4 md:px-10 mx-auto w-full '>
          <div>
            {/* Card stats */}
            <div className='flex flex-wrap'>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4 '>
                <WhiteCardStats
                  statSubtitle='BLOCK HEIGHT'
                  statTitle='350897'
                  statArrow='up'
                  statPercent='3.48'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName='far fa-chart-bar'
                  statIconColor='bg-red-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='NUMBER OF DATA'
                  statTitle={allDataCount}
                  statArrow='down'
                  statPercent='3.48'
                  statPercentColor='text-red-500'
                  statDescripiron='Since last week'
                  statIconName='fas fa-chart-pie'
                  statIconColor='bg-orange-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <WhiteCardStats
                  statSubtitle='NUMBER OF AI-MODEL'
                  statTitle={allModelCount}
                  statArrow='down'
                  statPercent='1.10'
                  statPercentColor='text-orange-500'
                  statDescripiron='Since yesterday'
                  statIconName='fas fa-users'
                  statIconColor='bg-pink-500'
                />
              </div>
              <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
                <CardStats
                  statSubtitle='MEOW COIN'
                  statTitle={currentMeow}
                  statArrow='up'
                  statPercent='12'
                  statPercentColor='text-emerald-500'
                  statDescripiron='Since last month'
                  statIconName='fas fa-percent'
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
