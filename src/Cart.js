import {useEffect, useState} from "react";

export function CartBtn({carti,setcarti,mk2Crt,czx9Crt,setczx7Crt,setmk2Crt,setczx9Crt,czx7Crt,cartIncx1Crt,setCartIncx1Crt,setCartIncCrt,cartIncCrt,cartIn59Crt,setCartInc59Crt,setCartIncx1,cartIncx1,addC,setCartInc,cartInc,setCartInc59,cartIn59}){

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
        <div className={addC ? 'cartDiv' : 'None'} >
            <div className='cr'>CART({carti}) <span className='seePr' onClick={()=>{
                setmk2Crt(0)
                setCartIncCrt(0)
                setCartInc59Crt(0)
                setCartIncx1Crt(0)
                setczx7Crt(0)
                setczx9Crt(0)
                setcarti(0)
            }}>Remove all</span></div>

            <div className='cartFl'>
               <ImgInCart  class={cartIncCrt > 0 ? 'cr' : 'None'  }  setCartInc={setCartIncCrt} cartInc={cartIncCrt} price='$ 2,999'  pName='XX99 MK II' src='assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={cartIn59Crt > 0 ? 'cr' : 'None'  } setCartInc={setCartInc59Crt} cartInc={cartIn59Crt} pName='XX59' price='$899' src='assets/product-xx59-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={cartIncx1Crt > 0 ? 'cr' : 'None'  } setCartInc={setCartIncx1Crt} cartInc={cartIncx1Crt} pName='YX1' price='$ 599' src='assets/product-yx1-earphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={czx7Crt > 0 ? 'cr' : 'None'  } setCartInc={setczx7Crt} cartInc={czx7Crt} pName='ZX7' price='$ 3,500' src='assets/product-zx7-speaker/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart class={czx9Crt > 0 ? 'cr' : 'None'  }  setCartInc={setczx9Crt} cartInc={czx9Crt} pName='ZX9' price='$ 4,500' src='assets/product-zx9-speaker/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart class={mk2Crt > 0 ? 'cr' : 'None'  } setCartInc={setmk2Crt} cartInc={mk2Crt} pName='XX99 MARK I' price='$ 1,750' src='assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'></ImgInCart>

            </div>

            <div className='cartFl'>
                <div className='cr'><span>TOTAL</span><span>3234</span></div>
                <button className='seePr'>CHECKOUT</button>
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

            <span className='plusAndMinus'>
                        <span className='subtr' onClick={subCalc}>-</span>
                        <span className='cartCount'>{cartInc}</span>
                        <span className='add' onClick={cartCalc}>+</span>

            </span>
    )
}
