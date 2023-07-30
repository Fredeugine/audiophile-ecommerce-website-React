import {Link} from "react-router-dom";
import React, {useState} from "react";

export function Homepage(){
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
    const [addC, setaddC] = useState(false);
return(
    <>
        <div className={isVisible ? 'xx99Opc' : null} onClick={(event)=>{
            setIsVisible(false)
            setaddC(false)
        }}>
            <div id={'xx99Div'} className={hdTF || earCat || xzx9 || xzx7 || earP ? 'None' : 'xx99Div'} >
                <div id={'xx99Divs'} className={spkCat || prD ? 'None' : 'xx99Divs'}>
                    <img id={'xx99'} className="xx99" alt="" src={ "images/home/mobile/image-header.jpg"} />
                    <div id={'xx99Inner'} className="xx99Inner">
                        <div id={'np'} className="np">
                            <p>NEW PRODUCT</p>
                        </div>
                        <div id={'mk2'} className="mk2">
                            <p>XX99 MARK II HEADPHONES</p>
                        </div>
                        <div id={'mk2Des'} className="mk2Des">
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
            <div  className={!isVisible ? "sec2" :'sec2Opc'}>
                <div className="soundDevices">
                    <div className="headphonesDiv">
                    <span>
                      <img className="hd" src="images/MYSVGS/headphones.svg" />
                    </span>
                        <span className="proT">Headphones</span>
                        <span className="shop">
                     <span className="shopFnt" onClick={()=>{
                          window.scrollTo({
                              top: 0,
                              behavior: 'auto' // Enables smooth scrolling animation
                          });
                      }}> <Link to={'headphones'}>Shop</Link></span>{" "}>
                                        <img src="images/MYSVGS/rightarr.svg" />
                    </span>
                    </div>
                    <div className="speakersDiv">
                    <span>
                      <img className="spk" src="images/MYSVGS/Mspeaker.svg" />
                    </span>
                        <span className="proT">Speakers</span>
                        <span className="shop">
                      <span className="shopFnt" onClick={()=>{
                          window.scrollTo({
                              top: 0,
                              behavior: 'auto' // Enables smooth scrolling animation
                          });
                      }}><Link to={'speakers'}>Shop</Link></span>{" "}
                            <img src="images/MYSVGS/rightarr.svg" />
                    </span>
                    </div>
                    <div id={'earphonesDiv'} className="earphonesDiv">
                    <span>
                      <img className="ear" src="images/MYSVGS/Mearphones.svg" />
                    </span>
                        <span className="proT">Earphones</span>
                        <span className="shop">
                      <span className="shopFnt" onClick={()=>{
                          window.scrollTo({
                              top: 0,
                              behavior: 'auto' // Enables smooth scrolling animation
                          });
                      }}><Link to={'speakers'}>Shop</Link></span>{" "}
                            <img src="images/MYSVGS/rightarr.svg" />
                    </span>
                    </div>
                </div>

                <div className={'nn'}>
                    <div id={hdTF || xzx9 || xzx7 || earP  ? 'None' : 'zx9Div'} className={hdTF || xzx9 || xzx7 || earP  ? 'None' : 'zx9Div'}>
                        <div className="container">
                            <div id={'outer-circle'} className="outer-circle" />
                            <div id={'inner-circle'} className="inner-circle">
                                <img id={'spk2'} className="spk2" src="images/MYSVGS/Mspeaker.svg"/>
                            </div>
                        </div>
                        <div id={'zx9Inner'} className={'zx9Inner'}>
                            <p className="zx9Text">
                                zx9 <br />
                                speaker
                            </p>
                            <p className="zx9TextP">
                                {" "}
                                Upgrade to premium speakers that are phenomenally built to deliver truly
                                remarkable sound.
                            </p>
                            <button id={'zx9Button'} className="seePr" onClick={()=>{
                                setZx9(true)
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'auto' // Enables smooth scrolling animation
                                });
                            }}>SEE PRODUCT</button>
                        </div>
                    </div>
                    <div id={hdTF || xzx9 || xzx7 || earP  ? 'None' : "zx7Div"} className={hdTF || xzx9 || xzx7 || earP  ? 'None' : "zx7Div"}>
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
                    <div id={hdTF || xzx9 || xzx7 || earP  ? 'None' : "yx1Div"} className={hdTF || xzx9 || xzx7 || earP  ? 'None' : "yx1Div"}>
                        <div id={"yx1DivInner1"} className="yx1DivInner1" />
                        <div id={'"yx1DivInner2"'} className="yx1DivInner2">
                            <div id={"yx1DivInner2Inner"} className="yx1DivInner2Inner">
                                <span id={"yx1DivInner2Text"} className="yx1DivInner2Text">YX1 earphones</span>
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
    </>
)
}
