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
    plotOptions: {
      bubble: {
        minBubbleRadius: 10,
      }
    },
  },
  series: [
    {
      name: "ORG",
      data: [[20, 50, 60]],
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
      data: [[20, 20, 150]],
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
      enabled: true,
      style: {
        colors: ['#fff']
      },
      background: {
        enabled: false,
      },
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
    },
    states: {
      hover: {
          filter: {
              type: 'none',
              value: 0,
          }
      },
      active: {
          allowMultipleDataPointsSelection: false,
          filter: {
              type: 'none',
              value: 0,
          }
      },
    },
    markers: {
      size: 15,
      shape: "circle",
      onClick: (e) => {
        const elm = e.target;
        elm.classList.toggle('active');
      },
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


export const heatMapGraphData = {
    series: [{
        name: 'Naver',
        data: [
          {x: "1/1", y: -30},
          {x: "1/2", y: 10},
          {x: "1/3", y: 40},
          {x: "1/4", y: 55},
          {x: "1/5", y: -20},
          {x: "1/6", y: 30},
          {x: "1/7", y: -10},
          {x: "1/8", y: 5},
          {x: "1/9", y: 20},
          {x: "1/10", y: 40},
          {x: "1/11", y: -5},
          {x: "1/12", y: 10},
          {x: "1/13", y: 50},
          {x: "1/14", y: 30},
          {x: "1/15", y: 20},
          {x: "1/16", y: 30},
          {x: "1/17", y: 20},
          {x: "1/18", y: 10},
          {x: "1/19", y: 30},
          {x: "1/20", y: 0},
          {x: "1/21", y: 6},
          {x: "1/22", y: 20},
          {x: "1/23", y: 30},
          {x: "1/24", y: 50},
          {x: "1/25", y: 40},
          {x: "1/26", y: 9},
          {x: "1/27", y: 20},
          {x: "1/28", y: 10},
          {x: "1/29", y: 44},
          {x: "1/30", y: 43},
          {x: "1/31", y: 9},
        ]
      },
      {
        name: 'Naver News',
        data: [
          {x: "1/1", y: -9},
          {x: "1/2", y: 43},
          {x: "1/3", y: 44},
          {x: "1/4", y: 50},
          {x: "1/5", y: -30},
          {x: "1/6", y: 10},
          {x: "1/7", y: -5},
          {x: "1/8", y: 15},
          {x: "1/9", y: 40},
          {x: "1/10", y: -8},
          {x: "1/11", y: -50},
          {x: "1/12", y: 12},
          {x: "1/13", y: 56},
          {x: "1/14", y: 18},
          {x: "1/15", y: 28},
          {x: "1/16", y: 33},
          {x: "1/17", y: 26},
          {x: "1/18", y: 17},
          {x: "1/19", y: 31},
          {x: "1/20", y: -10},
          {x: "1/21", y: 16},
          {x: "1/22", y: 27},
          {x: "1/23", y: 0},
          {x: "1/24", y: 7},
          {x: "1/25", y: 6},
          {x: "1/26", y: 3},
          {x: "1/27", y: -10},
          {x: "1/28", y: 9},
          {x: "1/29", y: 5},
          {x: "1/30", y: 27},
          {x: "1/31", y: 11},
        ]
      },
    ],
    height: 500,
    options: {
      grid: {
        show: true,
        borderColor: '#90A4AE',
        yaxis: {
          lines: {
              show: false
            }
        },
      },
      chart: {
        type: 'heatmap',
        toolbar: {
          show: false
        }, 
      },
      plotOptions: {
        heatmap: {
          shadeIntensity: 0.5,
          radius: 0,
          useFillColorAsStroke: true,
          colorScale: {
            ranges: [{
                from: -30,
                to: 5,
                name: 'low',
                color: '#00A100'
              },
              {
                from: 6,
                to: 20,
                name: 'medium',
                color: '#128FD9'
              },
              {
                from: 21,
                to: 45,
                name: 'high',
                color: '#FFB200'
              },
              {
                from: 46,
                to: 55,
                name: 'extreme',
                color: '#FF0000'
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1
      },
      xaxis: {
        position: 'top',
      },
    },
}


export const columeNegativeGraph = {
  series: [{
    name: 'Cash Flow',
    data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
      5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
      48.6, -41.1, -39.6, -37.6, -29.4, -21.4,
    ]
  }],
  height: 350,
  options: {
    grid: {
      show: true,
    },
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
    },
    colors :['#a5a5a5'],
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -9999999,
            to: 0,
            color: '#2f5597'
          }]
        },
        columnWidth: '50%',
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: 40,
      style: {
        fontSize: '12px',
        colors: ["#000"]
      }
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    }, 
    yaxis: {
      show: false
    }, 
    
  },
}