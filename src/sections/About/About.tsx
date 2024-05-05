import { Element } from "react-scroll";
import Marquee from "react-fast-marquee";
import charDark from "../../assets/characters/about-dark.png"
import charLight from "../../assets/characters/about-light.png"
import "./About.css";
import { useTheme } from "../../contexts/ThemeContext";
function About() {
    const { dark } = useTheme();
  return (
    <Element name="about" id="about" style={{backgroundColor:dark?"black":"var(--blue)"}}>
      <div className="top">
        
        <div className="scroll-text2" style={{backgroundColor:dark?"var(--light-black)":"#a2d9f8"}}>
            <h1 className="about-text">About Us</h1>
          <Marquee direction="right">
            <div>
            &nbsp; Play &nbsp; &#x2022; &nbsp; Love &nbsp; &#x2022; &nbsp; Music &nbsp; &#x2022; &nbsp; Play &nbsp; &#x2022; &nbsp; Love &nbsp; &#x2022;&nbsp; Music &nbsp;
              &#x2022;&nbsp; Play &nbsp; &#x2022; &nbsp; Love &nbsp; &#x2022; &nbsp; Music &nbsp; &#x2022; &nbsp; Play &nbsp; &#x2022; &nbsp; Love &nbsp; &#x2022;&nbsp; Music &nbsp;
              &#x2022;&nbsp;
            </div>
          </Marquee>
        </div>
        <div className="scroll-text1" style={{color:dark?"black":"var(--blue)"}}>
          <Marquee>
            <div>
            &nbsp; Play &nbsp; &#x2022; &nbsp; Love &nbsp; &#x2022; &nbsp; Music &nbsp; &#x2022; &nbsp; Play &nbsp; &#x2022; &nbsp; Love &nbsp; &#x2022;&nbsp; Music &nbsp;
              &#x2022;&nbsp;
            </div>
          </Marquee>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit ligula
          auctor dignissim eget. Adipiscing ut ultrices convallis eget eu.
          Bibendum nulla vitae egestas ut nisl. Egestas netus faucibus aliquet
          nibh volutpat morbi metus, commodo. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Velit ligula auctor dignissim eget.
          Adipiscing ut ultrices convallis eget eu. Bibendum nulla vitae egestas
          ut nisl. Egestas netus faucibus aliquet nibh volutpat morbi metus,
          commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Velit ligula auctor dignissim eget. Adipiscing ut ultrices convallis
          eget eu. Bibendum nulla vitae egestas ut nisl.
        </div>
      </div>
      <div className="bottom">

        <img src={dark?charDark:charLight} alt="" />
      </div>
    </Element>
  );
}

export default About;
