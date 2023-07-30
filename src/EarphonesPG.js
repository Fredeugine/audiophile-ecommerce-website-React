import {DeviceSection, ProductsSection} from "./Categories menu";
import React, {useState} from "react";

export function EarphonesPG({props}){
   props.setEarCat(true)
    return (
        <>
            <div className={props.checkout ? 'None' : null}>
            <ProductsSection
                setaddC={props.setaddC}
                lst1={props.lst1}
                setlst1={props.setlst1}
                setTotal={props.setTotal}
                setcarti={props.setcarti}
                setCartIncx1Crt={props.setCartIncx1Crt}
                cartIncx1Crt={props.cartIncrx1Crt}
                setcartNumm={props.setcartNum}
                setCartIncx1={props.setCartIncx1}
                cartIncx1={props.cartIncrx1}
                setearP = {props.setEarP}
                earP={props.earP}
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
                prop1='images/product-yx1-earphones/mobile/image-category-page-preview.jpg'
                prop2={(
                    <React.Fragment>
                        YX1 WIRELESS<br/>EARPHONES
                    </React.Fragment>
                )}
                prop4={!props.earP ? 'None' : 'xx99Div2P'}
                prop5='$ 599'
                prop6='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'
                prop12='USB-C Charging Cable'
                prop13='1x'
                prop14='Travel Pouch'
                prop17='images/product-yx1-earphones/mobile/image-gallery-1.jpg'
                prop18='images/product-yx1-earphones/mobile/image-gallery-2.jpg'
                prop19='images/product-yx1-earphones/mobile/image-gallery-3.jpg'
                prop8='Earphone Unit'
                prop9='6x'
                prop10='Multi-size Earplugs'
                prop7='2x'

            />
            <div className={props.earP ? 'None' : 'xxMa3'}>
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

                    prop1='images/product-yx1-earphones/mobile/image-category-page-preview.jpg'
                    prop2='YX1 WIRELESS EARPHONES'
                    prop3='Tailor your listening experience with bespoke dynamic drivers from the
                         new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
                         in noisy environments with its active noise cancellation feature.'
                    prop4={props.earCat ? 'xx99Div2': 'None'}
                ></DeviceSection>
            </div>
            </div>
        </>
    )
}
