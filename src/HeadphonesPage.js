import React, {useState} from "react";
import {DeviceSection, ProductsSection} from "./Categories menu";

export function HeadphonesPage(){
    const [isVisible, setIsVisible] = useState(false);
    const [hdTF, sethdTF] = useState(true);
    const [spkCat, setSpkCat] = useState(false);
    const [earCat, setEarCat] = useState(false);
    const [prD, setPrD] = useState(false);
    const [m1, setM1] = useState(false);
    const [x59, set59] = useState(false);
    const [xzx9, setZx9] = useState(false);
    const [xzx7, setZx7] = useState(false);
    const [earP, setEarP] = useState(false);
    const [addC, setaddC] = useState(false);
    const [cartNum, setcartNum] = useState(false);
    const [carti, setcarti] = useState(0);
    const [cartIncr59Crt, setCartInc59Crt] = useState(0);
    const [cartIncr59, setCartInc59] = useState(0);
    const [gtotal,setgTotal] = useState(1098+50);
    const [lst1, setlst1] = useState([]);
    const [total,setTotal] = useState(0);
    const [cartIncrCrt, setCartIncCrt] = useState(0);
    const [cartIncr, setCartInc] = useState(0);
    const [mk2, setmk2] = useState(0);
    const [mk2Crt, setmk2Crt] = useState(0);
        return(
            <>
                <ProductsSection
                    setaddC={setaddC}
                    lst1={lst1}
                    setlst1={setlst1}
                    total={total}
                    setTotal={setTotal}
                    setcarti={setcarti}
                    cartIncCrt={cartIncrCrt}
                    setCartIncCrt={setCartIncCrt}
                    prd ={prD}
                    setcartNumm={setcartNum}
                    cartInc = {cartIncr}
                    setCartInc={setCartInc}
                    setearP = {setEarP}
                    HDTF={hdTF}
                    setHDTF={sethdTF}
                    setIsVisible2={setIsVisible}
                    spkTP ={setSpkCat}
                    earCatt = {setEarCat}
                    setP={setPrD}
                    setM={setM1}
                    set599={set59}
                    setzx9={setZx9}
                    setzx7 ={setZx7}
                    prop4={!prD ? 'None' : 'xx99Div2P'}
                    prop13='1x'
                    prop14='Travel Bag'

                />

                <ProductsSection
                    setaddC={setaddC}
                    lst1={lst1}
                    setlst1={setlst1}
                    total={total}
                    setTotal={setTotal}
                    setcarti={setcarti}
                    setCartInc59Crt={setCartInc59Crt}
                    cartIn59Crt={cartIncr59Crt}
                    x59 ={x59}
                    setcartNumm={setcartNum}
                    setCartInc59={setCartInc59}
                    cartIn59={cartIncr59}
                    setearP = {setEarP}
                    HDTF={hdTF}
                    setHDTF={sethdTF}
                    setIsVisible2={setIsVisible}
                    spkTP ={setSpkCat}
                    earCatt = {setEarCat}
                    setP={setPrD}
                    setM={setM1}
                    set599={set59}
                    setzx9={setZx9}
                    setzx7 ={setZx7}
                    prop1='images/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                    prop2={(
                        <React.Fragment>
                            XX59<br/>Headphones
                        </React.Fragment>
                    )}
                    prop4={!x59 ? 'None' : 'xx99Div2P'}
                    prop5='$ 899'
                    prop6='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
                    prop17='images/product-xx59-headphones/mobile/image-gallery-1.jpg'
                    prop18='images/product-xx59-headphones/mobile/image-gallery-2.jpg'
                    prop19='images/product-xx59-headphones/mobile/image-gallery-3.jpg'
                    prop20='images/MYSVGS/m2.svg'
                    prop22='images/MYSVGS/headphones.svg'
                    prop21='XX99 MARK II'
                    prop23='XX99 MARK I'

                />
                <ProductsSection
                    setaddC={setaddC}
                    lst1={lst1}
                    setlst1={setlst1}
                    total={total}
                    setTotal={setTotal}
                    setcarti={setcarti}
                    m1={m1}
                    setmk2Crt={setmk2Crt}
                    setmk2={setmk2}
                    mk2={mk2}
                    setcartNumm={setcartNum}
                    setearP = {setEarP}
                    HDTF={hdTF}
                    setHDTF={sethdTF}
                    setIsVisible2={setIsVisible}
                    spkTP ={setSpkCat}
                    earCatt = {setEarCat}
                    setP={setPrD}
                    setM={setM1}
                    set599={set59}
                    setzx9={setZx9}
                    setzx7 ={setZx7}
                    prop1='images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
                    prop2='XX99 Mark I Headphones'
                    prop4={!m1 ? 'None' : 'xx99Div2P'}
                    prop5='$ 1,750'
                    prop6='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
                    prop17='images/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
                    prop18='images/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
                    prop19='images/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
                    prop20='images/MYSVGS/m2.svg'
                    prop21='XX99 MARK II'
                />
                <div className={spkCat || earCat || prD || m1 || x59 ? 'None' : 'xxMa3'}>
                    <DeviceSection
                        setearP = {setEarP}
                        HDTF={hdTF}
                        setHDTF={sethdTF}
                        setIsVisible2={setIsVisible}
                        spkTP ={setSpkCat}
                        earCatt = {setEarCat}
                        setP={setPrD}
                        setM={setM1}
                        set599={set59}
                        setzx9={setZx9}
                        setzx7 ={setZx7}

                        prop4={hdTF ? 'xx99Div2': 'None' && isVisible ? 'xx99Div2x': 'None'}></DeviceSection>

                    <DeviceSection
                        setearP = {setEarP}
                        HDTF={hdTF}
                        setHDTF={sethdTF}
                        setIsVisible2={setIsVisible}
                        spkTP ={setSpkCat}
                        earCatt = {setEarCat}
                        setP={setPrD}
                        setM={setM1}
                        set599={set59}
                        setzx9={setZx9}
                        setzx7 ={setZx7}
                        setM11={setM1}
                        prop1='images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
                        prop2='XX99 Mark I Headphones'
                        prop3='As the gold standard for headphones,
                    the classic XX99 Mark I offers detailed and accurate audio
                    reproduction for audiophiles, mixing engineers,
                    and music aficionados alike in studios and on the go.'
                        prop4={hdTF ? 'xx99Div2': 'None'}
                    ></DeviceSection>

                    <DeviceSection
                        setearP = {setEarP}
                        HDTF={hdTF}
                        setHDTF={sethdTF}
                        setIsVisible2={setIsVisible}
                        spkTP ={setSpkCat}
                        earCatt = {setEarCat}
                        setP={setPrD}
                        setM={setM1}
                        set599={set59}
                        setzx9={setZx9}
                        setzx7 ={setZx7}

                        prop1='images/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                        prop2={(
                            <React.Fragment>
                                XX59<br/>Headphones
                            </React.Fragment>
                        )}
                        prop3='Enjoy your audio almost anywhere and customize
                    it to your specific tastes with the XX59 headphones. The stylish yet
                    durable versatile wireless headset is a brilliant
                    companion at home or on the move.'
                        prop4={hdTF ? 'xx99Div2': 'None'}
                    ></DeviceSection>
                </div>
            </>
        )
}
