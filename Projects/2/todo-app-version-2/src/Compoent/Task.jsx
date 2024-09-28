function Todoitem({todoname,tododate,ondeleteClick}){
  return(<div className="container ">
    <div className="row my-row">
      <div className="col-6">{todoname}  </div>
        <div className="col-4">{tododate} </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger my-btn" onClick={()=>ondeleteClick(tododate)} >
              DELETE
            </button>  
      </div>
      </div>
    </div>);
}export default Todoitem;