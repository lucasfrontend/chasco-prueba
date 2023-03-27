import React, {useEffect, useState} from "react";
import TandasForm from "./TandasForm";
import TandasController from "./TandasController";
import { toast } from 'react-toastify';
import { db } from '../firebase'
import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

const TandasMain = () => {
    // TANDA QUE SE EDITA LOCAL
    const [editData, setEditData] = useState(null);

    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        //getTandasFb()
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    });

    //GUARDA LAS TANDAS EN LOCALSTORAGE CADA VEZ Q CAMBIAN
    useEffect(() => {
        window.localStorage.setItem('tandasData', JSON.stringify(tandas))
    }, [tandas])
    

    const addTanda = async (tanda) => {
      console.log("tanda en add", tanda)
      // Guardar en localStorage
      const tandaWithId = {
        ...tanda,
        firebase_id: null // No se tiene aún el ID de Firebase
      };
      const storedTandas = JSON.parse(localStorage.getItem('tandasData')) || [];
      localStorage.setItem('tandasData', JSON.stringify([...storedTandas, tandaWithId]));
      setTandas([...tandas, tandaWithId]);
      setEditData(null);
      toast("Tanda agregada a LS", {
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
    /*
      try {
        // Guardar en Firebase
        const docRef = await addDoc(collection(db, "tandas"), tanda);
        console.log("Document written with ID: ", docRef.id);
        console.log(error);
    
        // Actualizar objeto tanda en localStorage con el ID de Firebase
        tandaWithId.firebase_id = docRef.id;
        const updatedTandas = storedTandas.map((t) => (t.id === tanda.id ? tandaWithId : t));
        localStorage.setItem('tandasData', JSON.stringify(updatedTandas));
    
        // Actualizar estado y mostrar mensaje de éxito
        setTandas([...tandas, tandaWithId]);
        setEditData(null);
        toast("Tanda guardada en DB", {
          type: "success",
          autoClose: 2000,
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      } catch (error) {
        console.error("Error al agregar tanda: ", error);
        console.log(error);
        // Si hay error al guardar en Firebase, mostrar mensaje de error en el toast y no actualizar localStorage
        toast(`Error al agregar tanda en DB: ${error.message} (código de error: ${error.code})`, {
          type: "error",
          autoClose: 2000,
          position: "top-right",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      }*/
    };
    
    /*
    const addTanda = async (tanda) => {
        try {
          const docRef = await addDoc(collection(db, "tandas"), tanda);
          console.log("Document written with ID: ", docRef.id);
          const tandaWithId = {
            ...tanda,
            firebase_id: docRef.id // Agregar propiedad firebase_id con el ID generado
          };
          setTandas([...tandas, tandaWithId]);
          setEditData(null);
          toast("Tanda AGREGADA", {
            type: "success",
            autoClose: 2000,
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          });
        } catch (error) {
          console.error("Error al agregar tanda: ", error);
          setTandas([
            ...tandas,
            tanda
        ])
        setEditData(null);
        }
      };
      */
      

      const editTanda = async (tanda) => {
        const newTandas = tandas.map((el) => {
          if (el.local_id === tanda.local_id) {
            return tanda;
          } else {
            return el;
          }
        });
        setTandas(newTandas);
        setEditData(null);
        try {
          // Actualizar documento de Firestore
          await updateDoc(doc(db, "tandas", tanda.firebase_id,), {
            number_tanda: tanda.number_tanda,
            paraca_1: tanda.paraca_1,
            paraca_2: tanda.paraca_2,
            paraca_3: tanda.paraca_3,
            paraca_4: tanda.paraca_4,
            pilot: tanda.pilot,
            altitude: tanda.altitude,
            avion: tanda.avion,
            time: tanda.time,
            combus: tanda.combus,
            in_flight: tanda.in_flight
          });
          console.log("Tanda actualizada en Firebase");
        } catch (error) {
          console.error("Error al actualizar la tanda en Firebase:", error);
        }
      }
    /*
    const editTanda = (tanda) => {
        const newTandas = tandas.map(el => el.id === tanda.id ? tanda : el)
        setTandas(newTandas)
        //error aca????
        setEditData(null)
    }*/

    const deleteTanda = async (tanda) => {
        //console.log(tanda, "tanda", tanda.firebase_id, "tanda.firebase_id");      
        const isDelete = window.confirm(`Vas a eliminar la tanda ${tanda.number_tanda}`)
        if (isDelete) {
          const newTandas = tandas.filter(el => el.local_id !== tanda.local_id);
          setTandas(newTandas);
          setEditData(null);
          toast("Tanda ELIMINADA de LS", {
            type: "info",
            autoClose: 2000,
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          });

          // Eliminar documento de Firestore
          await deleteDoc(doc(db, "tandas", tanda.firebase_id));
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
    <div className="bg-tandas min-h-screen p-4 lg:p-20"></div>
        <div className="md:flex justify-center ">
            <TandasForm addTanda={addTanda} editTanda={editTanda} editData={editData} />
            <TandasController tandas={tandas} setEditData={setEditData} endOfDay={endOfDay} deleteTanda={deleteTanda} />
        </div>
    </>
}

export default TandasMain