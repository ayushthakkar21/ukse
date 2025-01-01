import React from 'react'
import { Outlet } from "react-router";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  return (
    <div>
        
        <Header/>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default Layout