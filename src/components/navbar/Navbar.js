import React from 'react'
import {
     Routes, Route, Link
  } from "react-router-dom";
  import Home from "../../pages/Home";


const Navbar = () => {
    
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    
  return (
    <Link to={"/"}>123</Link>
  )
}

export default Navbar