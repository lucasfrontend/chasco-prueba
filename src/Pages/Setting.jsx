import React, { useState, useEffect } from "react";
import PilotosForm from "../components/SettingForms/PilotosForm";
import PilotosTabla from "../components/SettingForms/PilotosTabla";
import '../Pages/setting.css'

const Setting = () => {
  const [editData, setEditData] = useState(null);
    
  const [pilots, setPilots] = useState(() => {
      const savePilots = window.localStorage.getItem('pilotsData');
      if(savePilots) {
          return JSON.parse(savePilots);
      } else {
          return []
      }
  });

  useEffect(() => {
      window.localStorage.setItem('pilotsData', JSON.stringify(pilots))
  }, [pilots])

  const addPilot = (pilot)=> {
      setPilots([
          ...pilots,
          pilot
      ])
  }

  const editPilot = (pilot) => {
      const newPilots = pilots.map(el => el.id === pilot.id ? pilot : el)
      setPilots(newPilots)
      //error aca????
      setEditData(null)
  }

  const deletePilot = id => {
      const isDelete = window.confirm(`Vas a eliminar la tanda ${id}`)
      if(isDelete) {
          const newPilots = pilots.filter(el => el.id !== id)
          setPilots(newPilots);
      //error aca????
          setEditData(null)
      }
  }


return <>
      <div className="min-w-full dark:bg-gray-900 overflow-auto p-6 flex">
          <PilotosForm addPilot={addPilot} editPilot={editPilot} editData={editData} />
          <PilotosTabla pilots={pilots} setEditData={setEditData} deletePilot={deletePilot}/>
        </div>
 
      </>
    

}

export default Setting