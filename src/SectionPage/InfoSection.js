import AboutCSS from "../ArticleComponents/AboutCSS";
import BrowserCompability from "../ArticleComponents/BrowserCompability";
import WhatIsaGradient from "../ArticleComponents/WhatIsaGradient";
import { useTheme } from "../context/ThemeProvider";
import "./infoSection.css"
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
  

const InfoSection = () => {
    const{theme}= useTheme();

    return (

        <BrowserRouter>
          <nav className="navigation" style={{backgroundColor: theme.background, color: theme.textColor}}>
            <ul>
              <li>
                <Link to="/">About gradient CSS</Link>
              </li>
              <li>
                <Link to="/compability">Compability</Link>
              </li>
              <li>
                <Link to="/WhatIs">What is a Gradient</Link>
              </li>
            </ul>
          </nav>
  
            <main>
               <article className="infoArticle" style={{backgroundColor: theme.background, color: theme.textColor}}>
          <Routes>         
            <Route path="/"exact element={<AboutCSS />}/>
            <Route path="/compability" element={ <BrowserCompability /> }/>
            <Route path="/whatIs" element={ <WhatIsaGradient />}/>
          </Routes>
              </article>
        </main>
      </BrowserRouter>

    );
  
}

export default InfoSection;