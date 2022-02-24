import React from 'react';
//import Books from './components/ListBook/Books';
import Header from './components/Header/Header';
//import {Routes} from 'react-router-dom'
//import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Error from './components/Error/Error';

 let App = function(props) {
  return (
    <div>
      <div style={{border:"1px solid green"}}>
          <Header />
           <div>
            <p>aaa</p>
          <hr />
          <Link to={"/"}>home</Link>
          </div>
      </div>
      <div style={{border:"1px solid black"}}>
        <div>
        <Error/>
        {/* <Books/> */}
           {/* <Routes>
            <Route path={'/'} element={<Books/>}/> 
          </Routes> */}
          </div>  
      </div>
    </div>
  );
}



export default App