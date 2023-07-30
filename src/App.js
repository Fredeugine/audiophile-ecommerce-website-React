import React, {useEffect} from 'react';
import './App.css';
import {CategoriesMenu} from "./Categories menu";
import {DeviceSection} from "./Categories menu";
import {ProductsSection} from "./Categories menu";
import {CartBtn, Footer} from "./Components";
import {useState} from "react";
import {DetailForm, TkuPage} from "./DetailForm";
import {NavStay} from "./Cart";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {HeadphonesPage} from "./HeadphonesPage";
import {SpeakersPG} from "./SpeakersPG";
import {EarphonesPG} from "./EarphonesPG";
import {Homepage} from "./Homepage";

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
    const [addC, setaddC] = useState(false);
    const [cartNum, setcartNum] = useState(false);
    const [carti, setcarti] = useState(0);
    const [total,setTotal] = useState(0);
    const [gtotal,setgTotal] = useState(1098+50);
    const [checkout,setCheckout] = useState(false);
    const [lst1, setlst1] = useState([]);

    const [cartIncrx1, setCartIncx1] = useState(0);
    const [cartIncrx1Crt, setCartIncx1Crt] = useState(0);
    const [mk2, setmk2] = useState(0);
    const [mk2Crt, setmk2Crt] = useState(0);

    const [czx9,setczx9] = useState(0);
    const [czx9Crt,setczx9Crt] = useState(0);

    const [czx7,setczx7] = useState(0);
    const [czx7Crt,setczx7Crt] = useState(0);


    const [tku,settku] = useState(false);



    return (

        <>
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
                setaddC={setaddC}
                setcartnum={setcartNum}>
            </CartBtn>
            <Routes>
                <Route path={'/headphones'} element={<HeadphonesPage/>}/> />
                <Route path={'/speakers'} element={<SpeakersPG/>}/> />
                <Route path={'/earphones'} element={<EarphonesPG/>}/> />
                <Route path={'/'} element={<Homepage/>}/> />
            </Routes>
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
                tku={tku} settku={settku}
            ></TkuPage>
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
             <div>
                 <CategoriesMenu
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
                <Footer></Footer>
            </div>
        </>

    );
}

export default App;
