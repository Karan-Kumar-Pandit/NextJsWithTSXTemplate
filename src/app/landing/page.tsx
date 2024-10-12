/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import PublicNavbar from '../components/navbar/public-navbar';

const LandingPage = () => {
     return (
          <React.Fragment>
               <PublicNavbar></PublicNavbar>
               <div className="container">
                    <div className="row">
                         <div className="col-md-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sit hic, ex est minima, minus magnam distinctio quos necessitatibus quaerat doloremque, error reiciendis delectus. Iste, iusto! Porro sunt at fuga.</div>
                    </div>
               </div>
          </React.Fragment>
     );
};

export default LandingPage;
