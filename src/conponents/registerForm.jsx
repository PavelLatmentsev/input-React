import React from "react";
import { useState } from "react";
import TextField from "./textField";
import Modal from "./modal";
const RegistrForm = () => {
    const [data, setData] = useState({name:"", lastname:"", yearbith:"", portfolio:""});
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    const heandlerChange = ({target}) => {
        setData((prevState) => ({
            ...prevState,[target.name]: target.value 
        }))
    }
    const  heanleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("dataCard", JSON.stringify(data))
    }
    return (  <div>
        <h1>Создать</h1>
         <form onSubmit={heanleSubmit}>
        <TextField name="name" label="Имя" type="text" value={data.name} onChange={heandlerChange} />
        <TextField name="lastname" label="Фамилия" type="text" value={data.lastname} onChange={heandlerChange}/>
        <TextField name="yearbith" label="Год Рождения" type="number" value={data.yearbith} onChange={heandlerChange}/>
        <TextField name="portfolio" label="Год Рождения" type="text" value={data.portfolio} onChange={heandlerChange}/>
        <button type="submit" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">Создать</button>
         </form>
         <Modal/>
         
    </div> );
}
 
export default RegistrForm;