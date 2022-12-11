import { normalize } from 'path';
import { useState, useEffect} from 'react'

export function useTandas(){
    const [editData, setEditData] = useState(null);
    const [selected, setSelected] = useState(false)
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
    }

    const editTanda = (tanda) => {
        const newTandas = tandas.map(el => el.id === tanda.id ? tanda : el)
        setTandas(newTandas)
        setEditData(null)
        changeColorSelected(editData)
    }
    
    const deleteTanda = id => {
        const isDelete = window.confirm(`Vas a eliminar la tanda ${id}`)
        if(isDelete) {
            const newTandas = tandas.filter(el => el.id !== id)
            setTandas(newTandas);
        }
    }


    return { addTanda, editTanda, editData, tandas, setEditData, deleteTanda }

}
