import React from 'react';
import ReactApexChart from "react-apexcharts";
import { bubbleChartOptions } from './config';

const Bubble = () => {
  return (
    <ReactApexChart options={bubbleChartOptions.options} series={bubbleChartOptions.series} type="bubble" width={500} height={320} />
  );
};

export default Bubble;
