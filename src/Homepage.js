import {Link} from "react-router-dom";
import React, {useState} from "react";

export function Homepage({checkout, isVisible, setIsVisible
                             ,hdTF, sethdTF
                             ,spkCat, setSpkCat
                             ,earCat, setEarCat
                             ,prD, setPrD
                             ,m1, setM1
                             ,x59, set59
                             ,xzx9, setZx9
                             ,xzx7, setZx7
                             ,earP, setEarP
                             ,addC, setaddC}){
    sethdTF(false)
    setEarCat(false)
    setSpkCat(false)
    return(
        <>
            <div className={checkout ? 'None' : null}>

                <div className={isVisible ? 'xx99Opc' : null} onClick={()=>{
                    setIsVisible(false)
                    setaddC(false)
                }}>
                    <div id={'xx99Div'} className={'xx99Div'} >
                        <div id={'xx99Divs'} className={'xx99Divs'}>
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
                                <Link to={'headphones'}><button className="seePr" onClick={()=>{
                                    setPrD(true)
                                    sethdTF(true)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth' // Enables smooth scrolling animation
                                    });
                                }}>SEE PRODUCT</button></Link>
                            </div>
                        </div>
                    </div>
                    <div  className={!isVisible ? "sec2" :'sec2Opc'}>
                        <div className="soundDevices">
                            <div className="headphonesDiv">
                    <span>
                      <img alt={'headphones Button'} className="hd" src="images/MYSVGS/headphones.svg" />
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
                             behavior: 'smooth' // Enables smooth scrolling animation
                         });
                     }}> <Link to={'headphones'}>Shop</Link></span>{" "}
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
                              behavior: 'smooth' // Enables smooth scrolling animation
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
                              behavior: 'smooth' // Enables smooth scrolling animation
                          });
                      }}><Link to={'earphones'}>Shop</Link></span>{" "}
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
                                    <Link to={'speakers'}><button id={'zx9Button'} className="seePr" onClick={()=>{
                                        setZx9(true)
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth' // Enables smooth scrolling animation
                                        });
                                    }}>SEE PRODUCT</button></Link>
                                </div>
                            </div>
                            <div id={hdTF || xzx9 || xzx7 || earP  ? 'None' : "zx7Div"} className={hdTF || xzx9 || xzx7 || earP  ? 'None' : "zx7Div"}>
                                <div className="zx7DivInner">
                                    <p className="zx7text">ZX7 speaker</p>
                                    <Link className={'trs'} to={'speakers'}><button  id={'trs'} className="seePr" onClick={()=>{
                                        setZx7(true)
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth' // Enables smooth scrolling animation
                                        });
                                    }}>SEE PRODUCT</button></Link>
                                </div>
                            </div>
                            <div id={hdTF || xzx9 || xzx7 || earP  ? 'None' : "yx1Div"} className={hdTF || xzx9 || xzx7 || earP  ? 'None' : "yx1Div"}>
                                <div id={"yx1DivInner1"} className="yx1DivInner1" />
                                <div id={'"yx1DivInner2"'} className="yx1DivInner2">
                                    <div id={"yx1DivInner2Inner"} className="yx1DivInner2Inner">
                                        <span id={"yx1DivInner2Text"} className="yx1DivInner2Text">YX1 earphones</span>
                                        <Link to={'earphones'}><button id={'trs'} className="seePr" onClick={()=>{
                                            setEarP(true)
                                            window.scrollTo({
                                                top: 0,
                                                behavior: 'smooth' // Enables smooth scrolling animation
                                            });
                                        }}>SEE PRODUCT</button></Link>
                                    </div>
                                </div>
                            </div>
                            <div id={'footerSec1'} className="footerSec1">
                                <div id={'manImage'} className="manImage" />
                                <div id={"footerSec1Inner2"} className="footerSec1Inner2">
                                    Bringing you the <span>best</span> audio gear
                                </div>
                                <div id={"footerSec1Inner3"} className="footerSec1Inner3">
                                    Located at the heart of New York City, Audiophile is the premier store
                                    for high-end headphones, earphones, speakers, and audio accessories. We
                                    have a large showroom and luxury demonstration rooms available for you
                                    to browse and experience a wide range of our products. Stop by our store
                                    to meet some of the fantastic people who make Audiophile the best place
                                    to buy your portable audio equipment.
                                </div>
                            </div>
                            <div id={'footerSec2'} className="footerSec2">
                                <span id={'orDsh'} className={'orDsh'}></span>
                                <div id={'in1'} className={'in1'}>
                                    <div id={'aud'} className="aud">
                                        <img alt='Logo"' src="images/shared/desktop/logo.svg" />
                                    </div>
                                    <div id={'footerSec2Inner2'} className="footerSec2Inner2">
                                        <span>Home</span>
                                        <span>Headphones</span>
                                        <span>Speakers</span>
                                        <span>Earphones</span>
                                    </div>
                                </div>
                                <div id={'in2'} className={'in2'}>
                                    <p id={"footerSec2P"} className="footerSec2P">
                                        Audiophile is an all-in-one stop to fulfill your audio needs. We're a
                                        small team of music lovers and sound specialists who are devoted to
                                        helping you get the most out of personal audio. Come and visit our demo
                                        facility - we’re open 7 days a week.
                                    </p>
                                </div>
                                <div id={'in3'} className={'in3'}>
                                    <p id={'footerSec2P2'} className="footerSec2P2">Copyright 2021. All Rights Reserved</p>
                                    <div id={"SocialMediaLinks"} className="SocialMediaLinks">
                                        <img src="images/shared/desktop/icon-facebook.svg" />
                                        <img src="images/shared/desktop/icon-twitter.svg" />
                                        <img src="images/shared/desktop/icon-instagram.svg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
