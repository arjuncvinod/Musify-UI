import { ThemeProvider } from './contexts/ThemeContext';
import "./App.css";
import Home from "./sections/Home/Home";
import Media from "./sections/Media/Media";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <ThemeProvider>
      <Home />
      <Media />
      <About />
      <Contact />
    </ThemeProvider>
  );
}
export default App;
