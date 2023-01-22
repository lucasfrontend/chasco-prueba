import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';


const ParacasForm = ({addParaca, editParaca}) => {
    
    const [ paraca, setParaca ] = useState({
        first_name: '',
        last_name: '',
        fly_name: '',
        contact: '',
        isActive: false        
    })

    const handleChange =(e) => {
        setParaca({
            ...paraca,
            [e.target.name]: e.target.value,
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(paraca !== null) {
            editParaca(paraca);
            setParaca({
                first_name: '',
                last_name: '',
                fly_name: '',
                contact: '',
                isActive: false 
            })
        } else {
            addParaca(paraca);
            setParaca({
                first_name: '',
                last_name: '',
                fly_name: '',
                contact: '',
                isActive: false 
            });
        }
    }

    const handleReset =(e) => {
        setParaca({
            first_name: '',
            last_name: '',
            fly_name: '',
            contact: '',
            isActive: false 
        }) 
    }

    return <>
    <div className="px-4 xl:w-1/4 pt-4 backdrop-blur">
        <div className="text-1xl md:text-1xl lg:text-1xl">
            <div className="bg-blue-light rounded-md">
                <div className="card rounded-md">
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div className="minwww bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col">
                                <label htmlFor="first_name" className="pr-2 text-white">Nombre</label>
                                <input className="bg-dark w-full text-white" type="text" name="first_name" value={paraca.first_name} min="1" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col">
                                <label htmlFor="last_name" className="pr-2 text-white">Apellido</label>
                                <input className="bg-dark w-full text-white" type="text" maxlength="23" name="last_name" value={paraca.last_name} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col">
                                <label htmlFor="fly_name" className="pr-2 text-white">ChascoName</label>
                                <input className="bg-dark w-full text-white" type="text" maxlength="23" name="fly_name" value={paraca.fly_name} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <div className="flex xl:flex-row flex-col">
                                <label htmlFor="contact" className="pr-2 text-white">Tel de contacto</label>
                                <input className="bg-dark w-full text-white" type="text" maxlength="23" name="contact" value={paraca.contact} onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="pl-3">
                                <label htmlFor="isActive" className="pr-1 text-white">Inactivo</label>
                                <input type="checkbox" name="isActive" value={paraca.isActive}/>
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

export default ParacasForm