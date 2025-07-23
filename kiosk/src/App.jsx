import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbars from './components/Navbars.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              < Login />
            </>}/>
          <Route path='/signup' element={
            <>
              < Signup />
            </>}/>
          <Route path='/home' element={
            <>
              <Navbars />
              < Home />
            </>}/>
          <Route path='/events' element={
            <>
              <Navbars />
              < Events />
            </>}/>
        </Routes>
      </BrowserRouter>
    </ div>
  )
}

export default App
