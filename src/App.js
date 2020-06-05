import React, { Component } from 'react';
import ZipCodes from "./ZipCodes"
import './App.css';

class App extends Component{
 render(){
   return ( 
     <div>
     <div className ="container-fluid bg-danger text-center text-white p-4 size">
       <h4>Zip Search</h4>
      </div>
          <div className ="container d-flex justify-content-center">
          <ZipCodes />
           </div>  
           </div>  
   );
  
 }
}

export default App;
