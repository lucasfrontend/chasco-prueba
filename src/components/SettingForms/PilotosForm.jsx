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
        <div className="">
            <div className="blue_sdch">
                <div className="activity card">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <h4>{formData.id ? 'Editar' : 'Agregar'}</h4>
                        <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <select name="name_pilot" className="bg-dark w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-withe" onChange={handleChange} value={formData.name_pilot}>
                                <option>Pilotos</option>
                                <option>Fer L</option>
                                <option>Martin</option>
                                <option>Mati</option>
                                <option>Pilotito</option>
                                <option>Segundo</option>
                                <option>Tano</option>
                            </select>
                        </div>

                        <div className="flex justify-end">
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 text-withe" type="submit" value="Agregar"/>
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow text-withe" type="reset" value="Reset" onClick={handleReset}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

}

export default PilotosForm;