'use client';

import Link from 'next/link';
import React from 'react';
import styles from './secure-navbar.module.scss';
import { useAppDispatch } from '@/redux/store/store';
import { logout } from '@/redux/slices/localAuthSlice';
import StorageService from '@/shared/storage.service';
import { setCookie } from 'typescript-cookie';
import { useRouter } from 'next/navigation';

const SecureNavbar = () => {
     const dispatch = useAppDispatch();
     const router = useRouter();

     function onLogoutButtonClick() {
          StorageService.setIsLoggedInUser(false);
          setCookie('token', null, { expires: 0 });
          dispatch(logout());
          router.push('/');
     }

     return (
          <div className={styles['public-navbar']}>
               <div className="row">
                    <div className="col-md-12">
                         <div className={styles['left-and-right-section']}>
                              <div className={styles['left-section']}>
                                   <span className={styles['title']}>Next Js Template</span>
                              </div>
                              <div className={styles['right-section']}>
                                   <button
                                        onClick={() => {
                                             onLogoutButtonClick();
                                        }}
                                        className="btn btn-sucess"
                                   >
                                        Logout
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

export default SecureNavbar;
