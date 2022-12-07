import React, { useRef, forwardRef, useImperativeHandle } from "react";
// import Tanda from './dumbComponents/tanda'
import HeaderTandas from './HeaderTandas'
import ReactScrollableFeed from 'react-scrollable-feed'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import goPro from '../assets/gopro.svg'
import { useState } from "react";

const TandasController = forwardRef(({ tandas, setEditData, deleteTanda, endOfDay }, ref) => {
    const tableRef = useRef(null);
    const btn_ref = useRef(null)
    const colorSelected = () => setColor(visible)

    return <>
        <div className="w-screen dark:bg-gray-900 overflow-y-auto p-4">
            <img src="" alt="" />
            <div class="cards-header flex justify-between">
                <h3 class="bg-transparent font-semibold py-2 px-4 mr-2">Tandas: { tandas.length }</h3>
                <div class="cards-header-date">
                    <div className="container flex">
                        <DownloadTableExcel
                            filename="users table"
                            sheet="users"
                            currentTableRef={tableRef.current}>
                        <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> Export excel </button>
                        </DownloadTableExcel>  
                        <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4" type="submit" value="Fin del dia" onClick={() => endOfDay(tandas)}>Fin del dia</button> 
                    </div>
                    <a target='_blank' href={'#/table'} className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold px-3 border border-gray-400 rounded" >
                        <div id="eye"></div>
                    </a>
                </div>
            </div>
            <table class="w-full" ref={tableRef}>
                <thead className="">
                    <div className="bg-blue-cards">
                        <tr className="">
                            <th className=" px-5 py-3 text-left font-semibold uppercase">
                                Nro
                            </th>
                            <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase">
                                -
                            </th>
                            <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase">
                                -
                            </th>
                            <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase">
                                -
                            </th>
                            <th className="w-1/4 px-5 py-3 text-left font-semibold uppercase">
                                -
                            </th>
                            <th className=" px-5 py-3 text-left font-semibold uppercase">Piloto</th>
                            <th className="w-auto px-5 py-3 text-left font-semibold uppercase">Altura</th>
                            <th className="w-auto px-5 py-3 text-left font-semibold uppercase">Avión</th>
                            <th className="w-auto px-5 py-3 text-left font-semibold uppercase">Horario</th>
                            <th className="w-20 px-5 py-3 flex cursor-pointer"></th>
                            <th className="w-20 px-5 py-3 flex cursor-pointer hidden">hizo combus</th>
                        </tr>
                    </div >
                </thead>
                <tbody className="" style={{
                        height: '65vh'
                    }}>
                    <ReactScrollableFeed className="bg-blue-light rounded">
                        {
                            tandas.length === 0 ? <td className="flex justify-center text-3xl p-8">Aún  no hay tandas</td>
                            : tandas.sort((a, b) => a.number_tanda - b.number_tanda)
                            .map((tanda, index) => {
                                return tanda.combus === 'SI' ? 
                                (
                                    <tr key={index} className="border border-slate-300 bg-red">
                                            <td className="px-5 py-3 text-left font-semibold"> {tanda.number_tanda}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}</td>
                                            <td className=" px-5 py-3 font-semibold "> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td>
                                            <td className="px-5 py-3 font-semibold "> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td>
                                            <td className="px-5 py-3 font-semibold "> {tanda.avion.charAt(0).toUpperCase() + tanda.avion.slice(1)}</td>
                                            <td className="px-5 py-3 font-semibold "> {tanda.time}</td>
                                            <td className="px-5 py-3 flex">
                                                <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> 
                                                    <div ref={btn_ref} onClick={() => setEditData(tanda)} className="w-4 cursor-pointer fill-white">
                                                        <svg viewBox="0 0 16 16">
                                                            <path class="path1" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <button className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> 
                                                    <div className="w-4 cursor-pointer fill-white" onClick={() => deleteTanda(tanda.id)}>
                                                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            <polyline points="76.91 31.66 76.91 92.53 21.9 92.53 21.9 31.66"/>
                                                            <rect x="16.56" y="16.44" width="65.7" height="9.88"/>
                                                            <line x1="34.01" y1="40.69" x2="34.01" y2="81.02"/>
                                                            <line x1="49.41" y1="40.69" x2="49.41" y2="81.02"/>
                                                            <line x1="64.8" y1="40.69" x2="64.8" y2="81.02"/>
                                                            <path d="M37.25,16.44V12.31h0a5.14,5.14,0,0,1,4.83-5.4H56.73a5.14,5.14,0,0,1,4.83,5.4v4.13"/>
                                                        </svg>
                                                        
                                                    </div>
                                                
                                                </button>
                                                {/*
                                                    <div className="w-8 cursor-pointer ml-4">
                                                        <input type="checkbox" name="checked" onChange={(e) => setIsCheked(e.target.checked) }/>
                                                    </div>
                                                */}
                                                
                                            </td>
                                            <td className="px-5 py-3 font-semibold hidden"> {tanda.combus} </td>
                                            <td className="px-5 py-3 text-left font-semibold">
                                                {
                                                    tanda.in_flight === true 
                                                    ? 
                                                        (
                                                            <div class="">
                                                                <svg class="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 16 16" version="1.1" >
                                                                  <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#3e4ec2" />
                                                                </svg>
                                                            </div>
                                                        ) 
                                                    : 
                                                        null
                                                }
                                            </td>
                                    </tr>
                                    )
                                : 
                                (
                                    <tr key={index} className="border border-slate-300">
                                            <td className="px-5 py-3 text-left font-semibold"> {tanda.number_tanda}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}</td>
                                            <td className="w-1/4 px-5 py-3 text-left font-semibold "> {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}</td>
                                            <td className=" px-5 py-3 font-semibold "> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td>
                                            <td className="px-5 py-3 font-semibold "> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td>
                                            <td className="px-5 py-3 font-semibold "> {tanda.avion.charAt(0).toUpperCase() + tanda.avion.slice(1)}</td>
                                            <td className="px-5 py-3 font-semibold "> {tanda.time}</td>

                                            <td className="px-5 py-3 flex">
                                                <button onClick={() => setEditData(tanda)} className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> 
                                                    <div ref={btn_ref} className="w-4 cursor-pointer fill-white">
                                                        <svg viewBox="0 0 16 16">
                                                            <path class="path1" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                                <button onClick={() => deleteTanda(tanda.id)} className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4"> 
                                                    <div className="w-4 cursor-pointer fill-white">
                                                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                                            <polyline points="76.91 31.66 76.91 92.53 21.9 92.53 21.9 31.66"/>
                                                            <rect x="16.56" y="16.44" width="65.7" height="9.88"/>
                                                            <line x1="34.01" y1="40.69" x2="34.01" y2="81.02"/>
                                                            <line x1="49.41" y1="40.69" x2="49.41" y2="81.02"/>
                                                            <line x1="64.8" y1="40.69" x2="64.8" y2="81.02"/>
                                                            <path d="M37.25,16.44V12.31h0a5.14,5.14,0,0,1,4.83-5.4H56.73a5.14,5.14,0,0,1,4.83,5.4v4.13"/>
                                                        </svg>
                                                        
                                                    </div>
                                                
                                                </button>
                                                {/*
                                                    <div className="w-8 cursor-pointer ml-4">
                                                        <input type="checkbox" name="checked" onChange={(e) => setIsCheked(e.target.checked) }/>
                                                    </div>
                                                */}
                                                
                                            </td>
                                            <td className="px-5 py-3 text-left font-semibold">
                                                {
                                                    tanda.in_flight === true 
                                                    ? 
                                                        (
                                                            <div class="">
                                                                <svg class="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 16 16" version="1.1" >
                                                                  <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#3e4ec2" />
                                                                </svg>
                                                            </div>
                                                        ) 
                                                    : 
                                                        null
                                                }
                                            </td>
                                    </tr>
                                    )
                                }
                            )
                        }
                    </ReactScrollableFeed >
                </tbody>
            </table>
        </div>
    </>

})

export default TandasController