import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import Footer from "./Footer";
import pink from '../../assets/aviones/pink.png'
import green from '../../assets/aviones/green.png'
import blue from '../../assets/aviones/blue.png'
import cessna1 from '../../assets/aviones/cessna1.jpg'
import cessna2 from '../../assets/aviones/cessna2.jpg'
//import Spinner from "../spinner";
import "./arrow.css"

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
        <div className="p-4 bg-login-screen backdrop-blur" >
            <div>
                <h2 className="text-2xl font-semibold"></h2>
                <div className=""></div>
            </div>
            <div className="w-full inline-block rounded-lg overflow-hidden ">
                <table className="leading-normal w-full">
                <thead className="">
                    <div className="bg-blue-light">
                        <tr className="">
                            <th className="text-4xl px-5 py-3 text-right font-semibold text-gray-700 uppercase">
                                Nro
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold  uppercase">Slot I
                               
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold uppercase">Slot II
                                
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold uppercase">Slot III
                              
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold uppercase">Slot IV
                                
                            </th>
                            <th className="px-5 py-3 font-semibold ">
                                
                            </th>
                            <th className="px-5 py-3 font-semibold flex-col items-center">Avion</th>
                            <th className="px-5 py-3 font-semibold flex-col items-center"></th>
                        </tr>
                    </div >
                </thead>
                <tbody className="" style={{
                        height: '85vh'
                    }}>
                    <ReactScrollableFeed className="backdrop-blur rounded">
                        {
                            tandas.length === 0 ? <td className="flex justify-center text-3xl p-8">Aún  no hay tandas</td>
                            : tandas.sort((a, b) => a.number_tanda - b.number_tanda)
                            .map((tanda, index) => {
                                return <tr key={index} className="border border-slate-300">
                                            <td className="px-5 py-3 text-left font-semibold"> 
                                                <span className="relative text-4xl text-black">{ tanda.number_tanda }</span>
                                            </td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold ">
                                                <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">{ tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</p>
                                            </td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold ">
                                                <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">
                                                    {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                                </p>
                                            </td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold ">
                                                <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">
                                                    {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}
                                                </p>
                                            </td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold ">
                                                <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">
                                                    {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}
                                                </p>
                                            </td>
                                            <td className="px-5 py-3 font-semibold ">
                                                <p className="text-2xl text-gray-900 whitespace-no-wrap">
                                                    {tanda.time}
                                                </p>
                                            </td>

                                            <td className="font-semibold flex-col">
                                                {
                                                    tanda.in_flight === true 
                                                    ? 
                                                        (
                                                            <div class="upload-btn-container">
                                                                <svg class="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 16 16" version="1.1" >
                                                                <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#3e4ec2" />
                                                                </svg>
                                                            </div>
                                                        ) 
                                                    : 
                                                        ''
                                                }
                                                <div className="text-2xl text-gray-900 whitespace-no-wrap p-2"> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</div>
                                                <div className="text-2xl text-gray-900 whitespace-no-wrap"> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</div>
                                            </td>
                                            <td className="flex items-center">
                                            {
                                                tanda.avion.toUpperCase() === 'GYC' ? (
                                                    <div className="flex-shrink-0 w-16 h-16 p-1">
                                                        <img
                                                        className="w-full h-full"
                                                        src={cessna1}
                                                        alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                        tanda.avion.toUpperCase() === 'GRI' ? (
                                                            <div className="flex-shrink-0 w-16 h-16 p-1">
                                                                <img
                                                                className="w-full h-full"
                                                                src={green}
                                                                alt=""
                                                                />
                                                            </div>
                                                        ) : (
                                                            tanda.avion.toUpperCase() === 'GSD' ? (
                                                                <div className="flex-shrink-0 w-16 h-16 p-1">
                                                                    <img
                                                                    className="w-full h-full"
                                                                    src={cessna2}
                                                                    alt=""
                                                                    />
                                                                </div>
                                                            ) : (
                                                                ''
                                                            )
                                                        )

                                                    )
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
        <Footer />
    </>

}

export default TableScreen2