import React from 'react'

// chart imports
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
	import type { pollutingValuesType } from './DataSearch';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

type ChartType = {
	name?: string
	// lat?: number
	// lon?: number
	// time?: string
	// quality?: number
	pollutingValues?: pollutingValuesType
}  

const Chart:React.FC<ChartType> = ({ name, pollutingValues }) => {
    const labels = ['co', 'no', 'no2', 'o3', 'so2', 'pm2_5', 'pm10', 'nh3'];
    const options = {
      indexAxis: 'y' as const,
      elements: {
        bar: {
          borderWidth: 2,
        },
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: name,
          color: "#37818A",
          font: {
            size: 20,
            lineHeight: 2
          }
        },
        tooltip: {
          enabled: true,          
          titleColor: "#37818A", 
          caretSize: 20,
          //titleFont: 'bold', 
          //   titleAlign: "center",
          //bodyFont: {weight: 'bold', size: 20}, 
          //   bodySpacing: 10,
          //intersect: true,
          //backgroundColor: "rgba(255,204,49, 0.4)",
          //   footerColor: "#37818A"
        }
      },
      maintainAspectRatio: false,

    };
    
    const data = {
      labels,
      datasets: [
        {
          label: 'µg/m³ ',
          data: pollutingValues && Object.values(pollutingValues),
          borderColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 205, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(75, 192, 192, 0.4)',
          ],
          hoverBorderColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(75, 192, 192, 0.8)',
          ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 205, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(255, 99, 132, 0.4)',
            'rgba(75, 192, 192, 0.4)',
          ],
          hoverBackgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 205, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(75, 192, 192, 0.8)',
          ],
          minBarLength: 20,
        },
      ],
      skipNull: true 
};

  return <Bar options={options} data={data} className='px-2 py-4'/>
}

export default Chart
