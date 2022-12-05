import React from "react";
import TableRow from "../dumbComponents/TableRow";

const PilotosTabla = ({ pilots, setEditData, deletePilot}) => {
 
    return <>
            <table class="table">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>ID</th>
                    <th>borrar / edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pilots.length === 0 ? 
                        (<tr><td className="table-auto">Que Pilot vuela hoy?</td></tr>) 
                        : pilots.map( el => <TableRow key={el.id} el={el} setEditData={setEditData} deletePilot={deletePilot}/>)
                    }
                    

                </tbody>
            </table>

    </>

}

export default PilotosTabla;