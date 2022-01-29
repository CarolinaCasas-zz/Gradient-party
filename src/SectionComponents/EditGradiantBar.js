import React from "react";
import Button from "../Components/Button";
import "./EditGradiantBar.css";
const EditGradiantBar = () => {
    return (
        <section className="EditBar">
    
            <span className="EditBar_subtitle">Style</span>
            <section className="EditBar_groupButtons_grid">
                <Button />
                <Button />
            </section>
            <span className="EditBar_subtitle" >Direction</span>
            <section className="EditBar_groupButtons_grid">
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
                    <Button />
            </section>
            <span className="EditBar_subtitle">Colors </span>
            <section className="EditBar_groupButtons_grid">
                <input   type="color" />
                <input   type="color" />
                <Button />
            </section>
            <span className="EditBar_subtitle">Output format</span>
            <section className="EditBar_groupButtons_grid">
                <Button />
                <Button />
                <Button />
                <Button />
            </section>

        </section>
    )
}

export default EditGradiantBar;