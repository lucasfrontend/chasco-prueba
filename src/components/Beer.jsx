import React, { useState, useEffect } from "react";
import DeudoresForm from "./DeudoresForm/DeudoresForm";
import DeudoresTabla from "./DeudoresForm/DeudoresTabla";
import '../Pages/setting.css'

const BeerController = () => {
  const [editData, setEditData] = useState(null);
    
  const [deudores, setDeudores] = useState(() => {
      const saveDeudores = window.localStorage.getItem('deudoresData');
      if(saveDeudores) {
          return JSON.parse(saveDeudores);
      } else {
          return []
      }
  });

  useEffect(() => {
      window.localStorage.setItem('deudoresData', JSON.stringify(deudores))
  }, [deudores])

  const addDeudor = (deudor)=> {
      setDeudores([
          ...deudores,
          deudor
      ])
  }

  const editDeudor = (deudor) => {
      const newDeudores = deudores.map(el => el.id === deudor.id ? deudor : el)
      setDeudores(newDeudores)
      //error aca????
      setEditData(null)
  }

  const deleteDeudor = id => {
      const isDelete = window.confirm(`Vas a eliminar al deudor ${id}`)
      if(isDelete) {
          const newDeudores = deudores.filter(el => el.id !== id)
          setDeudores(newDeudores);
      //error aca????
          setEditData(null)
      }
  }


return <>
    <div>
        <h3 className="pt-8 pl-8 font-semibold text-2xl">Formulario deudores de cerveza</h3>
    </div>

      <div className="min-w-full dark:bg-gray-900 overflow-auto p-6 flex">
          <DeudoresForm addDeudor={addDeudor} editDeudor={editDeudor} editData={editData} />
          <DeudoresTabla deudores={deudores} setEditData={setEditData} deleteDeudor={deleteDeudor}/>
        </div>
    
 
      </>
    

}

export default BeerController