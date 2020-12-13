import React, {useState} from 'react'
import Button from '../UIcomponents/Button/Button';
import { BasicInput } from '../UIcomponents/Input/BasicInput';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import BubbleComponent from '../UIcomponents/BubbleComponent/BubbleComponent';
import styles from '../LoginForm/LoginForm.module.css'
import { signUp } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email('E-mail введено некоректно').required(`Це обов'язкове поле`)
  .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/i,'E-mail не валідний, приклад: mail123@gmail.com'),
  password: yup.string().required(`Це обов'язкове поле`).min(8,'Пароль повинен містити як мінімум 8 символів')
  .max(16,'Пароль може містити максимум 16 символів')
  .matches( /[A-Za-z0-9]$/i,'Пароль може містити тільки латинські букви і/або цифри, він не повинен містити пропуски і розділові знаки'),
  username: yup.string().required(`Це обов'язкове поле`).min(2,'Ім’я повинне містити як мінімум 2 символа')
  //найти валидное выражение
  .max(16,'Ім’я повинне містити максимум 16 символів').matches(/[A-Za-zА-Яа-яЁё]$/i,'Ім’я повинне містити тільки букви')
});

export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const onSubmit = data => dispatch(signUp(data));

  return(
    <>
    <form className={styles.relative} onSubmit={handleSubmit(onSubmit)}>
      <BasicInput handleChange={({target:{value}})=>{setEmail(value)}} styleValidate={errors.email ?'invalid': null} 
      reg={register} forLabel='email' id='email' labelText='Ваш E-mail' name='email' placeholder='E-mail' labelWidth='147' inputWidth='340' type='email' /> 

      <BasicInput handleChange={({target:{value}})=>{setPassword(value)}} styleValidate={errors.password ?'invalid': null}
      reg={register} forLabel='password' id='password' labelText='Введіть пароль' name='password' placeholder='-------' labelWidth='147' inputWidth='340' type='password' /> 

      <BasicInput handleChange={({target:{value}})=>{setUsername(value)}} styleValidate={errors.username ?'invalid': null}
      reg={register} lastChild forLabel='username' id='username' labelText='Ваше ім’я' name='username' placeholder='Ім’я' labelWidth='147' inputWidth='340' type='text' /> 

      <div className={styles.btn_centred}>
        <Button  type='Submit' label='Зареєструватись' orange/>
      </div>
      {errors.email && <BubbleComponent width='230px' height='45px' 	top='82px' msg={errors.email.message}/>}
      {errors.password && <BubbleComponent width='300px' height='46px' top='174px' msg={errors.password.message}/>}
      {errors.username && <BubbleComponent width='300px' height='46px' top='266px' msg={errors.username.message}/>}
    </form>
    </>
  )
}