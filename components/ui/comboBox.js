import styles from './comboBox.module.css'
import TextField from './TextField';


export default function ComboBox({ className, type, label, optional, value, onChange, error, onFocus, onBlur, listId, options }) {


  function onTextFieldBlur() {

    if (options == null) {
      return;
    }

    const inputValue = value.toLowerCase().trim();
    let found = false;

    for (let i = 0; i < options.length; i++) {

      const option = options[i].toLowerCase().trim();

      if (option === inputValue) {
        found = true;
        break;
      }

    }

    if (found === false) {
      onChange('');
      onBlur('');
    } else {
      onBlur();
    }

  }//onTextFieldBlur


  function renderOptions() {

    if (options == null) {
      return null;
    }

    const items = options.map((option) => <option key={option}>{option}</option>);

    return <datalist id={listId}>
      {items}
    </datalist>

  }//renderOptions


  return (

    <div className={className + ' ' + styles.main}>

      <TextField
        type={type}
        label={label}
        optional={optional}
        value={value}
        onChange={onChange}
        error={error}
        onFocus={onFocus}
        onBlur={onTextFieldBlur}
        list={listId} />

      {renderOptions()}

    </div>

  );

}//ComboBox
