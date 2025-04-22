import { useState } from "react";

let styleCity = [
  {
    color: "white",
    background: "blue",
    border: "2px solid yellow",
  },
  {
    color: "teal",
    background: "white",
    border: "2px solid blue",
  },
  {
    color: "black",
    background: "lightblue",
    border: "5px solid teal",
  },
];

function NativeCity() {
  const [styleRandom, setStyleRandom] = useState(styleCity[0]);
  const [textBtn, setTextBtn] = useState(0);

  const handlerBtnClick = () => {
    let randomNumber = Math.round(Math.random() * 2);
    setStyleRandom(styleCity[randomNumber] ?? styleCity[0]);
    setTextBtn(randomNumber);
  };

  let cardStyle = {
    color: "black",
    fontSize: "16px",
    background: "lightblue",
    border: "5px solid teal",
    margin: "5px auto",
    ...styleRandom,
  };
  return (
    <div style={cardStyle}>
      <h1>Моє рідне місто</h1>
      <h2> Місто: Звягель </h2>
      <h2>Країна: Україна</h2>
      <p>Рік заснування: 1257</p>
      <div className="photo">
        <img
          src="https://novograd.city/upload/article/o_1g5ogqdsgdb318s0hce1qa51ncl2h.JPG"
          alt="Звягель"
        />
        <img
          src="https://funtime.com.ua/u/i/gallery/2022/09/zvyagel-fort-1-63223f9894e9e.jpg"
          alt="фортеця"
        />
      </div>
      <button onClick={handlerBtnClick}>Change Style {textBtn}</button>
    </div>
  );
}

export default NativeCity;
