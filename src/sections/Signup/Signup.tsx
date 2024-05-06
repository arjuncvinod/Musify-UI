import { useTheme } from "../../contexts/ThemeContext";
import { Element } from "react-scroll";
import "./Signup.css";
import accoutAdd from "../../assets/icons/account-add.png";
import gicon from "../../assets/icons/google.png";
import charDark from "../../assets/characters/signup-dark.png"
import charLight from "../../assets/characters/signup-light.png"
import thinkDark from "../../assets/characters/signup2-dark.png"
import thinkLight from "../../assets/characters/signup2-light.png"
function Signup() {
  const { dark } = useTheme();
  return (
    <Element
      name="signup"
      id="signup"
      style={{ backgroundColor: dark ? "black" : "var(--blue)" }}
    >
      <h1>Account</h1>
      <div className="signup-content">
        <div className="left">
          <div
            className="form-container"
            style={{ backgroundColor: dark ? "var(--light-black)" : "white" }}
          >
            <div
              className="img-container"
              style={{
                backgroundColor: dark
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(70, 180, 242 , 0.5)",
              }}
            >
              <img src={accoutAdd} alt="" />
            </div>
            <form action="" className={dark ? "dark-form" : "light-form"}>
              <label htmlFor="">email</label>
              <input type="text" />
              <label htmlFor="">password</label>
              <input type="text" />
              <label htmlFor="">confirm password</label>
              <input type="text" />
              <button
                style={{ backgroundColor: dark ? "black" : "var(--blue)" }}
              >
                Sign up
              </button>
            </form>

            <hr />
            <button
              className="gsign-btn"
              style={{
                backgroundColor: dark
                  ? "black"
                  : "rgba(70, 180, 242 , 0.8)",
              }}
            >
              <img src={gicon} alt="" />
              sign up using google
            </button>
          </div>
        </div>
        <div className="right">
            <div className="col1">
                <img src={dark?charDark:charLight} alt="" />
            </div>
            <div className="col2">
            <img src={dark?thinkDark:thinkLight} alt="" />
              <div className="notsign-txt">
              NOT <br />SIGNED <br /> UP <br />YET??
              </div>
            </div>
        </div>
      </div>
    </Element>
  );
}

export default Signup;
