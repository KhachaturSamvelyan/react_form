import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./Input";
import { SelectField } from "./Select";

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Регистрация</h1>
        <div className="sign">
          <p>Уже есть аккаунт?</p>
          <Link to="/sign">Войти</Link>
        </div>

        <Input
          control={control}
          name="Введите Ваше имя"
          rules={{ required: true, pattern: /^[\sA-Za-z-А-Яа-я-_/i]+$/i }}
          for={"name"}
          labelName={"Имя"}
        />

        <Input
          control={control}
          name="Введите ваш email"
          rules={{
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          }}
          for={"email"}
          labelName={"Еmail"}
        />

        <Input
          control={control}
          name="Введите номер телефона"
          rules={{
            required: true,
            pattern:
              /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/g,
          }}
          for={"tel"}
          labelName={"Номер телефона"}
        />
        <label className="label-inp">
          <p>Язык</p>
          <SelectField
            control={control}
            name="select"
            rules={{
              required: "Выберите язык",
            }}
          />
          <p className="error">{errors.select?.message}</p>
        </label>

        <div className="label-content">
          <label className="container-label ">
            <input 
              type="checkbox" 
              // defaultChecked="checked" 
              name="checkbox"
              {
                ...register('checkbox', { required: 'true' })
              }

              />
            <span className={"checkmark " + (errors.checkbox?.message === 'true' ? 'check-mark-error' : 'false')}/>
            <p>
              Принимаю <Link to={"/policy"}>условия</Link> использования
            </p>
          </label>
        </div>

        <input
          type="submit"
          className="btn"
          value="Зарегистрироваться"
          disabled={!isValid}
        />
      </form>
    </div>
  );
};
