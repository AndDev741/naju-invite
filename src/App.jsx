import { Routes, Route } from 'react-router'
import GiftSugestion from './pages/giftSugestion'
import Confirmation from './pages/confirmation'
import Location from './pages/location'
import Invites from './pages/invites'

function App() {
  return (
    <div className='bg-[#041C34]'>
      <Routes>
        <Route path='/' element={<Confirmation/>} />
        <Route path='/localizacao' element={<Location/>} />
        <Route path='/sugestao' element={<GiftSugestion/>} /> 
        <Route path='/convidados' element={<Invites/>} /> 
      </Routes>
    </div>
  )
}

export default App
