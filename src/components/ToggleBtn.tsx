import Moon from "../assets/icons/moon.png"
import Sun from "../assets/icons/sun.png"
function ToggleBtn(prop:any) {
  return (
    <div>
      <div className="switch">
        <input type="checkbox" name="toggle" onChange={prop.toggle} />
        <label htmlFor="toggle" style={prop.setTheme?{backgrondColor:"black"}:{backgroundColor:"white"}}>
          <i style={prop.setTheme?{backgrondColor:"white"}:{backgroundColor:"black"}}>
            <div className="moon"><img alt="" src={prop.setTheme?Moon:Sun}/></div>
          </i>
        </label>

      </div>
    </div>
  );
}

export default ToggleBtn;
