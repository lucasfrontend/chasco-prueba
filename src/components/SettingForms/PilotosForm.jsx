import React, { useEffect, useState } from "react";

//sacar initialpilots

const PilotosForm = ({ addPilot, editPilot, editData }) => {

    const [formData, setFormData] = useState({
        id: null,
        name_pilot: ''
    })
    
    useEffect(() => {
        if(editData !== null){
            setFormData(editData);
        }else {
            setFormData({
                id: null,
                name_pilot: ''
            })
        }
    }, [editData])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editData !== null) {
            editPilot(formData)
        } else {
            formData.id = Math.random().toString(36).substring(0, 7)
            addPilot(formData)
            setFormData({
                id: null,
                name_pilot: ''
            })
        }
    }

    const handleChange =(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleReset =(e) => {
        setFormData({
            id: null,
            name_pilot: ''
        })
    }

    return <>
        <form className="space-y-4 mt-3" onSubmit={handleSubmit}>
            <h4>{formData.id ? 'Editar' : 'Agregar'}</h4>
            <div className="bg-dark p-3 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
            <div className="flex xl:flex-row flex-col items-center font-medium text-gray-900 dark:text-white pb-2 mb-2 xl:border-b border-gray-200 border-opacity-75 dark:border-gray-700 w-full">
                <label htmlFor="name_pilot" className="pr-2">Pilotos</label>
                <input className="bg-dark w-full" type="text" name="name_pilot" onChange={handleChange} value={formData.name_pilot}/>
            </div>
            </div>

            <div className="flex justify-end">
            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4" type="submit" value="Enviar"/>
            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="reset" value="Reset" onClick={handleReset} />
            </div>
        </form>
    </>

}

export default PilotosForm;