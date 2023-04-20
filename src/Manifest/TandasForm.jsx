import React, { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';
import { CustomSelect } from "../components/CustomSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneCircleXmark, faPlaneSlash, faGraduationCap, faPeopleLine, faPlaneCircleCheck, faPlaneDeparture, faPlaneArrival,faCamera  } from '@fortawesome/free-solid-svg-icons';
import Tandem from '../assets/tandem.png';
import goPro from '../assets/gopro.svg'

const TandasForm = ({ addTanda, editTanda, editData }) => {

    //AGREGAR FUNCION TANDEM A TABLAY CODIGO, ICONOCAM

    const color = useRef('bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto')

    //const pilots = window.localStorage.getItem('pilotsData');
    //let pilot_array = JSON.parse(pilots);

    const [isChecked, setIsChecked] = useState(false);
    const [IsCheckedTandem, setIsCheckedTandem] = useState(false);
    const [IsCheckedSchool, setIsCheckedSchool] = useState(false);
    const [IsCheckedSchool2, setIsCheckedSchool2] = useState(false);
    const [IsChecked2AFF, setIsChecked2AFF] = useState(false);
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
        is_cam: false,
        is_tandem_2: false,
        is_school: false,
        is_2AFF: false,
        is_school_2: false,
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
            if(editData.is_school === true){
                setIsCheckedSchool(true)
            } else {
                setIsCheckedSchool(false)
            }
            if(editData.is_2AFF === true){
                setIsChecked2AFF(true)
            } else {
                setIsChecked2AFF(false)
            }
            if(editData.is_school_2 === true){
                setIsCheckedSchool2(true)
            } else {
                setIsCheckedSchool2(false)
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
                is_cam: false,
                is_tandem_2: false,
                is_school: false,
                is_2AFF: false,
                is_school_2: false,
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
            setIsCheckedSchool(false);
            setIsCheckedSchool2(false);
            setIsChecked2AFF(false)
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
                is_cam: false,
                is_tandem_2: false,
                is_school: false,
                is_2AFF: false,
                is_school_2: false,
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
                is_cam: false,
                is_tandem_2: false,
                is_school: false,
                is_2AFF: false,
                is_school_2: false,
                plane_landed: false,
                open_flight: true
            });
            setIsChecked(false);
            setIsCheckedTandem(false)
            setIsCheckedTandem2(false)
            setIsCheckedSchool(false)
            setIsCheckedSchool2(false)
            setIsChecked2AFF(false)

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
    

    const handleCheckedTandem = (e) => {
        setIsCheckedTandem(e.target.checked);
        setIsCheckedSchool(false);
        setFormData({
            ...formData,
            is_tandem: e.target.checked,
            is_cam: e.target.checked ? formData.is_cam : false,
            paraca_1: "",
            is_school: false,
            is_2AFF: false
        });
    };


    const handleCheckedCam =(e) => {
        setFormData({
          ...formData,
          is_cam: e.target.checked,
          is_tandem_2: false,
          is_school_2: false
        });
        setIsCheckedTandem2(false)
        setIsCheckedSchool2(false)
      }
    
    const handleCheckedTandem2 =(e) => {
        setIsCheckedTandem2(!IsCheckedTandem2)
        setFormData({
            ...formData,
            is_tandem_2: e.target.checked,
        });
        if (IsCheckedSchool2) {
            setIsCheckedSchool2(false);
            setFormData({
              ...formData,
              is_school_2: false,
            });
        }
    }

    const handleCheckedSchool = (e) => {
        setIsCheckedSchool(e.target.checked);
        setIsCheckedTandem(false);
        setFormData({
            ...formData,
            is_school: e.target.checked,
            is_2AFF: e.target.checked ? formData.is_2AFF : false,
            is_tandem: false,
            is_cam: false
        });
    };

    const handleCheckedSchool2 = (e) => {
        setIsCheckedSchool2(!IsCheckedSchool2);
        setFormData({
            ...formData,
            is_school_2: e.target.checked,
        });
        if (IsCheckedTandem2) {
            setIsCheckedTandem2(false);
            setFormData({
              ...formData,
              is_tandem_2: false,
            });
        }
    }

    const handleChecked2AFF = (e) => {
        setIsChecked2AFF(!IsChecked2AFF);
        setFormData({
            ...formData,
            is_2AFF: e.target.checked,
            is_tandem_2: false,
            is_school_2: false
        });
        setIsCheckedTandem2(false)
        setIsCheckedSchool2(false)
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
            is_cam: false,
            is_tandem_2: false,
            is_school: false,
            is_2AFF: false,
            is_school_2: false,
            plane_landed: false,
            open_flight: true
        })
        changeColorOrigin()
    }

    return <>
        <div className="w-full max-w-md mr-auto ml-auto mt-4">
            <div className="bg-white shadow-lg rounded-md px-8 py-8 mb-4 ml-auto mr-auto" ref={color}>
                <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center flex-wrap mx-autop">
                        <div className="text-black text-2xl uppercase mr-3 mb-1">
                            {formData.local_id ? (
                            <p className="text-4xl text-black font-bold">{formData.number_tanda}</p>
                            ) : (
                                <p>Nueva Tanda {formData.local_id}</p>
                            )}
                        </div>
                        <div className="flex flex-col text-right">
                            <div className="mb-3 inline-flex">
                                <label className={`h-8 rounded-l py-1 px-2 border-l-2 border-t-2 border-b-2 border-r-1 hover:bg-bl-chasco focus:outline-none cursor-pointer duration-200 transition-all ${formData.open_flight ? 'bg-bl-chasco text-bl-chasco border-2' : 'bg-ye-chasco'}`}>
                                    <input type="checkbox" name="open_flight" checked={formData.open_flight} onChange={handleChecked} value={formData.open_flight} className="hidden" />
                                    <span className="text-lg">
                                        <FontAwesomeIcon icon={faPlaneSlash} style={{fontSize: '0.8rem'}} className={`mb-1 hover:text-ye-chasco ${formData.open_flight ? 'text-ye-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                    </span>
                                </label>
                                <label className={`h-8 py-1 px-2 border-2 text-gray-600 hover:bg-bl-chasco focus:outline-none  cursor-pointer duration-200 transition-all ${formData.in_flight ? 'text-bl-chasco border-2 bg-bl-chasco' : 'bg-ye-chasco'}`}>
                                    <input type="checkbox" name="in_flight" checked={formData.in_flight} onChange={handleChecked} value={formData.in_flight} className="hidden" />
                                    <span className="text-lg">
                                        <FontAwesomeIcon icon={faPlaneDeparture} style={{fontSize: '0.8rem'}} className={`mb-1 hover:text-ye-chasco ${formData.in_flight ? 'text-ye-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                    </span>
                                </label>
                                <label className={`h-8 rounded-r py-1 px-2 border-r-2 border-t-2 border-b-2 border-l-1 hover:bg-bl-chasco focus:outline-none cursor-pointer duration-200 transition-all ${formData.plane_landed ? 'text-bl-chasco border-2 bg-bl-chasco' : 'bg-ye-chasco'}`}>
                                    <input type="checkbox" name="plane_landed" checked={formData.plane_landed} onChange={handleChecked} value={formData.plane_landed} className="hidden" />
                                    <span className="text-lg">
                                        <FontAwesomeIcon icon={faPlaneArrival} style={{fontSize: '0.8rem'}} className={`mb-1 hover:text-ye-chasco ${formData.plane_landed ? 'text-ye-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                    </span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="flex xl:flex-row flex-col rounded-md border border-lightest px-2 mb-2 bg-white" >
                        <div className="relative w-full ">
                            <input className="bg-white w-full text-lightest appearance-none focus:outline-none h-10 rounded-md" type="number" name="number_tanda" onChange={handleChange} value={formData.number_tanda} placeholder="Número de tanda" />
                        </div>
                    </div>

                    <div class=" flex justify-end items-center">
                        <label class={`flex items-center h-8 rounded-l py-2 px-4 border-l-2 border-t-2 border-b-2 hover:bg-bl-chasco focus:outline-none cursor-pointer duration-200 transition-all${formData.is_cam === true ? '' : ''} ${formData.is_tandem ? 'bg-bl-chasco text-bl-chasco border-2' : 'bg-ye-chasco'} ${!IsCheckedTandem && !IsCheckedSchool ? 'border-r-2' : ''}` }>
                            <input type="checkbox" name="open_flight" checked={IsCheckedTandem} onChange={handleCheckedTandem} value={formData.is_tandem} class="hidden" />
                            <span class="text-lg">
                                <span className={` mb-1 w-8 h-8 object-contain ${formData.is_tandem ? 'text-ye-chasco' : 'text-bl-chasco'} hover:text-ye-chasco`}>
                                    TDM
                                    {/*
                                <img src={Tandem} alt="TDM" style={{fontSize: '0.8rem'}} className="w-8 h-8 object-contain" />
                                    */}
                                </span>
                            </span>
                        </label>


                        {IsCheckedTandem ? (
                            <label class={`flex items-center h-8 py-2 px-4 border-t-2 border-b-2 border-r-2 hover:bg-bl-chasco hover:text-gray-100 focus:outline-none cursor-pointer duration-200 transition-all ${formData.is_cam ? 'bg-bl-chasco text-bl-chasco border-2' : 'bg-ye-chasco'}` }>
                                <input type="checkbox" name="in_flight" checked={formData.is_cam} onChange={handleCheckedCam} value={formData.is_cam} class="hidden" />
                                <span class="text-lg">
                                    <FontAwesomeIcon icon={faCamera} style={{fontSize: '0.8rem'}} className={`mb-1 hover:text-ye-chasco ${formData.is_cam ? 'text-ye-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                </span>
                            </label>
                        ) : null}


                        {IsCheckedSchool ? (
                            <label class={`flex items-center h-8 py-2 px-4 border-t-2 border-b-2 border-l-2 hover:bg-bl-chasco hover:text-gray-100 focus:outline-none cursor-pointer duration-200 transition-all ${formData.is_2AFF ? 'bg-bl-chasco text-bl-chasco border-2' : 'bg-ye-chasco'}` }>
                                <input type="checkbox" name="in_flight" checked={formData.is_2AFF} onChange={handleChecked2AFF} class="hidden" />
                                <span class="text-lg">
                                    <FontAwesomeIcon icon={faPeopleLine} style={{fontSize: '0.8rem'}} className={`mb-1 hover:text-ye-chasco ${formData.is_2AFF ? 'text-ye-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                </span>
                            </label>
                        ) : null}  

                        <label class={`flex items-center h-8 rounded-r py-2 px-4 border-r-2 border-t-2 border-b-2 border-l-1 hover:bg-bl-chasco focus:outline-none cursor-pointer duration-200 transition-all ${formData.is_school ? 'bg-bl-chasco  border-2' : 'bg-ye-chasco'}` }>
                            <input type="checkbox" name="is_school" checked={IsCheckedSchool} onChange={handleCheckedSchool} value={formData.is_school} class="hidden" />
                            <span class={` text-lg w-8 h-8 object-contain ${formData.is_school ? 'text-ye-chasco' : 'text-bl-chasco'} hover:text-ye-chasco`}>ESC
                                {/*
                                <FontAwesomeIcon icon={faGraduationCap} style={{fontSize: '0.8rem'}} className={`mb-1 hover:text-ye-chasco ${formData.is_school ? 'text-ye-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                */}
                            </span>
                        </label>
                    </div>

                    <CustomSelect className="" name="paraca_1" onChange={handleSelect} value={formData.paraca_1} placeholder="Slot 1" optionsType={formData.is_tandem ? "tandems" : (formData.is_school ? "instructorsAff" : "paracas")} isTandem={formData.is_tandem} isSchool={formData.is_school}/>
            
                    <CustomSelect name="paraca_2" onChange={handleSelect} value={formData.paraca_2} placeholder="Slot 2" optionsType={formData.is_2AFF ? "instructorsAff" : "paracas"} isTandem={formData.is_tandem} isSchool={formData.is_school}/>

                    <div class=" flex justify-end items-center">
                        {!formData.is_cam  && !formData.is_2AFF && (
                            <label class="flex items-center h-8 rounded-l py-2 px-4 border-2 border-gray-600 text-gray-600 hover:bg-bl-chasco  focus:outline-none bg-ye-chasco cursor-pointer duration-200 transition-all">
                                <input type="checkbox" name="is_tandem_2" checked={IsCheckedTandem2} onChange={handleCheckedTandem2} value={formData.is_tandem_2} class="hidden" />
                                <span class="text-lg">
                                    <span className={` mb-1 w-8 h-8 object-contain ${formData.is_tandem_2 ? 'text-red-chasco' : 'text-bl-chasco'} hover:text-ye-chasco`}>TDM
                                    {/*
                                    <img src={Tandem} alt="TDM" className="w-8 h-8 object-contain" />
                                    */}
                                    </span>
                                </span>
                            </label>
                        )}
  
                        {(!formData.is_cam  && !formData.is_2AFF) && (
    
                            <label class="flex items-center h-8 rounded-r py-2 px-4 border-2 border-l-0 border-gray-600 text-gray-600 hover:bg-bl-chasco hover:text-gray-100 focus:outline-none bg-ye-chasco cursor-pointer duration-200 transition-all">
                                <input type="checkbox" name="is_school_2" checked={IsCheckedSchool2} onChange={handleCheckedSchool2} value={formData.is_school_2} class="hidden" />
                                <span class="text-lg">ESC
                                    {/*
                                    <FontAwesomeIcon icon={faGraduationCap} className={`mb-1 hover:text-ye-chasco ${formData.is_school_2 ? 'text-gr-chasco' : 'text-bl-chasco'}`} aria-hidden="true" />
                                    */}
                                </span>
                            </label>
                        )}
                    </div>

                    <CustomSelect name="paraca_3" onChange={handleSelect} value={formData.paraca_3} placeholder="Slot 3" optionsType={formData.is_tandem_2 ? "tandems" : (formData.is_school_2 ? "instructorsAff" : "paracas")} isTandem={formData.is_tandem_2} is_cam={formData.is_cam} isSchool={formData.is_school_2} is_2AFF={formData.is_2AFF}/>

                    <CustomSelect name="paraca_4" onChange={handleSelect} value={formData.paraca_4} placeholder="Slot 4" optionsType="paracas" isTandem={formData.is_tandem_2} isSchool={formData.is_school_2} className="mb-4"/>

                    <CustomSelect name="pilot" onChange={handleSelect} value={formData.pilot} placeholder="Piloto" optionsType="pilots"/>

                    <CustomSelect name="altitude" onChange={handleSelect} value={formData.altitude} placeholder="Altura" optionsType="altitude"/>

                    <CustomSelect name="avion" onChange={handleSelect} value={formData.avion} placeholder="Avión" optionsType="avion"/>

                    <div className="flex xl:flex-row flex-col rounded-md border border-lightest px-2 bg-white">
                        <label htmlFor="time" className="pr-2 text-lightest flex items-center">Horario</label>
                        <input className="bg-white w-full text-lightest appearance-none focus:outline-none h-10 py-2" type="time" name="time" onChange={handleChange} value={formData.time} placeholder="Horario" />
                    </div>

                    <CustomSelect name="combus" onChange={handleSelect} value={formData.combus} placeholder="Hace combus?" optionsType="combus"/>

                    <div class="mb-6">
                        <button type="submit" class="bg-ye-chasco hover:bg-bl-chasco hover:text-ye-chasco hover:border-ye-chasco shadow-lg text-bl-chasco font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all uppercase">
                            Guardar
                        </button>
                    </div>

                    <div class="mb-6">
                        <button type="reset" class="bg-red-chasco hover:bg-bl-chasco hover:text-ye-chasco hover:border-ye-chasco shadow-lg text-white font-semibold text-sm py-3 px-0 rounded text-center w-full hover:bg-tertiary duration-200 transition-all uppercase" value="Cancelar" onClick={handleReset}>
                            Cancelar
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    </>

}

export default TandasForm