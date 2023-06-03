import './App.css';
import {ProductInCart} from "./Cart";
import {useState} from "react";
import {CSSTransition} from "react-transition-group";
import 'animate.css';

export function CategoriesMenu(props) {

    return (

        <div className={ props.isVisible ? 'menuOfHam' : 'trans'}>
            <div  className="soundDevices">
                <div className="headphonesDiv">
            <span>
              <img className="hdMenu" src="assets/MYSVGS/headphones.svg" />
            </span>
                    <span className="proT">Headphones</span>
                    <span className="shop" onClick={() =>{
                        props.setIsVisible2(false)
                        props.setHDTF(true)
                        props.spkTP(false)
                        props.earCatt(false)
                        props.setP(false)
                        props.setM(false)
                        props.set599(false)
                        props.setzx9(false)
                        props.setzx7(false)
                        props.setearP(false)

                    }}>
              <span className="shopFnt">Shop</span>{" "}
                        <img src="assets/MYSVGS/rightarr.svg" />
            </span>
                </div>
                <div className="speakersDiv">
            <span>
              <img className="spkMenu" src="assets/MYSVGS/Mspeaker.svg" />
            </span>
                    <span className="proT">Speakers</span>
                    <span className="shop" onClick={() =>{
                        props.spkTP(true)
                        props.setIsVisible2(false)
                        props.earCatt(false)
                        props.setHDTF(true)
                        props.setP(false)
                        props.setM(false)
                        props.set599(false)
                        props.setzx9(false)
                        props.setzx7(false)
                        props.setearP(false)
                    }}>
              <span className="shopFnt" >Shop</span>{" "}
                        <img src="assets/MYSVGS/rightarr.svg" />
                    </span>
                </div>
                <div className="earphonesDiv">
            <span>
              <img className="earMenu" src="assets/MYSVGS/Mearphones.svg" />
            </span>
                    <span className="proT">Earphones</span>
                    <span className="shop" onClick={()=>{
                        props.setHDTF(true)
                        props.earCatt(true)
                        props.spkTP(false)
                        props.setIsVisible2(false)
                        props.setP(false)
                        props.setM(false)
                        props.set599(false)
                        props.setzx9(false)
                        props.setzx7(false)
                        props.setearP(false)
                    }}>
             <span className="shopFnt">Shop</span>{" "}
                        <img src="assets/MYSVGS/rightarr.svg" />
                    </span>
                </div>
                <div className='bodyDiv'></div>
            </div>
        </div>

    );
}


export function DeviceSection(props){

    return(
        <div className={props.prop4}>
             <button  className={props.prop1 === 'assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg' || props.prop1 === 'assets/product-yx1-earphones/mobile/image-category-page-preview.jpg' || props.prop1 === 'assets/product-zx9-speaker/mobile/image-category-page-preview.jpg' ? 'hdBack' : 'None'} onClick={()=>{
                 props.spkTP(false)
                 props.setIsVisible2(false)
                 props.earCatt(false)
                 props.setHDTF(false)
                 props.setP(false)
                 props.setM(false)
                 props.set599(false)
                 props.setzx9(false)
                 props.setzx7(false)
                 props.setearP(false)
             }}>Home</button>
            <div className='xx92pointer'>
                <img
                    className="xx992"
                    src={props.prop1}
                    onClick={()=>{
                        if (props.prop2 === 'XX99 Mark II Headphones'){
                            props.setP(true)
                        }
                        if (props.prop2 === 'XX99 Mark I Headphones') {
                            props.setM11(true)
                        }
                        if (props.prop1 ==='assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                        ){
                            props.set599(true)
                        }
                        if (props.prop1 ==='assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'){
                            props.setzx9(true)
                        }
                        if (props.prop1 ==='assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'){
                            props.setzx7(true)
                        }
                        if (props.prop1 ==='assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'){
                            props.setearP(true)
                        }



                    }}
                />
            </div>
            <div className="xx992Inner2">
                <span className="np">New Product</span>
                <span className="xx99Name">{props.prop2}</span>
                <span className="xx992Inner2Text">{props.prop3}</span>
                <button className="seePr" onClick={()=>{
                    if (props.prop2 === 'XX99 Mark II Headphones'){
                        props.setP(true)
                    }
                    if (props.prop2 === 'XX99 Mark I Headphones') {
                        props.setM11(true)
                    }
                    if (props.prop1 ==='assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                    ){
                        props.set599(true)
                    }
                    if (props.prop1 ==='assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'){
                        props.setzx9(true)
                    }
                    if (props.prop1 ==='assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'){
                        props.setzx7(true)
                    }
                    if (props.prop1 ==='assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'){
                        props.setearP(true)
                    }
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth' // Enables smooth scrolling animation
                    });
                }} >SEE PRODUCT</button>
            </div>
        </div>
    )
}
DeviceSection.defaultProps = {
    prop1: 'assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
    prop2: 'XX99 Mark II Headphones',
    prop3: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'
};


export function ProductsSection({setaddC,setlst1,lst1,total,setTotal,setcarti,xzx9,xzx7,m1,setczx9Crt,setczx7Crt,setmk2Crt,setmk2,mk2,setczx9,czx9,setczx7,czx7,earP,setCartIncx1Crt,setCartInc59Crt,setCartIncCrt,x59,prd,HDTF,setCartIncx1,cartIncx1,cartIn59,setCartInc59,setcartNumm,prop1,prop2,prop3,prop4,prop5,prop6,prop7,prop8,prop9,cartInc,prop10,prop11,prop12,prop13,prop14,prop15,prop16,prop17,prop18,prop19,prop20,prop21,prop22,prop23,prop24,prop25,setCartInc,setIsVisible2,setHDTF,spkTP,earCatt,setP,setM,set599,setzx9,setzx7,setearP}){




    function addToCart() {
        var inputString = prop5;
        var numericString = '';

        for (var i = 0; i < inputString.length; i++) {
            var character = inputString.charAt(i);
            if (!isNaN(character) && character !== ' ') {
                numericString += character;
            }
        }

        var integerValue = parseInt(numericString);


        if (prd) {

            setcartNumm(function (prevState) {
                return prevState + cartInc
            })
            setCartIncCrt(function (prevState) {

                return prevState + cartInc
            })
            setcarti(function (prevState){
                return prevState + 1
            })
            setTotal(function (prevState){
                return prevState + integerValue * cartInc
            })
            if (lst1.length < 1) {
                setlst1(['a']);
            }


        }
        if (x59) {
            setcartNumm(function (prevState) {
                return prevState + cartIn59
            })
            setCartInc59Crt(function (prevState) {
                return prevState + cartIn59
            })
            setcarti(function (prevState){
                return prevState + 1
            })
            setTotal(function (prevState){
                return prevState + integerValue * cartIn59
            })
            if (lst1.length < 1) {
                setlst1(['b']);
            }

        }
        if(earP){
            setcartNumm(function (prevState) {
                return prevState + cartIncx1
            })
            setCartIncx1Crt(function (prevState) {
                return prevState + cartIncx1
            })
            setcarti(function (prevState){
                return prevState + 1
            })
            setTotal(function (prevState){
                return prevState +  integerValue * cartIncx1
            })
            if (lst1.length < 1) {
                setlst1(['c']);
            }
        }
        if(xzx7){
            setcartNumm(function (prevState) {
                return prevState + czx7
            })
            setczx7Crt(function (prevState) {
                return prevState + czx7
            })
            setcarti(function (prevState){
                return prevState + 1
            })
            setTotal(function (prevState){
                return prevState +  integerValue * czx7
            })
            if (lst1.length < 1) {
                setlst1(['d']);
            }

        }
        if(xzx9){
            setcartNumm(function (prevState) {
                return prevState + czx9
            })
            setczx9Crt(function (prevState) {
                return prevState + czx9
            })
            setcarti(function (prevState){
                return prevState + 1
            })
            setTotal(function (prevState){
                return prevState +  integerValue * czx9
            })
            if (lst1.length < 1) {
                setlst1(['e']);
            }

        }
        if(m1){
            setcartNumm(function (prevState) {
                return prevState + mk2
            })
            setmk2Crt(function (prevState) {
                return prevState + mk2
            })
            setcarti(function (prevState){
                return prevState + 1
            })
            setTotal(function (prevState){
                return prevState +  integerValue * mk2
            })
            if (lst1.length < 1) {
                setlst1(['f']);
            }

        }
    }

    return(

        <div className={prop4}>
            <button  className='hdBack' onClick={()=>{
                if ( prop5 ==='$2,999' || prop5 === '$ 1,750' || prop5 === '$ 899'){
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

                }
                if (prop5 === '$ 4,500' || prop5 === '$ 3,500') {
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
                }
                if (prop5 === '$ 599') {
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
                }
            }}>Go Back</button>
            <div>
                <img
                    className="xx992"
                    src={prop1}
                />
            </div>
            <div className="xx992Inner2P">
                <span className="np">New Product</span>
                <span className="xx99Name">{prop2}</span>
                <span className="xx992Inner2TextP">{prop3}</span>

                <span className='price'>{prop5}</span>
                <div className='spCa'>
                    <ProductInCart setCartInc = {prd ? setCartInc: x59 ? setCartInc59: earP ? setCartIncx1: xzx7 ? setczx7: xzx9 ? setczx9: m1 ? setmk2 : null}
                                   cartInc={prd ? cartInc: x59 ? cartIn59: earP ? cartIncx1: xzx7 ? czx7: xzx9 ? czx9: m1 ? mk2 : null}></ProductInCart>
                    <button className="seePrP" onClick={()=>{
                        if(cartInc > 0){
                            addToCart()
                            setaddC(true)
                            setTimeout(function (){
                                setaddC(false)
                            },2800)
                        }

                    }}>ADD TO CART</button>
                </div>

                <div className='fea'>Features</div>
                <div className='feaText'>{prop6}</div>
                <div className='fea'>In the box</div>
                <div className='lists'>
                    <ol className='oList'>
                        <li className='listsInner'>
                            <span className='orr'>{prop7}</span><span className='ll'>{prop8}</span>
                        </li>
                        <li className='listsInner'>
                            <span className='orr'>{prop9}</span><span className='ll'>{prop10}</span>
                        </li>
                        <li className='listsInner'>
                            <span className='orr'>1x</span><span className='ll'>User Manual</span>
                        </li>
                        <li className='listsInner'>
                            <span className='orr'>{prop11}</span><span className='ll'>{prop12}</span>
                        </li>
                        <li className='listsInner'>
                            <span className='orr'>{prop13}</span><span className='ll'>{prop14}</span>
                        </li>
                        <li className='listsInner'>
                            <span className='orr'>{prop15}</span><span className='ll'>{prop16}</span>
                        </li>
                    </ol>
                </div>
            </div>
            <div>
                <div className='btPics'>
                    <img className='Pic1'  src={prop17}/>
                   <img  className='Pic1' src={prop18}/>
                    <img className='Pic1' src={prop19}/>
                </div>
                <div className='simPr'>
                    <span className='fea'>YOU MAY ALSO LIKE</span>
                    <div className='btmSec'>
                        <div className='btmDiv'>
                            <span className='btmPic3'> <img src={prop20}/></span>
                            <span className='btmInn'>
                                <span className='fea'>{prop21}</span>
                                <button className='seePr' onClick={()=>{
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'auto' // Enables smooth scrolling animation
                                    });
                                }}>SEE PRODUCT</button>
                            </span>
                        </div>
                        <div className='btmDiv'>
                            <span className='btmPic3'> <img src={prop22}/></span>
                            <span className='btmInn'>
                                <span className='fea'>{prop23}</span>
                                <button className='seePr'>SEE PRODUCT</button>
                            </span>
                        </div>
                        <div className='btmDiv'>
                            <span className='btmPic3'> <img src={prop24}/></span>
                            <span className='btmInn'>
                                <span className='fea'>{prop25}</span>
                                <button className='seePr' onClick={()=>{
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'auto' // Enables smooth scrolling animation
                                    });
                                }}>SEE PRODUCT</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
ProductsSection.defaultProps = {
    prop1: 'assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg',
    prop2: 'XX99 Mark II Headphones',
    prop3: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    prop5:'$2,999',
    prop6:'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n' +
        '\n' +
        'The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
    prop7:'1x',
    prop8:'Headphone Unit',
    prop9:'2x',
    prop10:'Replacement Earcups',
    prop11:'1x',
    prop12:'3.5mm 5m Audio Cable',
    prop13:'',
    prop14:'',
    prop15:'',
    prop16:'',
    prop17:'assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg',
    prop18:'assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg',
    prop19:'assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg',
    prop20:'assets/MYSVGS/headphones.svg',
    prop21:'XX99 MARK I',
    prop22:'assets/MYSVGS/xx59.svg',
    prop23:'XX59',
    prop24:'assets/MYSVGS/Mspeaker.svg',
    prop25:'ZX9 SPEAKER'
};
export function ScrollUp(){
    return window.scrollTo({
        top: 0,
        behavior: 'auto' // Enables smooth scrolling animation
    });
}



