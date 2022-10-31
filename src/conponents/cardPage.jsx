import React from "react";
import StudentCard from "./studentCard";
import { Link } from "react-router-dom";

const CardPage = () => {
  return (
    <div>
      <div>
        <h1>Карточка Студента:</h1>
        <StudentCard />
        <Link to={"/RegistrForm"} className="nav-link"><button className="btn btn-primary">Добавить</button></Link>
      </div>
    </div>
  );
};

export default CardPage;
