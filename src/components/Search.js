import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getAllCategories, getBySearch } from '../api'
import LatestListItem from './LatestListItem'

const Search = ({cb, catalog}) => {
  const [value, setValue] = useState([])
  const navigate = useNavigate()
  const handleKey = (e) => {
    if(e.key === 'Enter'){
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    cb(value)
  }


  return (
    <div className='search container'>
      <i onClick={() => navigate(-1)} className="material-icons material_icons back_icon">arrow_back</i>
    <div className='latest_header'>
        <h2>Search panel</h2>
        <div className='input_group'>
          <input value={value} onKeyDown={handleKey} onChange={(e) => setValue(e.target.value)} className='input' name='search' type='text'/>
          <button onClick={handleSubmit} className='input_btn'>Search</button>
        </div>
      </div>
      <div className='latest_content'>
        {catalog ? catalog.map((item, index) => {
          return (
            <LatestListItem key={index} {...item}/>
          )
        }) : <h2>Nothing found yet.</h2>}
      </div>
    </div>
  )
}

export default Search