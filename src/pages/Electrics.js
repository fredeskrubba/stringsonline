import React from 'react'
import CurrentPage from "../components/currentPage/Currentpage"
import SideNav from '../components/sideNav/SideNav'
import Product from '../components/product/Product'
import useProductStore from '../components/product/productStore'
import { useEffect } from 'react'

const Electrics = () => {

    const fetchProducts = useProductStore((state)=>state.fetchProducts)
    useEffect(() => {
    fetchProducts("https://api.mediehuset.net/stringsonline/")
  }, []);
    const products = useProductStore((state)=>state.products)
    console.log(products)
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
                {products !== undefined ? products.productgroups.items[0].subgroups[0].products.map((product)=>{
                    return <Product product={product}/>
                }) : null}
            </div>
        </section>
      </div>
    </main>
  )
}

export default Electrics