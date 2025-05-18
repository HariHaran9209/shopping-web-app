import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Order from './pages/Orders'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const App = () => {

  const url = 'http://localhost:4000'

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url} />}></Route>
          <Route path='/list' element={<List url={url} />}></Route>
          <Route path='/order' element={<Order url={url}></Order>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
