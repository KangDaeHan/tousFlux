import React from 'react';
import ReactApexChart from "react-apexcharts";
import { lineChartOptions } from './config';

const Line = () => {
  return (
    <ReactApexChart options={lineChartOptions.options} series={lineChartOptions.series} type="line" width={500} height={320} />
  );
};

export default Line;
