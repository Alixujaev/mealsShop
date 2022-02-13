import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Meals from "./components/Meals";
import { useState } from "react";
import Purchases from "./components/Purchases";


function App() {
  const [order, setOrder] = useState([])
  const [active, setActive]= useState(false)

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((i) => i.idMeal === item.idMeal)
    if(itemIndex < 0){
      setActive(true)
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    }else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex){
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        }else{
          return orderItem
        }
      })
      setOrder(newOrder)
    }

  }

  const incrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if(el.idMeal === itemId){
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      }else {
        return el
      }
    })
    setOrder(newOrder)
  }
  const decrementQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if(el.idMeal === itemId && el.quantity > 0){
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity
        }
      }else {
        return el
      }
    })
    setOrder(newOrder)
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(el => el.idMeal !== itemId)
    setOrder(newOrder)
  }

  
  return (
    <div className="App">
      <Header active={active} setActive={setActive}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={`/categories`} element={<Categories/>}/>
        <Route path={`/products/:id`} element={<Products setActive={setActive} addToBasket={addToBasket} />}/>
        <Route path={`/meals/:meals`} element={<Meals addToBasket={addToBasket}/>}/>
        <Route path={`/purchases`} element={<Purchases removeFromBasket={removeFromBasket} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} order={order}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
