import React from 'react';
import ReactApexChart from "react-apexcharts";
import { barChartOptions } from './config';

const Bar = () => {
  return (
    <ReactApexChart options={barChartOptions.options} series={barChartOptions.series} type="bar" width={500} height={320} />
  );
};

export default Bar;
