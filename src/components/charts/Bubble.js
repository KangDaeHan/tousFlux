import React from 'react';
import ReactApexChart from "react-apexcharts";

const Bubble = ({options, series, height , className}) => {
  return (
    <ReactApexChart options={options} series={series} type="bubble" height={height} className={className} />
  );
};

export default Bubble;
