import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LatestListItem = ({idCategory, strCategory, strCategoryDescription, strCategoryThumb}) => {
  
  return (
      <div key={idCategory} className="card">
        <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
        <div className="card-body">
          <h5 className="card-title">{strCategory}</h5>
          {strCategoryDescription ? <p className="card-text">{strCategoryDescription.slice(0, 150)}...</p> : ''}
          <NavLink to={`/products/${strCategory}`} className="card-link">View products</NavLink>
        </div>
      </div>
  )
}

export default LatestListItem