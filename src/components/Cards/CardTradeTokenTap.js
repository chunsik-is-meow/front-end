import React from 'react';

function CardBuyToken() {
  return (
    <>
      <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
        <form>
          <div className='text-center flex justify-between'>
            <h6 className='text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase'>
              User Information
            </h6>
            <button
              className='bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150'
              type='button'
            >
              주문하기
            </button>
          </div>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  수량
                </label>
                <input
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='lucky.jesse'
                />
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  Email address
                </label>
                <input
                  type='email'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='jesse@example.com'
                />
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  가격
                </label>
                <input
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='Lucky'
                />
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='relative w-full mb-3'>
                <label
                  className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                  htmlFor='grid-password'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                  defaultValue='Jesse'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default function CardTradeTokenTab() {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full'>
          <ul
            className='flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row'
            role='tablist'
          >
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-lightBlue-600'
                    : 'text-lightBlue-600 bg-white')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle='tab'
                href='#link1'
                role='tablist'
              >
                매수
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-lightBlue-600'
                    : 'text-lightBlue-600 bg-white')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle='tab'
                href='#link2'
                role='tablist'
              >
                매도
              </a>
            </li>
            <li className='-mb-px mr-2 last:mr-0 flex-auto text-center'>
              <a
                className={
                  'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-lightBlue-600'
                    : 'text-lightBlue-600 bg-white')
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle='tab'
                href='#link3'
                role='tablist'
              >
                정정/취소
              </a>
            </li>
          </ul>
          <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <div className='px-4 py-5 flex-auto'>
              <div className='tab-content tab-space'>
                <div className={openTab === 1 ? 'block' : 'hidden'} id='link1'>
                  <CardBuyToken/>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id='link3'>
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
