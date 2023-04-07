import React, { useState, useEffect, useRef, forwardRef } from "react";
// import Tanda from './dumbComponents/tanda'
import ReactScrollableFeed from 'react-scrollable-feed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import "./arrow.css"
import "./table.css"

import { DownloadTableExcel } from 'react-export-table-to-excel';
import goPro from '../assets/gopro.svg'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

const TandasController = forwardRef(({ tandas, setEditData, deleteTanda, endOfDay }, ref) => {
    //Tandas de DB
    /*
    const [ tandasDB, setTandasDB] = useState([])

    const getTandasDB = async () => {
        const data = await getDocs(collection( db, "tandas"))
        setTandasDB(
            data.docs.map( (doc) => ( {...doc.data(), id: doc.id}))
        )
    }

    useEffect(() => {
        getTandasDB()
    }, [tandasDB])
    */
 
    /*
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    })
    */

    console.log(tandas, "tandas linea 38")
    const tableRef = useRef(null);
    const btn_ref = useRef(null)

    const colors = ['text-amarillochasco', 'text-red', 'text-verdechasco'];

    return <> 
        <div className="min-h-screen">
            <div className="p-4">
            <div class="container mx-auto pb-6">
                <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    <div class="grid gap-6">
                        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-pink-200">
                            <a class="font-medium capitalize text-lg" href="#">task name</a>

                            <span class="flex items-center text-gray-500">Design<span class="bg-pink-400 rounded-full w-3 h-3 ml-1.5"></span></span>
                            <p class="text-gray-500">Description</p>

                            <div class="flex items-center mt-8">

                            <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Alex Doe" class="rounded-full w-9 h-9 object-cover" />
                            <span class="text-gray-500 ml-4">08/07/22</span>
                            <span class="text-gray-500 font-medium text-right lg:bg-red-400 lg:text-white lg:rounded-full lg:w-5 lg:h-5 xl:w-auto xl:h-auto lg:flex lg:justify-center lg:items-center lg:text-xs xl:text-gray-500 xl:bg-transparent xl:text-base ml-auto xl:inline-block">2 <span class="inline lg:hidden xl:inline">subtasks</span></span>
                            </div>

                        </div>

                    </div>
                    <div class="grid gap-6">
                        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-yellow-200">
                            <a class="font-medium capitalize text-lg" href="#">task name</a>
                            <DownloadTableExcel
                                filename="users table"
                                sheet="users"
                                currentTableRef={tableRef.current}>
                            <button className="bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 text-white"> Export excel </button>
                            </DownloadTableExcel>  
                            <span class="flex items-center text-gray-500">Feature<span class="bg-yellow-400 rounded-full w-3 h-3 ml-1.5"></span></span>
                            <p class="text-gray-500">Description</p>

                            <div class="flex items-center mt-8">
                                <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="James Doe" class="rounded-full w-9 h-9 object-cover" />
                                <span class="text-gray-500 ml-4">15/06/22</span>
                            </div>
                        </div>
                    </div>
                    <div class="grid gap-6">
                        <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-blue-200">
                            <a class="font-medium capitalize text-lg" href="#">task name</a>
                            <a target='_blank' href={'#/table'} className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold px-3 border border-gray-400 rounded" >
                            {/*
                                <div id="eye"></div>
                            
                            */}
                            <img src={goPro} alt="Abrir pantalla" className="gopro"/>
                        </a>
                            <span class="flex items-center text-gray-500">Bug<span class="bg-blue-400 rounded-full w-3 h-3 ml-1.5"></span></span>
                            <p class="text-gray-500">Description</p>

                            <div class="flex items-center mt-8">

                            <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Annie Doe" class="rounded-full w-9 h-9 object-cover" />
                            <span class="text-gray-500 ml-4">03/06/22</span>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
                <div className="bg-blanco-transp rounded-lg shadow-lg overflow-hidden">
                    <table className="table-auto w-full border-collapse" ref={tableRef}>
                        <thead className="text-white shadow-lg ">
                        <ReactScrollableFeed>
                            <tr className="bg-blue">
                                <th className="py-3 px-4">Tanda</th>
                                <th className="py-3 px-4">Slot 1</th>
                                <th className="py-3 px-4">Slot 2</th>
                                <th className="py-3 px-4">Slot 3</th>
                                <th className="py-3 px-4">Slot 4</th>
                                <th className="py-3 px-4">Piloto</th>
                                <th className="py-3 px-4">Altura</th>
                                <th className="py-3 px-4">Avión</th>
                                <th className="py-3 px-4">Hora</th>
                                <th className="py-3 px-4">en vuelo</th>
                                <th className="py-3 px-4">editar</th>
                                <th className="py-3 px-4">eliminar</th>
                            </tr>
                        </ReactScrollableFeed>
                        </thead>
                        <tbody className="" style={{
                            maxHeight: '65vh'
                        }}>
                            <ReactScrollableFeed className="" style={{
                            maxWidth: '100wh'
                        }}>
                                {
                                    tandas.length === 0 ? <span className="flex justify-center text-3xl p-8 text-black">Aún no hay tandas cargadas</span> : tandas.sort((a, b) => a.number_tanda - b.number_tanda).map((tanda, index) => {
                                        return tanda.combus == 'SI' ? (
                                            <tr key={index} className="bg-red">
                                                <td className="px-4 py-3"> {tanda.number_tanda}</td>
                                                <td className={`px-4 py-3 ${tanda.isTandem ? 'bg-blue' : ''}`}>{tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.avion.charAt(0).toUpperCase() + tanda.avion.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.time}</td>
                                                <td className="px-4 py-3">
                                                    <button className="bg-red"> Edit
                                                        <div ref={btn_ref} onClick={() => setEditData(tanda)} className="">Edit
                                                            <svg viewBox="0 0 16 16">
                                                                <path className="path1" d="M13.5 0c1.381 0 2.5 1.119 2.5 2.5 0 0.563-0.186 1.082-0.5 1.5l-1 1-3.5-3.5 1-1c0.418-0.314 0.937-0.5 1.5-0.5zM1 11.5l-1 4.5 4.5-1 9.25-9.25-3.5-3.5-9.25 9.25zM11.181 5.681l-7 7-0.862-0.862 7-7 0.862 0.862z"></path>
                                                            </svg>
                                                        </div>
                                                    </button>
                                                    <button className=""> Delete
                                                        <div className="" onClick={() => deleteTanda(tanda)}>
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
                                                </td>
                                                <td className="px-4 py-3">
                                                    {
                                                        tanda.in_flight === true 
                                                        ? 
                                                        (
                                                            <div className="">
                                                                <h1>En vuelo</h1>
                                                                
                                                                <svg className="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 16 16" version="1.1" >
                                                                <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#ffff" />
                                                                </svg>
                                                            </div>
                                                            ) 
                                                        : 
                                                            null
                                                    }
                                                </td>
                                            </tr>)
                                            : 
                                            (<tr key={index} className="font-bold text-darki">
                                                
                                                <td key={index} className={`px-4 py-3 text-2xl font-bold ${colors[index % colors.length]}`}>
                                                {tanda.number_tanda}
                                                </td>
                                                
                                                <td className={`px-2 py-2 ${tanda.is_tandem ? 'text-blue font-bold' : ''} text-sm`}>
                                                {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}
                                                </td>
                                                <td className={`px-2 py-2 ${tanda.is_tandem ? 'text-blue font-bold' : ''} text-sm`}>
                                                {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                                </td>

                                                <td className={`px-2 py-2 ${tanda.is_tandem_2 ? 'text-blue font-bold' : ''} text-sm`}>
                                                {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}
                                                </td>
                                                <td className={`px-2 py-2 ${tanda.is_tandem_2 ? 'text-blue font-bold' : ''} text-sm`}>
                                                {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                                </td>

                                                <td className="px-4 py-3"> {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.avion.charAt(0).toUpperCase() + tanda.avion.slice(1)}</td>
                                                <td className="px-4 py-3"> {tanda.time}</td>

                                                <td className="px-4 py-3">
                                                    {
                                                        tanda.in_flight === true 
                                                        ? 
                                                            (
                                                                <div className="">
                                                                    <button  className="rounded-md bg-green hover:bg-red text-white text-sm px-3 py-1 transition duration-200">
                                                                        <div className="text-xl">
                                                                            <FontAwesomeIcon icon={faPlaneDeparture} />
                                                                        </div>
                                                                    </button>
                                                                    <button  className="rounded-md bg-bg-blue-light2 text-white text-sm px-3 py-1 transition duration-200">
                                                                        <div className="text-xl">
                                                                            <FontAwesomeIcon icon={faPlaneArrival} />
                                                                        </div>
                                                                    </button>
                                                                    {/*
                                                                    <svg className="upload-arrow" xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 16 16" version="1.1" >
                                                                    <path id="upload-arrow" d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z" fill="#3e4ec2" />
                                                                    </svg>
                                                                    
                                                                    */}
                                                                </div>
                                                            ) 
                                                        : 
                                                            null
                                                    }
                                                </td>
                                                <td className="px-4 py-3">
                                                    <button onClick={() => setEditData(tanda)} className="rounded-md bg-bg-blue-light2 hover:bg-blue-600 text-white text-sm px-3 py-1 transition duration-200">
                                                        <div className="text-xl">
                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                        </div>
                                                    </button>
                                                </td>

                                                <td className="px-4 py-3">
                                                    <button onClick={() => deleteTanda(tanda)} className="rounded-md bg-red hover:bg-red text-white text-sm px-3 py-1 transition duration-200">
                                                        <div className="text-xl">
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                        </div>
                                                    </button>
                                                </td>
                                            </tr>
                                            )
                                        }
                                    )
                                }

                            </ReactScrollableFeed>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>

})

export default TandasController