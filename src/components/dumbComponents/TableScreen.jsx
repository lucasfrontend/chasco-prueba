import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import NavScreen from '../NavScreen'
import Footer from "./Footer";
import pilotito from '../../assets/pilots/pilotito.png'
import tano from '../../assets/pilots/tano.png'
import mati from '../../assets/pilots/mati.jpg'
import ferl from '../../assets/pilots/ferlop.png'
import segundo from '../../assets/pilots/segundo.png'
import martin from '../../assets/pilots/martin.png'
import pink from '../../assets/aviones/pink.png'
import green from '../../assets/aviones/green.png'
import blue from '../../assets/aviones/blue.png'
import "./arrow.css"

const TableScreen = () => {
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
        <div className="p-8" >
            <div>
                <h2 className="text-2xl font-semibold"></h2>
                <div className=""></div>
            </div>
            <div className="w-full inline-block rounded-lg overflow-hidden ">
                <table className="leading-normal w-full">
                    <thead className="">
                    <div className="bg-black ">
                        <tr className="w-full flex justify-between p-4">
                            <th className="text-4xl px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Nro
                            </th>
                            <th className="text-4xl px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Paracas
                            </th>
                            <th className="text-4xl px-5 py-3 border-gray-200 bg-gray-100">
                                Avión
                            </th>
                        </tr>
                        </div >
                    </thead>
                    <tbody className="overflow-y-scroll" style={{
                        height: '80vh',
                    }}>
                        <ReactScrollableFeed className="">
                        {
                            tandas.length === 0 ? <td className="min-w-full flex justify-center px-5 py-5 bg-white">Aun no hay tandas</td>
                            : tandas.sort((a, b) => a.number_tanda - b.number_tanda)
                            .map((tanda, index) => {
                                return <>
                                <tr className="min-w-full flex justify-between bg-white shadow-md border border-slate-300">
                                    <td className="px-5 py-5 items-center text-center">
                                        <span
                                        className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                                        >
                                        <span
                                            aria-hidden
                                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                        ></span>
                                        <span className="relative text-5xl text-blue">{ tanda.number_tanda }</span>
                                        </span>
                                    </td>
                                    <td className="px-5 py-5 items-center text-center">
                                        <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">{ tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</p>
                                    </td>
                                    <td className="px-  py-5 items-center text-center">
                                        <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold ">{ tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}</p>
                                    </td>
                                    <td className="px-5 py-5">
                                        <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">{ tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}</p>
                                    </td>
                                    <td className="px-5 py-5">
                                        <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">{ tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}</p>
                                    </td>
                                    <td className="px-5 py-5">
                                        <p className="text-3xl text-gray-900 whitespace-no-wrap font-extrabold">{ tanda.time}</p>
                                    </td>
                                    <td className="px-5 py-5 w-45">
                                            {/*
                                                tanda.pilot.toUpperCase() === 'PILOTITO' ? (
                                                    <div className="flex-shrink-0 w-24 h-24">
                                                        <img
                                                        className="w-full h-full rounded-full"
                                                        src={pilotito}
                                                        alt=""
                                                        />
                                                    </div>
                                                ) : ( 
                                                    (tanda.pilot.toUpperCase() === 'TANO') ? (
                                                        <div className="flex-shrink-0 w-24 h-24">
                                                        <img
                                                        className="w-full h-full rounded-full"
                                                        src={tano}
                                                        alt=""
                                                        />
                                                    </div>
                                                    ) : ( 
                                                        (tanda.pilot.toUpperCase() === 'FER LOPEZ') ? (
                                                            <div className="flex-shrink-0 w-24 h-24">
                                                            <img
                                                            className="w-full h-full rounded-full"
                                                            src={ferl}
                                                            alt=""
                                                            />
                                                        </div>
                                                        ) : (
                                                            (tanda.pilot.toUpperCase() === 'MATI') ? (
                                                                <div className="flex-shrink-0 w-24 h-24">
                                                                <img
                                                                className="w-full h-full rounded-full"
                                                                src={mati}
                                                                alt=""
                                                                />
                                                            </div>
                                                            ) : (tanda.pilot.toUpperCase() === 'SEGUNDO') ? (
                                                                <div className="flex-shrink-0 w-24 h-24">
                                                                <img
                                                                className="w-full h-full rounded-full"
                                                                src={segundo}
                                                                alt=""
                                                                />
                                                            </div>
                                                            ) : (
                                                                <div className="flex-shrink-0 w-24 h-24">
                                                                <img
                                                                className="w-full h-full rounded-full"
                                                                src={martin}
                                                                alt=""
                                                                />
                                                            </div>
                                                            ) 
                                                        )
                                                    
                                                    )
                                                
                                                )
                                            */}
                                            <div className="flex items-center">
                                                <div className="column ">
                                                    <div className="inline-flex justify-items-end">
                                                        {
                                                            tanda.in_flight === true 
                                                            ? 
                                                                (
                                                                    <div class="upload-btn-container">
                                                                        <svg class="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="36" viewBox="0 0 16 16" version="1.1" >
                                                                        <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#3e4ec2" />
                                                                        </svg>
                                                                    </div>
                                                                ) 
                                                            : 
                                                                ''
                                                        }
                                                        <p className="text-gray-600 whitespace-no-wrap text-4xl">{ tanda.altitude }</p>
                                                    </div>
                                                    <p className="text-2xl text-gray-900 whitespace-no-wrap font-extrabold">{ tanda.pilot}</p>
                                                </div>
                                                <div className="ml-8">
                                                    {
                                                        tanda.avion.toUpperCase() === 'GYC' ? (
                                                            <div className="flex-shrink-0 w-20 h-20">
                                                                <img
                                                                className="w-full h-full"
                                                                src={pink}
                                                                alt=""
                                                                />
                                                            </div>
                                                        ) : (
                                                            tanda.avion.toUpperCase() === 'GSD' ? (
                                                                <div className="flex-shrink-0 w-20 h-20">
                                                                    <img
                                                                    className="w-full h-full"
                                                                    src={blue}
                                                                    alt=""
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className="flex-shrink-0 w-20 h-20">
                                                                <img
                                                                className="w-full h-full"
                                                                
                                                                alt="IFY"
                                                                />
                                                            </div>
                                                            )

                                                        )
                                                    }
                                                </div>
                                        </div>
                                    </td>
                                </tr> 
                            </>
                            })                            
                        }
                        </ReactScrollableFeed >
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </>

}

export default TableScreen