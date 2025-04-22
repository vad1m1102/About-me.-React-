import { useState } from "react";
import MyPhoto from "./MyPhoto.png";

let stylesUser = [
  {
    color: "yellow",
    background: "blue",
    border: "2px solid yellow",
  },
  {
    color: "black",
    background: "#c471f5",
    border: "2px solid blue",
  },
  {
    color: "black",
    background: "lightblue",
    border: "5px solid teal",
  },
];

function UserCard() {
  const [styleRandom, setStyleRandom] = useState(stylesUser[0]);
  const [textBtn, setTextBtn] = useState(0);

  const handlerBtnClick = () => {
    let randomNumber = Math.round(Math.random() * 2);
    setStyleRandom(stylesUser[randomNumber] ?? stylesUser[0]);
    setTextBtn(randomNumber);
  };

  let cardStyle = {
    color: "black",
    fontSize: "16px",
    background: "lightblue",
    border: "5px solid teal",
    margin: "5px auto",
    padding: "10px",
    ...styleRandom,
  };

  return (
    <div style={cardStyle}>
      <h1>Про мене</h1>
      <h2>
        Ім'я: <span className="Highlight">Вадим </span>
      </h2>
      <h2>
        Прізвище: <span className="Highlight">Войцехівський </span>
      </h2>
      <p>
        Номер телефону: <span className="Highlight">+38031460164</span>
      </p>
      <p>
        Email:{" "}
        <span className="Highlight">vadimvoitsehivskyi1102@gmail.com</span>
      </p>
      <img style={{ width: "100px" }} src={MyPhoto} alt="My photo" />
      <button onClick={handlerBtnClick}>Change Style {textBtn}</button>
    </div>
  );
}

export default UserCard;
