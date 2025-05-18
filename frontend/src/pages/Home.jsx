import React, { useState } from 'react'
import Header from '../components/Header'
import AppDownload from '../components/AppDownload'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'

const Home = () => {

  const [ category, setCategory ] = useState('All')

  return (
    <div>
      <Header></Header>
			<ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
			<FoodDisplay category={category}></FoodDisplay>
      <AppDownload></AppDownload>
    </div>
  )
}

export default Home
