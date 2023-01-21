import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import Footer from "./Footer";
import "./arrow.css"
import "./table.css"

const TableScreen2 = () => {
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    })

    //const [loading, setLoading] = useState(false);
    /*
    const showSpinner = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate('/')
        }, 4000);
    }*/

    useEffect(() => {
        window.addEventListener('storage', () => {
          const tandas = JSON.parse(localStorage.getItem('tandasData'))
          //showSpinner();
          setTandas(tandas);
        })
      }, []);


    return <>
    {/* loading ? <Spinner/> : ''*/}
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
                                                        <td className="font-semibold text-white text-2xl pr-5">
                                                            {tanda.time}
                                                        </td>
                                                        <td className="text-2xl text-white font-semibold pr-5">{tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td>
                                                        <td className="text-2xl text-white font-semibold pr-5">{tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td>

                                                        <td className="text-2xl text-white font-semibold pr-5">
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
                                                    </div>
                                                    <td className="font-semibold pr-5">
                                                        {
                                                            tanda.in_flight === true 
                                                            ? 
                                                                (
                                                                    <div class="upload-btn-container">
                                                                        <svg class="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" version="1.1" >
                                                                        <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#FF0000" />
                                                                        </svg>
                                                                    </div>
                                                                ) 
                                                            : 
                                                                ''
                                                        }
                                                    </td>
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
        <Footer />

    </>

}

export default TableScreen2