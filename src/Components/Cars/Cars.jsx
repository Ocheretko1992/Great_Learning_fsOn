import clsx from "clsx";
import s from "./Cars.module.css";

const Cars = ({ listCars }) => {
  return (
    <div className={s.wraper}>
      <ul>
        {listCars.map(({ brand = "Not Auto", model, year, id }) => (
          <li key={id} className="LiCar">
            <div className={clsx(s.yearClasik, year <= 2019 && s.year)}>
              <h1>{brand}</h1>
              <h3>{model}</h3>
              <p>{year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cars;
