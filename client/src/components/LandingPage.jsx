import React from 'react';
import Navbar from './Navbar.jsx';

export default function () {
  return (
    <React.Fragment>

      <Navbar>
        <li className='logo-container'>
          <a herf="#" className='logo'>
            <span>M</span>
          </a>
        </li>
        <li className='searchBar-container'>
          <div className='searchBar'>
          <input type="text" id="searchBar" name="searchInput"  />
            <span className='fas fa-search fa-lg searchIcon' />
          </div>
        </li>
        <li className='login-container'>
          <a herf="#" className='login-button'>
            Log in
          </a>
        </li>
      </Navbar>
      <div className='landingPage-container'>
        <img src='./landingPage.jpg' alt='style image' className='image' />
        <div className='title'>
          MentorUP
        </div>
        <div className='subtitle'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et j
        </div>
        <button className='imStudent'>I'm a student</button>
        <button className='imMentor'>I'm a mentor</button>
      </div>
    </React.Fragment>

  )
}