import { useState } from 'react'
import { Routes, Route } from 'react-router'
import GiftSugestion from './pages/giftSugestion'
import Confirmation from './pages/confirmation'

function App() {
  return (
    <div className='bg-[#041C34]'>
      <Routes>
        <Route path='/' element={<Confirmation/>} />
        <Route path='/location' element={<Location/>} />
        <Route path='/sugestao' element={<GiftSugestion/>} /> 
      </Routes>
    </div>
  )
}

export default App
