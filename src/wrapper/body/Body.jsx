import React from "react";
import './Body.css';
import Button from '../../components/button/Button'
import Circle from '../../components/circle/Circle'
import iconLeft from './iconLeft.svg';
import iconRight from './iconRight.png';
import arrow from '../../components/circle/arrow.svg';

const Body = (props) => {

    return (
        <>
            <div className="body_container">
                <div className="block_text">
                    <div className="high_text_container">
                        <div className="high_text">SIRIUS DAO</div>
                        <div className="high_text">$1,07 <span className="text">
                        <img src={arrow} className="arrow_percent" alt="arrow" />2.5%</span></div>
                    </div>
                    <div className="text">DAO hedge fund SiriusDAO utilizes various strategies: from investments in IDO to classical trading, farming, stacking, etc.</div>

                </div>

                <div className="adaptive_container">

                    <div className="info_container border_radius_right">
                        <div className="smole_text text_left">Requested Amount</div>
                        <div className="info_icon">
                            <img src={iconLeft} className="info_img" alt="iconLeft" />
                        </div>
                        <div className="info_text">
                            <div className="text_top">SR DAO</div>
                            <div className="text_bottom wide">SIRIUS DAO</div>
                        </div>
                        <div className="info_number">0</div>
                    </div>

                    <div className="info_container flexRevers border_radius_Left info_bgcolor">
                        <div className="smole_text text_right">Offered Amount</div>
                        <div className="info_icon">
                            <img src={iconRight} className="info_img" alt="iconLeft" />
                        </div>
                        <div className="info_text">
                            <div className="text_top">USDT</div>
                            <div className="text_bottom wide">TETHER</div>
                        </div>
                        <div className="info_number">0</div>
                    </div>
                    <Circle/>  

                    </div>
                </div>
                <div className="button_container">
                    <Button  text="DEPOSIT" />
                    <Button text="WITHDRAW" />
                </div>

            
        </>
    )
}

export default Body