import React from 'react';

// components
import CardBuyTokenTable from '../../components/Cards/CardBuyTokenTable.js';
import CardSellTokenTable from '../../components/Cards/CardSellTokenTable.js';
import CardTokenChart from '../../components/Cards/CardTokenChart.js';
import CardTradeTokenTab from '../../components/Cards/CardTradeTokenTap.js';

export default function Token() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-4/12 px-4'>
          <CardBuyTokenTable />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <CardSellTokenTable />
        </div>
        <div className='w-full lg:w-4/12 px-4'>
          <CardTokenChart />
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-12/12 px-4'>
          <CardTradeTokenTab />
        </div>
      </div>
    </>
  );
}
