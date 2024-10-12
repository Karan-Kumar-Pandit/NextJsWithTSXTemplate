/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import React from 'react';
import styles from './public-navbar.module.scss';
import { decrement, increment } from '@/redux/slices/counterSlice';
import { useAppDispatch } from '@/redux/store/store';

const PublicNavbar = () => {
     const dispatch = useAppDispatch();

     function login() {
          dispatch(increment());
     }

     function signup() {
          dispatch(decrement());
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
                                             login();
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
