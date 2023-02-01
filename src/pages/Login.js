import React from 'react'
import Currentpage from '../components/currentPage/Currentpage'
import SideNav from '../components/sideNav/SideNav'

const Login = () => {
  return (
    <main>
        <Currentpage currentPage={"Forside/login"}/>
        <div className='login-grid'>
            <SideNav/>
            <section className='login-form'>
                <h2>Login</h2>
                <p className='subheader'>Indtast brugernavn og adgangskode for at logge på</p>
                <h4>Brugernavn:</h4>
                <input type="text" />
                <h4>Adgangskode:</h4>
                <input type="password" />
                <button>Login</button>
            </section>
        </div>
    </main>
  )
}

export default Login