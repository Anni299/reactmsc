import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <>
    <div className='no-padding'>
      <div className="container blue circleBehind">
        <a href="/">Home</a>
        <a href="/aboutus">About Us</a>
        <a href="/goals">Goals</a>
        <a href="/events">Events</a>
        <a href="/ream">Team</a>
        <a href="/faq">FAQ</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
    </>
  );
};

export default Header;
