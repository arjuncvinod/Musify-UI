import Home from "./sections/Home/Home";
import "./App.css";
import Media from "./sections/Media/Media";
import { ThemeProvider } from './contexts/ThemeContext';
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(true);
  
  return (
    <ThemeProvider>
      <Home theme={dark} setTheme={setDark} />
      <Media />
    </ThemeProvider>
  );
}
export default App;
