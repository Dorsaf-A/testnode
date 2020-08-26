import React from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src='/imagePublic.png' width='120px'/>
      <form onSubmit=''>
        <label>
          Name:
          <input type="text" value='' onChange='' />
        </label>
        <input type="submit" value="Submit" /><br></br>
        <label> 
          Last name:
          <input type="text" value='' onChange='' />
        </label>
        <input type="submit" value="Submit" /><br></br>
        <label>
          Email:
          <input type="text" value='' onChange='' />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Button>click here</Button>
    </div>
  );
}

export default App;
