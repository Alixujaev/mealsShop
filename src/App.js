import { Route, Routes, useLocation, useNavigate } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Meals from "./components/Meals";
import { useEffect, useState } from "react";
import Purchases from "./components/Purchases";
import Search from "./components/Search";
import { getAllCategories } from "./api";


function App() {
  const [order, setOrder] = useState([])
  const [active, setActive]= useState(false)
  const [catalog, setCatalog] = useState([])
  const [filtered, setfiltered] = useState([])
  const {pathname, search} = useLocation()
  const navigate = useNavigate()
  console.log(navigate);
  
  const handleSearch = (str) => {
    setfiltered(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
    navigate({
      pathname,
      search: `?s=${str}`
    })
  }

  useEffect(() => {
    getAllCategories().then(data => {
      setCatalog(data.categories)
      setfiltered( search ? 
        data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())) : data.categories)
    })
  }, [search])

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
        <Route path={`/search`} element={<Search cb={handleSearch} catalog={filtered}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
