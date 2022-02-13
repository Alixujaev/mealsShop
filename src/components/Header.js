import React from 'react'
import Navbar from './Navbar'

const Header = ({active, setActive}) => {
  return (
    <div>
      <Navbar active={active} setActive={setActive}/>
    </div>
  )
}

export default Header