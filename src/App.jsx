import { useState } from 'react'
import { Routes, Route } from 'react-router'
import GiftSugestion from './pages/giftSugestion'
import Confirmation from './pages/confirmation'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Confirmation/>} />
      <Route path='/location' element={<Location/>} />
      <Route path='/giftSugestion' element={<GiftSugestion/>} /> 
    </Routes>
  )
}

export default App
