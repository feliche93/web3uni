import React from 'react';
import Meta from '../Layout/Meta';
import Nav from '../Layout/NavigationLanding/Nav';
import AppContent from '../UI/AppContent';
import Footer from './Footer';
import Navbar from './NavigationApp/Navbar';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();

  const landingPageRoutes = ['/', '/register', '/login'];

  if (landingPageRoutes.includes(router.pathname)) {
    return (
      <>
        <Meta />
        <AppContent>
          <Nav />
          {children}
          <Footer />
        </AppContent>
      </>
    );
  }

  return (
    <>
      <Meta />
      <AppContent>
        <Navbar />
        <main className='py-10'>{children}</main>
      </AppContent>
    </>
  );
};

export default Layout;
