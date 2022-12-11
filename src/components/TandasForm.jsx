import React, { useEffect, useState, useRef } from "react";
import { toast } from 'react-toastify';

const TandasForm = ({ addTanda, editTanda, editData }) => {

    const color = useRef('bg-blue-light rounded-md')

    const pilots = window.localStorage.getItem('pilotsData');
    let pilot_array = JSON.parse(pilots);

    const [isChecked, setIsChecked] = useState(false);

    const [formData, setFormData] = useState({
        id: null,
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
        in_flight: ''
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
                id: null,
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
                in_flight: ''
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
            setIsChecked(false);
        } else {
            formData.id = Math.random().toString(36).substring(0, 7)
            addTanda(formData)
            setFormData({
                id: null,
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
            });
            toast("Tanda agregada", {
                type: "success",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
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

    const handleChecked =(e) => {
        setIsChecked(!isChecked)
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked,
        });
    }

    const handleReset =(e) => {
        setFormData({
            id: null,
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
            in_flight: ''
        })
        changeColorOrigin()
    }

    return <>
    <div className="mt-4 ml-4 mb-2">
        <div className="">
            <div className="bg-blue-light rounded-md" ref={color}>
                <div className="card rounded-md">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="flex justify-between items-center">
                            {formData.id ? <p className="flex justify-center text-4xl">{formData.number_tanda}</p> : <div class=" text-white text-2xl">Nueva Tanda {formData.id}</div>}  
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
                            <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                <div className="flex xl:flex-row flex-col">
                                    <label htmlFor="paraca_1" className="pr-2 text-white">Plaza</label>
                                    <input className="bg-dark w-full text-white" type="text" maxlength="23" name="paraca_1" onChange={handleChange} value={formData.paraca_1}/>
                                </div>
                            </div>

                            <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col">
                                <label htmlFor="paraca_2" className="pr-2 text-white">Plaza</label>
                                <input className="bg-dark w-full text-white" type="text" maxlength="23" name="paraca_2" onChange={handleChange} value={formData.paraca_2}/>
                            </div>
                            </div>

                            <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col">
                                <label htmlFor="paraca_3" className="pr-2 text-white">Plaza</label>
                                <input className="bg-dark w-full text-white" type="text" maxlength="23" name="paraca_3" onChange={handleChange} value={formData.paraca_3}/>
                            </div>
                            </div>

                            <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                                <div className="flex xl:flex-row flex-col">
                                    <label htmlFor="paraca_4" className="pr-2 text-white">Plaza</label>
                                    <input className="bg-dark w-full text-white" type="text" maxlength="23" name="paraca_4" onChange={handleChange} value={formData.paraca_4}/>
                                </div>
                            </div>

                            <select name="pilot" className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-white" onChange={handleChange} value={formData.pilot}>
                                <option>Piloto</option>
                                {
                                    pilot_array ? (
                                        pilot_array.length === 0 ? 
                                        (<option>Aún no hay pilot</option>) 
                                        : pilot_array.map( el => <option key={el.id}>{ el.name_pilot}</option>)
                                    ) : <option>Aún no hay pilot</option>
                                } 
                            </select>

                            <select name="altitude" className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-white" onChange={handleChange} value={formData.altitude}>
                                <option>Altura</option>
                                <option>5k</option>
                                <option>8k</option>
                                <option>10k</option>
                                <option>12k</option>
                            </select>

                            <select name="avion" className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-white" onChange={handleChange} value={formData.avion}>
                                <option>Avión</option>
                                <option>GRI</option>
                                <option>GYC</option>
                                <option>GSD</option>
                                <option>IFY</option>
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
                                        <option>NO</option>
                                        <option>SI</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 text-white" type="submit" value="Guardar"/>
                                <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow text-white" type="reset" value="Cancelar" onClick={handleReset}/>
                            </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
    </>

}

export default TandasForm