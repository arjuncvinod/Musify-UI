import { useRef, RefObject } from "react";
import { Element } from "react-scroll";
import "./Media.css";
import MediaCard from "../../components/MediaCard";
import { useTheme } from "../../contexts/ThemeContext";
import data from "../../data/data";

function Media() {
  const { dark } = useTheme();
  function setTheme() {
    return dark ? "black" : "var(--blue)";
  }

  const cardsContainerRef1: RefObject<HTMLDivElement> = useRef(null); // Specify the type of the ref
  const cardsContainerRef2: RefObject<HTMLDivElement> = useRef(null); // Specify the type of the ref

  const handleScrollArrowClick1 = () => {
    if (cardsContainerRef1.current) {
      const scrollAmount = 220;
      cardsContainerRef1.current.scrollLeft += scrollAmount;
    }
  };
  const handleScrollArrowClick2 = () => {
    if (cardsContainerRef2.current) {
      const scrollAmount = 220;
      cardsContainerRef2.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Element name="media" id="media" style={{ backgroundColor: setTheme() }}>
      <div className="row row1">
        <h1>What’s Rolling?</h1>
      </div>
      <div className="row row2">
        <h3>Happening Today..</h3>
        <div className="container">
          <div className="cards-container" ref={cardsContainerRef1}>
            {data.map((item) => (
              <MediaCard
                key={item.id}
                image={item.image}
                heading={item.heading}
              />
            ))}
          </div>
          <button
            className="scroll-arrow"
            onClick={handleScrollArrowClick1}
            style={{
              backgroundColor: dark
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(70,180,242,.5)",
            }}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
      <div className="row row3">
        <h3>Upcoming..</h3>
        <div className="container">
          <div className="cards-container" ref={cardsContainerRef2}>
            {data.map((item) => (
              <MediaCard
                key={item.id}
                image={item.image}
                heading={item.heading}
              />
            ))}
          </div>
          <button
            className="scroll-arrow"
            onClick={handleScrollArrowClick2}
            style={{
              backgroundColor: dark
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(70,180,242,.5)",
            }}
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </Element>
  );
}

export default Media;
