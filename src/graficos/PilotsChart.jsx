import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'

const datosPilots = [ 
    {
        id: 1,
        name: 'Tano',
        vuelos: 9
    },
    {
        id: 2,
        name: 'Pilotito',
        vuelos: 9
    },
]

const PilotsChart = () => {
    
    const [tandas, setTandas] = useState(() => {
        const saveTandas = window.localStorage.getItem('tandasData');
        if(saveTandas) {
            return JSON.parse(saveTandas);
        } else {
            return []
        }
    })

    
    const [pilots, setPilots] = useState(() => {
        const savePilots = window.localStorage.getItem('pilotsData');
        if(savePilots) {
            return JSON.parse(savePilots);
        } else {
            return []
        }
    })
    
    const pils = tandas.map(p => p.pilot);
    let elementoUnico = [];
    let vecesRepetidas = [];
    let contador = 1;

    for ( let i = 0; i < pils.length; i++){
        if(pils[i+1] === pils[i]){
            console.log("se repite ", pils[i])
            contador++;

        } else {
            elementoUnico.push(pils[i])
            vecesRepetidas.push(contador);
            contador = 1;
        }
    }
    for (let x = 0; x < elementoUnico.length; x++){
        console.log('El valor' + elementoUnico[x] + 'se repite' + vecesRepetidas)

    }



    const [ pilotData, setPilotData] = useState({
        labels: pilots.map((data) => data.name_pilot),
        datasets: [{
            label: 'Pilotos',
            data: [1, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
        }]
    })

    return <>
    <Pie data={pilotData}/>
    </>

}

export default PilotsChart;