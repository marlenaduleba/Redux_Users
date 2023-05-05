import {Outlet, Route, Routes} from 'react-router-dom';
import { Home } from "../pages/Home";
import { Layout } from './Layout';
import { Login } from '../pages/Login';
import {Register} from '../pages/Register';
import { Tasks } from '../pages/Tasks';


export const App = () => {
 

  return (
   <Routes>
   
       <Route path='/'  element={<Layout/>} >
         <Route index element={<Home/>}   />
         <Route path='/register'  element={<Register/>}  /> 
         <Route path='/login'  element={<Login/>} />
         <Route path='/tasks' element={<Tasks/>} />
       </Route>
     
   </Routes>
  );
};
