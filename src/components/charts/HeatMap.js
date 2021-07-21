import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { heatMapGraphData } from './config'

const HeatMapChart = ({options, series, height}) => {
      return (
        <ReactApexChart options={options} series={series} type="heatmap" height={height} />
      );
};

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    return (
      <>
         <table className='heatmap_wrap_table'>
           <thead>
             <tr>
               <th>test1</th>
               <th>test2</th>
             </tr>
           </thead>
           <tbody>
               {heatMapGraphData.series.map((item, idx) => {
                 return(
                   // eslint-disable-next-line react/no-array-index-key
                   <tr key={idx}>
                     <td>search Volume</td>
                     <td>{item.name}</td>       
                   </tr>       
                 )                                                    
               })}
           </tbody>
         </table>
         <HeatMapChart className='heatmap_cont' options={heatMapGraphData.options} series={heatMapGraphData.series} height={heatMapGraphData.height} />
       </>
    );
  }
}





export default HeatMap;
