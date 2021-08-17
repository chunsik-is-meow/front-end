import React from 'react';
import {Switch, Redirect} from 'react-router-dom';

// components
import AgencyNavbar from '../components/Navbars/AgencyNavbar.js';
import AgencySidebar from '../components/Sidebar/AgencySidebar.js';
import HeaderStats from '../components/Headers/HeaderStats.js';
import FooterAdmin from '../components/Footers/FooterAdmin.js';
import RouteWithAuth from '../components/Route/RouteWithAuth.js';

// views
import Dashboard from '../views/admin/Dashboard.js';

export default function Agency() {
  return (
    <>
      <AgencySidebar />
      <div className='relative md:ml-64 bg-blueGray-100'>
        <AgencyNavbar />
        {/* Header */}
        <HeaderStats />
        <div className='px-4 md:px-10 mx-auto w-full -m-24'>
          <Switch>
            <RouteWithAuth path='/agency/dashboard' exact component={Dashboard} />
            <Redirect from='/' to='/agency/dashboard' />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
