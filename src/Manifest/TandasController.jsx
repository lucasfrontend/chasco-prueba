import React, { useState, useEffect, useRef, forwardRef } from "react";
// import Tanda from './dumbComponents/tanda'
import ReactScrollableFeed from 'react-scrollable-feed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp, faPlaneDeparture, faPlaneArrival, faHashtag, faEye,faRectangleXmark, faFileExcel } from '@fortawesome/free-solid-svg-icons';
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

    const colors = ['text-ye-chasco', 'text-red-chasco', 'text-gr-chasco'];

    return <> 
        <div className="min-h-screen">
            <div className="p-4">
                <div class="container mx-auto pb-6">
                    <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                        <div class="grid gap-6">
                            <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-pink-200">
                                <a class="font-medium capitalize text-lg" href="#">Título 1</a>

                                <p class="text-gray-500">body</p>

                                <div class="flex items-center mt-8">
                                    {
                                        /*
                                        
                                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Alex Doe" class="rounded-full w-9 h-9 object-cover" />
                                        */
                                    }
                                <span class="text-gray-500 font-medium text-right lg:bg-red-400 lg:text-white lg:rounded-full lg:w-5 lg:h-5 xl:w-auto xl:h-auto lg:flex lg:justify-center lg:items-center lg:text-xs xl:text-gray-500 xl:bg-transparent xl:text-base ml-auto xl:inline-block">2 <span class="inline lg:hidden xl:inline">subtasks</span></span>
                                </div>

                            </div>

                        </div>
                        <div class="grid gap-6">
                            <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-yellow-200">
                                <a class="font-medium capitalize text-lg" href="#">titulo</a>

                                <DownloadTableExcel
                                    filename="users table"
                                    sheet="users"
                                    currentTableRef={tableRef.current}>
                                    <button className="bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 text-white"> <FontAwesomeIcon icon={faFileExcel} className="text-white"/> Export excel </button>
                                </DownloadTableExcel>  
                                <div class="flex items-center mt-8">
                                    {/*
                                        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="James Doe" class="rounded-full w-9 h-9 object-cover" />
                                    
                                    */}
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-6">
                            <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-blue-200">
                            <a class="font-medium capitalize text-lg" href="#">Fin del día</a>
                                <button className="rounded-md bg-bg-blue-light2 hover:bg-blue-600 text-white text-sm px-3 py-1 transition duration-200 " type="submit" value="Fin del dia" onClick={() => endOfDay(tandas)}>
                                    <div className="text-xl">

                                    <FontAwesomeIcon icon={faRectangleXmark} />
                                    </div>
                                </button> 

                                <a class="font-medium capitalize text-lg" href="#">Abrir tabla</a>
                                
                                <button className="rounded-md bg-bg-blue-light2 hover:bg-blue-600 text-white text-sm px-3 py-1 transition duration-200">
                                    <a target='_blank' href={'#/table'} className="" >
                                        <div className="text-xl">
                                            <FontAwesomeIcon icon={faEye} />
                                        </div>
                                    </a>
                                </button>

                                <div class="flex items-center mt-8">
                                    {/*
                                    
                                <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Annie Doe" class="rounded-full w-9 h-9 object-cover" />
                                    */}
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg-blanco-transp rounded-lg shadow-lg overflow-hidden">
                    <table className="table-auto w-full border-collapse" ref={tableRef}>
                        <thead className="text-white shadow-lg bg-bl-chasco">
                            <ReactScrollableFeed>
                                <tr className="">
                                    <th className="py-3 px-4 text-ye-chasco uppercase">Tanda</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">Slot 1</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">Slot 2</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">Slot 3</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">Slot 4</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">-</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">-</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">-</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">-</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">-</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">editar</th>
                                    <th className="py-3 px-4 text-ye-chasco uppercase">eliminar</th>
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
                                    tandas.length === 0 ? <span className="flex justify-center text-3xl p-8 text-black">Aún no hay tandas cargadas</span> : tandas.sort((a, b) => {
                                        if (a.number_tanda && b.number_tanda) {
                                          return a.number_tanda - b.number_tanda;
                                        } else {
                                          return a.number_tanda ? -1 : b.number_tanda ? 1 : 0;
                                        }
                                      }).map((tanda, index) => {
                                        return tanda.combus == 'SI' ? (<tr key={index} className="font-bold text-darki">

                                        <td key={index} className="px-4 py-3 text-ye-chasco uppercase">
                                            {tanda.number_tanda ? (
                                                <button className="bg-white rounded-md py-2 px-4">
                                                    <span className={`text-2xl font-bold ${colors[index % colors.length]}`}>
                                                        {tanda.number_tanda}
                                                    </span>
                                                </button>
                                            ) : (
                                                <button className="bg-white rounded-md py-2 px-4">
                                                <FontAwesomeIcon
                                                    icon={faHashtag}
                                                />
                                            </button>
                                            )}
                                        </td>
                                        
                                        <td className={`px-2 py-2 ${tanda.is_tandem ? 'text-blue font-bold' : ''} text-sm`}>
                                            {tanda.is_tandem && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                            {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}
                                        </td>

                                        <td className={`px-2 py-2 ${tanda.is_tandem ? 'text-blue font-bold' : ''} text-sm`}>
                                            {tanda.is_tandem && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                            {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                        </td>

                                        <td className={`px-2 py-2 ${tanda.is_tandem_2 ? 'text-blue font-bold' : ''} text-sm`}>
                                            {tanda.is_tandem_2 && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                            {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}
                                        </td>

                                        <td className={`px-2 py-2 ${tanda.is_tandem_2 ? 'text-blue font-bold' : ''} text-sm`}>
                                            {tanda.is_tandem_2 && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                            {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}
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
                                                                <div className="text-xl rounded-md text-gr-chasco">
                                                                    <FontAwesomeIcon icon={faPlaneDeparture} />
                                                                </div>
                                                            {/*
                                                            <button  className="rounded-md bg-bg-blue-light2 text-white text-sm px-3 py-1 transition duration-200">
                                                                <div className="text-xl">
                                                                    <FontAwesomeIcon icon={faPlaneArrival} />
                                                                </div>
                                                            </button>
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
                                            : 
                                            (<tr key={index} className="font-bold text-darki">

                                                <td key={index} className="px-4 py-3 text-ye-chasco uppercase">
                                                    {tanda.number_tanda ? (
                                                        <button className="bg-white rounded-md py-2 px-4">
                                                            <span className={`text-2xl font-bold ${colors[index % colors.length]}`}>
                                                                {tanda.number_tanda}
                                                            </span>
                                                        </button>
                                                    ) : (
                                                        <button className="bg-white rounded-md py-2 px-4">
                                                        <FontAwesomeIcon
                                                            icon={faHashtag}
                                                        />
                                                    </button>
                                                    )}
                                                </td>
                                                
                                                <td className={`px-2 py-2 ${tanda.is_tandem ? 'text-blue font-bold' : ''} text-sm`}>
                                                    {tanda.is_tandem && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                                    {tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}
                                                </td>

                                                <td className={`px-2 py-2 ${tanda.is_tandem ? 'text-blue font-bold' : ''} text-sm`}>
                                                    {tanda.is_tandem && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                                    {tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}
                                                </td>

                                                <td className={`px-2 py-2 ${tanda.is_tandem_2 ? 'text-blue font-bold' : ''} text-sm`}>
                                                    {tanda.is_tandem_2 && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                                    {tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}
                                                </td>

                                                <td className={`px-2 py-2 ${tanda.is_tandem_2 ? 'text-blue font-bold' : ''} text-sm`}>
                                                    {tanda.is_tandem_2 && <h3>TDM</h3>} {/* Mostrar la imagen solo si tanda.is_tandem es verdadero */}
                                                    {tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}
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
                                                                        <div className="text-xl rounded-md text-gr-chasco">
                                                                            <FontAwesomeIcon icon={faPlaneDeparture} />
                                                                        </div>
                                                                    {/*
                                                                    <button  className="rounded-md bg-bg-blue-light2 text-white text-sm px-3 py-1 transition duration-200">
                                                                        <div className="text-xl">
                                                                            <FontAwesomeIcon icon={faPlaneArrival} />
                                                                        </div>
                                                                    </button>
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