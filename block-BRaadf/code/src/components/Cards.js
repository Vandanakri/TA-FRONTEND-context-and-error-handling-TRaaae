import Card from "./Card";
import { UserContext } from "../UserContext";
import { useContext } from "react";

function Cards() {
  let mode = useContext(UserContext);
  let isDarkMode = mode.data.isDarkMode;
  return (
    <div className="cards_wrap">
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
    </div>
  );
}

export default Cards;
