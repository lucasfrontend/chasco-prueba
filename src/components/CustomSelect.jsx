import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'
//import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import paracas from '../json/paracas.json';


const tandems = [
    { value: 'Cris', label: 'Cris', img: ''},
    { value: 'Ruben', label: 'Rubilona' , img: ''},
    { value: 'Richi', label: 'Richi' , img: ''},
    { value: 'Juampi', label: 'Juampi' , img: ''},
    { value: 'Marcos', label: 'Marcos' , img: ''},
    { value: 'Fabri', label: 'Fabri' , img: ''}

];

const altitude = [
    { value: '12k', label: '12.000 ft' },
    { value: '10k', label: '10.000 ft' },
    { value: '8k', label: 'Low Cost' },
    { value: '5k', label: 'hop and Pop' }

];

const pilots = [
    { value: 'Facu', label: 'Facu' },
    { value: 'Fer Lopez', label: 'Fer Lopez' },
    { value: 'Segundo', label: 'Segundo' },
    { value: 'Martín', label: 'Martín' },
    { value: 'otro', label: 'otro' }

];

const avion = [
    { value: 'GRI', label: 'GRI' },
    { value: 'GSD', label: 'GSD' },

];

const combus = [
    { value: 'SI', label: 'SI' },
    { value: 'NO', label: 'NO' },

];

export const CustomSelect = ({ name, value, onChange, placeholder, optionsType, isTandem, isTandem2 }) => {

    const [selectOptions, setSelectOptions] = useState(paracas);

    //const pilotsLocal = window.localStorage.getItem('pilotsData');
    //let pilot_array = JSON.parse(pilotsLocal);

    useEffect(() => {
        if (optionsType === 'altitude') {
            setSelectOptions(altitude);
        } else if (optionsType === 'pilots') {
            {/*
                {
                    pilot_array ? (
                        pilot_array.length === 0 ? 
                        ({ value: '0', label: 'No hay pilotos' }) 
                        : pilot_array.map( el => <option key={el.id}>{ el.name_pilot}</option>)
                    ) : <option className="text-white">Aún no hay pilot</option>
                } 
            */}
            setSelectOptions(pilots);
        } else if (optionsType === 'avion') {
            setSelectOptions(avion);
        } else if (optionsType === 'combus') {
            setSelectOptions(combus);
        } else if (optionsType === 'tandems') {
            setSelectOptions(tandems);
        } else {
            setSelectOptions(paracas);
        }
    }, [optionsType]);

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: isTandem === true || isTandem2 === true ? 'rgba(0,0,255,0.2)' : 'white',
            borderColor: state.isFocused && isTandem || isTandem2 ? 'rgba(0,0,255,0.3)' : '#ccc',
            '&:hover': {
                backgroundColor: !state.isSelected && isTandem ? 'rgba(0,0,255,0.3)' : 'white'
            }
        })
    };

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
                styles={customStyles}
            />
        </>
    )
} 