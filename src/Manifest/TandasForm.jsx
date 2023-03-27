import React, { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';
import { CustomSelect } from "../components/CustomSelect";

const TandasForm = ({ addTanda, editTanda, editData }) => {

    const color = useRef('bg-blue-light rounded-md')

    const pilots = window.localStorage.getItem('pilotsData');
    let pilot_array = JSON.parse(pilots);

    const [isChecked, setIsChecked] = useState(false);

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
        is_landing: false
    })
    
    useEffect(() => {
        if(editData !== null){
            console.log("que es edittada", editData)
            if(editData.in_flight === true) {
                setIsChecked(true)
            }else {
                setIsChecked(false)
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
                is_landing: false
            })
            changeColorOrigin()
        }
    }, [editData])
    
    const changeColorEdit = () => {
        const nodo = color.current
        if(nodo.className === 'bg-blue-light rounded-md'){
            nodo.className  = 'bg-red rounded-md';
        } 
        
    }

    const changeColorOrigin = () => {
        const nodo = color.current
        if(nodo.className === 'bg-red rounded-md'){
            nodo.className  = 'bg-blue-light rounded-md';
        } 
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editData !== null) {
            editTanda(formData);
            setIsChecked(false);
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
                is_landing: false
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
                is_landing: false
            });
            setIsChecked(false);
        }
        
    }
    
    const handleChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSelect = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleChecked =(e) => {
        setIsChecked(!isChecked)
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
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
            is_landing: false
        })
        changeColorOrigin()
    }

    const paracas = [
        { value: 'formData.paraca_1', label: 'Barri' },
        { value: 'formData.paraca_1', label: 'Noe' },
        { value: 'formData.paraca_1', label: 'Ruben' }
    ]

    return <>
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

                            {/*
                            <Select 
                                options={paracas}
                                onChange={handleChange}
                                value={formData.paraca_1}
                                name="paraca_1"
                                className="basic-single"
                                classNamePrefix="select"
                            />
                                <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                    <div className="flex xl:flex-row flex-col">
                                        <label htmlFor="paraca_1" className="pr-2 text-white">Plaza</label>
                                        <CustomSelect />
                                        <input className="bg-dark w-full text-white" type="text" maxLength="23" name="paraca_1" onChange={handleChange} value={formData.paraca_1}/>
                                    </div>
                                </div>
                            */}
                                {/*
                                <label htmlFor="paraca_2" className="pr-2 text-white">Plaza</label>
                                <input className="bg-dark w-full text-white" type="text" maxLength="23" name="paraca_2" onChange={handleChange} value={formData.paraca_2}/>
                                */}
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
    </>

}

export default TandasForm