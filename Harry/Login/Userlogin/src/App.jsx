import { useState } from "react";
import "./App.css";
impoe;
function App() {
  const initalValues={username:"",email:"",password:""};
  const [formValue,SetformValue]=useState(initalValues)
  return (
    <>
      <div className="container">
        <form>
          <h1>Login form</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="Username" value={formValue.username}/>
            </div>
            <div className="field">
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" value={formValue.email}/>
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" value={formValue.password}/>
            </div>
            <button className="fluid ui button blue">submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
