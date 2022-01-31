import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard"
import { useTheme } from "../context/ThemeProvider";
import "./EditGradiantBar.css";


const EditGradiantBar = () => {
    const{theme}= useTheme();
    const [direction, setdirection] = useState("");
    const [styles, setstyles] = useState("linear-gradient");
    const [color1, setColor1] = useState("#9e48e5");
    const [color2, setColor2] = useState("#580909");


        //Elije los colores al azar 
    const randomColor=()=>{
        const newRandomColor1="#"+Math.floor(Math.random()*16777215).toString(16);
        const newRandomColor2="#"+Math.floor(Math.random()*17767116).toString(16);
        setColor1(newRandomColor1);
        setColor2(newRandomColor2);
    }
        //Integra el estilo al Div de muestra de gradiente
    const sampleColorStyle = {
        backgroundImage: styles + "(" + direction + color1 + "," + color2 + ")",
    };

    return (

        <div className="contentSampleColor" style={{backgroundColor: theme.background, color: theme.textColor}}>
            <section className="EditBar">

                <span className="EditBar_subtitle">Style</span>
                <section className="EditBar_groupButtons_grid" onClick={(e) => { setstyles(e.target.dataset.style) }}>
                    <button data-style="linear-gradient">Linear</button>
                    <button data-style="radial-gradient">Circular</button>
                </section>
                <span className="EditBar_subtitle" >Direction</span>
                <section className="EditBar_groupButtons_grid" onClick={(e) => { styles === "radial-gradient" ? setdirection(e.target.dataset.radialdirection) : setdirection(e.target.dataset.direction) }}>
                    <button data-direction="to top left," data-radialdirection="at top left,">Up-left</button>
                    <button data-direction="to top," data-radialdirection="at top,">Up</button>
                    <button data-direction="to top right, " data-radialdirection="at top right,">Up-right</button>
                    <button data-direction="to left," data-radialdirection="at left,">left</button>
                    <button style={{ visibility: styles === "radial-gradient" ? "visible" : "hidden" }} data-radialdirection="">center</button>
                    <button data-direction="to right," data-radialdirection="at right,">rigth</button>
                    <button data-direction="to bottom left," data-radialdirection="at bottom left,">Down-left</button>
                    <button data-direction="to bottom," data-radialdirection="at bottom,">Down</button>
                    <button data-direction="to bottom right," data-radialdirection="at bottom right,">Down-Rigth</button>
                </section>
                <span className="EditBar_subtitle">Colors </span>
                <section className="EditBar_groupButtons_grid">
                    <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} />
                    <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} />
                    <button onClick={randomColor}>Random</button>
                </section>
                <span className="EditBar_subtitle">Output format</span>
                <section className="EditBar_groupButtons_grid">
                    <button>Hex</button>
                    <button>Rgba</button>
                    <CopyToClipboard text={"background:" + sampleColorStyle.backgroundImage}>
                        <button>Get CSS</button>
                    </CopyToClipboard>

                    <CopyToClipboard text="enlace al despliegue">
                        <button>Get Share Links</button>
                    </CopyToClipboard>

                </section>
            </section>

            <div className="sampleColor" style={sampleColorStyle}>
                <span className="sampleColor_scrollMesagge">Scroll for more ↑↓</span>
            </div>
        </div>


    )
}

export default EditGradiantBar;