import React from 'react';
import "./Components/Userinput"
import "./Components/Useroutput"
import Useroutput from './Components/Useroutput';
import Userinput from './Components/Userinput';


const App = () => {

  //Contents rendered on localhost;
  return (
    <div className="App">
    <Useroutput/>
    <Useroutput/>
    <Useroutput/>
    <Userinput/>

      
    </div>
  );
}

export default App;
