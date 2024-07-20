import RowValue from "./RowValue";
import React, { useState } from "react";
import './Table.css'
const students = [
    {
        "r_no" : 125463,
        "f_name" : "Oliver",
        "l_name" : "Jake",
        "marks" : 567
    },
    {
        "r_no" : 125464,
        "f_name" : "Noah",
        "l_name" : "James",
        "marks" : 674
    },
    {
        "r_no" : 125465,
        "f_name": "Jack",
        "l_name" : "Connor",
        "marks" : 558
    },
    {
        "r_no" : 125466,
        "f_name" : "Liam",
        "l_name" : "John",
        "marks" : 463
    },
    {
        "r_no" : 125467,
        "f_name" : "Mason",
        "l_name" : "Robert",
        "marks" : 737
    },
    {
        "r_no" : 125468,
        "f_name" : "Charlie",
        "l_name" :"Kyle",
        "marks" : 575
    },
    {
        "r_no": 125468,
        "f_name" : "Jacob",
        "l_name" : "Jacob",
        "marks" : 673,
    },
    {
        "r_no": 125469,
        "f_name" : "William",
        "l_name" : "William",
        "marks" : 603,
    },
    {
        "r_no": 125470,
        "f_name" : "Ethan",
        "l_name" : "David",
        "marks" : 538,
    },
    {
        "r_no": 125471,
        "f_name" : "Oscar",
        "l_name" : "Rhys",
        "marks" : 457,
    },
    {
        "r_no": 125472,
        "f_name" : "James",
        "l_name" : "Anderson",
        "marks" : 618,
    },
    {
        "r_no": 125473,
        "f_name" : "Deniel",
        "l_name" : "Thomas",
        "marks" : 473,
    },
]
const Table = ()=>{
    const [count,setCount] = useState(0);
    const handleClickEvent = ()=>{
        console.log("count value : " + count);
        setCount(count + 1);
        if (count > 5){
            const btn = document.getElementsByTagName("button");
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        }
    }
    return(
        <>
        <div className = "Main">
            <table>
                <caption>
                    <b>Student Marks</b>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">Roll Number</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student,index)   =>(
                        <tr key={index}>
                            <RowValue rowData={student}></RowValue>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="Needle">
        </div>
        <div className="Title">
            <h1 data-content = "NILESH CHAUHAN">NILESH CHAUAHAN</h1>
        </div>
        </>
    );
}
export default Table;