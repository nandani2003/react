import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({onclickbtn}) => {
  const ButtonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {ButtonsNames.map((ButtonsName) => (
        <button onClick={()=>onclickbtn(ButtonsName)}className={styles.button}>{ButtonsName}</button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
