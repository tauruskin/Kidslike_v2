import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from './AddFormPresent.module.css';

export function AddFormPresent() {
  //const dispatch = useDispatch();
  const [error, SetError] = useState(null);
  const initialValues = {
    presentTitle: '',
  };

  const onSubmit = async (values, submitProps) => {
    const data = false;
    //const data = await dispatch(); прослойка для запроса
    if (data) {
      submitProps.setSubmitting(false);
      submitProps.resetForm();
    }
  };

  const validationSchema = Yup.object({
    presentTitle: Yup.string().required('Required!'),
    password: Yup.string().min(6).required('Required!'),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className={styles.Container}>
      <div className={styles.FormWrap}>
        <h3 className={styles.Title}>Додавання подарунку</h3>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div>
            <label className={styles.Label} htmlFor="presentTitle">
              Назва{' '}
            </label>
            <input
            className={styles.Input}
              type="text"
              id="presentTitle"
              name="presentTitle"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.presentTitle}
            />
            {formik.touched.presentTitle && formik.errors.presentTitle ? (
              <div>{formik.errors.presentTitle}</div>
            ) : null}
          </div>
          <div>
            <label className={styles.Label} htmlFor="presentReceiver">
              Призначення подарунку
            </label>
          </div>
          <select id="presentReceiver" className={styles.Input}>
            <option defaultValue="Оберіть дитину">
              Оберіть дитину
            </option>
            <option>Masha</option>
            <option>Dasha</option>
          </select>
          <div>
            <button>Відміна</button>
            <button>Зберегти</button>
          </div>
        </form>
      </div>
    </div>
  );
}
