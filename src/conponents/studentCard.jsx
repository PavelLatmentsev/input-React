import React from "react";

const StudentCard = () => {
const dataCardValue = localStorage.getItem('dataCard');
const dataCard = JSON.parse(dataCardValue);
    return ( 
        
        <div> 
            {dataCard ? (<div>
                            <h4>Имя:{dataCard.name}</h4>
                            <h4>Фамилия:{dataCard.lastname}</h4>
                            <h4>Год Рождения:{dataCard.yearbith}</h4>
                            <h4>Портфолио:{dataCard.portfolio}</h4>
                        </div>
            ) : <h3>Нет Данных</h3>}

        </div>
     );
}
 
export default StudentCard;