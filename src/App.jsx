import { useState } from "react";

function App() {

  const [isDarModeActive, setIsDarModeActive] = useState(true)

  const [themeColor, setThemeColor] = useState("red")

  const handleDarkModeSelection = () => {
    // use can also use user input value
    if (isDarModeActive) {
      document.documentElement.classList.remove('dark')
      setIsDarModeActive(false)
    } else {
      document.documentElement.classList.add('dark')
      setIsDarModeActive(true)
      // is use pass custom value for darmode use can use
      // document.querySelector(':root').style.setProperty('--darModeColor', customColorValue);
    }
  }

  const handleChangeThemeColor = (colorCode)=>{
    // use can also use user input value
    setThemeColor(colorCode)
    document.querySelector(':root').style.setProperty('--primary', colorCode);

  }

  return (
    <div className={`w-full text-center text-primary m-4`}>
      <h1>Theme Practice</h1>
      <div className="m-4 cursor-pointer" onClick={() => handleDarkModeSelection()}>{!isDarModeActive ? "Enable Dark Mode" : "Enable Light Mode"}</div>
      <div>
        <div>Change Theme Color</div>
        <div>
          <div className="m-4 cursor-pointer" onClick={()=>handleChangeThemeColor("red")}>Red</div>
          <div className="m-4 cursor-pointer" onClick={()=>handleChangeThemeColor("green")}>green</div>
          <div className="m-4 cursor-pointer" onClick={()=>handleChangeThemeColor("yellow")}>yellow</div>
          <div className="m-4 cursor-pointer" onClick={()=>handleChangeThemeColor("orange")}>orange</div>
        </div>
      </div>
    </div>
  );
}

export default App;
