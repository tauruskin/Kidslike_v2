import React from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formik/FormikControl'
import styles from './AddHabit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import habitOperations from '../../../redux/habit/habitOperations';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderSmall } from '../../UIcomponents/LoaderSmall/LoaderSmall';

const AddHabbit = ({ close }) => {
  const dispatch = useDispatch();
  const children = useSelector(state => state.children.userChildrens);
  const loaderHabit = useSelector(state => state.habits.loaderHabit);
  const errorHabit = useSelector(state => state.habits.errorHabit);

  const initialOptions = [{ key: 'Виберіть дитину', value: '' }]

  const dropdownOptions = children.length > 0 &&
    initialOptions.concat(children.map(child => {
      let name = child.name;
      let dbId = child._id;
      return { key: name, value: dbId }
    }))


  const initialValues = {
    name: '',
    childId: '',
    points: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Обов'язкове поле").min(6, "Мінімальна довжина: 6 символів"),
    childId: Yup.string().required('Оберіть один з варіантів'),
    points: Yup.string()
      .required("Обов'язкове поле")
      .matches(/[0-9]$/i, 'Введіть  число',),
  });


  const onSubmit = (values) => {
    console.log('Request data', values)
    dispatch(
      habitOperations.addHabit(values),
    );
    close();
  }


  return (
    <div className={styles.modalBody}>
      <h2 className={styles.title}>Додавання звички</h2>
      <div className={styles.form}>
        <div className={styles.inputBlock}>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {formik => (
              <Form>
                <FormikControl
                  control='input'
                  type='string'
                  label='Назва'
                  name='name'
                />
                <FormikControl
                  control='select'
                  label='Призначення звички'
                  name='childId'
                  options={dropdownOptions}
                />
                <FormikControl
                  control='pointsInput'
                  type='string'
                  label='Бал'
                  name='points'
                />
                <div className={styles.buttonsBlock}>
                  <button className={styles.buttonSave} type='submit'>
                    {!loaderHabit && <span>Зберегти</span>}
                    {loaderHabit && <LoaderSmall />}
                  </button>
                  <button className={styles.buttonCancle} onClick={() => close()}>
                    Відміна
             </button>
                </div>
                {errorHabit && <span>Ops ... err={errorHabit}</span>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <button
        onClick={() => close()}
        className={styles.modalCloseBtn}
      ></button>
    </div>
  )
};

export default modalBackDrop(AddHabbit);
