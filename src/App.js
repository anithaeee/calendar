import logo from './logo.svg';
import './App.css';
import { Calendar } from 'primereact/calendar';
import React, {useState} from 'react';

function App() {
  
  const[data,setdata]= useState(null);
  return (
    <div>
      <form>
        <label>Enter your date
            <Calendar showIcon value={data} onChange={(e)=>{setdata(e.target.value)}}></Calendar>
        </label>
      </form>
    </div>
    
  );
}

export default App;
