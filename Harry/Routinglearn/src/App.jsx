import Home from './Home';
import Login from './Login';
import Abt from './Abt';
import './App.css'
import User from './User';
import{createBrowserRouter,RouterProvider}from'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
const router=createBrowserRouter([
  {
    path:'/home',
    element: <> <Navbar/><Home/></>
  },
  {
    path:'/login',
    element: <> <Navbar/><Login/></>
  },
  {
    path:'/abt',
    element: <><Navbar/><Abt/></> },
  {
    path:'/user/:username',
    element: <><Navbar/><User/></> },
  
  
])

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
