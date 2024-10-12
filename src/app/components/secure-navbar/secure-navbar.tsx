import Link from 'next/link';
import React from 'react';
import styles from './secure-navbar.module.scss';

const SecureNavbar = () => {
     return (
          <div className={styles['public-navbar']}>
               <div className="row">
                    <div className="col-md-12">
                         <div className={styles['left-and-right-section']}>
                              <div className={styles['left-section']}>
                                   <span className={styles['title']}>Next Js Template</span>
                              </div>
                              <div className={styles['right-section']}>
                                   <Link href={'/login'} className="btn btn-primary btn-sm py-2 px-4">
                                        <span>Login</span>
                                   </Link>
                                   &nbsp;
                                   <Link href={'/signup'} className="btn btn-danger btn-sm py-2 px-4">
                                        <span>Signup</span>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default SecureNavbar;
