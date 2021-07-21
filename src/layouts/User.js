import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js';
import Sidebar from 'components/Sidebar/Sidebar.js';
import HeaderStats from 'components/Headers/HeaderStats.js';
import FooterAdmin from 'components/Footers/FooterAdmin.js';

// views

import Data from '../views/user/Data';
import AIModel from '../views/user/AIModel';
import Token from '../views/user/Token';
import MyPage from '../views/user/MyPage';

export default function User() {
  return (
    <>
      <Sidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Switch>
            <Route path='/user/data' exact component={Data} />
            <Route path='/user/aimodel' exact component={AIModel} />
            <Route path='/user/token' exact component={Token} />
            <Route path='/user/mypage' exact component={MyPage} />
            <Redirect from='/' to='/admin/dashboard' />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
