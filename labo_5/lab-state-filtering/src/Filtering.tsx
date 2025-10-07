import React from "react";
import { useState } from "react";

export const Filtering = ({}) => {
    const [searchText, setSearchText] = useState<string>("");
    const [sortField, setSortField] = useState<string>("");
    let students: Student[] = [
        {nameStudent: "Jacob", age: 21, year: 2},
        {nameStudent: "Jan", age: 20, year: 1},
        {nameStudent: "Joris", age: 22, year: 3},
        {nameStudent: "Joris", age: 22, year: 3},
        {nameStudent: "Korneel", age: 23, year: 4},
        {nameStudent: "Mathias", age: 22, year: 3},
        {nameStudent: "Muhammad", age: 20, year: 1},
        {nameStudent: "Perneel", age: 22, year: 3},
        {nameStudent: "Piet", age: 21, year: 2},
    ]
    let filteredStudents: Student[];
    if(searchText === "" && sortField === ""){
        filteredStudents = students;
    }
    else if(sortField !== "" && searchText === ""){
        if(sortField === "name"){
            filteredStudents = [...students].sort((a, b) => a.nameStudent.localeCompare(b.nameStudent));
        }
        else if(sortField === "age"){
            filteredStudents = [...students].sort((a, b) => a.age - b.age);
        }
        else{
            filteredStudents = [...students].sort((a, b) => a.year - b.year);
        }
    }
    else if(sortField !== "" && searchText !== ""){
        let filterStudents = students.filter((student) => student.nameStudent === searchText);
        if(sortField === "name"){
            filteredStudents = [...filterStudents].sort((a, b) => a.nameStudent.localeCompare(b.nameStudent));
        }
        else if(sortField === "age"){
            filteredStudents = [...filterStudents].sort((a, b) => a.age - b.age);
        }
        else{
            filteredStudents = [...filterStudents].sort((a, b) => a.year - b.year);
        }
    }
    else{
        filteredStudents = students.filter((student) => student.nameStudent === searchText);
    }
    return(
        <>
            <label htmlFor="">Search</label>
            <input onChange={(event) => setSearchText(event?.target.value)} type="text" />
            <table>
                <tr>
                    <th><button onClick={() => setSortField("name")}>Name</button></th>
                    <th><button onClick={() => setSortField("age")}>Age</button></th>
                    <th><button onClick={() => setSortField("year")}>Year</button></th>
                </tr>
                {
                    filteredStudents.map((student) =>
                        <React.Fragment key={student.nameStudent + student.age + student.year}>
                            <tr>
                                <td>{student.nameStudent}</td>
                                <td>{student.age}</td>
                                <td>{student.year}</td>
                            </tr>
                        </React.Fragment>
                    )
                }
            </table>
        </>
    )
}

interface Student{
    nameStudent: string,
    age: number, 
    year: number
}