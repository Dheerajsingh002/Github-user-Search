import React from 'react'
import Header from '../components/Header'
import Pages from '../pages';

function Layout({ children }) {
  return ( 
  <React.Fragment>
      <Header/>
      <main>
        {children}
      </main>
      
  </React.Fragment>
  );
  
    //main content

}

export default Layout