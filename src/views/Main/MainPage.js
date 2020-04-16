import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header/Header.js';
import HeaderLinks from '../../components/Header/HeaderLinks.js';
import Footer from '../../components/Footer/Footer';

import AboutPage from "../AboutPage/AboutPage.js";
import HomePage from "../HomePage/HomePage.js";

import ProductPage from '../ProductPage/ProductPage.js';


const MainPage = () => {
    return (
        <div>
            <Header
                color="white"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }} />
            <Footer />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/our-product" component={ProductPage}/>
        </div>
    )
}

export default MainPage;