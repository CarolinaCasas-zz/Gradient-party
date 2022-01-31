import"./header.css"
import { useTheme } from "../context/ThemeProvider";

const Header =() =>{
const{theme, changeTheme}= useTheme();

    return(
        <>
<header style={{ backgroundColor: theme.background, color: theme.textColor }}>
<h1 className="EditBar_title">Gradient <br /> Party</h1> 
<img alt="theme" src={theme.linkImg} onClick={changeTheme}/>
</header>
</>
    )
  
}

export default Header;