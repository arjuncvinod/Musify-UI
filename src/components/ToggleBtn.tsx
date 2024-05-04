import Moon from "../assets/icons/moon.png"
function ToggleBtn(prop:any) {
  return (
    <div>
      <div className="switch">
        <input type="checkbox" name="toggle" onChange={prop.toggle} />
        <label htmlFor="toggle" style={prop.setTheme?{backgrondColor:"black"}:{backgroundColor:"white"}}>
          <i style={prop.setTheme?{backgrondColor:"white"}:{backgroundColor:"black"}}>
            <div className="moon"><img src={Moon} alt="" style={prop.setTheme?{filter:"invert(0)"}:{filter: "invert(1)"}}/></div>
          </i>
        </label>

      </div>
    </div>
  );
}

export default ToggleBtn;
