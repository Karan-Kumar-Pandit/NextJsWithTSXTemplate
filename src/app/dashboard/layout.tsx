import React from 'react';
import CustomLayout from '../components/custom-layout/cusotm-layout';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
     return (
          <React.Fragment>
               <CustomLayout> {children} </CustomLayout>
          </React.Fragment>
     );
}
