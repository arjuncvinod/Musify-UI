import React from "react";
import solo from "../assets/media-images/solo.png";
import edms from "../assets/media-images/edms.png";
import podcasts from "../assets/media-images/podcasts.png";
import rock from "../assets/media-images/rock.png";
import { useTheme } from "../contexts/ThemeContext";

interface MediaCardProps {
  image: string;
  heading: string;
}

const getImagePath = (imageName: string): string => {
  switch (imageName) {
    case "solo":
      return solo;
    case "edms":
      return edms;
    case "podcasts":
      return podcasts;
    case "rock":
      return rock;
    default:
      return "";
  }
};

const MediaCard: React.FC<MediaCardProps> = ({ image, heading }) => {
  const imagePath = getImagePath(image);
  const { dark } = useTheme();
  return (
    <div className="media-card" style={{backgroundColor:dark?"var(--light-black)":"white"}}>
      <img src={imagePath} alt="" />
      <div className="contents" style={{color:dark?"white":"black"}}>
        <h1 style={{fontWeight:dark?"400":"500"}}>{heading}</h1>
        <p style={{fontWeight:dark?"400":"500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <a href="/">
          Play now <span className="material-symbols-outlined">arrow_forward</span>{" "}
        </a>
      </div>
    </div>
  );
};

export default MediaCard;
