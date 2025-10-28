import React from 'react'
import Edit from './Component/Edit'
import { Route,Routes } from 'react-router-dom'
import Card from './User/Card'
import Home from './Component/Home'
import Create from './Component/Create'

const App = () => {
  return (

      <Routes >
        <Route path="/" element={<Card />} > </Route>
          <Route path="edit/:userid" element={<Edit />} />
        <Route path='create' element={<Create></Create>}></Route>
      </Routes>
  )
}

export default App