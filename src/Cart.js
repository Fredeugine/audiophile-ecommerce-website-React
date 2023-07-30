import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";




export function ProductInCart({cartInc,setCartInc}){
    function cartCalc(){
        setCartInc(cartInc + 1)
    }
    function subCalc(){
        setCartInc(cartInc - 1)
    }

    return (

            <span id={'plusAndMinus'} className='plusAndMinus'>
                        <span className='subtr' onClick={subCalc}>-</span>
                        <span className='cartCount'>{cartInc}</span>
                        <span className='add' onClick={cartCalc}>+</span>

            </span>
    )
}
export function NavStay({checkout,setIsVisible,setaddC,isVisible,cartNum,earCat,hdTF,spkCat,}) {

    const [scrolLUp, setscrollUp] = useState(true)
    function handleClick() {
        setIsVisible(function (prevState) {
            return !prevState
        });
    }

    function handleCart() {
        setaddC(function (prevState) {
            return !prevState
        })
    }
    var prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            // Scrolling up
            setscrollUp(true)
        } else {
            // Scrolling down

            if (currentScrollPos > 1200) {
                setscrollUp(false)
            }
        }
        prevScrollPos = currentScrollPos;
    };



        return (
            <>
            <div id={'buttonsDiv'} className={checkout ? 'None' : "buttonsDiv"}>
                <div id={scrolLUp ? "topButtonsDiv1": !scrolLUp ? 'topButtonsDiv2' : null} className={scrolLUp ? "topButtonsDiv1": !scrolLUp ? 'topButtonsDiv2' : null}>
                    <div id={'topButtons'} className="topButtons">
        <span>
          {" "}
            <img
                id={isVisible ? 'hamburg' : 'hamburger'}
                className={isVisible ? 'hamburg' : 'hamburger'}
                onClick={handleClick}
                alt="icon-hamburger"
                src={"images/shared/tablet/icon-hamburger.svg"}
            />

        </span>
                        <span>
          <img id={'blue'} className='blue' alt='Logo"' src="images/shared/desktop/logo.svg"/>
        </span>
                        <span id={'tpNavBtns'} className='tpnavBtns'>
                           <span>Home</span>
                            <span>Headphones</span>
                            <span>Speakers</span>
                            <span>Earphones</span>
                        </span>
                        <span>
          <img onClick={handleCart} id={'cartBtn'} className='cartBtn' alt="Cart button" src="images/shared/desktop/icon-cart.svg"/>
                            <span id={'cartNum'} className='cartNum'>{cartNum}</span>
        </span>
                    </div>
                </div>
            </div>
    <span className={hdTF || spkCat || earCat ? 'hh' : 'None'}>
                    {spkCat ? 'Speakers' : earCat ? 'Earphones' : hdTF ? 'headphones' : ''}
                </span>
    </>
        )
}

