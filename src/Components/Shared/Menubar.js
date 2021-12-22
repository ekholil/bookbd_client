import {  CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './menu.css'

const Menubar = () => {
    
        const [visible, setVisible] = useState(false)
        const {user, logOut} = useAuth()
        const active = {
          borderBottom:'2px solid white', 
          color: '#fff'
        }
return (
  <>
    <CNavbar expand="lg" colorScheme="light" className="menu fixed-top">
      <CContainer>
        <CNavbarBrand className='text-white' href="#" style={{fontSize: '1.5rem', fontWeight: 'bolder'}}>BookBD</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="text-white ms-auto d-flex align-items-center">
            <CNavItem>
              <CNavLink active>
                <NavLink activeStyle={active} className="btn text-white" to="/home">
                  Home
                </NavLink>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink>
                <NavLink  activeStyle={active} className="btn text-white" to="/explore">
                  All Books
                </NavLink>
              </CNavLink>
            </CNavItem>
            {
              user.email && <CNavItem>
              <CNavLink>
                <NavLink  activeStyle={active} className="btn text-white" to="/dashboard">
                  Dashboard
                </NavLink>
              </CNavLink>
            </CNavItem>
            }
            {user.email &&
              <CNavItem>
              <CNavLink style={{color: '#fff'}}>
               {user.displayName}
              </CNavLink>
            </CNavItem>
            }
            
           {
             user.email? '' : <CNavItem>
             <CNavLink>
               <NavLink  activeStyle={active} className="btn text-white" to="/login">Login</NavLink>
             </CNavLink>
           </CNavItem>
           }
            
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)
    
};

export default Menubar;