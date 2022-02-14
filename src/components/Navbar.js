import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({active, setActive}) => {

  return (
    <div className='navbar'>
      <div className='container header_nav'>
          <Link to={`/`} className='navbar_icon'>Meals<span className='navbar_icon_span'>Shop</span></Link>
        <div className='navbar_list'>
            <li>
              <NavLink activeClassName='active' to={`/`} className='navbar_link'>Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName='active' to={`/categories`} className='navbar_link'>Our Categories</NavLink>
            </li>
            <li>
            {
             active ? (
              <NavLink activeClassName='active' onClick={() => setActive(false)} to={`/purchases`} className='navbar_link'>Purchases <span></span></NavLink>
             ) : (
              <NavLink activeClassName='active' to={`/purchases`} className='navbar_link'>Purchases </NavLink>
             )
            }
            </li>
            <li>
              <NavLink activeClassName='active' to={`/search`} className='navbar_link'><i class="material-icons">search</i></NavLink>
            </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar