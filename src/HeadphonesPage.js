import React, {useState} from "react";
import {CategoriesMenu, DeviceSection, ProductsSection} from "./Categories menu";
import {CartBtn, NavStay} from "./Cart";
import {DetailForm} from "./DetailForm";
import {Footer} from "./Components";

export function HeadphonesPage({props}){
    props.sethdTF(true)
        return(
            <>
                <div className={props.checkout ? 'None' : null}>


                <ProductsSection
                    setaddC={props.setaddC}
                    lst1={props.lst1}
                    setlst1={props.setlst1}
                    total={props.total}
                    setTotal={props.setTotal}
                    setcarti={props.setcarti}
                    cartIncCrt={props.cartIncrCrt}
                    setCartIncCrt={props.setCartIncCrt}
                    prd ={props.prD}
                    setcartNumm={props.setcartNum}
                    cartInc = {props.cartIncr}
                    setCartInc={props.setCartInc}
                    setearP = {props.setEarP}
                    HDTF={props.hdTF}
                    setHDTF={props.sethdTF}
                    setIsVisible2={props.setIsVisible}
                    spkTP ={props.setSpkCat}
                    earCatt = {props.setEarCat}
                    setP={props.setPrD}
                    setM={props.setM1}
                    set599={props.set59}
                    setzx9={props.setZx9}
                    setzx7 ={props.setZx7}
                    prop4={!props.prD ? 'None' : 'xx99Div2P'}
                    prop13='1x'
                    prop14='Travel Bag'

                />

                <ProductsSection
                    setaddC={props.setaddC}
                    lst1={props.lst1}
                    setlst1={props.setlst1}
                    total={props.total}
                    setTotal={props.setTotal}
                    setcarti={props.setcarti}
                    setCartInc59Crt={props.setCartInc59Crt}
                    cartIn59Crt={props.cartIncr59Crt}
                    x59 ={props.x59}
                    setcartNumm={props.setcartNum}
                    setCartInc59={props.setCartInc59}
                    cartIn59={props.cartIncr59}
                    setearP = {props.setEarP}
                    HDTF={props.hdTF}
                    setHDTF={props.sethdTF}
                    setIsVisible2={props.setIsVisible}
                    spkTP ={props.setSpkCat}
                    earCatt = {props.setEarCat}
                    setP={props.setPrD}
                    setM={props.setM1}
                    set599={props.set59}
                    setzx9={props.setZx9}
                    setzx7 ={props.setZx7}
                    prop1='images/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                    prop2={(
                        <React.Fragment>
                            XX59<br/>Headphones
                        </React.Fragment>
                    )}
                    prop4={!props.x59 ? 'None' : 'xx99Div2P'}
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
                    setaddC={props.setaddC}
                    lst1={props.lst1}
                    setlst1={props.setlst1}
                    total={props.total}
                    setTotal={props.setTotal}
                    setcarti={props.setcarti}
                    m1={props.m1}
                    setmk2Crt={props.setmk2Crt}
                    setmk2={props.setmk2}
                    mk2={props.mk2}
                    setcartNumm={props.setcartNum}
                    setearP = {props.setEarP}
                    HDTF={props.hdTF}
                    setHDTF={props.sethdTF}
                    setIsVisible2={props.setIsVisible}
                    spkTP ={props.setSpkCat}
                    earCatt = {props.setEarCat}
                    setP={props.setPrD}
                    setM={props.setM1}
                    set599={props.set59}
                    setzx9={props.setZx9}
                    setzx7 ={props.setZx7}
                    prop1='images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
                    prop2='XX99 Mark I Headphones'
                    prop4={!props.m1 ? 'None' : 'xx99Div2P'}
                    prop5='$ 1,750'
                    prop6='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
                    prop17='images/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
                    prop18='images/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
                    prop19='images/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
                    prop20='images/MYSVGS/m2.svg'
                    prop21='XX99 MARK II'
                />
                <div className={props.spkCat || props.earCat || props.prD || props.m1 || props.x59 ? 'None' : 'xxMa3'}>
                    <DeviceSection
                        setearP = {props.setEarP}
                        HDTF={props.hdTF}
                        setHDTF={props.sethdTF}
                        setIsVisible2={props.setIsVisible}
                        spkTP ={props.setSpkCat}
                        earCatt = {props.setEarCat}
                        setP={props.setPrD}
                        setM={props.setM1}
                        set599={props.set59}
                        setzx9={props.setZx9}
                        setzx7 ={props.setZx7}

                        prop4={props.hdTF ? 'xx99Div2': 'None' && props.isVisible ? 'xx99Div2x': 'None'}></DeviceSection>

                    <DeviceSection
                        setearP = {props.setEarP}
                        HDTF={props.hdTF}
                        setHDTF={props.sethdTF}
                        setIsVisible2={props.setIsVisible}
                        spkTP ={props.setSpkCat}
                        earCatt = {props.setEarCat}
                        setP={props.setPrD}
                        setM={props.setM1}
                        set599={props.set59}
                        setzx9={props.setZx9}
                        setzx7 ={props.setZx7}
                        setM11={props.setM1}
                        prop1='images/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
                        prop2='XX99 Mark I Headphones'
                        prop3='As the gold standard for headphones,
                    the classic XX99 Mark I offers detailed and accurate audio
                    reproduction for audiophiles, mixing engineers,
                    and music aficionados alike in studios and on the go.'
                        prop4={props.hdTF ? 'xx99Div2': 'None'}
                    ></DeviceSection>

                    <DeviceSection
                        setearP = {props.setEarP}
                        HDTF={props.hdTF}
                        setHDTF={props.sethdTF}
                        setIsVisible2={props.setIsVisible}
                        spkTP ={props.setSpkCat}
                        earCatt = {props.setEarCat}
                        setP={props.setPrD}
                        setM={props.setM1}
                        set599={props.set59}
                        setzx9={props.setZx9}
                        setzx7 ={props.setZx7}

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
                        prop4={props.hdTF ? 'xx99Div2': 'None'}
                    ></DeviceSection>
                </div>
                </div>
            </>
        )
}
