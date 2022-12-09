import React from "react";
import TableRow from "../dumbComponents/TableRow";

const PilotosTabla = ({ pilots, setEditData, deletePilot}) => {
 
    return <>
        <table class="ml-4">
            <thead className="">
                <div className="bg-blue-cards rounded-t ">
                    <tr className="">
                        <th className="px-5 py-3 text-left font-semibold uppercase ">
                            Pilotos
                        </th>
                        <th className="px-5 py-3 text-left font-semibold uppercase text-withe">Editar / Borrar</th>
                    </tr>
                </div >
            </thead>
            <tbody className="" style={{
                    height: '65vh'
                }}>
                <div className="bg-blue-light rounded-b">
                    {
                        pilots.length === 0 ? 
                        (<tr><td className="table-auto p-4 text-withe"><h1>Que Pilot vuela hoy?</h1></td></tr>) 
                        : pilots.map( el => <TableRow key={el.id} el={el} setEditData={setEditData} deletePilot={deletePilot}/>)
                    }
                </div >
            </tbody>
        </table>
    </>

}

export default PilotosTabla;