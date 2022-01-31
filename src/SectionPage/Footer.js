import React from "react";
import { useTheme } from "../context/ThemeProvider";
import "./footer.css"
function Footer() {
    const{theme}= useTheme();
    return (
        <>
            <footer style={{ backgroundColor: theme.background, color: theme.textColor }}>
                <h4>®2022 CSS-Gradient-party</h4>
                <h4>Ternms and Privacy</h4>
            </footer>
        </>
    );
}

export default Footer;