import React from 'react';
import Books from './components/ListBook/Books';
import Header from './components/Header/Header';
import {Routes, Route, NavLink} from 'react-router-dom'
import Error from './components/Error/Error';

 let App = function(props) {
  return (
    <div>
      <div style={{border:"1px solid green"}}>
          <Header /> 
          <div>
            <p>aaa</p>
            <NavLink to={"/error"}>error</NavLink>
          <hr />
          <NavLink to={"/"}>home</NavLink> 
          </div>
      </div>
      <div style={{border:"1px solid black"}}>
          <Routes>
             <Route path={'/'} element={<Books/>}/>
            <Route path={'*'} element={<Error/>}/>
          </Routes>
      </div> 
    </div>
  );
}



export default App