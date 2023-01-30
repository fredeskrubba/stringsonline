import React from 'react'
import {Link, Route} from "wouter"
import Home from "../../pages/Home"


const Navbar = () => {
    
    

  return (
    <div>
        <Link href="/">
          Home
        </Link>
        <Link href="/test">
          test
        </Link>

        <Route path="/">
          <Home/>
        </Route>
    </div>
  )
}

export default Navbar