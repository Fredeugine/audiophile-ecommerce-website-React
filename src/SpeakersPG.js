import React, {useState} from "react";
import {DeviceSection, ProductsSection} from "./Categories menu";

export function SpeakersPG(){
    const [isVisible, setIsVisible] = useState(false);
    const [hdTF, sethdTF] = useState(false);
    const [spkCat, setSpkCat] = useState(true);
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
    const [lst1, setlst1] = useState([]);
    const [total,setTotal] = useState(0);
    const [czx9,setczx9] = useState(0);
    const [czx9Crt,setczx9Crt] = useState(0);
    const [czx7,setczx7] = useState(0);
    const [czx7Crt,setczx7Crt] = useState(0);
    return(
        <>

            <ProductsSection
                setaddC={setaddC}
                lst1={lst1}
                setlst1={setlst1}
                total={total}
                setTotal={setTotal}
                setcarti={setcarti}
                xzx9={xzx9}
                setczx9Crt={setczx9Crt}
                setczx9={setczx9}
                czx9={czx9}
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
                prop1='images/product-zx9-speaker/mobile/image-category-page-preview.jpg'
                prop2={(
                    <React.Fragment>
                        ZX9<br/>Headphones
                    </React.Fragment>
                )}
                prop4={!xzx9 ? 'None' : 'xx99Div2P'}
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
                setaddC={setaddC}
                lst1={lst1}
                setlst1={setlst1}
                total={total}
                setTotal={setTotal}
                setcarti={setcarti}
                xzx7={xzx7}
                setczx7Crt={setczx7Crt}
                setczx7={setczx7}
                czx7={czx7}
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
                prop1='images/product-zx7-speaker/mobile/image-category-page-preview.jpg'
                prop2={(
                    <React.Fragment>
                        ZX7<br/>Headphones
                    </React.Fragment>
                )}
                prop4={!xzx7 ? 'None' : 'xx99Div2P'}
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
            <div className={xzx9 || xzx7 ? 'None': 'xxMa3'}>
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
                    setSpk={setSpkCat}

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
                    prop4={spkCat ? 'xx99Div2': 'None'}
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
                    prop4={spkCat ? 'xx99Div2': 'None'}
                ></DeviceSection>
            </div>
        </>
    )
}
