import React from 'react';
import ReactApexChart from "react-apexcharts";
import { bubbleChartOptions } from './config';

const Bubble = ({height , className}) => {
  return (
    <ReactApexChart options={bubbleChartOptions.options} series={bubbleChartOptions.series} type="bubble" height={height} className={className}/>
  );
};

export default Bubble;
