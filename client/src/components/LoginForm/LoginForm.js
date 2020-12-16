import React, { useState } from 'react';
import Button from '../UIcomponents/Button/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BasicInput } from '../UIcomponents/Input/BasicInput';
import styles from './LoginForm.module.css';
import BubbleComponent from '../UIcomponents/BubbleComponent/BubbleComponent';
import { signIn } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail введено некоректно')
    .required(`Це обов'язкове поле`)
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/i,
      'E-mail не валідний, приклад: mail123@gmail.com',
    ),
  password: yup
    .string()
    .required(`Це обов'язкове поле`)
    .min(8, 'Пароль повинен містити як мінімум 8 символів')
    .max(16, 'Пароль може містити максимум 16 символів')
    .matches(
      /[A-Za-z0-9]$/i,
      'Пароль може містити тільки латинські букви і/або цифри, він не повинен містити пропуски і розділові знаки',
    ),
});

export const LoginForm = () => {
  const [, setEmail] = useState('');
  const [, setPassword] = useState('');

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const dispatch = useDispatch();

  const onSubmit = data => dispatch(signIn(data));

  return (
    <>
      <form className={styles.relative} onSubmit={handleSubmit(onSubmit)}>
        <BasicInput
          handleChange={({ target: { value } }) => {
            setEmail(value);
          }}
          styleValidate={errors.email ? 'invalid' : null}
          reg={register}
          forLabel="email"
          id="email"
          labelText="Ваш E-mail"
          name="email"
          placeholder="E-mail"
          labelWidth="147"
          inputWidth="340"
          type="email"
        />

        <BasicInput
          handleChange={({ target: { value } }) => {
            setPassword(value);
          }}
          styleValidate={errors.password ? 'invalid' : null}
          reg={register}
          lastchild
          forLabel="password"
          id="password"
          labelText="Введіть пароль"
          name="password"
          placeholder="-------"
          labelWidth="147"
          inputWidth="340"
          type="password"
        />

        <div className={styles.btn_centred}>
          <Button type="Submit" label="Увійти" orange />
        </div>

        {errors.email && (
          <BubbleComponent
            width="230px"
            height="45px"
            top="82px"
            msg={errors.email.message}
          />
        )}
        {errors.password && (
          <BubbleComponent
            width="300px"
            height="46px"
            top="174px"
            msg={errors.password.message}
          />
        )}
      </form>
    </>
  );
};
