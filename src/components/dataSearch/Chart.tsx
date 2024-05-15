import React, { useState } from 'react'

// chart imports
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    SubTitle,
    Tooltip,
    Legend,
    elements,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
	import type { pollutingValuesType } from './DataSearch';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    SubTitle,
    Tooltip,
    Legend
  );

type ChartType = {
	name?: string
	lat?: number
	lon?: number
	time?: string
	quality?: number
	pollutingValues?: pollutingValuesType
}  

const Chart:React.FC<ChartType> = ({ name, lat, lon, time, quality, pollutingValues }) => {

  const [largeScreen] = useState(window.innerWidth)

  const labels = ['co', 'no', 'no2', 'o3', 'so2', 'pm2_5', 'pm10', 'nh3'];

  const options = {
    indexAxis: largeScreen < 641 ? "y" as const : 'x' as const,
    elements: {
			bar: {
				borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
        fullSize: true,
        title: { 
          display: true, 
          color: "#37818A",
          text: "µg/m³ = micrograms per cubic meter",
          font: { size: largeScreen < 641 ? 18 : 30 }, 
          padding: 20,
        },
        maxWidth: 50,
        maxHeight: 50,
      },
      title: {
        display: true,
        text: name,
        // , `Latitude: ${lat?.toFixed(2)}`
        color: "#37818A",
        font: {
          size: largeScreen < 641 ? 25 : (largeScreen < 1030 ? 30 : 40),
          lineHeight: 2
        },
      },
      subtitle: {
        display: true,
        text: `Quality index: ${quality}`,
        color: "#37818A",
        font: {
          size: largeScreen < 641 ? 20 : (largeScreen < 1030 ? 30 : 40),
          lineHeight: "center"
        },
      },
      tooltip: {
        enabled: true,          
        titleColor: "#37818A", 
        caretSize: 12 as const,
        titleFont: { weight: 'bold' as const, size: largeScreen < 641 ? 20 : (largeScreen < 1030 ? 30 : 40), lineHeight: 1 }, 
        titleAlign: "center" as const,
        bodyFont: {weight: 'bold' as const, size: largeScreen < 641 ? 15 : (largeScreen < 1030 ? 25 : 35)}, 
        intersect: largeScreen < 641 ? true : false,
      }
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: true,
        ticks: {
          color: '#37818A',
          font: {size: largeScreen < 641 ? 18 : (largeScreen < 1030 ? 22 : 30), weight: "bold" as const},
          padding: 0,
          crossAlign: 'far' as const
        },
      },
      x: {
        display: true,
        ticks: {
          color: '#37818A',
          font: {size: largeScreen < 641 ? 18 : (largeScreen < 1030 ? 22 : 30), weight: "bold" as const},
          padding: 4,
        },
      }
    }
  };
    
  const data = {
    labels,
    datasets: [{
      label: 'µg/m³',
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
    }],
  };

  return <Bar options={options} data={data} className='py-6 px-2'/>
  
}

export default Chart
