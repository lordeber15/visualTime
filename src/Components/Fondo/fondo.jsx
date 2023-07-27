import style from "./fondo.module.css";
import Lottie from "lottie-react";
import visualTime from "../../assets/visualLogoOriginalCompleto.json";

export default function Fondo() {
  return (
    <body>
      <div className={style.context}>
        <h1>Estamos revelando las fotos para ti esperanos Pronto</h1>
        <div className={style.container}>
          <div className={style.animacion}>
            <Lottie animationData={visualTime} loop={false} />
          </div>
        </div>
      </div>

      <div className={style.area}>
        <ul className={style.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </body>
  );
}
