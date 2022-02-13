import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getAllCategories } from '../api'
import LatestListItem from './LatestListItem'

const HomeLatest = () => {
  const [categories, setCategories] = useState([])
  // const [newCategories, setNewCategories] = useState([])

  useEffect(() => {
      getAllCategories()
      .then(res => {
        setCategories(res.categories)
        console.log(res.categories);
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className='container home_latest'>
      <div className='latest_header'>
        <h2>Latest Products</h2>
        <NavLink activeClassName='active' to={`/categories`} className='latest_header_link'>VIEW ALL CATEGORIES</NavLink>
      </div>
      <div className='latest_content'>
        {categories.slice(0, 6).map((item, index) => {
          return <LatestListItem key={index} {...item}/>
        })}
      </div>
    </div>
  )
}

export default HomeLatest