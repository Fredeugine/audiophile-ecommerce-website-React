export function CartBtn({addC,setCartInc,cartInc,setCartInc59,cartIn59}){
    return (
        <div className={addC ? 'cartDiv' : 'None'} >
            <div className='cr'>CART(prop) <span className='rm'>Remove all</span></div>

            <div className='cartFl'>
               <ImgInCart setCartInc={setCartInc} cartInc={cartInc} price='$ 2,999' pName='XX99 MK II' src='assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart setCartInc={setCartInc59} cartInc={cartIn59} pName='XX59' price='$899' src='assets/product-xx59-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart setCartInc={setCartInc} cartInc={cartInc} pName='YX1' price='$ 599' src='assets/product-yx1-earphones/mobile/image-product.jpg'></ImgInCart>
            </div>

            <div className='cartFl'>
                <div className='cr'><span>TOTAL</span><span>$ 5,396</span></div>
                <button className='seePr'>CHECKOUT</button>
            </div>
        </div>
    )
}
function ImgInCart(props){
    return(
        <div className='cr'>
            <span><img className='cartImgs' src={props.src}/></span>
            <span className='cpName'>
                    <span>{props.pName}</span>
                    <span className='rm'>{props.price}</span>
                </span>
            <ProductInCart cartInc={props.cartInc} setCartInc={props.setCartInc}></ProductInCart>

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
