import React, { useState } from "react";
import "./EditGradiantBar.css";

const EditGradiantBar = () => {
 /*    const [direction, setdirection]= useState("");
    const [style, setstyle]= useState(""); */
   const [color1, setColor1]= useState("#9e48e5"); 
   const [color2, setColor2]= useState("#580909"); 

const sampleColorStyle ={
    backgroundImage: "linear-gradient("+color1+","+color2+")",
};

console.log(color1)
    return (
       
        <>
            <section className="EditBar">

                <span className="EditBar_subtitle">Style</span>
                <section className="EditBar_groupButtons_grid">
                    <button>Linear></button>
                    <button>Circular</button>
                </section>
                <span className="EditBar_subtitle" >Direction</span>
                <section className="EditBar_groupButtons_grid">
                <button>Up-left</button>
                <button>Up</button>
                <button>Up-right</button>
                <button>left</button>
                <button>center</button>
                <button>rigth</button>
                <button>Down-left</button>
                <button>Dowin</button>
                <button>Down-Rigth</button>
                </section>
                <span className="EditBar_subtitle">Colors </span>
                <section className="EditBar_groupButtons_grid">
                    <input type="color" value={color1} onChange={(e)=>setColor1(e.target.value)}/>
                    <input type="color" value={color2} onChange={(e)=>setColor2(e.target.value)}/>
                    <button>Random</button>
                </section>
                <span className="EditBar_subtitle">Output format</span>
                <section className="EditBar_groupButtons_grid">
                <button>click</button>
                <button>click</button>
                <button>click</button>
                <button>click</button>
                </section>
            </section>
        
            <div className="sampleColor" style={sampleColorStyle}>here</div> 
        </>


    )
}

export default EditGradiantBar;