/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { useState } from 'react';
import LandingPage from './landing/page';
import CustomLayout from './components/custom-layout/cusotm-layout';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
     const [isLoggedInUser, setIsLoggedInUser] = useState(false);

     setTimeout(() => {
          setIsLoggedInUser(true);
     }, 5000);
     return (
          <html lang="en">
               <body>
                    {isLoggedInUser && <CustomLayout>{children}</CustomLayout>}
                    {!isLoggedInUser && <LandingPage />}
               </body>
          </html>
     );
}
