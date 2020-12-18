import React, { useState } from 'react';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../formik/FormikControl'
import s from './ChangeTask.module.css';
import styles from '../addHabit/AddHabit.module.css';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import operations from '../../../redux/tasks/taskOperations';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderSmall } from '../../UIcomponents/LoaderSmall/LoaderSmall';

const ChangeTask = ({ close, data }) => {
  const children = useSelector(state => state.children.userChildrens);
  const loaderTask = useSelector(state => state.tasks.loaderTask);
  const errorTask = useSelector(state => state.tasks.errorTask);

  const dispatch = useDispatch();


  const initialOptions = [{ key: 'Виберіть дитину', value: '' }]

  const dropdownOptions = children.length > 0 &&
    initialOptions.concat(children.map(child => {
      let name = child.name;
      let dbId = child._id;
      return { key: name, value: dbId }
    }))


  const initialValues = {
    name: data.name,
    childId: data.childId,
    points: data.points,
    daysToComplete: data.daysToComplete
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Обов'язкове поле").min(6, "Мінімальна довжина: 6 символів"),
    childId: Yup.string().required('Оберіть один з варіантів'),
    points: Yup.string()
      .required("Обов'язкове поле")
      .matches(/[0-9]$/i, 'Введіть  число',),
    daysToComplete: Yup.number()
  });

  const onSubmit = async values => {
    console.log('Request data', values)
    const result = await dispatch(
      operations.updateTask(values, data._id),
    );
    if (result) {
      close();
    }
  }

  // const [taskName, setTaskName] = useState(data.name);
  // const [mark, setMark] = useState(data.points);
  // const [taskTarget, setTaskTarget] = useState(data.childId);
  // const [taskDays, setTaskDays] = useState(data.daysToComplete);

  // const handleSubmit = async evt => {
  //   evt.preventDefault();
  //   const result = await dispatch(
  //     operations.updateTask(
  //       {
  //         name: taskName,
  //         childId: taskTarget,
  //         points: mark,
  //         daysToComplete: taskDays,
  //       },
  //       data._id,
  //     ),
  //   );
  //   if (result) {
  //     close();
  //   }
  // };
  const handleDelete = () => {
    dispatch(operations.deleteTask(data._id));
    close();
  };

  return (
    <>
      <div className={styles.modalBody}>
        <h2 className={styles.title}>Додавання задачі</h2>
        <div className={styles.form} onSubmit={onSubmit}>
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
                    label='Призначення задачі'
                    name='childId'
                    options={dropdownOptions}
                  />
                  <FormikControl
                    control='pointsInput'
                    type='string'
                    label='Бал'
                    name='points'
                  />
                  <FormikControl
                    control='daysInput'
                    type='string'
                    label='Дні на виконання (необов’язково)'
                    name='daysToComplete'
                  />
                  <button
                    type="button"
                    className={s.btnDelete}
                    onClick={() => handleDelete()}
                  >
                    <span className={s.btnDeleteIcon}></span> Видалити задачу
                </button>

                  <div className={styles.buttonsBlock}>
                    <button className={styles.buttonSave} type='submit'>
                      {!loaderTask && <span>Зберегти</span>}
                      {loaderTask && <LoaderSmall />}
                    </button>
                    <button className={styles.buttonCancle} onClick={() => close()}>
                      Відміна
             </button>
                  </div>
                  {errorTask && <span>Ops ... err={errorTask}</span>}
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


      {/* <div className={styles.modalBody}>
        <h2 className={styles.title}>Редагування задачі</h2>
        <form className={styles.form}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>
              <p className={styles.inputName}>Назва</p>
              <input
                defaultValue={data.name}
                className={styles.input}
                onChange={({ target: { value } }) => setTaskName(value)}
                placeholder="Введіть назву"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Призначення звички</p>
              <select
                defaultValue={data.childId}
                value={children.childId}
                className={styles.select}
                onChange={({ target: { value } }) => setTaskTarget(value)}
                placeholder="Оберіть дитину"
              >
                <option key={children.id}>Оберіть дитину</option>
                {children &&
                  children.map(child => (
                    <option key={child._id} value={child._id}>
                      {child.name}
                    </option>
                  ))}
              </select>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>Бал</p>

              <input
                defaultValue={data.points}
                className={styles.inputMark}
                onChange={({ target: { value } }) => setMark(value)}
                placeholder="__"
              ></input>
            </label>
            <label className={styles.label}>
              <p className={styles.inputName}>
                Дні на виконання (необов’язково)
              </p>

              <input
                defaultValue={data.daysToComplete}
                className={styles.inputDays}
                onChange={({ target: { value } }) => setTaskDays(value)}
                placeholder="___"
              ></input>
            </label>
            <button className={styles.btnDelete} onClick={() => handleDelete()}>
              <span className={styles.btnDeleteIcon}></span> Видалити задачу
            </button>
          </div>
          <div className={styles.buttonsBlock}>
            <button onClick={handleSubmit} className={styles.buttonSave}>
              {!loaderTask && <span>Зберегти</span>}
              {loaderTask && <LoaderSmall />}
            </button>

            <button className={styles.buttonCancle} onClick={() => close()}>
              Відміна
            </button>
          </div>
          {errorTask && <span>Ops ... err={errorTask}</span>}
        </form>
        <button
          onClick={() => close()}
          className={styles.modalCloseBtn}
        ></button>
      </div> */}
    </>
  );
};

export default modalBackDrop(ChangeTask);
