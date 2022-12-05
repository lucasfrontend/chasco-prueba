import React from "react";

const TableRow = ({ el, setEditData, deletePilot }) => {

    return <>
        <tr>
            <td> { el.name_pilot}</td>
            <td> { el.id}</td>
            <td>
                <button onClick={() => setEditData(el)}>Edit</button>
                <button onClick={() => deletePilot(el.id)}>Delete</button>
            </td>
        </tr>
    </>

}

export default TableRow;