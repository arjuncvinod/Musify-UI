import { ThemeProvider } from './contexts/ThemeContext';
import "./App.css";
import Home from "./sections/Home/Home";
import Media from "./sections/Media/Media";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Signup from './sections/Signup/Signup';

function App() {
  return (
    <ThemeProvider>
      <Home />
      <Media />
      <About />
      <Contact />
      <Signup />
    </ThemeProvider>
  );
}
export default App;
