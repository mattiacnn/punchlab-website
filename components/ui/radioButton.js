import styles from './radioButton.module.css'


export default function RadioButton({ className, isSelected, onClick }) {


  const mainClass = isSelected ? styles.main + ' ' + styles.mainSelected : styles.main;


  function renderPoint() {

    if (isSelected !== true) {
      return null;
    }

    return <div className={styles.point} />;

  }//renderPoint


  return (

    <div className={className+' '+mainClass}>

      {renderPoint()}

    </div>

  );

}//ComboBox
