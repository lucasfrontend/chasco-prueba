import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import Spinner from "../components/spinner";
import Tandem from '../assets/tandem.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faArrowUp, faPlaneDeparture, faPlaneArrival, faHashtag, faCheck } from '@fortawesome/free-solid-svg-icons';
//import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
//import { db } from '../firebase'
//import BeerAnimation from './BeerAnimation/BeerAnimation'

//import { SdChContextProvider } from '../../context/sdchContext'
import Footer from "../components/dumbComponents/Footer";
import "./arrow.css"
import "./table.css"
//import "./TableScreen.css"


const TableScreen2 = () => {
    const [weather, setWeather ] = useState([]);
    const [forecast, setForecast ] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [show, setShow] = useState(true);

    const colors = ['text-ye-chasco', 'text-red-chasco', 'text-gr-chasco'];
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
      

    // HORA SUNSET
    const lat = '-35.5404833067820' ;
    const lon = '-58.049692027809016';
    const key = 'fbf06dde7bf4c0ad9452651d32bb4f1a'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;

    useEffect(() => {
        if (loading) {
            async function fetchData() {
              try {
                const response = await fetch(url);
                if (response.ok) {
                  const dog = await response.json();
                  setWeather(dog);
                  setLoading(false);
                } else {
                  console.log("Hubo un error");
                  setLoading(true)
                }
              } catch (error) {
                console.log("No pudimos hacer la solicitud para obtener datos");
                setLoading(true)
                setShow(false);
              }
            }
            fetchData();
          }
      }, [loading]);

      useEffect(() => {
        if (loading) {
            async function fetchData() {
              try {
                const response = await fetch(urlForecast);
                if (response.ok) {
                  const dog = await response.json();
                  setForecast(dog);
                  setLoading(false);
                } else {
                  console.log("Hubo un error");
                  setLoading(true)
                }
              } catch (error) {
                console.log("No pudimos hacer la solicitud para obtener datos");
                setLoading(true)
                setShow(false);
              }
            }
            fetchData();
          }
      }, [loading]);


    //Tandas de FB
    //const [ tandasDB, setTandasDB] = useState([])

    /*
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
    */


    if(loading === true){
        return <>
            <div className="">
                <Spinner />
            </div>
        </>
    } else {
        return <>
        {
            tandas.length !== 0 ? ( <div className="min-h-screen bg-login-screen backdrop-blur" >
            <div className="p-4">
                <div className="rounded-lg shadow-lg overflow-hidden">
                    <table className="leading-normal w-full border-2 border-bg-bl-chasco" id="table">
                        <thead className="bg-blue text-white shadow-lg">
                            <ReactScrollableFeed>
                                <div className="">
                                    <tr className="bg-bl-chasco">
                                        <th className="px-4 py-3 text-ye-chasco uppercase text-2xl">
                                            Nro
                                        </th>
                                        <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl text-ye-chasco uppercase">Slot I
                                        
                                        </th>
                                        <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl text-ye-chasco uppercase">Slot II
                                            
                                        </th>
                                        <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl text-ye-chasco uppercase">Slot III
                                        
                                        </th>
                                        <th className="w-1/4 px-5 py-3 text-left font-semibold text-2xl text-ye-chasco uppercase">Slot IV
                                            
                                        </th>
                                        <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                        <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                        <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                        <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                        <th className="w-1/4 px-5 py-3 font-semibold flex-col items-center text-2xl "></th>
                                        <th class="w-1/4 px-5 py-3 font-semibold flex items-center justify-center h-full text-2xl text-ye-chasco uppercase">Avión</th>
                                    </tr>
                                </div >
                            </ReactScrollableFeed>
                        </thead>
                        <tbody className="" style={{
                                height: '83vh'
                            }}>
                            <ReactScrollableFeed className="backdrop-blur">
                                {
                                    tandas.length === 0 ? <span className="flex justify-center text-3xl p-8 text-black">Aún no hay tandas cargadas</span> : tandas.sort((a, b) => {
                                        if (a.number_tanda && b.number_tanda) {
                                          return a.number_tanda - b.number_tanda;
                                        } else {
                                          return a.number_tanda ? -1 : b.number_tanda ? 1 : 0;
                                        }
                                      }).map((tanda, index) => {
                                        return <tr key={index} className="text-black border-b-2 border-black border-bg-bl-chasco" style={{ display: 'flex', justifyContent: 'center', backgroundColor: tanda.plane_landed ? '#5444' : 'transparent', opacity: tanda.plane_landed ? 0.5 : 1 }}>
                                            <td key={index} className="px-4 py-3 text-ye-chasco uppercase" style={{ opacity: tanda.plane_landed ? 0.5 : 1 }}>
                                                {tanda.number_tanda ? (
                                                    <button className="bg-bl-chasco rounded-md py-2 px-4">
                                                        {/*
                                                        <button className="bg-bl-chasco rounded-md py-2 px-4">
                                                        <span className={`text-2xl font-bold ${colors[index % colors.length]}`}>
                                                            {tanda.number_tanda}
                                                        </span>
                                                        */}
                                                        <span className={`text-2xl font-bold text-bg-ye-chasco`}>
                                                            {tanda.number_tanda}
                                                        </span>
                                                    </button>
                                                ) : (
                                                    <button className="bg-bl-chasco rounded-md py-2 px-4">
                                                    <FontAwesomeIcon
                                                        icon={faHashtag}
                                                    />
                                                </button>
                                                )}
                                            </td>

                                            <td 
                                                className={`w-1/4 px-5 py-3 text-left font-semibold text-3xl ${tanda.is_tandem ? 'text-gr-chasco font-bold' : ''}`} 
                                                style={{ 
                                                    backgroundColor: tanda.is_tandem ? 'white' : 'transparent',
                                                    borderRadius: tanda.is_tandem ? '0.50rem 0rem 0rem 0.50rem' : 'none',
                                                    margin: tanda.is_tandem ? '0.5rem 0rem 0.5rem 0rem' : 'none',
                                                    opacity: tanda.plane_landed ? 0.5 : 1,
                                                }}
                                            >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{tanda.paraca_1.charAt(0).toUpperCase() + tanda.paraca_1.slice(1)}</span>
                                                    {tanda.is_tandem && <img src={Tandem} alt="TDM" className="w-8 h-8 object-contain ml-2" />} 
                                                </div>
                                            </td>

                                            <td 
                                                className={`w-1/4 px-5 py-3 text-left font-semibold text-3xl ${tanda.is_tandem ? 'text-red-chasco font-bold' : ''}`} 
                                                style={{ 
                                                    backgroundColor: tanda.is_tandem ? 'white' : 'transparent',
                                                    borderRadius: tanda.is_tandem ? '0rem 0.50rem 0.50rem 0rem' : 'none',
                                                    margin: tanda.is_tandem ? '0.5rem 0.5rem 0.5rem 0rem' : 'none',
                                                    opacity: tanda.plane_landed ? 0.5 : 1,
                                                    
                                                }}
                                            >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{tanda.paraca_2.charAt(0).toUpperCase() + tanda.paraca_2.slice(1)}</span>
                                                    {tanda.is_tandem && <img src={Tandem} alt="TDM" className="w-8 h-8 object-contain ml-2" />} 
                                                </div>
                                            </td>


                                            
                                            <td 
                                                className={`w-1/4 px-5 py-3 text-left font-semibold text-3xl ${tanda.is_tandem_2 ? 'text-gr-chasco font-bold' : ''}`} style={{ 
                                                    backgroundColor: tanda.is_tandem_2 ? 'white' : 'transparent',
                                                    borderRadius: tanda.is_tandem_2 ? '0.50rem 0rem 0rem 0.50rem' : 'none',
                                                    margin: tanda.is_tandem_2 ? '0.5rem 0rem 0.5rem 0rem' : 'none',
                                                    opacity: tanda.plane_landed ? 0.5 : 1,
                                                }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{tanda.paraca_3.charAt(0).toUpperCase() + tanda.paraca_3.slice(1)}</span>
                                                    {tanda.is_tandem_2 && <img src={Tandem} alt="TDM" className="w-8 h-8 object-contain ml-2" />} 
                                                </div>
                                                </td>

                                                <td 
                                                    className={`w-1/4 px-5 py-3 text-left font-semibold text-3xl ${tanda.is_tandem_2 ? 'text-red-chasco font-bold' : ''}`} 
                                                    style={{ 
                                                        backgroundColor: tanda.is_tandem_2 ? 'white' : 'transparent',
                                                        borderRadius: tanda.is_tandem_2 ? '0rem 0.50rem 0.50rem 0rem' : 'none',
                                                        margin: tanda.is_tandem_2 ? '0.5rem 0rem 0.5rem 0rem' : 'none',
                                                        opacity: tanda.plane_landed ? 0.5 : 1,
                                                        
                                                    }}
                                                >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span>{tanda.paraca_4.charAt(0).toUpperCase() + tanda.paraca_4.slice(1)}</span>
                                                    {tanda.is_tandem_2 && <img src={Tandem} alt="TDM" className="w-8 h-8 object-contain ml-2" />} 
                                                </div>
                                            </td>


                                            <div className="p-4">
                                                {
                                                    tanda.time ? <td className="font-semibold text-bl-chasco text-2xl pr-5">{tanda.time}</td> : <td className="font-semibold text-bl-chasco text-2xl pr-5">
                                                        <FontAwesomeIcon icon={faHashtag} aria-hidden="true"  />
                                                    </td>  
                                                }
                                                {
                                                    tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1) ? <td className="text-2xl text-bl-chasco font-semibold pr-5">{tanda.altitude.charAt(0).toUpperCase() + tanda.altitude.slice(1)}</td> : <td className="text-2xl text-bl-chasco font-semibold pr-5">
                                                        <FontAwesomeIcon icon={faHashtag} aria-hidden="true"  />
                                                    </td>
                                                }     
                                                {tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1) ? 
                                                    <td className="text-2xl text-bl-chasco font-semibold pr-5">{tanda.pilot.charAt(0).toUpperCase() + tanda.pilot.slice(1)}</td> : 
                                                    <td className="text-2xl text-bl-chasco font-semibold pr-5">
                                                        <FontAwesomeIcon icon={faHashtag} aria-hidden="true"  />
                                                    </td>
                                                }
                                                
                                                {
                                                    tanda.avion ? <td className="text-2xl font-semibold">
                                                    {
                                                        tanda.avion.toUpperCase() === 'GYC' ? (
                                                            <div className="text-2xl text-bl-chasco">GYC</div>

                                                        ) : (
                                                                tanda.avion.toUpperCase() === 'GRI' ? (
                                                                    <div className="text-gr-chasco">GRI</div>
                                                                ) : (
                                                                    tanda.avion.toUpperCase() === 'GSD' ? (
                                                                        <div className="text-red-chasco">GSD</div>
                                                                    ) : (
                                                                        ''
                                                                    )
                                                                )
                                                            )
                                                    }
                                                    </td>
                                                    : <td className="font-semibold text-bl-chasco text-2xl">
                                                        <FontAwesomeIcon icon={faHashtag} aria-hidden="true"  />
                                                    </td>
                                                }

                                            </div>
                                            {
                                                !tanda.open_flight && (
                                                    tanda.in_flight ? (
                                                        <td className="font-semibold text-gr-chasco text-2xl p-4">
                                                            <FontAwesomeIcon icon={faPlaneDeparture} aria-hidden="true" />
                                                        </td>
                                                    ) : tanda.plane_landed ? (
                                                        <td className="font-semibold text-gr-chasco text-2xl p-4 my-td" >
                                                            <FontAwesomeIcon icon={faCheck} aria-hidden="true"  />
                                                        </td>
                                                    ) : (
                                                        <td className="font-semibold text-black text-2xl p-4 my-td" >
                                                            <FontAwesomeIcon icon={faHashtag} aria-hidden="true"  />
                                                            {/*
                                                            <td className="font-semibold  text-2xl p-4">
                                                                <div className="upload-btn-container">
                                                                    <svg
                                                                        className="upload-arrow"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        width="26"
                                                                        height="26"
                                                                        viewBox="0 0 16 16"
                                                                        version="1.1"
                                                                    >
                                                                        <path
                                                                            id="upload-arrow"
                                                                            d="M6 16l4 0 0-8 6 0 -8-8 -8 8 6 0 0 8Z"
                                                                            fill="#FF0000"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                </td>
                                                            */}
                                                        </td>
                                                    )
                                                )
                                            }
    
                                            </tr>
                                        }
                                    )
                                }
                            </ReactScrollableFeed >
                        </tbody>
                    </table>
                </div>
                    <Footer 
                        show={show}                  
                        weather={weather}
                        forecast={forecast}
                    />
            </div>
        </div>
        ) : (
    <div className="min-h-screen bg-gray-500 bg-login-screen backdrop-blur" >
 
        </div>
                )
        }
        </>
    }
}

export default TableScreen2