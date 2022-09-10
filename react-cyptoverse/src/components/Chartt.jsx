import React from 'react'

import { Chart as ChartJS,LineElement} from 'chart.js'
import {Line } from 'react-chartjs-2'
import {PointElement, LinearScale,CategoryScale} from "chart.js"

ChartJS.register(PointElement,LinearScale,CategoryScale,LineElement); 

const Chartt = ({coinHistory}) => {
    const coinPrice = [];
    const coinTimestamp = []

    for (let i = 0; i < 10; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < 10; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

    const options = { 
        maintainAspectRatio :false,
        scales : {
            y: {
                beginAtZero: false
            }
        }
    }

    const data ={
        labels: coinTimestamp,
        datasets: [{
            label: 'Price In USD',
            data: coinPrice,
            fill: true,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
            borderWidth: .5
        }]
    }

  return (
    <Line height={250} options={options} data={data}/>
  )
}

export default Chartt