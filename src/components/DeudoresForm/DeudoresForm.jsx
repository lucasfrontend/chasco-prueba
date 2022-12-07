import React, { useEffect, useState } from "react";

//sacar initialpilots

const DeudoresForm = ({ addDeudor, editDeudor, editData }) => {

    const [formData, setFormData] = useState({
        id: null,
        name_deudor: ''
    })
    
    useEffect(() => {
        if(editData !== null){
            setFormData(editData);
        }else {
            setFormData({
                id: null,
                name_deudor: ''
            })
        }
    }, [editData])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editData !== null) {
            editDeudor(formData)
        } else {
            formData.id = Math.random().toString(36).substring(0, 7)
            addDeudor(formData)
            setFormData({
                id: null,
                name_deudor: ''
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
            name_deudor: ''
        })
    }

    return <>
        <div className="">
            <div className="blue_sdch">
                <div className="activity card">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <h4>{formData.id ? 'Editar' : 'Agregar'}</h4>
                        <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <input name="name_deudor" type="text" className="bg-dark w-full flex flex-col rounded-md dark:bg-gray-800 shadow" onChange={handleChange} value={formData.name_deudor}>
                            </input>
                        </div>

                        <div className="flex justify-end">
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4" type="submit" value="Agregar"/>
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="reset" value="Reset" onClick={handleReset}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>

}

export default DeudoresForm;