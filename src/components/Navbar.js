import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ logout, token }) => {
  return (
    <header>
      <nav className="navbar">
        <Link to='/' className="navLinks">Home</Link>
        <Link to='/posts' className="navLinks">Posts</Link>
        <Link to='/profile' className="navLinks">Profile</Link>
        {
          token ? (
            <Link to='/' className="navLinks" onClick={ () => logout() }>Logout</Link>
          ) : (
            <>
              <Link to='/register' className="navLinks">Register</Link>
              <Link to='/login' className="navLinks">Login</Link>
            </>
          )
        }
      </nav>
    </header>
  )
}

export default Navbar;