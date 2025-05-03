import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'

import './App.css'

import Home from './home/Home'
import Course from './components/Course'
import Signup from './components/Signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    {/* <Home></Home>
    <Course></Course> */}
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
     
    </>
    
    
  )
}

export default App
