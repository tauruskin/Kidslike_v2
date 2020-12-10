import React, {useState} from 'react'
import { BasicInput } from '../UIcomponents/Input/BasicInput';

export const RegisterForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    
  }

  return(
    <>
    <form onSubmit={handleSubmitForm}>
      <BasicInput handleChange={({target:{value}})=>{setEmail(value)}} forLabel='email' id='email' labelText='Ваш E-mail' name='email' placeholder='E-mail' labelWidth='147' inputWidth='340' type='email' /> 
      <BasicInput handleChange={({target:{value}})=>{setPassword(value)}} forLabel='password' id='password' labelText='Введіть пароль' name='password' placeholder='-------' labelWidth='147' inputWidth='340' type='password' /> 
      <BasicInput handleChange={({target:{value}})=>{setUsername(value)}} lastChild forLabel='username' id='username' labelText='Ваше ім’я' name='username' placeholder='Ім’я' labelWidth='147' inputWidth='340' type='text' /> 
      <button type='Submit'>click</button>
    </form>
    </>
  )
}