import React, { useState } from 'react';
import styles from './AddPresent.module.css';
import Button from '../../UIcomponents/Button/Button';
import { BasicInput } from '../../UIcomponents/Input/BasicInput';
import { CustomSelect } from '../../UIcomponents/CustomSelect/CustomSelect';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';

function AddPresent({ close }) {
  //const dispatch = useDispatch();
  const [presentTitle, setPresentTitle] = useState('');
  const [mark, setMark] = useState('');
  const [childName, setChildName] = useState('Оберіть дитину');
  const [img, setImg] = useState('');

  const handleTitleChange = event => {
    setPresentTitle(event.target.value);
  };

  const handleNameChange = event => {
    setChildName(event.target.value);
  };
  const resetState = () => {
    setPresentTitle('');
    setChildName('Оберіть дитину');
    setMark('');
    setImg('');
  };

  const handleSubmit = event => {
    console.log('presentTitle:', presentTitle);
    console.log('mark:', mark);
    console.log('childName', childName);
    console.log('img', img);

    event.preventDefault();
    //dispatch logic
    resetState()
    close();
  };

  return (
    <div className={styles.Container}>
      <div className={styles.FormWrap}>
        <h3 className={styles.Title}>Додавання подарунку</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <BasicInput
            forLabel={'presentTitle'}
            id={'presentTitle'}
            labelText={'Назва'}
            value={presentTitle}
            name="presentTitle"
            handleChange={handleTitleChange}
            placeholder={'Введіть назву'}
            inputWidth={340}
            type="text"
          />
          <CustomSelect
            id={'childName'}
            name={'childName'}
            labelText={'Призначення подарунку'}
            handleChange={handleNameChange}
            value={childName}
          />
          <div className={styles.Wrapper}>
            <Button
              type="button"
              handleClick={close}
              label={'Відміна'}
              bordered={true}
            />
            <Button
              type="submit"
              label={'Зберегти'}
              orange={true}
              disabled={!presentTitle || childName === 'Оберіть дитину'}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default modalBackDrop(AddPresent);