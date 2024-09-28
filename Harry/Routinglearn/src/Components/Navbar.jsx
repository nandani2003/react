import React from 'react'
import{NavLink} from 'react-router-dom'

const Navbar=()=> {
  return (
    <div>
      <nav>
        <ul>
          <NavLink className={(e)=>{
            return e.isActive?"red":""}}to="/Home"><li>home</li></NavLink>
          <NavLink className={(e)=>{
            return e.isActive?"red":""}}to="/Abt"><li>abt</li></NavLink>
          <NavLink className={(e)=>{
            return e.isActive?"red":""}}to="/Login"><li>Login</li></NavLink>
          </ul>
      </nav>
    </div>
  )
}
export default Navbar;
