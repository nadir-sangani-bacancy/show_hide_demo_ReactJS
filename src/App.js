import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp1 from './comp1';

class App extends React.Component{

  render(){
    return(
      <div>
        <p>this is render from parent class</p>
        <Comp1 />
      </div>
    )
  }


}

export default App;
