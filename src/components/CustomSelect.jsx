import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
//import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

const paracas = [
    { value: 'Barri', label: 'Barri' },
    { value: 'Noe', label: 'Noe' },
    { value: 'Ruben', label: 'Ruben' }
];

export const CustomSelect = ({ name, value, onChange, placeholder }) => {

    const [selectOptions, setSelectOptions] = useState(paracas);
    const [ skydiversDB, setSkydiversDB] = useState([])

    const getSkydiversDB = async () => {
        const data = await getDocs(collection( db, "skydivers"))
        setSkydiversDB(
            data.docs.map( (doc) => ( {...doc.data(), id: doc.id}))
        )
    }

    useEffect(() => {
        getSkydiversDB()
        console.log(skydiversDB, "skydiversDB")
    }, [skydiversDB])

    /////////////////////////////////////////////////////



    const handleSelectChange = (selectedOption) => {
        if (selectedOption !== null) {
            onChange(name, selectedOption.value);
        } else {
            onChange(name, null); // Añadir esta línea para establecer el valor a null
        }
    };

    
    const handleCreateOption = (inputValue) => {
        const newOption = { value: inputValue.toLowerCase(), label: inputValue };
        setSelectOptions([...selectOptions, newOption]);
    };

    return (
        <>
            <CreatableSelect
                placeholder={placeholder}
                onChange={handleSelectChange}
                className="basic-single"
                classNamePrefix="select"
                defaultValue={paracas[0]}
                isDisabled={false}
                isLoading={false}
                isClearable={true}
                isRtl={false}
                isSearchable={true}
                options={selectOptions}
                name={name}
                value={value ? { value, label: value } : null}
                allowCreate={true}
                onCreateOption={handleCreateOption}
            />

        </>
    )
} 