import React from "react";

const StudentCard = ({dataCard}) => {

  return (
    <div>
      {dataCard ? (
        <div>
          <h4>Имя:{dataCard.name}</h4>

          <h4>Фамилия:{dataCard.lastname}</h4>

          <h4> Год Рождения:{dataCard.yearbith}</h4>

          <span>Портфолио:{<a href="#">{dataCard.portfolio}</a>}</span>
        </div>
      ) : (
        <h3>Нет Данных</h3>
      )}
    </div>
  );
};

export default StudentCard;
