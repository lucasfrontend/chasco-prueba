import React, {useEffect, useState} from "react";
import TandasForm from "./TandasForm";
import TandasController from "./TandasController";
import { toast } from 'react-toastify';
import { db } from '../firebase'

const TandasMain = () => {
    const [editData, setEditData] = useState(null);
    
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    });

    useEffect(() => {
        window.localStorage.setItem('tandasData', JSON.stringify(tandas))
    }, [tandas])

    const addTanda = (tanda)=> {
        setTandas([
            ...tandas,
            tanda
        ])
        db.collection('tandas').doc().set(tandas)
    }

    const editTanda = (tanda) => {
        const newTandas = tandas.map(el => el.id === tanda.id ? tanda : el)
        setTandas(newTandas)
        //error aca????
        setEditData(null)
    }

    const deleteTanda = id => {
        const isDelete = window.confirm(`Vas a eliminar la tanda ${id}`)
        if(isDelete) {
            const newTandas = tandas.filter(el => el.id !== id)
            setTandas(newTandas);
            toast("Tanda ELIMINADA", {
                type: "error",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        //error aca????
            setEditData(null)
        }

    }
    const endOfDay = () => {
        const confirmed = window.confirm("Vas a borrar todas las tandas.");
        if (confirmed) {
            window.localStorage.clear();
            window.location.reload(true);
            toast("Tandas ELIMINADAS de la memoria del navegador", {
                type: "error",
                autoClose: 2000,
                position:"top-right",
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            });
        }
    }

    return <>
    <div className="chascobg"></div>
        <div className="flex flex-wrap mt-4">
            <TandasForm addTanda={addTanda} editTanda={editTanda} editData={editData} />
            <TandasController tandas={tandas} setEditData={setEditData} endOfDay={endOfDay} deleteTanda={deleteTanda} />
        </div>
    </>
}

export default TandasMain