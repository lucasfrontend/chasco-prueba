import React, {useState, useEffect} from "react";
import { addDoc, updateDoc, collection, getFirestore, getDoc, QuerySnapshot, getDocs } from "firebase/firestore";
import ParacasForm from "./ParacasForm";
import ParacasTable from "./ParacasTable";
import { toast } from 'react-toastify';
//import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
//import { db } from "../../firebase";



const ParacasMain = () => {

    const db = getFirestore();

//    const [ loading, setLoading] = useState(true)
    const [paracas, setParacas] = useState([])

    useEffect(() => {
        const queryCollection = collection(db, 'skydivers')
        getDocs(queryCollection)
        .then(data => setParacas(data.docs.map(paraca => ({ id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log("paracas", paracas)
    }, [])
    /*
    const getParacas = async () => {
        const queryCollection = collection(db, 'skydivers');
        queryCollection.onSnapshot((QuerySnapshot) => {
            const docs = [];
            QuerySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
                console.log(doc.data());
                console.log(doc.id)
            })
        })
    }
    useEffect(() => {

        getParacas()
        const queryCollection = collection(db, 'skydivers');
        getDoc(queryCollection)
        .then(data => setParacas(data.docs.map(paraca => ({id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

        console.log("paracas en usefeef")
    }, [paracas])
    */

    const addParaca = async (paraca) => {
        await addDoc(collection(db, 'skydivers'), {
            first_name: paraca.first_name,
            last_name: paraca.last_name,
            fly_name: paraca.fly_name,
            contact: paraca.contact,
            isActive: paraca.isActive
        }),
        console.log(`${paraca.fly_name} ha sido ingresado correctamente`);
        toast(`${paraca.fly_name} ha sido ingresado correctamente`, {
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
    }

    const editParaca = async (paraca) => {
        console.log("paraca a editar", paraca)
        await updateDoc(collection(db, 'skydivers'), {
            first_name: paraca.first_name,
            last_name: paraca.last_name,
            fly_name: paraca.fly_name,
            contact: paraca.contact,
            isActive: paraca.isActive
        }),
        console.log(`${paraca.fly_name} ha sido editado correctamente`);
        toast(`${paraca.fly_name} ha sido editado correctamente`, {
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
    }

    /*
    const queryCollection = collection(db, 'skydivers');
    // 
    const [editData, setEditData] = useState(null);

    const [paracas, setParacas] = useState(queryCollection);
    console.log("paracas", paracas);
    
    useEffect(() => {
        console.log("paracas en usefeef", paracas)
    }, [paracas])


    const editParaca = async (paraca) => {
        console.log("paraca a editar", paraca)
        await updateDoc(collection(db, 'skydivers'), {
            first_name: paraca.first_name,
            last_name: paraca.last_name,
            fly_name: paraca.fly_name,
            contact: paraca.contact,
            isActive: paraca.isActive
        }),
        console.log(`${paraca.fly_name} ha sido editado correctamente`);
        toast(`${paraca.fly_name} ha sido editado correctamente`, {
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
    }
*/
    return <>
    <div className="text-black">
        <ParacasForm addParaca={addParaca} editParaca={editParaca}/>
        <ParacasTable paracas={paracas}/>
    </div>
    </>

}

export default ParacasMain