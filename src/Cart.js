import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

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
                        alert('😧Cart is Empty God')
                    }


                }}>CHECKOUT</button>
            </div>
        </div>
    )
}


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
export function NavStay({setearP,setzx7,setzx9,set599,setM,setP,setHDTF,earCatt,setIsVisible2,spkTP,checkout,setIsVisible,setaddC,isVisible,cartNum,earCat,hdTF,spkCat,}) {

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
                         <Link to={'/'}><span onClick={()=>{
                              spkTP(false)
                              setIsVisible2(false)
                              earCatt(false)
                              setHDTF(false)
                              setP(false)
                              setM(false)
                              set599(false)
                              setzx9(false)
                              setzx7(false)
                              setearP(false)
                         }}>Home</span></Link>
                             <Link to={'headphones'}><span onClick={()=>{
                               setIsVisible2(false)
                               setHDTF(true)
                               spkTP(false)
                               earCatt(false)
                               setP(false)
                               setM(false)
                               set599(false)
                               setzx9(false)
                               setzx7(false)
                               setearP(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth' // Enables smooth scrolling animation
                                });
                             }}>Headphones</span></Link>
                           <Link to={'speakers'}><span onClick={()=>{
                               spkTP(true)
                               setIsVisible2(false)
                               earCatt(false)
                               setHDTF(true)
                               setP(false)
                               setM(false)
                               set599(false)
                               setzx9(false)
                               setzx7(false)
                               setearP(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth' // Enables smooth scrolling animation
                                });
                           }}>Speakers</span></Link>
                            <Link to={'earphones'}><span onClick={()=>{
                               setHDTF(true)
                               earCatt(true)
                               spkTP(false)
                               setIsVisible2(false)
                               setP(false)
                               setM(false)
                               set599(false)
                               setzx9(false)
                               setzx7(false)
                               setearP(false)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth' // Enables smooth scrolling animation
                                });
                            }}>Earphones</span></Link>
                        </span>
                        <span>
          <img onClick={handleCart} id={'cartBtn'} className='cartBtn' alt="Cart button" src="images/shared/desktop/icon-cart.svg"/>
                            <span id={'cartNum'} className='cartNum'>{cartNum}</span>
        </span>
                    </div>
                </div>
            </div>
                <div className={checkout ? 'None' : null}>
    <span className={hdTF || spkCat || earCat ? 'hh' : 'None'}>
                    {spkCat ? 'Speakers' : earCat ? 'Earphones' : hdTF ? 'headphones' : ''}
                </span>
                </div>
    </>
        )
}

