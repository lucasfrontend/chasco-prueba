import React from "react";
import DeudorRow from "../dumbComponents/DeudorRow";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const DeudoresTabla = ({ deudores, setEditData, deleteDeudor}) => {

    const [ debtors, setdebtors ] = useState()
    const [ loading, setLoading] = useState(true)

    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'skydivers')
        const queryFiltered = query(queryCollection, where( 'beers', '>' , 0))
        getDocs(queryFiltered)
        .then(data => setdebtors(data.docs.map(paraca => ({ id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
 
    console.log("debtors", debtors)
    return <>
        <table class="ml-4">
            <thead className="">
                <div className="bg-blue-cards rounded-t ">
                    <tr className="">
                        <th className="px-5 py-3 text-left font-semibold uppercase text-white">
                            Deudores
                        </th>
                        <th className="px-5 py-3 text-left font-semibold uppercase text-white">Editar / Borrar</th>
                    </tr>
                </div >
            </thead>
            <tbody className="" style={{
                    height: '65vh'
                }}>
                <div className="bg-blue-light rounded-b">
                    {
                        deudores.length === 0 ? 
                        (<tr><td className="table-auto p-4"><h1 className="text-white">Quien paga birra?</h1></td></tr>) 
                        : deudores.map( el => <DeudorRow key={el.id} el={el} setEditData={setEditData} deleteDeudor={deleteDeudor}/>)
                    }
                </div >
            </tbody>
        </table>
    </>

}

export default DeudoresTabla;