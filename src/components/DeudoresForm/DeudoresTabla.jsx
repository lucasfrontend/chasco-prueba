import React from "react";
import DeudorRow from "../dumbComponents/DeudorRow";

const DeudoresTabla = ({ deudores, setEditData, deleteDeudor}) => {
 
    return <>
        <table class="ml-4">
            <thead className="">
                <div className="bg-blue-cards rounded-t ">
                    <tr className="">
                        <th className="px-5 py-3 text-left font-semibold uppercase ">
                            Deudores
                        </th>
                        <th className="px-5 py-3 text-left font-semibold uppercase">Editar / Borrar</th>
                    </tr>
                </div >
            </thead>
            <tbody className="" style={{
                    height: '65vh'
                }}>
                <div className="bg-blue-light rounded-b">
                    {
                        deudores.length === 0 ? 
                        (<tr><td className="table-auto p-4"><h1>Quien paga birra?</h1></td></tr>) 
                        : deudores.map( el => <DeudorRow key={el.id} el={el} setEditData={setEditData} deleteDeudor={deleteDeudor}/>)
                    }
                </div >
            </tbody>
        </table>
    </>

}

export default DeudoresTabla;