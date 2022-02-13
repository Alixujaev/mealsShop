import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_content container'>
        <p className='navbar_icon'>Meals<span className='navbar_icon_span'>Shop</span></p>
        <p className='footer_txt'>©Alixujaev {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer