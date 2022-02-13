import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getAllCategories } from '../api'
import LatestListItem from './LatestListItem'
import Loading from './Loading'

const Categories = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    getAllCategories()
      .then(res => {
        setProducts(res.categories)
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [])


  return (
    <div>
      {loading ? <Loading/> : (
      <div className='products container'>
      <i onClick={() => navigate(-1)} className="material-icons material_icons back_icon">arrow_back</i>
      <div className='latest_header'>
        <h2>Our Categories</h2>
        <p className='latest_header_link'>{products.length} categories</p>
      </div>
      <div className='latest_content'>
        {products.map((item, index) => {
          return <LatestListItem key={index} {...item}/>
        })}
      </div>
    </div>
    )}
    </div>
  )
}

export default Categories