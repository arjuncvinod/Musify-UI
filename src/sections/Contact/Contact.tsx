import { Element } from "react-scroll";
import { useTheme } from "../../contexts/ThemeContext";
import "./Contact.css";
import contactDark from "../../assets/characters/contact-dark.png";
import contactLight from "../../assets/characters/contact-light.png";
function Contact() {
  const { dark } = useTheme();
  return (
    <Element
      id="contact"
      name="contact"
      style={{ backgroundColor: dark ? "black" : "var(--blue)" }}
    >
      <div className="bg-text" style={{ zIndex: dark ? "0" : "2" }}>
        <p className={dark ? "black-stroke" : "blue-stroke"}>CONTACT</p>
        <p className={dark ? "black-stroke" : "blue-stroke"}>US</p>
      </div>

      <div
        className="inner-bg"
        style={{
          backgroundColor: dark ? " rgba(255, 255, 255, 0.251)" : "white",
        }}
      >
        <div className="left">
          <div className="contact-form">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="someone@gmail.com"
              className={dark ? "dark-input" : "light-input"}
            />
            <label htmlFor="">What’s on your mind??</label>
            <textarea
              name=""
              id=""
              placeholder="write here..."
              className={dark ? "dark-input" : "light-input"}
            ></textarea>
          </div>
        </div>
        <div className="right">
          <img src={dark ? contactDark : contactLight} alt="" />
        </div>
      </div>
    </Element>
  );
}

export default Contact;
