import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './progressbar.module.scss';

export default function CircularIndeterminate() {
     return (
          <div className="container">
               <div className="row">
                    <div className="col-md-12">
                         <div className={styles['progress-container']}>
                              <div className={styles['progressbar']}>
                                   <CircularProgress />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
