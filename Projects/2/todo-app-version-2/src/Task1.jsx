function Todoitem1(){
  let todoname="WORLS TOUR AROUND THE WORLD";
  let tododate="4/06/29 ";
  return(<div class="container">
    <div class="row my-row">
      <div class="col-6">{todoname}  </div>
        <div class="col-4">{tododate} </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger my-btn">
              DELETE
            </button>  
      </div>
      </div>
    </div>);
}export default Todoitem1;