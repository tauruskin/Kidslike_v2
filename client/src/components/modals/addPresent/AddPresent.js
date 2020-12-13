import React, { useState } from 'react';
import styles from './AddPresent.module.css';
import Button from '../../UIcomponents/Button/Button';
import { BasicInput } from '../../UIcomponents/Input/BasicInput';
import { CustomSelect } from '../../UIcomponents/CustomSelect/CustomSelect';
import modalBackDrop from '../../modalBackDrop/ModalBackDrop';
import { MarkInput } from '../../UIcomponents/MarkInput/MarkInput';

function AddPresent({ close }) {
  //const dispatch = useDispatch();
  const [presentTitle, setPresentTitle] = useState('');
  const [mark, setMark] = useState('');
  const [childName, setChildName] = useState('Оберіть дитину');
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileError, setFileError] = useState('');
  const fileInput = React.createRef();

  const handleTitleChange = event => {
    setPresentTitle(event.target.value);
  };

  const handleNameChange = event => {
    setChildName(event.target.value);
  };
  const handleMarkChange = event => {
    setMark(event.target.value);
  };
  const handleFileChange = () => {
    const imgFile = fileInput.current.files[0];
    const reader = new FileReader();

    if (imgFile) {
      if (imgFile.size > 16777000) {
        setFileError('Файл завеликий');
        return;
      }
      setFileError('');
      setFileName(imgFile.name)
      reader.readAsDataURL(imgFile);
      reader.onloadend = function () {
        setFile(reader.result);
      };
    }
  };
  const resetState = () => {
    setPresentTitle('');
    setChildName('Оберіть дитину');
    setMark('');
    setFile('');
  };

  const handleSubmit = event => {
    console.log('presentTitle:', presentTitle);
    console.log('mark:', mark);
    console.log('childName', childName);
    console.log('file', file);
    event.preventDefault();
    //dispatch logic
    resetState();
    close();
  };

  return (
    <div className={styles.ModalBody}>
      <div className={styles.FormWrap}>
        <h3 className={styles.Title}>Додавання подарунку</h3>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={styles.InputsWrapper}>
            <BasicInput
              forLabel={'presentTitle'}
              id={'presentTitle'}
              labelText={'Назва'}
              value={presentTitle}
              name="presentTitle"
              handleChange={handleTitleChange}
              placeholder={'Введіть назву'}
              type="text"
            />
            <CustomSelect
              id={'childName'}
              name={'childName'}
              labelText={'Призначення подарунку'}
              handleChange={handleNameChange}
              value={childName}
            />
            <MarkInput value={mark} onChange={handleMarkChange} /> 
            <div>
              <span className={styles.FileInputTitle}>
                Завантажити фото (необов’язково)
              </span>
              <label htmlFor="file" className={styles.FileInputLabel}>
                {fileError ? fileError : file ? fileName : "Оберіть файл"}
              
              <input
                type="file"
                accept="image/*"
                name="file"
                id="file"
                ref={fileInput}
                onChange={handleFileChange}
                className={styles.FileInput}
              /></label>
            </div>
          </div>
          <div className={styles.ButtonsBlock}>
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
        <button
          onClick={() => close()}
          className={styles.ModalCloseBtn}
        ></button>
      </div>
    </div>
  );
}
export default modalBackDrop(AddPresent);
