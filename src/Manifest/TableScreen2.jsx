import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase'
//import BeerAnimation from './BeerAnimation/BeerAnimation'

//import { SdChContextProvider } from '../../context/sdchContext'
//import Footer from "../components/dumbComponents/Footer";
import "./arrow.css"
import "./table.css"
//import "./TableScreen.css"


const TableScreen2 = () => {
    //Tandas de FB
    const [ tandasDB, setTandasDB] = useState([])

    const getTandasDB = async () => {
        const data = await getDocs(collection( db, "tandas"))
        setTandasDB(
            data.docs.map( (doc) => ( {...doc.data(), id: doc.id}))
        )
    }

    useEffect(() => {
        getTandasDB()
        console.log(tandasDB, "tandasDB")
    }, [tandasDB])

    //Tandas de LocalStorage    
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    })
    
    useEffect(() => {
        window.addEventListener('storage', () => {
            const tandas = JSON.parse(localStorage.getItem('tandasData'))
            setTandas(tandas);
        })
    }, []);
    
    
    /*
    const [ loading, setLoading] = useState(true)
    const [ debtors, setdebtors ] = useState()
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'skydivers')
        const queryFiltered = query(queryCollection, where( 'beers', '>' , 0))
        getDocs(queryFiltered)
        .then(data => setdebtors(data.docs.map(paraca => ({ id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log(debtors, "debtors en tabla")
    }, [])
    */
      

      {/* probando url */}
    return <>
    {
        tandasDB.length !== 0 ? ( <div className="min-h-screen bg-gray-500 bg-login-screen backdrop-blur" >
        <div className="p-4">
            <div className="rounded-lg shadow-lg overflow-hidden">
                <table className="leading-normal w-full" id="table">
                    <thead className="bg-blue text-white shadow-lg">
                        <div className="">
                            <tr className="">
                                <th className="px-4 py-3 text-white text-2xl">
                                    Nro
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl">Slot I
                                
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl ">Slot II
                                    
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl ">Slot III
                                
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl ">Slot IV
                                    
                                </th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl ">Avión</th>
                            </tr>
                        </div >
                    </thead>
                    <tbody className="" style={{
                            height: '85vh'
                        }}>
                        <ReactScrollableFeed className="backdrop-blur">
                            {
                                tandasDB.length === 0 ? <td className="flex justify-center text-2xl p-8 text-white">Aún  no hay tandas</td>
                                : tandasDB.sort((a, b) => a.number_tanda - b.number_tanda)
                                .map((tanda, index) => {
                                    return <tr key={index} className="hover:bg-gray-100">
                                                <td className="px-4 py-3 text-white text-3xl"> 
                                                    { tanda.number_tanda }
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    { tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}
                                                </td>

                                                <div className="p-4">
                                                    {
                                                        tanda.time ? <td className="font-semibold text-white text-2xl pr-5">{tanda.time}</td> : <td className="font-semibold text-white text-2xl pr-5"></td>  
                                                    }
                                                    {
                                                        tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1) ? <td className="text-2xl text-white font-semibold pr-5">{tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td> : <td className="text-2xl text-white font-semibold pr-5"></td>
                                                    }     
                                                    {
                                                        tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1) ? <td className="text-2xl text-white font-semibold pr-5">{tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td> : <td className="text-2xl text-white font-semibold pr-5"></td>
                                                    }
                                                    
                                                    {
                                                        tanda.avion ? <td className="text-2xl text-white font-semibold">
                                                        {
                                                            tanda.avion.toUpperCase() === 'GYC' ? (
                                                                <div className="text-2xl text-white">GYC</div>

                                                            ) : (
                                                                    tanda.avion.toUpperCase() === 'GRI' ? (
                                                                        <div className="">GRI</div>
                                                                    ) : (
                                                                        tanda.avion.toUpperCase() === 'GSD' ? (
                                                                            <div className="">GSD</div>
                                                                        ) : (
                                                                            ''
                                                                        )
                                                                    )
                                                                )
                                                        }
                                                        </td>
                                                        : <td className="font-semibold text-white text-2xl"></td>
                                                    }

                                                </div>
                                                {
                                                    tanda.in_flight ? <td className="font-semibold pr-2">
                                                    {
                                                        tanda.in_flight === true 
                                                        ? 
                                                            (
                                                                <div className="upload-btn-container">
                                                                    <svg className="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" version="1.1" >
                                                                    <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#FF0000" />
                                                                    </svg>
                                                                </div>
                                                            ) 
                                                        : 
                                                            <div className="upload-btn-container">
                                                                <svg className="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" version="1.1" >
                                                                <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#FF0000" />
                                                                </svg>
                                                            </div>
                                                    }
                                                </td> : <td className="font-semibold pr-2"></td>
                                                }

                                        </tr>
                                    }
                                )
                            }
                        </ReactScrollableFeed >
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    ) : (
<div className="min-h-screen bg-gray-500 bg-login-screen backdrop-blur" >
        <div className="p-4">
            <div className="rounded-lg shadow-lg overflow-hidden">
                <table className="leading-normal w-full" id="table">
                    <thead className="bg-blue text-white shadow-lg">
                        <div className="">
                            <tr className="">
                                <th className="px-4 py-3 text-white text-2xl">
                                    Nro
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl">Slot I
                                
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl ">Slot II
                                    
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl ">Slot III
                                
                                </th>
                                <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl ">Slot IV
                                    
                                </th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl ">Avión</th>
                            </tr>
                        </div >
                    </thead>
                    <tbody className="" style={{
                            height: '85vh'
                        }}>
                        <ReactScrollableFeed className="backdrop-blur">
                            {
                                tandas.length === 0 ? <td className="flex justify-center text-2xl p-8 text-white">Aún  no hay tandas</td>
                                : tandas.sort((a, b) => a.number_tanda - b.number_tanda)
                                .map((tanda, index) => {
                                    return <tr key={index} className="hover:bg-gray-100">
                                                <td className="px-4 py-3 text-white text-3xl"> 
                                                    { tanda.number_tanda }
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    { tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}
                                                </td>
                                                <td className="w-1/4 px-5 py-3 text-left font-semibold text-white text-3xl">
                                                    {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}
                                                </td>

                                                <div className="p-4">
                                                    {
                                                        tanda.time ? <td className="font-semibold text-white text-2xl pr-5">{tanda.time}</td> : <td className="font-semibold text-white text-2xl pr-5"></td>  
                                                    }
                                                    {
                                                        tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1) ? <td className="text-2xl text-white font-semibold pr-5">{tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td> : <td className="text-2xl text-white font-semibold pr-5"></td>
                                                    }     
                                                    {
                                                        tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1) ? <td className="text-2xl text-white font-semibold pr-5">{tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td> : <td className="text-2xl text-white font-semibold pr-5"></td>
                                                    }
                                                    
                                                    {
                                                        tanda.avion ? <td className="text-2xl text-white font-semibold">
                                                        {
                                                            tanda.avion.toUpperCase() === 'GYC' ? (
                                                                <div className="text-2xl text-white">GYC</div>

                                                            ) : (
                                                                    tanda.avion.toUpperCase() === 'GRI' ? (
                                                                        <div className="">GRI</div>
                                                                    ) : (
                                                                        tanda.avion.toUpperCase() === 'GSD' ? (
                                                                            <div className="">GSD</div>
                                                                        ) : (
                                                                            ''
                                                                        )
                                                                    )
                                                                )
                                                        }
                                                        </td>
                                                        : <td className="font-semibold text-white text-2xl"></td>
                                                    }

                                                </div>
                                                {
                                                    tanda.in_flight ? <td className="font-semibold pr-2">
                                                    {
                                                        tanda.in_flight === true 
                                                        ? 
                                                            (
                                                                <div className="upload-btn-container">
                                                                    <svg className="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" version="1.1" >
                                                                    <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#FF0000" />
                                                                    </svg>
                                                                </div>
                                                            ) 
                                                        : 
                                                            <div className="upload-btn-container">
                                                                <svg className="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" version="1.1" >
                                                                <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#FF0000" />
                                                                </svg>
                                                            </div>
                                                    }
                                                </td> : <td className="font-semibold pr-2"></td>
                                                }

                                        </tr>
                                    }
                                )
                            }
                        </ReactScrollableFeed >
                    </tbody>
                </table>
            </div>
        </div>
    </div>
            )
    }


    </>

}

export default TableScreen2