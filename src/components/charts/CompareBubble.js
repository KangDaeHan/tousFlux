import React from 'react';
import ReactApexChart from "react-apexcharts";

const CompareBubble = ({options, series, height , className}) => {
  return (
    <ReactApexChart options={options} series={series} type="bubble" height={height} className={className} />
  );
};

export default CompareBubble;