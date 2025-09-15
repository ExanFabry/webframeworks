import './App.css'
import React from 'react';

function App() {
  let numbers: number[] = [1, 2, 3, 4, 5, 4, 3];
  let students: Student[] = [
    {
      id: 1,
      name: "Jef",
      age: 20
    },
    {
      id: 2,
      name: "Jan",
      age: 21
    },
    {
      id: 3,
      name: "Joris",	
      age: 22
    },
    {
      id: 4,
      name: "Andie",
      age: 23
    },
    {
      id: 5,
      name: "Senne",
      age: 24
    }
  ]

  return (
    <>
      <h1>Getallenlijst</h1>
      <ul>
        {numbers.map((number: number, index: number) => <li key={index}>{number}</li>)}
      </ul>
      <h1>Studentenlijst</h1>
        {
          <ol>
            {students.map((student: Student) =>
              <li>{student.name}</li>
            )}
          </ol>
        }
      <h1>Studentenlijst met J</h1>
        {
          <ol>
            {students.filter((student) => student.name.startsWith("J")).map((student: Student) =>
              <li>{student.name}</li>
            )}
          </ol>
        }
      <h1>Select</h1>
      <select name="" id="">
        {students.map((student: Student) =>
          <option value={student.name}>{student.name}</option>
        )}
      </select>
    <h1>Table</h1>
     <table>
      <tr>
        <th>Naam</th>
        <th>Leeftijd</th>
      </tr>
      <tr>
        {students.map((student: Student) =>
          <React.Fragment key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
          </React.Fragment>
        )}
      </tr>
    </table> 
    </>
  )
  interface Student{
    id: number,
    name: string,
    age: number
  }
}

export default App
