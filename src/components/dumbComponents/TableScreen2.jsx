import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import Footer from "./Footer";
import pink from '../../assets/aviones/pink.png'
import green from '../../assets/aviones/green.png'
import blue from '../../assets/aviones/blue.png'
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
    
    useEffect(() => {
        window.addEventListener('storage', () => {
          const tandas = JSON.parse(localStorage.getItem('tandasData'))
          setTandas(tandas);
        })
      }, []);

      console.log(tandas)
    return <>
        <div className="p-4" >
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
                            <th className="w-1/4 px-5 py-3 text-right font-semibold  uppercase">
                               
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold uppercase">
                                
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold uppercase">
                              
                            </th>
                            <th className="w-1/4 px-5 py-3 text-right font-semibold uppercase">
                                
                            </th>
                            <th className="px-5 py-3 font-semibold ">
                                
                            </th>
                            <th className="px-5 py-3 font-semibold flex-col items-center"></th>'
                            <th className="px-5 py-3 font-semibold flex-col items-center"></th>'
                        </tr>
                    </div >
                </thead>
                <tbody className="" style={{
                        height: '85vh'
                    }}>
                    <ReactScrollableFeed className="bg-white rounded">
                        {
                            tandas.length === 0 ? <td className="flex justify-center text-3xl p-8">Aún  no hay tandas</td>
                            : tandas.sort((a, b) => a.number_tanda - b.number_tanda)
                            .map((tanda, index) => {
                                return <tr key={index} className="border border-slate-300">
                                            <td className="px-5 py-3 text-left font-semibold"> 
                                                <span className="relative text-5xl text-blue">{ tanda.number_tanda }</span>
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
                                                                <svg class="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="30" viewBox="0 0 16 16" version="1.1" >
                                                                <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#3e4ec2" />
                                                                </svg>
                                                            </div>
                                                        ) 
                                                    : 
                                                        ''
                                                }
                                                <div className="text-2xl text-gray-900 whitespace-no-wrap"> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</div>
                                                <div className="text-2xl text-gray-900 whitespace-no-wrap"> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</div>
                                            </td>
                                            <td className="flex items-center">
                                            {
                                                tanda.avion.toUpperCase() === 'GYC' ? (
                                                    <div className="pt-4 pr-4 justify-center w-20 h-20">
                                                        <img
                                                        className="w-full h-full"
                                                        src={pink}
                                                        alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                    tanda.avion.toUpperCase() === 'GRI' ? (
                                                        <div className="pt-4 pr-4 justify-center w-20 h-20">
                                                            <img
                                                            className="w-full h-full"
                                                            src={green}
                                                            alt=""
                                                            />
                                                        </div>
                                                    ) : (tandas.avion === 'IFY' ?
                                                    (
                                                        <div className="pt-4 pr-4 justify-center w-20 h-20">
                                                        <img
                                                        className="w-full h-full"
                                                        src={blue}
                                                        alt=""
                                                        />
                                                    </div>
                                                    ) : 
                                                    <div className="pt-4 pr-4 justify-center w-20 h-20">
                                                    <img
                                                    className="w-full h-full"
                                                    
                                                    alt="IFY"
                                                    />
                                                </div>)

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