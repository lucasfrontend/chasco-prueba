import React, { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';
import { CustomSelect } from "../components/CustomSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneCircleXmark, faPlaneCircleCheck, faPlaneDeparture, faPlaneArrival   } from '@fortawesome/free-solid-svg-icons';
import Tandem from '../assets/tandem.png';

const TandasForm = ({ addTanda, editTanda, editData }) => {

    const color = useRef('bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto')

    //const pilots = window.localStorage.getItem('pilotsData');
    //let pilot_array = JSON.parse(pilots);

    const [isChecked, setIsChecked] = useState(false);
    const [IsCheckedTandem, setIsCheckedTandem] = useState(false);
    const [IsCheckedTandem2, setIsCheckedTandem2] = useState(false);

    const [formData, setFormData] = useState({
        local_id: null,
        number_tanda: '',
        paraca_1: '',
        paraca_2: '',
        paraca_3: '',
        paraca_4: '',
        pilot: '',
        altitude: '',
        avion: '',
        time: '',
        combus: '',
        in_flight: '',
        is_landing: false,
        is_tandem: false,
        is_tandem_2: false,
        plane_landed: false,
        open_flight: true
    })
    
    useEffect(() => {
        if(editData !== null){
            console.log("que es edittada", editData)
            if(editData.in_flight === true) {
                setIsChecked(true)
            }else {
                setIsChecked(false)
            }
            if(editData.is_tandem === true) {
                setIsCheckedTandem(true)
            }else {
                setIsCheckedTandem(false)
            }
            if (editData.is_tandem_2 === true){
                setIsCheckedTandem2(true)
            }else {
                setIsCheckedTandem2(false)
            }
            setFormData(editData);
            changeColorEdit()
        }else {
            setFormData({
                local_id: null,
                number_tanda: '',
                paraca_1: '',
                paraca_2: '',
                paraca_3: '',
                paraca_4: '', 
                pilot: '',
                altitude: '',
                avion: '',
                time: '',
                combus: '',
                in_flight: '',
                is_landing: false,
                is_tandem: false,
                is_tandem_2: false,
                plane_landed: false,
                open_flight: true
            })
            changeColorOrigin()
        }
    }, [editData])
    
    const changeColorEdit = () => {
        const nodo = color.current
        if(nodo.className === 'bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto'){
            nodo.className  = 'bg-bg-card-form shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto';
        } 
        
    }

    const changeColorOrigin = () => {
        const nodo = color.current
        if(nodo.className === 'bg-bg-card-form shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto'){
            nodo.className  = 'bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto';
        } 
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editData !== null) {
            editTanda(formData);
            setIsChecked(false);
            setIsCheckedTandem(false);
            setIsCheckedTandem2(false);
            setFormData({
                local_id: null,
                number_tanda: '',
                paraca_1: '',
                paraca_2: '',
                paraca_3: '',
                paraca_4: '',
                pilot: '',
                altitude: '',
                avion: '',
                time: '',
                combus: '',
                in_flight: '',
                is_landing: false,
                is_tandem: false,
                is_tandem_2: false,
                plane_landed: false,
                open_flight: true
            });
            toast("Tanda editada", {
                type: "info",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        } else {
            formData.local_id = Math.random().toString(36).substring(0, 7)
            addTanda(formData);
            setFormData({
                local_id: null,
                number_tanda: '',
                paraca_1: '',
                paraca_2: '',
                paraca_3: '',
                paraca_4: '',
                pilot: '',
                altitude: '',
                avion: '',
                time: '',
                combus: '',
                in_flight: '',
                is_landing: false,
                is_tandem: false,
                is_tandem_2: false,
                plane_landed: false,
                open_flight: true
            });
            setIsChecked(false);
            setIsCheckedTandem(false)
            setIsCheckedTandem2(false)
        }
        
    }
    
    const handleChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleChecked = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.checked;
    
        if (name === 'in_flight') {
            setFormData({
                ...formData,
                in_flight: value,
                plane_landed: false,
                open_flight: false // Desmarcar open_flight si se selecciona in_flight
            });
        } else if (name === 'plane_landed') {
            setFormData({
                ...formData,
                plane_landed: value,
                in_flight: false,
                open_flight: false // Desmarcar open_flight si se selecciona plane_landed
            });
        } else if (name === 'open_flight') {
            setFormData({
                ...formData,
                open_flight: value,
                in_flight: false, // Desmarcar in_flight si se selecciona open_flight
                plane_landed: false // Desmarcar plane_landed si se selecciona open_flight
            });
        }
    };
    

    const handleCheckedTandem =(e) => {
        setIsCheckedTandem(!IsCheckedTandem)
        setFormData({
            ...formData,
            is_tandem: e.target.checked,
            paraca_1: "", // Limpiamos el valor del primer select
        });
    }
    
    const handleCheckedTandem2 =(e) => {
        setIsCheckedTandem2(!IsCheckedTandem2)
        setFormData({
            ...formData,
            is_tandem_2: e.target.checked,
            paraca_3: "", // Limpiamos el valor del primer select
        });
    }

    const handleSelect = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleReset =(e) => {
        setFormData({
            local_id: null,
            number_tanda: '',
            paraca_1: '',
            paraca_2: '',
            paraca_3: '',
            paraca_4: '',
            pilot: '',
            altitude: '',
            avion: '',
            time: '',
            combus: '',
            in_flight: '',
            is_landing: false,
            is_tandem: false,
            is_tandem_2: false,
            plane_landed: false,
            open_flight: true
        })
        changeColorOrigin()
    }

    return <>
        <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto" ref={color}>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-3 items-center">
                        <div className="text-black text-2xl uppercase mr-3">
                            {formData.local_id ? (
                            <p className="text-4xl text-black font-bold">{formData.number_tanda}</p>
                            ) : (
                                <p>Nueva Tanda {formData.local_id}</p>
                            )}
                        </div>
                        <div className="flex justify-end items-center col-span-2">
                            <div className="flex">
                                <div className="">
                                    <FontAwesomeIcon
                                    className={`text-3xl ${formData.open_flight ? "text-gr-chasco" : "text-gray-500"}`}
                                    icon={formData.open_flight ? faPlaneCircleXmark : faPlaneCircleCheck}
                                    aria-hidden="true"
                                    />
                                    <input type="checkbox" name="open_flight" checked={formData.open_flight} onChange={handleChecked} value={formData.open_flight} style={{ width: "20px", marginLeft: "5px" }} />
                                </div>
                                <div className="pr-3">
                                    <FontAwesomeIcon
                                        className={`text-3xl ${formData.in_flight ? "text-gr-chasco" : "text-gray-500"}`}
                                        icon={faPlaneDeparture}
                                        aria-hidden="true"
                                    />
                                    <input type="checkbox" name="in_flight" checked={formData.in_flight} onChange={handleChecked} value={formData.in_flight} style={{ width: "20px", marginLeft: "5px" }} />
                                </div>
                                <div className="">
                                    <FontAwesomeIcon
                                    className={`text-3xl ${formData.plane_landed ? "text-gr-chasco" : "text-gray-500"}`}
                                    icon={faPlaneArrival}
                                    aria-hidden="true"
                                    />
                                    <input type="checkbox" name="plane_landed" checked={formData.plane_landed} onChange={handleChecked} value={formData.plane_landed} style={{ width: "20px", marginLeft: "5px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex xl:flex-row flex-col rounded-md border border-lightest px-2 mb-2 bg-white" >
                        <div className="relative w-full ">
                            <input className="bg-white w-full text-lightest appearance-none focus:outline-none h-10 rounded-md" type="number" name="number_tanda" onChange={handleChange} value={formData.number_tanda} placeholder="Número de tanda" />
                        </div>
                    </div>


                    <div className="flex justify-end items-center">
                        <div className="pl-3">
                        <img src={Tandem} alt="TDM" className="w-8 h-8 object-contain" />
                            <label htmlFor="is_tandem" className="pr-1">Tandem</label>                    
                            <input type="checkbox" name="is_tandem" checked={IsCheckedTandem} onChange={handleCheckedTandem} value={formData.is_tandem}/>
                        </div>  
                    </div> 

                    <CustomSelect className="" name="paraca_1" onChange={handleSelect} value={formData.paraca_1} placeholder="Slot 1" optionsType={formData.is_tandem === true ? "tandems" : "paracas"} isTandem={formData.is_tandem}/>
            
                    <CustomSelect name="paraca_2" onChange={handleSelect} value={formData.paraca_2} placeholder="Slot 2" optionsType="paracas" isTandem={formData.is_tandem} />

                    <div className="flex justify-end items-center">
                        <div className="pl-3">
                            <label htmlFor="is_tandem_2" className="pr-1">Tandem</label>                    
                            <input type="checkbox" name="is_tandem_2" checked={IsCheckedTandem2} onChange={handleCheckedTandem2} value={formData.is_tandem_2}/>
                        </div>  
                    </div> 
                    <CustomSelect name="paraca_3" onChange={handleSelect} value={formData.paraca_3} placeholder="Slot 3" optionsType={formData.is_tandem_2 === true ? "tandems" : "paracas"} isTandem={formData.is_tandem_2} />

                    <CustomSelect name="paraca_4" onChange={handleSelect} value={formData.paraca_4} placeholder="Slot 4" optionsType="paracas" isTandem={formData.is_tandem_2} className="mb-4"/>
                    

                    <div className="mt-4 mb-8">
  <hr className="mb-4"/> {/* Agrega un margen inferior aquí */}
</div>

                    <CustomSelect name="pilot" onChange={handleSelect} value={formData.pilot} placeholder="Piloto" optionsType="pilots"/>

                    <CustomSelect name="altitude" onChange={handleSelect} value={formData.altitude} placeholder="Altura" optionsType="altitude"/>

                    <CustomSelect name="avion" onChange={handleSelect} value={formData.avion} placeholder="Avión" optionsType="avion"/>

                    <div className="flex xl:flex-row flex-col rounded-md border border-lightest px-2 bg-white">
                        <label htmlFor="time" className="pr-2 text-lightest flex items-center">Horario</label>
                        <input className="bg-white w-full text-lightest appearance-none focus:outline-none h-10 py-2" type="time" name="time" onChange={handleChange} value={formData.time} placeholder="Horario" />
                    </div>

                    <CustomSelect name="combus" onChange={handleSelect} value={formData.combus} placeholder="Hace combus?" optionsType="combus"/>

                    <div class="mb-6">
                        <button type="submit" class="bg-gr-chasco hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all uppercase">
                            Guardar
                        </button>
                    </div>

                    <div class="mb-6">
                        <button type="reset" class="bg-red-chasco hover:bg-indigo-600 shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all uppercase" value="Cancelar" onClick={handleReset}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>

{/*

    <div className="px-4 xl:w-1/4 pt-4 backdrop-blur">
        <div className="text-1xl md:text-1xl lg:text-1xl">
            <div className="bg-blue-light rounded-md" ref={color}>
                <div className="card rounded-md">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="flex justify-between items-center">
                            {formData.local_id ? <p className="flex justify-center text-4xl">{formData.number_tanda}</p> : <div className=" text-white text-2xl">Nueva Tanda {formData.local_id}</div>}  
                            <div className="pl-3">
                                <label htmlFor="in_flight" className="pr-1 text-white">Despegó?</label>
                                <input type="checkbox" name="in_flight" checked={isChecked} onChange={handleChecked} value={formData.in_flight}/>
                            </div>                       
                        </div>

                            <div className="minwww bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                <div className="flex xl:flex-row flex-col">
                                    <label htmlFor="number_tanda" className="pr-2 text-white">Número</label>
                                    <input className="bg-dark w-full text-white" type="number" name="number_tanda" min="1" onChange={handleChange} value={formData.number_tanda}/>
                                </div>
                            </div>
                            <CustomSelect name="paraca_1" onChange={handleSelect} value={formData.paraca_1} placeholder="Slot 1"/>
            
                            <CustomSelect name="paraca_2" onChange={handleSelect} value={formData.paraca_2} placeholder="Slot 2"/>


                            <CustomSelect name="paraca_3" onChange={handleSelect} value={formData.paraca_3} placeholder="Slot 3"/>

                            <CustomSelect name="paraca_4" onChange={handleSelect} value={formData.paraca_4} placeholder="Slot 4"/>

                            <select name="pilot" className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-white" onChange={handleChange} value={formData.pilot}>
                                <option className="text-white">Piloto</option>
                                {
                                    pilot_array ? (
                                        pilot_array.length === 0 ? 
                                        (<option className="text-white">Aún no hay pilot</option>) 
                                        : pilot_array.map( el => <option key={el.id}>{ el.name_pilot}</option>)
                                    ) : <option className="text-white">Aún no hay pilot</option>
                                } 
                            </select>

                            <select name="altitude" className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-white" onChange={handleChange} value={formData.altitude}>
                                <option className="text-white">Altura</option>
                                <option className="text-white">5k</option>
                                <option className="text-white">8k</option>
                                <option className="text-white">10k</option>
                                <option className="text-white">12k</option>
                            </select>

                            <select name="avion" className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-white" onChange={handleChange} value={formData.avion}>
                                <option className="text-white">Avión</option>
                                <option className="text-white">GRI</option>
                                <option className="text-white">GYC</option>
                                <option className="text-white">GSD</option>
                            </select>

                            <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                <div className="flex xl:flex-row flex-col">
                                    <label htmlFor="time" className="pr-2 text-white">Horario</label>
                                    <input className="bg-dark w-full text-white" type="time"  name="time" onChange={handleChange} value={formData.time}/>
                                </div>
                            </div>

                            <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                <div className="flex xl:flex-row flex-col">
                                    <label htmlFor="combus" className="text-white">Combus?</label>
                                    <select name="combus" className="bg-dark p-2 w-full text-white" onChange={handleChange} value={formData.combus}>
                                        <option className="text-white">NO</option>
                                        <option className="text-white">SI</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <input className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 text-white" type="submit" value="Guardar"/>
                                <input className="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white" type="reset" value="Cancelar" onClick={handleReset}/>
                            </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    */}
    </>

}

export default TandasForm