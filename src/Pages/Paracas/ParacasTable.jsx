import React, { useState, useEffect} from "react";
import { collection, getFirestore, query, where, getDocs } from "firebase/firestore";

const ParacasTable = ({paracas}) => {

    /*
    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'skydivers')
        const queryFiltered = query(queryCollection, where( 'isActive', '===' , true))
        getDocs(queryFiltered)
        // funcion aun no terminada desde aca
        .then(data => setParacas(data.docs.map(paraca => ({ id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log(paracas, "paracas filtrados por estado isActive")
    }, [])
    */
    return <>
    <div className="text-black">
        <table class="w-full">
            <thead className="">
                <div className="bg-red">
                    <tr className="">
                        <th className=" px-5 py-3 text-left font-semibold uppercase text-white">
                            Nombre
                        </th>
                        <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase text-white">
                            -
                        </th>
                        <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase text-white">
                            -
                        </th>
                        <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase text-white">
                            -
                        </th>
                        <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase text-white">
                            -
                        </th>
                    </tr>
                </div >
            </thead>
            <tbody className="bg-blue-light rounded" style={{
                    maxHeight: '65vh'
                }}>

                {
                    paracas.length === 0 ? <td className="flex justify-center text-3xl p-8 text-white">Aún  no hay paracaidistas cargados</td>
                    : paracas.map((paraca, index) => {
                        return <tr key={index} className="border border-slate-300">
                            <td className="px-5 py-3 text-left font-semibold text-white"> {paraca.fly_name}</td>
                        </tr>
                            
                        }
                    )
                }

            </tbody>
        </table>
    </div>
    </>

}

export default ParacasTable