import React, { useEffect, useState } from "react";
import ReactScrollableFeed from 'react-scrollable-feed'
import Footer from "./Footer";
import pilot_1 from '../../assets/pilots/pilot_1.png'
import pilot_2 from '../../assets/pilots/pilot_2.png'
import pilot_3 from '../../assets/pilots/pilot_3.png'

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
      console.log('A ver ahora', tandas);

    return <>
        <div className=""></div>
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
                            <th className="text-3xl px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Nro
                            </th>
                            <th className="text-3xl px-5 py-3 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                Paracas
                            </th>
                            <th className="text-3xl px-5 py-3 border-gray-200 bg-gray-100">
                                
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
                                    <td className="px-5 py-5 w-40">
                                        <div className="flex">
                                            <h1> {tanda.piloto} </h1>
                                            {
                                                tanda.pilot === 'Pilotito' ? (
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                        className="w-full h-full rounded-full"
                                                        src={pilot_1}
                                                        alt=""
                                                        />
                                                    </div>

                                                ) : ( 
                                                    (tanda.pilot === 'Segundo') ? (
                                                        <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                        className="w-full h-full rounded-full"
                                                        src={pilot_2}
                                                        alt=""
                                                        />
                                                    </div>
                                                    ) : (
                                                        <div className="flex-shrink-0 w-14 h-14">
                                                        <img
                                                        className="w-full h-full rounded-full"
                                                        src={pilot_3}
                                                        alt=""
                                                        />
                                                    </div>
                                                    ) 
                                                
                                                )
                                            }
                                            <div className="ml-3">
                                                <p className="text-gray-900 whitespace-no-wrap text-4xl">
                                                { tanda.avion }
                                                </p>
                                                <p className="text-gray-600 whitespace-no-wrap text-4xl">{ tanda.altitude }</p>
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


      {/*
        <table class="table-  m-8">
            <thead>
                <tr>
                    <th className="items-center">Num</th>
                    <th className="items-center">Plaza 1</th>
                    <th className="items-center">Plaza 2</th>
                    <th className="">Plaza 3</th>
                    <th className="">Plaza 4</th>
                    <th className="">Piloto</th>
                    <th className="">Avion</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> aaaaaaaa</td>
                    <td>aaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                </tr>
                <tr>
                    <td> aaaaaaaa</td>
                    <td>aaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                    <td>aaaaaaaa</td>
                </tr>
            </tbody>
        </table>
      
      <table className="w-screen bg-lightest tablescreen" >
          <thead>
              <tr style={{
                  height: '10vh'
              }}>
                  <th className="w-2">Plaza 1</th>
                  <th className="w-2">Plaza 2</th>
                  <th className="w-2">Plaza 3</th>
                  <th className="w-2">Plaza 4</th>
                  <th className="w-2">Altura</th>
                  <th className="w-2">Piloto</th>
                  <th className="w-2">Avion</th>
              </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-100">
              <div className="overflow-y-scroll" style={{
                  height: '90vh',
              }}>
                  <ReactScrollableFeed className="bg-black w-f-screen">
                  {
                      tandas.length === 0 ? <td>Aun no hay tandas</td>
                      : tandas.map((tanda, index) => {
                          return <tr key={index}>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">
                                  <div className="flex items-center">
                                      { index}
                                  </div>
                              </td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">
                                  <div className="flex items-center">
                                      {}
                                  </div>
                              </td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">
                                  <div class="flex items-center">
                                      { tanda.paraca_1}
                                  </div>
                              </td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden text-light">{ tanda.paraca_2}</td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.paraca_3}</td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.paraca_4}</td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.pilot}</td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.altitude}</td>
                              <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500 text-light">{ tanda.avion}
                                  <div className="flex items-center">
                                      <svg viewBox="0 0 24 24" className="w-4 mr-5 text-green-500" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                          <line x1="12" y1="5" x2="12" y2="19"></line>
                                          <polyline points="19 12 12 19 5 12"></polyline>
                                      </svg>
                                  </div>
                              </td>
                          </tr>
                      })
                  }
                  </ReactScrollableFeed >
              </div>
          </tbody>
      </table>
      
      */}



        <Footer />
    </>

}

export default TableScreen