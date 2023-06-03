import React from 'react';
import './App.css';
import {CategoriesMenu} from "./Categories menu";
import {DeviceSection} from "./Categories menu";
import {ProductsSection} from "./Categories menu";
import {CartBtn} from "./Cart";
import {useState} from "react";
import {DetailForm, TkuPage} from "./DetailForm";
import {NavStay} from "./Cart";

export function App() {
    const [isVisible, setIsVisible] = useState(false);
    const [hdTF, sethdTF] = useState(false);
    const [spkCat, setSpkCat] = useState(false);
    const [earCat, setEarCat] = useState(false);
    const [prD, setPrD] = useState(false);
    const [m1, setM1] = useState(false);
    const [x59, set59] = useState(false);
    const [xzx9, setZx9] = useState(false);
    const [xzx7, setZx7] = useState(false);
    const [earP, setEarP] = useState(false);
    const [cartIncr, setCartInc] = useState(0);
    const [cartIncrCrt, setCartIncCrt] = useState(0);
    const [cartIncr59Crt, setCartInc59Crt] = useState(0);
    const [cartIncr59, setCartInc59] = useState(0);
    const [cartIncrx1, setCartIncx1] = useState(0);
    const [cartIncrx1Crt, setCartIncx1Crt] = useState(0);
    const [addC, setaddC] = useState(false);
    const [cartNum, setcartNum] = useState(false);
    const [carti, setcarti] = useState(0);

    const [mk2, setmk2] = useState(0);
    const [mk2Crt, setmk2Crt] = useState(0);

    const [czx9,setczx9] = useState(0);
    const [czx9Crt,setczx9Crt] = useState(0);

    const [czx7,setczx7] = useState(0);
    const [czx7Crt,setczx7Crt] = useState(0);

    const [total,setTotal] = useState(0);
    const [gtotal,setgTotal] = useState(1098+50);
    const [tku,settku] = useState(false);
    const [checkout,setCheckout] = useState(false);
    const [lst1, setlst1] = useState([]);







    return (
        <>
            <NavStay
                checkout={checkout}
                setaddC={setaddC}
                setIsVisible={setIsVisible}
                isVisible={isVisible}
                cartNum={cartNum}
                hdTF={hdTF}
                spkCat={spkCat}
                earCat={earCat}
            ></NavStay>

            <TkuPage
                setcartNum={setcartNum}
                setaddC={setaddC}
                settotal={setTotal}
                setcarti={setcarti}
                setCheckout={setCheckout}
                total={total}
                carti={carti}
                lst1={lst1}
                setlst1={setlst1}
                setmk2Crt={setmk2Crt}
                mk2Crt={mk2Crt}
                setczx9Crt={setczx9Crt}
                czx9Crt={czx9Crt}
                setczx7Crt={setczx7Crt}
                czx7Crt={czx7Crt}
                setCartInc59Crt={setCartInc59Crt}
                setCartIncx1Crt={setCartIncx1Crt}
                cartIncx1Crt={cartIncrx1Crt}
                cartIn59Crt={cartIncr59Crt}
                cartIncCrt={cartIncrCrt}
                setCartIncCrt={setCartIncCrt}
                isVisible={isVisible}
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
                tku={tku} settku={settku}></TkuPage>
            <DetailForm
                tku={tku}
                settku={settku}
                gtotal={gtotal}
                setCheckout={setCheckout}
                checkout={checkout}
                total={total}
                setTotal={setTotal}
                setcarti={setcarti}
                carti={carti}
                setmk2Crt={setmk2Crt}
                mk2Crt={mk2Crt}
                setczx9Crt={setczx9Crt}
                czx9Crt={czx9Crt}
                setczx7Crt={setczx7Crt}
                czx7Crt={czx7Crt}
                setCartInc59Crt={setCartInc59Crt}
                setCartIncx1Crt={setCartIncx1Crt}
                cartIncx1Crt={cartIncrx1Crt}
                cartIn59Crt={cartIncr59Crt}
                cartIncCrt={cartIncrCrt}
                setCartIncCrt={setCartIncCrt}
            ></DetailForm>

            <div className={checkout ? 'None' : null}>
             <div><CategoriesMenu
                isVisible={isVisible}
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

            /></div>
            <CartBtn
                setCheckout={setCheckout}
                total={total}
                setTotal={setTotal}
                setcarti={setcarti}
                carti={carti}
                setmk2Crt={setmk2Crt}
                mk2Crt={mk2Crt}
                setczx9Crt={setczx9Crt}
                czx9Crt={czx9Crt}
                setczx7Crt={setczx7Crt}
                czx7Crt={czx7Crt}
                setCartInc59Crt={setCartInc59Crt}
                setCartIncx1Crt={setCartIncx1Crt}
                cartIncx1Crt={cartIncrx1Crt}
                cartIn59Crt={cartIncr59Crt}
                cartIncCrt={cartIncrCrt}
                setCartIncCrt={setCartIncCrt}
                addC={addC}
                setaddC={setaddC}>
            </CartBtn>


            <div>
            <ProductsSection
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
                prop1='assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
                prop2='XX99 Mark I Headphones'
                prop4={!m1 ? 'None' : 'xx99Div2P'}
                prop5='$ 1,750'
                prop6='As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.'
                prop17='assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg'
                prop18='assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg'
                prop19='assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg'
                prop20='assets/MYSVGS/m2.svg'
                prop21='XX99 MARK II'
            />

            <ProductsSection
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
                prop1='assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
                prop2={(
                <React.Fragment>
                    XX59<br/>Headphones
                </React.Fragment>
            )}
                prop4={!x59 ? 'None' : 'xx99Div2P'}
                prop5='$ 899'
                prop6='These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
                prop17='assets/product-xx59-headphones/mobile/image-gallery-1.jpg'
                prop18='assets/product-xx59-headphones/mobile/image-gallery-2.jpg'
                prop19='assets/product-xx59-headphones/mobile/image-gallery-3.jpg'
                prop20='assets/MYSVGS/m2.svg'
                prop22='assets/MYSVGS/headphones.svg'
                prop21='XX99 MARK II'
                prop23='XX99 MARK I'

            />
            <ProductsSection
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
                prop1='assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
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
                prop17='assets/product-zx9-speaker/mobile/image-gallery-1.jpg'
                prop18='assets/product-zx9-speaker/mobile/image-gallery-2.jpg'
                prop19='assets/product-zx9-speaker/mobile/image-gallery-3.jpg'
                prop20='assets/MYSVGS/spk1.svg'
                prop21='ZX7 Speaker'
                prop22='assets/MYSVGS/headphones.svg'
                prop23='XX99 MARK I'
                prop24='assets/MYSVGS/xx59.svg'
                prop25='XX59'
                prop8='Speaker Unit'
                prop12='3.5mm 10m Audio Cable'
                prop7='2x'
            />
            <ProductsSection
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
                prop1='assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
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
                prop17='assets/product-zx7-speaker/mobile/image-gallery-1.jpg'
                prop18='assets/product-zx7-speaker/mobile/image-gallery-2.jpg'
                prop19='assets/product-zx7-speaker/mobile/image-gallery-3.jpg'
                prop20='assets/MYSVGS/Mspeaker.svg'
                prop21='ZX9 Speaker'
                prop22='assets/MYSVGS/headphones.svg'
                prop23='XX99 MARK I'
                prop24='assets/MYSVGS/xx59.svg'
                prop25='XX59'
                prop8='Speaker Unit'
                prop7='2x'
            />
            <ProductsSection
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
                prop1='assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
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
                prop17='assets/product-yx1-earphones/mobile/image-gallery-1.jpg'
                prop18='assets/product-yx1-earphones/mobile/image-gallery-2.jpg'
                prop19='assets/product-yx1-earphones/mobile/image-gallery-3.jpg'
                prop8='Earphone Unit'
                prop9='6x'
                prop10='Multi-size Earplugs'
                prop7='2x'

            />
            </div>

                <div className={isVisible ? 'xx99Opc' : null} onClick={(event)=>{
                    setIsVisible(false)
                    setaddC(false)
                }}>
            <div className={hdTF || earCat || xzx9 || xzx7 || earP ? 'None' : 'xx99Div'} >

                <div className={spkCat || prD ? 'None' : 'xx99Divs'}>
                    <img className="xx99" alt="" src="assets/home/mobile/image-header.jpg" />
                    <div className="xx99Inner">
                        <div className="np">
                            <p>NEW PRODUCT</p>
                        </div>
                        <div className="mk2">
                            <p>XX99 MARK II HEADPHONES</p>
                        </div>
                        <div className="mk2Des">
                            <p>
                                Experience natural, lifelike audio and exceptional build quality made
                                for the passionate music enthusiast.
                            </p>
                        </div>
                        <button className="seePr" onClick={()=>{
                              setPrD(true)
                            sethdTF(true)
                        }}>SEE PRODUCT</button>
                    </div>
                </div>
            </div>

            <div className={spkCat || earCat || prD || m1 || x59 ? 'None' : null}>
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
                    prop1='assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg'
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

                    prop1='assets/product-xx59-headphones/mobile/image-category-page-preview.jpg'
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
                <div className={xzx9 || xzx7 ? 'None': null}>
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

                        prop1='assets/product-zx9-speaker/mobile/image-category-page-preview.jpg'
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

                        prop1='assets/product-zx7-speaker/mobile/image-category-page-preview.jpg'
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
                <div className={earP ? 'None' : null}>
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

                    prop1='assets/product-yx1-earphones/mobile/image-category-page-preview.jpg'
                    prop2='YX1 WIRELESS EARPHONES'
                    prop3='Tailor your listening experience with bespoke dynamic drivers from the
                     new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
                     in noisy environments with its active noise cancellation feature.'
                    prop4={earCat ? 'xx99Div2': 'None'}
                ></DeviceSection>
                </div>

                <div  className={!isVisible ? "sec2" :'sec2Opc'}>
                    <div className="soundDevices">
                        <div className="headphonesDiv">
            <span>
              <img className="hd" src="assets/MYSVGS/headphones.svg" />
            </span>
                            <span className="proT">Headphones</span>
                            <span className="shop">
              <span className="shopFnt" onClick={()=>{
                 setIsVisible(false)
                  sethdTF(true)
                  setSpkCat(false)
                  setEarCat(false)
                  setPrD(false)
                  setM1(false)
                  set59(false)
                  setZx9(false)
                 setZx7(false)
                 setEarP(false)
                  window.scrollTo({
                      top: 0,
                      behavior: 'auto' // Enables smooth scrolling animation
                  });
              }}>Shop</span>{" "}
                                <img src="assets/MYSVGS/rightarr.svg" />
            </span>
                        </div>
                        <div className="speakersDiv">
            <span>
              <img className="spk" src="assets/MYSVGS/Mspeaker.svg" />
            </span>
                            <span className="proT">Speakers</span>
                            <span className="shop">
              <span className="shopFnt" onClick={()=>{
                  setIsVisible(false)
                  sethdTF(true)
                  setSpkCat(true)
                  setEarCat(false)
                  setPrD(false)
                  setM1(false)
                  set59(false)
                  setZx9(false)
                  setZx7(false)
                  setEarP(false)
                  window.scrollTo({
                      top: 0,
                      behavior: 'auto' // Enables smooth scrolling animation
                  });
              }}>Shop</span>{" "}
                                <img src="assets/MYSVGS/rightarr.svg" />
            </span>
                        </div>
                        <div className="earphonesDiv">
            <span>
              <img className="ear" src="assets/MYSVGS/Mearphones.svg" />
            </span>
                            <span className="proT">Earphones</span>
                            <span className="shop">
              <span className="shopFnt" onClick={()=>{
                  setIsVisible(false)
                  sethdTF(true)
                  setSpkCat(false)
                  setEarCat(true)
                  setPrD(false)
                  setM1(false)
                  set59(false)
                  setZx9(false)
                  setZx7(false)
                  setEarP(false)
                  window.scrollTo({
                      top: 0,
                      behavior: 'auto' // Enables smooth scrolling animation
                  });
              }}>Shop</span>{" "}
                                <img src="assets/MYSVGS/rightarr.svg" />
            </span>
                        </div>
                    </div>

                    <div className={hdTF || xzx9 || xzx7 || earP  ? 'None' : 'nn'}>
                        <div className='zx9Div'>
                            <div className="container">
                                <div className="outer-circle" />
                                <div className="inner-circle">
                                    <img className="spk2" src="assets/MYSVGS/Mspeaker.svg"/>
                                </div>
                            </div>
                            <p className="zx9Text">
                                zx9 <br />
                                speaker
                            </p>
                            <p className="zx9TextP">
                                {" "}
                                Upgrade to premium speakers that are phenomenally built to deliver truly
                                remarkable sound.
                            </p>
                            <button className="seePr" onClick={()=>{
                                setZx9(true)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'auto' // Enables smooth scrolling animation
                                });
                            }}>SEE PRODUCT</button>
                        </div>
                        <div className="zx7Div">
                            <div className="zx7DivInner">
                                <p className="zx7text">ZX7 speaker</p>
                                <button className="seePr" onClick={()=>{
                                    setZx7(true)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'auto' // Enables smooth scrolling animation
                                    });
                                }}>SEE PRODUCT</button>
                            </div>
                        </div>
                        <div className="yx1Div">
                            <div className="yx1DivInner1" />
                            <div className="yx1DivInner2">
                                <div className="yx1DivInner2Inner">
                                    <span className="yx1DivInner2Text">YX1 earphones</span>
                                    <button className="seePr" onClick={()=>{
                                        setEarP(true)
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'auto' // Enables smooth scrolling animation
                                        });
                                    }}>SEE PRODUCT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="footer">
                <div className={checkout ? 'None' : null}>
                <div className="footerSec1">
                    <div className="manImage" />
                    <div className="footerSec1Inner2">
                        Bringing you the <span>best</span> audio gear
                    </div>
                    <div className="footerSec1Inner3">
                        Located at the heart of New York City, Audiophile is the premier store
                        for high-end headphones, earphones, speakers, and audio accessories. We
                        have a large showroom and luxury demonstration rooms available for you
                        to browse and experience a wide range of our products. Stop by our store
                        to meet some of the fantastic people who make Audiophile the best place
                        to buy your portable audio equipment.
                    </div>
                </div>
                </div>
                <div className="footerSec2">
                    <span />
                    <div className="aud">
                        <img alt='Logo"' src="assets/shared/desktop/logo.svg" />
                    </div>
                    <div className="footerSec2Inner2">
                        <span>Home</span>
                        <span>Headphones</span>
                        <span>Speakers</span>
                        <span>Earphones</span>
                    </div>
                    <p className="footerSec2P">
                        Audiophile is an all-in-one stop to fulfill your audio needs. We're a
                        small team of music lovers and sound specialists who are devoted to
                        helping you get the most out of personal audio. Come and visit our demo
                        facility - we’re open 7 days a week.
                    </p>
                    <p className="footerSec2P2">Copyright 2021. All Rights Reserved</p>
                    <div className="SocialMediaLinks">
                        <img src="assets/shared/desktop/icon-facebook.svg" />
                        <img src="assets/shared/desktop/icon-twitter.svg" />
                        <img src="assets/shared/desktop/icon-instagram.svg" />
                    </div>
                </div>
            </div>


        </>

    );
}

export default App;
