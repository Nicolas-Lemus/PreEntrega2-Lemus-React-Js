import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NavBar from '../components/NavBar/NavBar'
import Products from '../pages/Products'
import ItemDetailContainer from '../pages/ItemDetailContainer'

const MainRauter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/products' element={<Products/>} />
                <Route exact path='/products/:productsID' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MainRauter