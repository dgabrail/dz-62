import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-dark bg-info'>
      <div className='container-fluid'>
        <span className="navbar-brand">Velosel</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/About-us' className="nav-link">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/Contacts' className="nav-link">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
