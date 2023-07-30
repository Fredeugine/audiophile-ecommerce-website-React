import React, {useState} from "react";
import {CategoriesMenu, DeviceSection, ProductsSection} from "./Categories menu";
import {DetailForm} from "./DetailForm";
import {CartBtn, NavStay} from "./Cart";

export function SpeakersPG({props}){
    props.setSpkCat(true)
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
                xzx9={props.xzx9}
                setczx9Crt={props.setczx9Crt}
                setczx9={props.setczx9}
                czx9={props.czx9}
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
                prop1='images/product-zx9-speaker/mobile/image-category-page-preview.jpg'
                prop2={(
                    <React.Fragment>
                        ZX9<br/>Headphones
                    </React.Fragment>
                )}
                prop4={!props.xzx9 ? 'None' : 'xx99Div2P'}
                prop5='$ 4,500'
                prop6='Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m). Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.'
                prop13='1x'
                prop14='10m Optical Cable'
                prop17='images/product-zx9-speaker/mobile/image-gallery-1.jpg'
                prop18='images/product-zx9-speaker/mobile/image-gallery-2.jpg'
                prop19='images/product-zx9-speaker/mobile/image-gallery-3.jpg'
                prop20='images/MYSVGS/spk1.svg'
                prop21='ZX7 Speaker'
                prop22='images/MYSVGS/headphones.svg'
                prop23='XX99 MARK I'
                prop24='images/MYSVGS/xx59.svg'
                prop25='XX59'
                prop8='Speaker Unit'
                prop12='3.5mm 10m Audio Cable'
                prop7='2x'
            />
            <ProductsSection
                setaddC={props.setaddC}
                lst1={props.lst1}
                setlst1={props.setlst1}
                total={props.total}
                setTotal={props.setTotal}
                setcarti={props.setcarti}
                xzx7={props.xzx7}
                setczx7Crt={props.setczx7Crt}
                setczx7={props.setczx7}
                czx7={props.czx7}
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
                prop1='images/product-zx7-speaker/mobile/image-category-page-preview.jpg'
                prop2={(
                    <React.Fragment>
                        ZX7<br/>Headphones
                    </React.Fragment>
                )}
                prop4={!props.xzx7 ? 'None' : 'xx99Div2P'}
                prop5='$ 3,500'
                prop6='Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.'
                prop12='3.5mm 7.5m Audio Cable'
                prop13='1x'
                prop14='7.5m Optical Cable'
                prop17='images/product-zx7-speaker/mobile/image-gallery-1.jpg'
                prop18='images/product-zx7-speaker/mobile/image-gallery-2.jpg'
                prop19='images/product-zx7-speaker/mobile/image-gallery-3.jpg'
                prop20='images/MYSVGS/Mspeaker.svg'
                prop21='ZX9 Speaker'
                prop22='images/MYSVGS/headphones.svg'
                prop23='XX99 MARK I'
                prop24='images/MYSVGS/xx59.svg'
                prop25='XX59'
                prop8='Speaker Unit'
                prop7='2x'
            />
            <div className={props.xzx9 || props.xzx7 ? 'None': 'xxMa3'}>
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
                    setSpk={props.setSpkCat}

                    prop1='images/product-zx9-speaker/mobile/image-category-page-preview.jpg'
                    prop2={(
                        <React.Fragment>
                            zx9<br/>Speaker
                        </React.Fragment>
                    )}
                    prop3=' Upgrade your sound system with the all new ZX9 active speaker.
                        It’s a bookshelf speaker system that offers truly wireless
                        connectivity -- creating new possibilities for more pleasing
                        and practical audio setups.'
                    prop4={ props.spkCat ? 'xx99Div2': 'None'}
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

                    prop1='images/product-zx7-speaker/mobile/image-category-page-preview.jpg'
                    prop2={(
                        <React.Fragment>
                            zx7<br/>speaker
                        </React.Fragment>
                    )}
                    prop3=' Stream high quality sound wirelessly with minimal loss.
                        The ZX7 bookshelf speaker uses high-end audiophile
                        components that represents the top of the line powered
                        speakers for home or studio use.'
                    prop4={props.spkCat ? 'xx99Div2': 'None'}
                ></DeviceSection>
            </div>
            </div>
        </>
    )
}
