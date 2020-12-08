import React, {useState} from 'react';
import { BasicInput } from '../UIcomponents/Input/BasicInput';

export const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    // here will be dispatch func
  }

  // Кнопки входа подключу как стяну мастера (Наташа сделала компоненты)
  return(
    <>
    <form onSubmit={handleSubmitForm}>
      <BasicInput handleChange={({target:{value}})=>{setEmail(value)}} forLabel='email' id='email' labelText='Ваш E-mail' name='email' placeholder='E-mail' labelWidth='147' inputWidth='340' type='email' /> 
      <BasicInput handleChange={({target:{value}})=>{setPassword(value)}} lastchild forLabel='password' id='password' labelText='Введіть пароль' name='password' placeholder='-------' labelWidth='147' inputWidth='340' type='password' /> 
      <button type='Submit'>click</button>
    </form>
    </>
  )
}