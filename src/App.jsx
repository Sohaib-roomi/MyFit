
import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Sign_Up from './pages/SignUp/Sign_Up';
import NotFound from './pages/NotFound/NotFound';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard'

const App = () => {
  return (

    <>
    <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Sign_Up />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
    </Router>


    </>
    
  )
}


export default App;