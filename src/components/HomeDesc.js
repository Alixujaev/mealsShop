import React from 'react'
import Image from '../images/instagram-img-03.jpg'
const descArr = ['Lorem ipsum dolor sit amet', 'Consectetur an adipisicing elit', 'It aquecorporis nulla aspernatur', 'Corporis, omnis doloremque', 'Non cum id reprehenderit']

const HomeDesc = () => {
  return (
    <div className='home_desc container'>
      <div className='latest_header'>
        <h2>About Meals Shop</h2>
      </div>
      <div className='home_desc_body'>
        <div className='home_desc_desc'>
          <h4 className='home_desc_desc_h4'>Looking for the best products?</h4>
          <p className='card-text'>This template is free to use for your business websites. However, you have no permission to redistribute the downloadable ZIP file on any template collection website. Contact us for more info.</p>
          {descArr.map(item => {
            return <p className='home_desc_li' key={item}>{item}</p>
          })}
        </div>
        <img src={Image} alt='img'/>
      </div>
      
    </div>
  )
}

export default HomeDesc