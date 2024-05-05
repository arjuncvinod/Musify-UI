import Moon from "../assets/icons/moon.png";
import Sun from "../assets/icons/sun.png";

type ToggleBtnProps = {
  setTheme: boolean;
  toggle: () => void;
};

const ToggleBtn: React.FC<ToggleBtnProps> = ({ setTheme, toggle }) => (
  <div>
    <div className="switch">
      <input type="checkbox" name="toggle" onChange={toggle} />
      <label
        htmlFor="toggle"
        style={{ backgroundColor: setTheme ? "black" : "white" }}
      >
        <i style={{ backgroundColor: setTheme ? "white" : "black" }}>
          <div className="moon">
            <img alt="" src={setTheme ? Moon : Sun} />
          </div>
        </i>
      </label>
    </div>
  </div>
);

export default ToggleBtn;
