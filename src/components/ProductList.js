import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
  return (
    <div key={props.idMeal} className="card">
    <img src={props.strMealThumb} className="card-img-top" alt={props.strMeal} />
    <div className='card_after'>
      <div className='card_after_desc'>
        <h4 className='card_after_title'>{props.strMeal}</h4>
        <Link className='card-link card_after_link' to={`/meals/${props.idMeal}`}>More info</Link>
      <div className='card_after_icons'>
          <i onClick={() => props.addToBasket(props)} className="material-icons material_icons">local_grocery_store</i>
      </div>
      </div>
    </div>
  </div>
  )
}

export default ProductList