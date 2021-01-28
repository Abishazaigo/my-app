import {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Tablerow from './Tablerow';
import Edit from './Edit';
import Table from './Table';
function App() {
  const employees = [
    {
        name: "Abisha", 
        designation: "Trainee developer", 
        doj: "14.12.2021"
    },
    {
        name: "Praba", 
        designation: "Trainee developer", 
        doj: "14.12.2021"
    },
    { 
        name: "Reeshma", 
        designation: "Trainee developer", 
        doj: "14.12.2021"
    }
];
  const [employee, setEmployee]=useState(employees);

  
  return (
    
    <div className="App">
      <Table employee={employee} />
      <Edit setEmployee={setEmployee} />
      <Tablerow />

    </div>
  )
}

export default App;
