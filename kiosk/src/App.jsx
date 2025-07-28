import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbars from './components/Navbars.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Announcements from './pages/Announcements.jsx'
import ScoreBoard from './pages/ScoreBoard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <PublicRoute>
              < Login />
            </PublicRoute>}/>
          <Route path='/signup' element={
            <PublicRoute>
              < Signup />
            </PublicRoute>}/>
          <Route path='/home' element={
            <ProtectedRoute>
              <Navbars />
              < Home />
            </ProtectedRoute>
            }/>
          <Route path='/events' element={
            <ProtectedRoute>
              <Navbars />
              < Events />
            </ProtectedRoute>}/>
          <Route path='/announcements' element={
            <ProtectedRoute>
              <Navbars />
              < Announcements />
            </ProtectedRoute>}/>
          <Route path='/score_board' element={
            <ProtectedRoute>
              <Navbars />
              < ScoreBoard />
            </ProtectedRoute>}/>
        </Routes>
      </BrowserRouter>
    </ div>
  )
}

export default App
