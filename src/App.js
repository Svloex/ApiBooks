import React from 'react';
//import Books from './components/ListBook/Books';
import Header from './components/Header/Header';
import {Routes,Route, Link} from 'react-router-dom'
//import Error from './components/Error/Error';

 let App = function(props) {
  return (
    <div>
      <div style={{border:"1px solid green"}}>
          <Header /> 
          <div>
            <p>aaa</p>
           <Link to={"/error"}>error</Link>
          <hr />
          <Link to={"/"}>home</Link> 
          </div>
      </div>
      {/* <div style={{border:"1px solid black"}}>
          <Routes>
            <Route path={'/'} element={<Books/>}/>
            <Route path={'*'} element={<Error/>}/>
          </Routes>
      </div> */}
    </div>
  );
}



export default App