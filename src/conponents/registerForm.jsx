import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "./textField";
import { validator } from "../utils/validator";
import { Link } from "react-router-dom";
const RegistrForm = () => {
  const history=useHistory();
   const validatorConfig = {
    name: {
      isRequired: {
        message: "Имя обязательно для заполнения",
      },
    },
    lastname: {
      isRequired: {
        message: "Фамилия обязательна для заполнения",
      },
    },
    yearbith: {
      isRequired: {
        message: "Год Рождения обязателен для заполнения",
      },
      max: {
        message: "А вот год рождения, введён таки некорректно!",
        value: 4,
      },
      isRealYear: {
        message: "Год рождения введен не правильно",
        value: new Date().getFullYear(),
      },
    },
    portfolio: {
      isRequired: {
        message: "Поле портфолио обязательно для заполнения",
      },
      isUrl: {
        message: "Поле Портфолио введено не корректно",
      },
    },
  };

  const [data, setData] = useState({
    name: "",
    lastname: "",
    yearbith: "",
    portfolio: "",
  });

  const heandlerChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  useEffect(() => {
    validate();
  }, [data]);

  const heanleSubmit = (e) => {
    e.preventDefault();
   localStorage.setItem("dataCard", JSON.stringify(data));
    const isValid = validate();
    if (!isValid) return;
    alert('обновлено')
  };
  const isStoroge = !!localStorage.getItem('dataCard')
console.log(isStoroge)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4">
          <h1>Создать</h1>
          <form onSubmit={heanleSubmit}>
            <TextField
              name="name"
              label="Имя"
              type="text"
              value={data.name}
              onChange={heandlerChange}
              error={errors.name}
            />
            <TextField
              name="lastname"
              label="Фамилия"
              type="text"
              value={data.lastname}
              onChange={heandlerChange}
              error={errors.lastname}
            />
            <TextField
              name="yearbith"
              label="Год Рождения"
              type="number"
              value={data.yearbith}
              onChange={heandlerChange}
              error={errors.yearbith}
            />
            <TextField
              name="portfolio"
              label="Портфолио"
              type="text"
              value={data.portfolio}
              onChange={heandlerChange}
              error={errors.portfolio}
            />
            {isStoroge && <Link to={"/"}> <button className="btn btn-secondary">Назад</button> </Link> }
            <button
          type="submit"
          className="btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => history.goBack()}
          >
          {isStoroge ? "Обновить" : "Создать" }
        </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrForm;
