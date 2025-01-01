import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import contact from '../../assets/envelope.svg'
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faUsps } from '@fortawesome/free-brands-svg-icons'; 



function Header() {
  return (
    <header className='container mx-auto max-w-[90%]'>
      <div className="site-header">
        <div className='top-nav'>
          <nav className='text-right me-[6.25rem]'>
            <ul>
              <li className='nav-item inline'>
                <Link to="/" className='inline-block p-4'>
                <span className='nav-title '>Apply Now</span>
                  <div className="external-link-icon">
                    <FontAwesomeIcon className='ps-[4px] relative top-[1px]' icon={faArrowUpRightFromSquare} />
                  </div>
                </Link>


              </li>
              <li className='nav-item inline'>
                <Link to="/" className='inline-block p-4' >
                  <img src={contact} alt="" className='inline-block' />
                  <span className='nav-title'>Contact Us</span></Link>
              </li>
            </ul>
          </nav>
        </div>


        <div className='flex items-center  border-[#ebebeb] main-nav shadow-[0_8px_16px_0_rgba(0,0,0,0.04)] bg-[transperent] h-[6.25rem]'>
          <div className="site-logo">
            <Link to="/" className='link'><img src={logo} alt="" width={'200px'} /></Link>
          </div>
          <div className='main'>
            <ul className="nav-root-menu inline-flex">
              <li className='nav-item nav-group'>
                <Link to="/" className='inline-block p-4'>
                  <div className="external-link-icon me-2">
                    <FontAwesomeIcon icon={faHouse} />
                  </div>
                  <span className='inline-block'>Home</span>
                </Link>
              </li>
              <li className='nav-item nav-group'>
                <Link to="/" className='link inline-block p-4'><div className="external-link-icon me-2">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div><span>About</span></Link>
              </li>
              <li className='nav-item nav-group'>
                <Link to="/" className='link inline-block p-4'><div className="external-link-icon me-2">
                  <FontAwesomeIcon icon={faUsps} />
                </div><span>Services</span></Link>
              </li>
              <li className='nav-item nav-group'>
                <Link to="/" className='link inline-block p-4'><div className="external-link-icon me-2">
                  <FontAwesomeIcon icon={faAddressBook} />
                </div><span>Contact</span></Link>
              </li>
              <li className='nav-item nav-group'>
                <Link to="/" className='link inline-block p-4'><div className="external-link-icon me-2">
                  <FontAwesomeIcon icon={faUser} />
                </div><span>Profile</span></Link>
              </li>
            </ul>
          </div>
          <button className='search-btn'></button>

        </div>


      </div>
    </header>
  );
}

export default Header;
