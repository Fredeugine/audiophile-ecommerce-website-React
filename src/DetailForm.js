import {useEffect, useState} from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {Link} from "react-router-dom";
export function ImgInCart(props){

    return(
        <div>
            <div className={props.class}>
                <span><img className='cartImgs' src={props.src}/></span>
                <span className='cpName'>
                    <span>{props.pName}</span>
                    <span className='rm'>{props.price}</span>
                </span>
                <span className='rmx'>x{props.cartInc}</span>
            </div>

        </div>
    )
}

export function DetailForm({settku,tku,gtotal,setCheckout,checkout,setTotal,total,carti,setcarti,mk2Crt,czx9Crt,setczx7Crt,setmk2Crt,setczx9Crt,czx7Crt,cartIncx1Crt,setCartIncx1Crt,setCartIncCrt,cartIncCrt,cartIn59Crt,setCartInc59Crt}){
    const [orcir,setorcir]=useState(false)
    const [orcir2,setorcir2]=useState(false)
    const [orcir3,setorcir3]=useState(false)
    const [formValid,setformValid]= useState(false)
    function Summary(){

        return(

            <div className='cartFl'>
                <span className='cr'>SUMMARY</span>
                <ImgInCart  class={cartIncCrt > 0 ? 'cr2' : 'None'  }  setCartInc={setCartIncCrt} cartInc={cartIncCrt} price='$ 2,999'  pName='XX99 MK II' src='images/product-xx99-mark-two-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={cartIn59Crt > 0 ? 'cr2' : 'None'  } setCartInc={setCartInc59Crt} cartInc={cartIn59Crt} pName='XX59' price='$899' src='images/product-xx59-headphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={cartIncx1Crt > 0 ? 'cr2' : 'None'  } setCartInc={setCartIncx1Crt} cartInc={cartIncx1Crt} pName='YX1' price='$ 599' src='images/product-yx1-earphones/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart  class={czx7Crt > 0 ? 'cr2' : 'None'  } setCartInc={setczx7Crt} cartInc={czx7Crt} pName='ZX7' price='$ 3,500' src='images/product-zx7-speaker/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart class={czx9Crt > 0 ? 'cr2' : 'None'  }  setCartInc={setczx9Crt} cartInc={czx9Crt} pName='ZX9' price='$ 4,500' src='images/product-zx9-speaker/mobile/image-product.jpg'></ImgInCart>
                <ImgInCart class={mk2Crt > 0 ? 'cr2' : 'None'  } setCartInc={setmk2Crt} cartInc={mk2Crt} pName='XX99 MARK I' price='$ 1,750' src='images/product-xx99-mark-one-headphones/tablet/image-product.jpg'></ImgInCart>
                <div className='cartFl'>
                    <div className='cr3'><span className='ttl'>TOTAL</span><span>$ {total}</span></div>
                    <div className='cr3'><span className='ttl'>SHIPPING</span><span>$ 50</span></div>
                    <div className='cr3'><span className='ttl'>VAT (INCLUDED)</span><span>$ 1098</span></div>
                    <div className='cr34'><span className='ttl'>GRAND TOTAL</span><span className='gt'>$ {gtotal + total}</span></div>
                    <button type={"submit"} className='seePr' onClick={(event)=>{
                            settku(function (prevState){
                                return !prevState
                            })
                            event.preventDefault()


                    }}>CONTINUE & PAY</button>
                </div>
            </div>

        )
    }
    return(

        <div id={checkout ? 'll' : 'None'} className={checkout ? 'll' : 'None'}>
            <form id={tku ? 'blurr2': 'dForm' }  className={tku ? 'blurr2': 'dForm' }>
                <h1 id={'hh1'} className='hh1'>Checkout</h1>
                <h6 id={'h55'} className='h55'>Billing Details</h6>
                <div id={'f1'} className={'f1'}>
                    <div id={"form-group"}  className="form-group">
                        <label htmlFor={'name'}>Name</label>
                        <input type="text" id="name" placeholder="Alexei Ward" required={true} />
                    </div>
                    <div id={"form-group"} className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" placeholder="alexei@mail.com" required={true} />
                    </div>
                </div>



                <div id={"form-group"} className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="656789034" required={true} />
                </div>
                <h6 id={'h55'} className='h55'>Shipping Info</h6>
                <div id={"form-group"} className="form-group">
                    <label htmlFor="address">Your Address</label>
                    <input type="text" id="address" placeholder="Avenida Navarra" required={true}  />
                </div>
                <div id={'f1'} className={'f1'}>
                    <div id={"form-group"} className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" placeholder="Madrid"  required={true}/>
                    </div>
                    <div id={"form-group"} className="form-group">
                        <label htmlFor="zipcode">ZIP Code</label>
                        <input type="text" id="zipcode" placeholder="10001" required={true} />
                    </div>
                </div>
                <div id={"form-group"} className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" id="country" placeholder="Spain" required={true} />
                </div>

                <h6 id={'h55'} className='h55'>Payment Details</h6>
                <label htmlFor="country">Payment Method</label>
                <div id={"form-groups"}  className="form-groups">
                   <span id={'emon'} className='eMon' onClick={()=>{
                       setorcir(true)
                           setorcir2(false)
                           setorcir3(false)
                   }}>
                       <span className='ycir'><span className={orcir ? 'ycirs' : 'None'}></span></span>
                       <span>Credit Card/ Debit <span>
                           <img className={'ikk'} src='images/MYSVGS/img.png'/>
                       </span></span>
                   </span>

                    <span id={'emon'} className='eMon' onClick={()=>{
                        setorcir2(true)
                            setorcir3(false)
                            setorcir(false)

                    }} >
                        <span  className='ycir'><span className={orcir2 ? 'ycirs' : 'None'}></span></span>
                       <span>Cash on Delivery</span>
                   </span>
                </div>
                <span id={'emon'} className='eMon' onClick={()=>{

                    setorcir3(true)
                    setorcir2(false)
                    setorcir(false)
                }}>
                       <span className='ycir'><span className={orcir3 ? 'ycirs' : 'None'}></span></span>
                       <span>Bizum <span><img className={'ikk'} src='images/MYSVGS/bizum.svg'/></span></span>
                   </span>
                <Summary></Summary>
            </form>
        </div>

    )


}

export function TkuPage({setcartNum,setaddC,settotal,setcarti,setCheckout,earCatt,spkTP,setIsVisible2, setHDTF, setP, setM, set599, setzx9, setzx7,setearP,total,carti,setlst1,lst1,tku,settku,mk2Crt,czx9Crt,setczx7Crt,setmk2Crt,setczx9Crt,czx7Crt,cartIncx1Crt,setCartIncx1Crt,setCartIncCrt,cartIncCrt,cartIn59Crt,setCartInc59Crt}){



    return(

        <div id={tku ? 'tkuPage': 'None'} className={tku ? 'tkuPage': 'None'}>
            <div className='ycirs'><img src='images/MYSVGS/ticked.svg'/></div>
            <div><div id={'tol'} className='tol'>THANK YOU <br/>FOR YOUR ORDER</div>
            <div id={'tols'} className={'tols'}>You will receive an email confirmation shortly.</div></div>
            <div id={'inn'} className={'inn'}>
                    <div id={'inn1'} className={'inn1'}>
                        <ImgInCart  class={lst1[0] === 'a'  ? 'cr2' : 'None'  }  setCartInc={setCartIncCrt} cartInc={cartIncCrt} price='$ 2,999'  pName='XX99 MK II' src='images/product-xx99-mark-two-headphones/mobile/image-product.jpg'></ImgInCart>
                        <ImgInCart  class={lst1[0] === 'b'? 'cr2' : 'None'  } setCartInc={setCartInc59Crt} cartInc={cartIn59Crt} pName='XX59' price='$899' src='images/product-xx59-headphones/mobile/image-product.jpg'></ImgInCart>
                        <ImgInCart  class={lst1[0] === 'c' ? 'cr2' : 'None'  } setCartInc={setCartIncx1Crt} cartInc={cartIncx1Crt} pName='YX1' price='$ 599' src='images/product-yx1-earphones/mobile/image-product.jpg'></ImgInCart>
                        <ImgInCart  class={lst1[0] === 'd' ? 'cr2' : 'None'  } setCartInc={setczx7Crt} cartInc={czx7Crt} pName='ZX7' price='$ 3,500' src='images/product-zx7-speaker/mobile/image-product.jpg'></ImgInCart>
                        <ImgInCart class={lst1[0] === 'e' ? 'cr2' : 'None'  }  setCartInc={setczx9Crt} cartInc={czx9Crt} pName='ZX9' price='$ 4,500' src='images/product-zx9-speaker/mobile/image-product.jpg'></ImgInCart>
                        <ImgInCart class={lst1[0] === 'f' ? 'cr2' : 'None'  } setCartInc={setmk2Crt} cartInc={mk2Crt} pName='XX99 MARK I' price='$ 1,750' src='images/product-xx99-mark-one-headphones/tablet/image-product.jpg'></ImgInCart>
                        <hr id={'hr1'} className='hr1'/>
                        <p className='rm'>and {carti-1} other item(s)</p>
                    </div>

                <div id={'inns'} className='inns'>
                    <div>GRAND TOTAL</div>
                    <span>${total}</span>
                </div>
            </div>
            <Link to={'/'}><button id={'trr'} className={'seePr'} onClick={()=>{
                setcartNum(0)
                setaddC(false)
                setcarti(false)
                setCheckout(false)
                settku(false)
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
                setmk2Crt(0)
                setCartIncCrt(0)
                setCartInc59Crt(0)
                setCartIncx1Crt(0)
                setczx7Crt(0)
                setczx9Crt(0)
                setcarti(0)
                settotal(0)
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth' // Enables smooth scrolling animation
                });
            }}>BACK TO HOME</button></Link>
        </div>

    )
}
