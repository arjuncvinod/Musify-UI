import { useState } from "react"
import logo from "../assets/logo.png"
import ToggleBtn from "../components/ToggleBtn"
function Home() {
const [dark,setDark]=useState(false)

const changeTheme = () => {
    setDark(prev => !prev);
}
function setTheme(){
    return dark ? "black" : "var(--blue)";
}
 
  return (
    <section id="home">
     <div className="bg-text" style={{backgroundColor:setTheme()}}>
        <p>MUSIC</p>
        <p>PLAYER</p>
     </div>
    <nav>
            <div className="logo-container">
                <img src={logo} alt="" />
            <h3>Musify</h3>
            </div>
        <ToggleBtn toggle={changeTheme} setTheme={dark}/>
    </nav>
     {/* <div className="contents">
        <h1>PLAY.</h1>
     </div> */}
    </section>
  )
}

export default Home