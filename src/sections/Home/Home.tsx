import logo from "../../assets/icons/logo.png";
import windows from "../../assets/icons/windows.png";
import apple from "../../assets/icons/apple.png";
import android from "../../assets/icons/android.png";
import heroImg from "../../assets/hero-img.png";
import ScrollNavLink from "../../components/ScrollNavLink";
import ToggleBtn from "../../components/ToggleBtn";
import { Element } from "react-scroll";
import "./Home.css"
import { useTheme } from "../../contexts/ThemeContext";


function Home() {
  const { dark, setDark } = useTheme();
  const changeTheme = () => {
    setDark((prev) => !prev);
  };
  function setTheme() {
    return dark ? "black" : "var(--blue)";
  }

  return (
    <Element name="section1" id="home">
      <div className="bg-text" style={{ backgroundColor: setTheme() }}>
        <p>MUSIC</p>
        <p>PLAYER</p>
      </div>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="" />
          <h3>Musify</h3>
        </div>
    <ToggleBtn toggle={changeTheme} setTheme={dark} />

      </nav>

      <div className="navigator">
        <ScrollNavLink to="home" />
        <ScrollNavLink to="media" />
        <ScrollNavLink to="" />
        <ScrollNavLink to="contact" />
        <ScrollNavLink to="signup" />
      </div>

      <div className="home-contents">
        <div className="left-side">
          <div className="wrapper">
            <h1>
              PLAY<span>&#x25A0;</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              ligula auctor dignissim eget. Adipiscing ut ultrices convallis
              eget eu. Bibendum nulla vitae egestas ut nisl. Egestas netus
              faucibus aliquet nibh volutpat morbi metus, commodo.
            </p>
            <div className="actions">
              <a href="">
                <button>
                  <img src={windows} alt="" />
                </button>
              </a>
              <a href="">
                <button>
                  <img src={android} alt="" />
                </button>
              </a>
              <a href="">
                <button>
                  <img src={apple} alt="" />
                </button>
              </a>
              <a href="">
                <button>Download</button>
              </a>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
