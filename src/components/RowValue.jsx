import React from "react";
import "./RowValue.css"
const RowValue = ({rowData})=>{
    return(
        <>
        <div className="Main">
            <td>{rowData.r_no}</td>
            <td>{rowData.f_name}</td>
            <td>{rowData.l_name}</td>
            <td>{rowData.marks}</td>
        </div>
        </>
    );
};
export default RowValue;