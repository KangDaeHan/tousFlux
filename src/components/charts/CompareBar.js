import React from 'react';
import ReactApexChart from "react-apexcharts";

const CompareBar = ({options, series, height, yaxis}) => {
  return (
    <ReactApexChart options={options} series={series} type="bar" height={height} yaxis={yaxis} />
  );
};

export default CompareBar;
