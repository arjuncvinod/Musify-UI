import { Link as ScrollLink } from 'react-scroll';
import ellipse from "../assets/icons/Ellipse.png"
const ScrollNavLink = ({ to, children}) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    <button>
      <img src={ellipse} alt="" />
    </button>
  </ScrollLink>
);

export default ScrollNavLink;
