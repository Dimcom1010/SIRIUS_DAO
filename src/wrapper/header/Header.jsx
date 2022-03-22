import React from "react";
import './Header.css';
import Logo from '../logo/Logo'


const Home = (props) => {

    return (
        <>
                <div className="header_container">
                    <div className="header_menu_left">
                        <div className="menu_items">
                            <div className="menu_item">ABOUT US</div>
                            <div className="menu_item">DASHBOARD</div>
                        </div>
                    </div>
                    <Logo></Logo>    
                    <div className="header_menu_rigth">
                    <div className="menu_items">
                            <div className="menu_item">MY ACCOUNT</div>
                            <div className="menu_item">CONNECT WALLET</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home