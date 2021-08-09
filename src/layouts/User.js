import React from 'react';
import {Switch, Redirect} from 'react-router-dom';

// components
import AdminNavbar from '../components/Navbars/AdminNavbar.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import HeaderStats from '../components/Headers/HeaderStats.js';
import FooterAdmin from '../components/Footers/FooterAdmin.js';
import RouteWithAuth from '../components/Route/RouteWithAuth.js';

// views
import Data from '../views/user/Data';
import AIModel from '../views/user/AIModel';
import Token from '../views/user/Token';
import MyPage from '../views/user/MyPage';
import Transaction from '../views/user/Transaction';

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
            <RouteWithAuth path='/user/data' exact component={Data} />
            <RouteWithAuth path='/user/aimodel' exact component={AIModel} />
            <RouteWithAuth path='/user/token' exact component={Token} />
            <RouteWithAuth path='/user/mypage' exact component={MyPage} />
            <RouteWithAuth path='/user/transaction' exact component={Transaction} />
            <Redirect from='/' to='/admin/dashboard' />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
