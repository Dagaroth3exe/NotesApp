import { Home } from 'lucide-react'
import React from 'react'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import SignUpPage from './Pages/SignUpPage/SignUpPage'

const routes= (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
