import React from "react";
import {ProductInCart} from "./Cart";

export function Navbar(){

}
export function CartBtn({setcartnum,setCheckout,setTotal,total,carti,setcarti,mk2Crt,czx9Crt,setczx7Crt,setmk2Crt,setczx9Crt,czx7Crt,cartIncx1Crt,setCartIncx1Crt,setCartIncCrt,cartIncCrt,cartIn59Crt,setCartInc59Crt,setCartIncx1,cartIncx1,addC,setCartInc,cartInc,setCartInc59,cartIn59}){

    function ImgInCart(props){

        return(
            <div className={props.class}>
                <span><img className='cartImgs' src={props.src}/></span>
                <span className='cpName'>
                    <span>{props.pName}</span>
                    <span className='rm'>{props.price}</span>
                </span>
                <ProductInCart cartInc={props.cartInc} setCartInc={props.setCartInc}></ProductInCart>

            </div>
        )

    }

    return (
        <div id={addC ? 'cartDiv' : 'none1'} className={addC ? 'cartDiv' : 'none1'} >
            <div className='cr'>CART({carti}) <span className='seePr' onClick={()=>{
                setmk2Crt(0)
                setCartIncCrt(0)
                setCartInc59Crt(0)
                setCartIncx1Crt(0)
                setczx7Crt(0)
                setczx9Crt(0)
                setcarti(0)
                setTotal(0)
                setcartnum(0)
            }}>Remove all</span></div>

            <div className='cartFl'>
                <ImgInCart  class={cartIncCrt > 0 ? 'cr' : 'None'  }  setCartInc={setCartIncCrt} cartInc={cartIncCrt} price='$ 2,999'  pName='XX99 MK II' src='images/product-xx99-mark-two-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={cartIn59Crt > 0 ? 'cr' : 'None'  } setCartInc={setCartInc59Crt} cartInc={cartIn59Crt} pName='XX59' price='$899' src='images/product-xx59-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={cartIncx1Crt > 0 ? 'cr' : 'None'  } setCartInc={setCartIncx1Crt} cartInc={cartIncx1Crt} pName='YX1' price='$ 599' src='images/product-yx1-earphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={czx7Crt > 0 ? 'cr' : 'None'  } setCartInc={setczx7Crt} cartInc={czx7Crt} pName='ZX7' price='$ 3,500' src='images/product-zx7-speaker/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart class={czx9Crt > 0 ? 'cr' : 'None'  }  setCartInc={setczx9Crt} cartInc={czx9Crt} pName='ZX9' price='$ 4,500' src='images/product-zx9-speaker/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart class={mk2Crt > 0 ? 'cr' : 'None'  } setCartInc={setmk2Crt} cartInc={mk2Crt} pName='XX99 MARK I' price='$ 1,750' src='images/product-xx99-mark-one-headphones/tablet/image-product.jpg'></ImgInCart>

            </div>

            <div className='cartFl'>
                <div className='cr'><span className='ttl'>TOTAL</span><span>$ {total}</span></div>
                <button className='seePr' onClick={()=>{
                    if (carti > 0) {
                        setCheckout(function (prevState){
                            return !prevState
                        })
                    }
                    else {
                        alert('😧Cart is Empty')
                    }


                }}>CHECKOUT</button>
            </div>
        </div>
    )
}

export function Footer(){
    return (
        <>
            <div id={'footerSec1'} className="footerSec1">
                <div id={'manImage'} className="manImage" />
                <div id={"footerSec1Inner2"} className="footerSec1Inner2">
                    Bringing you the <span>best</span> audio gear
                </div>
                <div id={"footerSec1Inner3"} className="footerSec1Inner3">
                    Located at the heart of New York City, Audiophile is the premier store
                    for high-end headphones, earphones, speakers, and audio accessories. We
                    have a large showroom and luxury demonstration rooms available for you
                    to browse and experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the best place
                    to buy your portable audio equipment.
                </div>
            </div>
            <div id={'footerSec2'} className="footerSec2">
                <span id={'orDsh'} className={'orDsh'}></span>
                <div id={'in1'} className={'in1'}>
                    <div id={'aud'} className="aud">
                        <img alt='Logo"' src="images/shared/desktop/logo.svg" />
                    </div>
                    <div id={'footerSec2Inner2'} className="footerSec2Inner2">
                        <span>Home</span>
                        <span>Headphones</span>
                        <span>Speakers</span>
                        <span>Earphones</span>
                    </div>
                </div>
                <div id={'in2'} className={'in2'}>
                    <p id={"footerSec2P"} className="footerSec2P">
                        Audiophile is an all-in-one stop to fulfill your audio needs. We're a
                        small team of music lovers and sound specialists who are devoted to
                        helping you get the most out of personal audio. Come and visit our demo
                        facility - we’re open 7 days a week.
                    </p>
                </div>
                <div id={'in3'} className={'in3'}>
                    <p id={'footerSec2P2'} className="footerSec2P2">Copyright 2021. All Rights Reserved</p>
                    <div id={"SocialMediaLinks"} className="SocialMediaLinks">
                        <img src="images/shared/desktop/icon-facebook.svg" />
                        <img src="images/shared/desktop/icon-twitter.svg" />
                        <img src="images/shared/desktop/icon-instagram.svg" />
                    </div>
                </div>
            </div>
        </>
    )
}
