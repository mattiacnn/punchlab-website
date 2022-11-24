import styles from './textField.module.css'


export default function TextField({ className, type, label, optional, value, onChange, error, onFocus, onBlur, list }) {


  function renderOptional() {

    if (optional !== true) {
      return null;
    }

    return <label className={styles.optional}>Optional</label>

  }//renderOptional


  function renderInput() {

    let className = styles.input;

    if (error) {
      className += ' ' + styles.inputError;
    }

    return <input
      className={className}
      type={type ?? 'text'}
      list={list}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={(e) => onChange(e.target.value)} />

  }//renderInput


  function renderError() {

    if (error == null) {
      return null;
    }

    return <p className={styles.error}>{error}</p>

  }//renderError


  return (

    <div className={className+' '+styles.main}>

      <div className={styles.labelRow}>
        <label className={styles.label}>{label}</label>
        {renderOptional()}
      </div>

      {renderInput()}

      {renderError()}

    </div>

  );

}//TextField
