import React from 'react';
import ReactApexChart from "react-apexcharts";
import { bubbleChartOptions } from './config';

const Bubble = ({height}) => {
  return (
    <ReactApexChart options={bubbleChartOptions.options} series={bubbleChartOptions.series} type="bubble" height={height} />
  );
};

export default Bubble;
