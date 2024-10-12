/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';
import Dashboard from './dashboard/page';
import LandingPage from './landing/page';
import { useSelector } from 'react-redux';
import StorageService from '@/shared/storage.service';
import CircularIndeterminate from './components/segments/progressbar/progressbar';

export default function MyApp() {
     const [isLoading, setIsLoading] = useState(true);
     const [isLoggedInUser, setIsLoggedInUser] = useState(false);
     const localAuth = useSelector((state: any) => state.localAuth);

     useEffect(() => {
          initializeUI();
     }, []);

     useEffect(() => {
          initializeUI();
     }, [localAuth]);

     function initializeUI() {
          const loggedIn = StorageService.isLoggedInUser();
          setIsLoggedInUser(loggedIn);
          setIsLoading(false);
     }

     return (
          <React.Fragment>
               {isLoading && (
                    <React.Fragment>
                         <CircularIndeterminate></CircularIndeterminate>
                    </React.Fragment>
               )}
               {!isLoading && (
                    <React.Fragment>
                         {isLoggedInUser && <Dashboard />}
                         {!isLoggedInUser && <LandingPage />}
                    </React.Fragment>
               )}
          </React.Fragment>
     );
}
