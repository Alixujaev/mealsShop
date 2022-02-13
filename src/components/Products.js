import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getMealsByCategories } from '../api'
import Loading from './Loading'
import ProductList from './ProductList'

const Products = ({addToBasket}) => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const navigate = useNavigate()
  console.log(params.id);

  

  useEffect(() => {
    getMealsByCategories(params.id)
      .then(res => {
        setMeals(res.meals)
        setLoading(false)
      })
  }, [])
  
  return (
      <div>
        {loading ? <Loading/> : (
          <div className='products container'>
          <i onClick={() => navigate(-1)} className="material-icons material_icons back_icon">arrow_back</i>
          <div className='latest_header'>
            <h2>Our Products</h2>
            <p className='latest_header_link'>{meals.length} products</p>
          </div>
          <div className='latest_content'>
            {meals.map((item, index) => {
              return <ProductList addToBasket={addToBasket} key={index} {...item}/>
            })}
          </div>
        </div>
        )}
      </div>
  )
}

export default Products