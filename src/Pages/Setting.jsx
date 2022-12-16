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
        <div>
            <h3 className="pt-8 pl-8 font-semibold text-2xl text-withe">Pilotos</h3>
        </div>
        <div className="min-w-full dark:bg-gray-900 overflow-auto p-6 flex">
            <PilotosForm addPilot={addPilot} editPilot={editPilot} editData={editData} />
            <PilotosTabla pilots={pilots} setEditData={setEditData} deletePilot={deletePilot}/>
            <div>
            <h3 className="pt-8 pl-8 font-semibold text-2xl text-withe">Tandems</h3>
        </div>
            <div className="">
            <div className="blue_sdch ml-6">
                <div className="activity card">
                    <form className="space-y-4">
                        <h4 className="text-withe">PIlotos tandem</h4>
                        <div className="bg-dark p-2 w-full flex flex-col rounded-md dark:bg-gray-800 shadow">
                            <select name="name_pilot" className="bg-dark w-full flex flex-col rounded-md dark:bg-gray-800 shadow text-withe">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>

                            </select>
                        </div>

                        <div className="flex justify-end">
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-4 text-withe" type="submit" value="Agregar"/>
                            <input class="bg-transparent hover:bg-active hover:text-white cursor-pointer font-semibold py-2 px-4 border border-gray-400 rounded shadow text-withe" type="reset" value="Reset"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
 
    </>
    

}

export default Setting