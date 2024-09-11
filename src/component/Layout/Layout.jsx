// src/components/Layout/Layout.js
import React from 'react';
// import Header from '../Header';
// import Footer from '../Footer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children,id }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header id={id} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
