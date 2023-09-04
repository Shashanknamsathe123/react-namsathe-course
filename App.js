import React from "react";
import ReactDOM from "react-dom/client";
import index from './'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo1" src="https://www.clipartmax.com/png/middle/112-1129793_healthy-food-logo-png.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurantcard = ({resName, cuisine}) => {
    return (
        <div className="res-card">
            <img alt="res-logo" className="reslogo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/386ad114b217ec3b0f8d354dbab54186" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.3 stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <Restaurantcard resName="Meghana Foods" cuisine="Biriyani, North Indian, Asian"/>
                <Restaurantcard resName="Kritunga Foods" cuisine="Biriyani, South Indian, Asian"/>
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)