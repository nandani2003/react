import Item from "./Items";

const FoodItems=({items})=>{
  return(
<ul className="list-group">
 {  items.map((item) =>( 
  <Item key={item} listitem={item} onhandlebuy={()=>console.log(`${item}being bought`)}></Item>
 ))//loop alternative
}
</ul>
  );
};
export default FoodItems;