import React from 'react';
import {Switch, Redirect} from 'react-router-dom';

// components
import AdminNavbar from '../components/Navbars/AdminNavbar.js';
import UserSidebar from '../components/Sidebar/UserSidebar.js';
import HeaderStats from '../components/Headers/HeaderStats.js';
import FooterAdmin from '../components/Footers/FooterAdmin.js';
import RouteWithAuth from '../components/Route/RouteWithAuth.js';

// views
import Dashboard from '../views/admin/Dashboard.js';
import Data from '../views/user/Data';
import AIModel from '../views/user/AIModel';
import Token from '../views/user/Token';
import MyPage from '../views/user/MyPage';
import Transaction from '../views/user/Transaction';
import ModelUpload from '../views/user/ModelUpload';
import DataUpload from '../views/user/DataUpload';
import Tools from '../views/user/Tools';

export default function User() {
  return (
    <>
      <UserSidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Switch>
            <RouteWithAuth path='/user/dashboard' exact component={Dashboard} />
            <RouteWithAuth path='/user/data' exact component={Data} />
            <RouteWithAuth path='/user/aimodel' exact component={AIModel} />
            <RouteWithAuth path='/user/token' exact component={Token} />
            <RouteWithAuth path='/user/mypage' exact component={MyPage} />
            <RouteWithAuth path='/user/transaction' exact component={Transaction} />
            <RouteWithAuth path='/user/upload/data' exact component={DataUpload} />
            <RouteWithAuth path='/user/upload/model' exact component={ModelUpload} />
            <RouteWithAuth path='/user/tools' exact component={Tools} />
            <Redirect from='/' to='/user/dashboard' />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
