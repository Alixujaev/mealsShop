import React, { useEffect, useState } from 'react'
import HomeDesc from './HomeDesc'
import HomeLatest from './HomeLatest'
import Loading from './Loading'
import Slider from './Slider'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <div>
        {loading ? <Loading/> : (
          <>
          <Slider/>
          <HomeLatest/>
          <HomeDesc/>
          </>
        )}
    </div>
  )
}

export default Home