/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';
import Dashboard from './dashboard/page';
import CustomLayout from './components/main-layout/main-layout';
import LandingPage from './landing/page';

export default function MyApp() {
     const [isLoggedInUser, setIsLoggedInUser] = useState(true);

     return (
          <React.Fragment>
               {isLoggedInUser && <Dashboard />}
               {!isLoggedInUser && <LandingPage />}
          </React.Fragment>
     );
}
