import Home from "./sections/Home/Home";
import "./App.css";
import Media from "./sections/Media/Media";
import { ThemeProvider } from './contexts/ThemeContext';
import About from "./sections/About/About";

function App() {
  return (
    <ThemeProvider>
      <Home />
      <Media />
      <About />
    </ThemeProvider>
  );
}
export default App;
