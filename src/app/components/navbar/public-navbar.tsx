/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import React from 'react';
import styles from './public-navbar.module.scss';
import { useAppDispatch } from '@/redux/store/store';
import { login } from '@/redux/slices/localAuthSlice';
import StorageService from '@/shared/storage.service';
// import Cookies from 'js-cookie';

const PublicNavbar = () => {
     const dispatch = useAppDispatch();

     function onLoginButtonClick() {
          StorageService.setIsLoggedInUser(true);
          // Cookies.set('token', 'SLFJDSRW23R20955IELMEO53905358353GLDGKDGE055855535FSGFSGSFSGS2242525375TKHOULF', { expires: 1 });
          dispatch(login());
     }

     return (
          <div className={styles['public-navbar']}>
               <div className="row">
                    <div className="col-md-12">
                         <div className={styles['left-and-right-section']}>
                              <div className={styles['left-section']}>
                                   <span className={styles['title']}>Hello Next Js</span>
                              </div>
                              <div className={styles['right-section']}>
                                   <button
                                        onClick={() => {
                                             onLoginButtonClick();
                                        }}
                                        className="btn btn-sucess"
                                   >
                                        Auto Login
                                   </button>
                                   &nbsp;
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

export default PublicNavbar;
