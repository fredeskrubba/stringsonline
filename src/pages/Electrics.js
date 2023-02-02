import React from 'react'
import CurrentPage from "../components/currentPage/Currentpage"
import SideNav from '../components/sideNav/SideNav'
import image from "../assets/images/hero-banner.png"
import Product from '../components/product/Product'

const Electrics = () => {

    const products = [
        {
            img: image,
            name: "Les Paul",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed libero dolore reiciendis cumque sapiente!",
            price: 290,
            stock: 5
        }
    ] 
  return (
    <main>
        <CurrentPage currentPage={"Forside/Guitarer/Elektriske"}/>
        <div className='hero-grid'>
        <SideNav/>
        <section className='electrics'>
            <div className='dropdowns'>
                <select name="Producent" id="">
                    <option value="Producent">
                        Producent
                    </option>
                </select>
                <select name="Sort" id="">
                    <option value="Sorter efter...">
                    Sorter efter...
                    </option>
                </select>
            </div>
            <div className='products'>
                {products.map((product)=>{
                    return <Product product={product}/>
                })}
            </div>
        </section>
      </div>
    </main>
  )
}

export default Electrics