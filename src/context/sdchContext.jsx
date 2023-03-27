
import { useState,useEffect, createContext } from "react";
import { addDoc, updateDoc, collection, getFirestore, getDoc, QuerySnapshot, getDocs, query, where } from "firebase/firestore";

export const SdChContext = createContext([])

export const SdChContextProvider = ({ children }) => {

    const db = getFirestore();

    const [ loading, setLoading] = useState(true)
    const [paracas, setParacas] = useState([])

    /*
    useEffect(() => {
        const queryCollection = collection(db, 'skydivers')
        getDocs(queryCollection)
        .then(data => setParacas(data.docs.map(paraca => ({ id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log("paracas", paracas)
    }, [])

    */
    /*
    const [ debtors, setdebtors ] = useState()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'skydivers')
        const queryFiltered = query(queryCollection, where( 'beers', '>' , 0))
        getDocs(queryFiltered)
        .then(data => setdebtors(data.docs.map(paraca => ({ id: paraca.id, ...paraca.data()}) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        console.log(debtors, "debtors desde context")
    }, [])

    */
    return(
        <SdChContext.Provider value={{
            paracas,
            //debtors

        }}>
            { children }
        </SdChContext.Provider>
    )
}
