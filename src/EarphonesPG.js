import {DeviceSection, ProductsSection} from "./Categories menu";
import React, {useState} from "react";

export function EarphonesPG(){
    const [isVisible, setIsVisible] = useState(false);
    const [hdTF, sethdTF] = useState(true);
    const [spkCat, setSpkCat] = useState(false);
    const [earCat, setEarCat] = useState(true);
    const [prD, setPrD] = useState(false);
    const [m1, setM1] = useState(false);
    const [x59, set59] = useState(false);
    const [xzx9, setZx9] = useState(false);
    const [xzx7, setZx7] = useState(false);
    const [earP, setEarP] = useState(false);
    const [addC, setaddC] = useState(false);
    const [cartNum, setcartNum] = useState(false);
    const [carti, setcarti] = useState(0);
    const [lst1, setlst1] = useState([]);
    const [total,setTotal] = useState(0);
    const [cartIncrx1, setCartIncx1] = useState(0);
    const [cartIncrx1Crt, setCartIncx1Crt] = useState(0);
    return (
        <>
            <ProductsSection
                setaddC={setaddC}
                lst1={lst1}
                setlst1={setlst1}
                setTotal={setTotal}
                setcarti={setcarti}
                setCartIncx1Crt={setCartIncx1Crt}
                cartIncx1Crt={cartIncrx1Crt}
                setcartNumm={setcartNum}
                setCartIncx1={setCartIncx1}
                cartIncx1={cartIncrx1}
                setearP = {setEarP}
                earP={earP}
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
                prop1='images/product-yx1-earphones/mobile/image-category-page-preview.jpg'
                prop2={(
                    <React.Fragment>
                        YX1 WIRELESS<br/>EARPHONES
                    </React.Fragment>
                )}
                prop4={!earP ? 'None' : 'xx99Div2P'}
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
            <div className={earP ? 'None' : 'xxMa3'}>
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

                    prop1='images/product-yx1-earphones/mobile/image-category-page-preview.jpg'
                    prop2='YX1 WIRELESS EARPHONES'
                    prop3='Tailor your listening experience with bespoke dynamic drivers from the
                         new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
                         in noisy environments with its active noise cancellation feature.'
                    prop4={earCat ? 'xx99Div2': 'None'}
                ></DeviceSection>
            </div>
        </>
    )
}
