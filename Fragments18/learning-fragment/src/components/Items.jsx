import styles from "./Item.module.css";
const Item=({listitem,onhandlebuy})=>{
  return <li className={`${styles.Myitem} list-group-item `}><span className={styles["Myspan"]}>{listitem}</span>
  <button className={`${styles.button} btn btn-info`}
  onClick={onhandlebuy 
}
  >buy</button></li>
};export default Item;