import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getMealsById } from '../api'
import Loading from './Loading'

const Meals = ({addToBasket}) => {
  const [foods, setFoods] = useState([])
  const [loading, setLoading] = useState(true)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getMealsById(params.meals)
      .then(res => {
        setFoods(res.meals)
        setLoading(false)
      })
  }, [])


  return (
    <>
    {loading ? <Loading/> : (
      <div className='meals container'>
      {foods.map((item, index) => {
        return (
          <div key={index}>
            <i onClick={() => navigate(-1)} className="material-icons material_icons back_icon">arrow_back</i>
            <div className='latest_header'>
              <h2>{item.strMeal}</h2>
              <div className='meals_icons'>
                  <i onClick={() => addToBasket(item)} className="material-icons material_icons">local_grocery_store</i>
                </div>
            </div>
            <div className='meals_content'>
              <div className='meals_content_desc'>
              <p className='meals_area'>Category: <span>{item.strCategory}</span></p>
                <p className='meals_area'>Area: <span>{item.strArea}</span></p>
                <p className='meals_area'>Price: <span>{Math.floor(item.idMeal / 10)}$</span></p>
                <p className='meals_instructions'>Instructions: <span>{item.strInstructions.slice(0, 500)}...</span></p>
              </div>
              <img className='meals_foto' src={item.strMealThumb} alt='meals_photo' />
            </div>
          </div>
        )
      })}
    </div>
    )}
    </>
  )
}

export default Meals