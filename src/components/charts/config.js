import React from 'react';
import {renderToString} from 'react-dom/server';
import ActiveKeyword from '../../containers/pages/ActiveKeyword';

function displayTooltip() {
  return renderToString(<ActiveKeyword />);
}

// bubble config options 설정
export const bubbleChartOptions = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
      events: {
        dataPointSelection: (event, chartContext, config) => {
          const dataImgWrap = document.querySelector('.relation-gallery');
          const dataImg = config.w.config.series[config.seriesIndex].relationTxt;
          
          dataImgWrap.innerHTML = "";
          dataImgWrap.innerHTML = dataImg;
          dataImgWrap.innerHTML = dataImgWrap.innerHTML.replaceAll(',','');
        }
      }
    },
    grid: {
      show: false,
    },
    tooltip: {                                       
      custom: displayTooltip,
    },
    dataLabels: {
      enabled: true
    },
    fill: {
      opacity: 0.7
    },
    xaxis: {
      tickAmount: 10,
      type: "category",
    },
    yaxis: {
      max: 70,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
      },
    },
  },
  series: [
    {
      name: "ORG",
      data: [[20, 50, 20]],
      relationTxt: [
        '<div><p>핏</p><img src="/assets/img/showroom/thumb1.png" alt="" /></div>',
        '<div><p>레이어드</p><img src="/assets/img/showroom/thumb2.png" alt="" /></div>',
        '<div><p>멋있다</p><img src="/assets/img/showroom/thumb3.png" alt="" /></div>',
        '<div><p>깔끔함</p><img src="/assets/img/showroom/thumb4.png" alt="" /></div>',
        '<div><p>고급스럽다</p><img src="/assets/img/showroom/thumb2.png" alt="" /></div>',
      ]
    },
    {
      name: "OHEP Index",
      data: [[20, 20, 40]],
      relationTxt: [
        '<div><p>고급스럽다</p><img src="/assets/img/showroom/thumb4.png" alt="" /></div>',
        '<div><p>깔끔함</p><img src="/assets/img/showroom/thumb3.png" alt="" /></div>',
        '<div><p>핏</p><img src="/assets/img/showroom/thumb2.png" alt="" /></div>',
        '<div><p>멋있다</p><img src="/assets/img/showroom/thumb1.png" alt="" /></div>',
        '<div><p>레이어드</p><img src="/assets/img/showroom/thumb3.png" alt="" /></div>',
      ]
    }
  ]
}

// line config options 설정
export const lineChartOptions = {
  options: {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    fill: {
      opacity: 0.7
    },
    title: {
      // text: ""
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  },
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]
};

// bar config options 설정
export const barChartOptions = {
  options: {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: true
    },
    grid: {
      show: false,
    },
    fill: {
      opacity: 0.7
    },
    title: {
      // text: ""
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
      },
    }
  },
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }]
};

// Scatter config options 설정
export const ScatterQuadrantChartOptions = {
  options: {
    chart: {
      type: 'scatter',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
    },
    noData: {
      text: 'Data loading...',
      align: 'center',
      verticalAlign: 'middle',
      style: {
        fontSize: '14px',
      }
    },
    annotations: {
      position: "back",
      xaxis: [
        {
          x: 0,
          x2: 50,
          label: {
            text: 'Rise',
            borderWidth: 0,
            position: 'top',
            offsetX: '46%',
            offsetY: -7,
            orientation: 'horizontal',
            style: {
              background: 'transparent',
              fontSize: '16px',
              fontWeight: '700',
              color: '#000'
            }
          },
          strokeDashArray: 0,
          borderColor: "#666",
          fillColor: "#797979",
          opacity: 0.1
        },
        {
          x: 50,
          x2: 100,
          label: {
            text: 'Fall',
            borderWidth: 0,
            position: 'bottom',
            offsetY: 15,
            orientation: 'horizontal',
            style: {
              background: 'transparent',
              fontSize: '16px',
              fontWeight: '700',
              color: '#000'
            }
          },
          strokeDashArray: 0,
          borderColor: "#666",
          fillColor: "#fd7b7a",
          opacity: 0.1
        }
      ],
      yaxis: [
        {
          y: 0,
          y2: 50,
          strokeDashArray: 0,
          borderColor: "#666",
          fillColor: "#c8c4c3",
          opacity: 0.3,
        },
        {
          y: 50,
          y2: 100,
          label: {
            text: 'P/R Index',
            borderWidth: 0,
            offsetX: 75,
            offsetY: 7,
            orientation: 'horizontal',
            style: {
              background: 'transparent',
              fontSize: '16px',
              fontWeight: '700',
              color: '#000',
            }
          },
          strokeDashArray: 0,
          borderColor: "#666",
          fillColor: "#bbd5ee",
          opacity: 0.3
        }
      ]
    },
    dataLabels: {
      enabled: true
    },
    fill: {
      opacity: 0.7
    },
    title: {
      // text: ""
    },
    xaxis: {
      tickAmount: 2,
      type: "numeric",
      min: 0,
      max: 100
    },
    yaxis: {
      tickAmount: 2,
      min: 0,
      max: 100
    }
  },
  series: [{
    name: "SAMPLE A",
    data: [
      [10, 50], [30, 40], [52, 95], [70, 42], [32, 60], [52, 18], [64, 32]
    ]
  },{
    name: "SAMPLE B",
    data: [
      [23, 65], [75, 30], [20, 42], [55, 20], [75, 80], [60, 45], [38, 78]
    ]
  },{
    name: "SAMPLE C",
    data: [
      [10, 35], [82, 25], [55, 68], [80, 85], [12, 50], [30, 66], [27, 46]
    ]
  }]
};