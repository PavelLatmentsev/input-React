import React from "react";
import StudentCard from "./studentCard";
import { Link } from "react-router-dom";

const CardPage = () => {
  const dataCardValue = localStorage.getItem("dataCard");
  const dataCard = JSON.parse(dataCardValue);
  return (
    <div className="container">
<div className="card col-6" style={{width:'30rem'}}>
  <div className="card-body">
        <h1 className="card-title" >Карточка Студента:</h1>
        </div>
        <StudentCard dataCard={dataCard}/>
        <Link to={"/RegistrForm"} className="nav-link"><button className="btn btn-primary">{dataCard ? "Редактировать" : "Добавить"}</button></Link>
      </div>
    </div>
  );
};

export default CardPage;
