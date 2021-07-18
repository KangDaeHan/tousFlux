import React from 'react';
import ReactApexChart from "react-apexcharts";
import { barChartOptions } from './config';

const Bar = ({height, series }) => {
  return (
    <ReactApexChart options={barChartOptions.options} series={series} type="bar" height={height} />
  );
};

export default Bar;
