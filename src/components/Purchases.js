import React from 'react'
import { useNavigate } from 'react-router';

const Purchases = ({order, incrementQuantity, decrementQuantity, removeFromBasket}) => {
  const navigate = useNavigate()

  console.log(order);

  return (
    <div className='purchases container'>
      <i onClick={() => navigate(-1)} className="material-icons material_icons back_icon">arrow_back</i>
      <div className='latest_header'>
          <h2>Purchases</h2>
      <p className='meals_instructions'><span>Total: </span>{order.reduce((sum, el) => {
        return sum += el.quantity * Math.floor(el.idMeal / 10)
      }, 0)}$</p>
      </div>
      <div className='purcheses_body'>
        {order.length ? (
        <div className='latest_content'>
        {
        order.map((item, index) => {
          return (
        <div key={index} className='card pruceses_card'>
          <img src={item.strMealThumb} alt='pruceses'/>
          <div className='card-body'>
            <h5>{item.strMeal} <span className='card-link'>x{item.quantity}</span></h5>
            <p className='purchases_price'>Price: <span>{Math.floor(item.idMeal / 10)}$</span></p>
            <p className='purchases_price'>Total Price: <span>{item.quantity * Math.floor(item.idMeal / 10)}$</span></p>
            <div className='purches_icons'>
                <i onClick={() => incrementQuantity(item.idMeal)} className="material-icons material_icons">add_circle</i>
                <i onClick={() => decrementQuantity(item.idMeal)} className="material-icons material_icons">remove_circle</i>
                <i onClick={() => removeFromBasket(item.idMeal)} className="material-icons material_icons">delete</i>
            </div>
          </div>
        </div>
          )
        })
        }
        </div>
        ) : <h2>Nothing purchased yet ( </h2>}
      </div>
    </div>
    )
}

export default Purchases