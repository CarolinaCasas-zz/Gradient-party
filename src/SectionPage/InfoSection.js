import AbautCSS from "../ArticleComponents/AbautCSS";
import BrowserCompability from "../ArticleComponents/BrowserCompability";
import WhatIsaGradient from "../ArticleComponents/WhatIsaGradient";
import { useTheme } from "../context/ThemeProvider";
import "./infoSection.css"


const InfoSection = () => {
    const{theme}= useTheme();

    return (
        <main>
            <article className="infoSection" style={{backgroundColor: theme.background, color: theme.textColor}}>
                    <AbautCSS />
                    <BrowserCompability />
                   <WhatIsaGradient />    
            </article>
        </main>
    )
}

export default InfoSection;