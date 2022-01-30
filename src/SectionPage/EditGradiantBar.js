import React, { useState } from "react";
import "./EditGradiantBar.css";

const EditGradiantBar = () => {
   const [direction, setdirection]= useState("");
    const [style, setstyle]= useState("linear-gradient"); 
   const [color1, setColor1]= useState("#9e48e5"); 
   const [color2, setColor2]= useState("#580909"); 

const sampleColorStyle ={
    backgroundImage: style+"("+direction+color1+","+color2+")",
};


console.log(direction)
    return (
       
        <>
            <section className="EditBar">

                <span className="EditBar_subtitle">Style</span>
                <section className="EditBar_groupButtons_grid">
                    <button onClick={()=>setstyle("linear-gradient")}>Linear></button>
                    <button onClick={()=>console.log(setstyle("radial-gradient"))}>Circular</button>
                </section>
                <span className="EditBar_subtitle" >Direction</span>
                <section className="EditBar_groupButtons_grid" onClick={(e)=>{console.log(setdirection(e.target.dataset.direction))}}>
                <button data-direction="to top left,">Up-left</button>
                <button data-direction="to top,">Up</button>
                <button data-direction="to top right,">Up-right</button>
                <button data-direction="to left,">left</button>
                <button>center</button>
                <button data-direction="to right,">rigth</button>
                <button data-direction="to bottom left,">Down-left</button>
                <button data-direction="to bottom,">Dowin</button>
                <button data-direction="to bottom right,">Down-Rigth</button>
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