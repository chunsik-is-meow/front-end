import React from 'react';
import {createPopper} from '@popperjs/core';
import {Link} from 'react-router-dom';
import AuthService from '../../services/auth.service';

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  // const pagemove = ()=>{
  //   document.location.href = "/views/user/Mypage"
  // };
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start'
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className='text-blueGray-500 block'
        href='#pablo'
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <div className='items-center flex'>
          <span className='w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full'>
            <img
              alt='...'
              className='w-full rounded-full align-middle border-none shadow-lg'
              src={require('assets/img/chunsik_head.jpg').default}
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <a
          href='#pablo'
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }

          onClick={() => AuthService.logout()}
        >
          로그아웃
        </a>
        <Link
          to='/user/token'
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700' +
            (window.location.href.indexOf('/user/token') !== -1
              ? 'text-lightBlue-500 hover:text-lightBlue-600'
              : 'text-blueGray-700 hover:text-blueGray-500')
          }
        >
          토큰 거래
        </Link>
        <Link
          to='/user/mypage'
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700' +
            (window.location.href.indexOf('/user/mypage') !== -1
              ? 'opacity-75'
              : 'text-blueGray-300')
          }
        >
          마이페이지
        </Link>

      </div>
    </>
  );
};

export default UserDropdown;
