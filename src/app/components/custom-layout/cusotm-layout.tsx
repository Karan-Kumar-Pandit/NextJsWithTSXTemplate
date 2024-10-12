import React, { ReactNode } from 'react';

import SecureNavbar from '../secure-navbar/secure-navbar';
import Sidebar from '../sidebar/sidebar';
import styles from './custom-layout.module.scss';
interface LayoutProps {
     children: ReactNode;
}

const CustomLayout = ({ children }: LayoutProps) => {
     return (
          <div className={styles['custom-layout']}>
               <div className={styles['navbar']}>
                    <SecureNavbar />
               </div>
               <div className={styles['sidebar-and-child-layouts']}>
                    <div className={styles['sidebar']}>
                         <Sidebar />
                    </div>
                    <div className={styles['child-layout']}>{children}</div>
               </div>
          </div>
     );
};

export default CustomLayout;
