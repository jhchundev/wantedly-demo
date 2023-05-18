import React from 'react';
import NavBar from './components/navbar/NavBar';


const Layout = ({ children }: {children: any} ) => {
  return (
    <>
      <NavBar />
      {/* <div style={{ marginTop: '70px' }}>{children}</div>
      Add any footer or other common components here */}
    </>
  );
};

export default Layout;
