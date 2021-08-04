/* eslint-disable consistent-return */
/* eslint-disable func-names */
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
    series: [
      {
        name: 'Coupang',
        catagory: 'ecommerce', 
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
        name: 'Naver Shopping',
        catagory: 'shopping',
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
      {
        name: 'YouTube',
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
        name: 'Facebook',
        catagory: 'social',
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
      {
        name: 'Instagram',
        catagory: 'social',
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
        name: 'Naver Blog',
        catagory: 'social',
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
      {
        name: 'Naver News',
        catagory: 'social',
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
        name: 'Naver',
        catagory: 'search volume',
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
        width: 0.5
      },
      xaxis: {
        position: 'top',
      },
      yaxis: {
        labels: {
          show: false,
          align: 'left',
          style: {
              colors: ['#888'],
              fontSize: '12px',
              fontFamily: ['noto', 'sans-serif'],
              fontWeight: 400,
          },
        }
      },
      legend: {
        show : false
      }
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

export const columeNegativeGraphMix = {
  series: [{
    name: 'Instgram',
    type: 'column',
    data: [4.2, 3.9, 2.8, 2.1, 2.6, 0.9, 1.1, -1.8, -2.1, -3.3]
  }, {
    name: 'Coupang',
    type: 'column',
    data: [-0.8, 0.4, 1.1, 2.7, 3.7, 2.6, 3.6, 1.7, 3.4, 1.7]
  }, {
    name: 'Instgram',
    type: 'line',
    data: [4.2, 3.9, 2.8, 2.1, 2.6, 0.9, 1.1, -1.8, -2.1, -3.3]
  }, {
    name: 'Coupang',
    type: 'line',
    data: [-0.8, 0.4, 1.1, 2.7, 3.7, 2.6, 3.6, 1.7, 3.4, 1.7]
  }
],
  
  options: {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [1, 1, 4, 4], 
      dashArray: [0, 0, 4, 4],  
    },
    xaxis: {
      categories: ['휴가', '바캉스', '여름', '수영복', '비치웨어', '페이즐리', '썬캡', '비치숄', '래쉬가드', '비치가운'],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
    },
    legend: {
      position:'top',
      horizontalAlign: 'center',
    }, 
    colors: ['#f5800b', '#ffc000','#f5800b', '#ffc000']
  },
}

export const gapTotalGraph = {
  series: [
    {
      name: "Search Volume",
      data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
    },
    {
      name: "Social",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
    {
      name: "Online Shopping",
      data: [0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.4, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24,0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.77]
    },
  ],
  height: 500,
  options: {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false
      }, 
      zoom: {
        enabled: false,
      }
    },
    colors: ['#555', '#a9a9a9', '#ffb800'],
    dataLabels: {
      enabled: true,
      background: {
        foreColor: '#000',
        padding: 0,
        borderRadius: 0,
        borderColor: 'transparent',
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['transparent'],
      },
      offsetY: -10,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 5,
        fillColor: '#000',
      },
      discrete: [{
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right', 
    }
  },
}


export const channelChartGraph = {
  series: [
    {
      name: "Instagram",
      data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
    },
    {
      name: "Coupang",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
  ],
  height: 330,
  options: {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false
      }, 
      zoom: {
        enabled: false,
      }
    },
    colors: ['#555', '#a9a9a9'],
    dataLabels: {
      enabled: true,
      background: {
        foreColor: '#000',
        padding: 0,
        borderRadius: 0,
        borderColor: 'transparent',
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['transparent'],
      },
      offsetY: -10,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 5,
        fillColor: '#000',
      },
      discrete: [{
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right', 
    }
  },
}


export const gapChartGraph = {
  series: [
    {
      name: "Coupang",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
  ],
  height: 330,
  options: {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false
      }, 
      zoom: {
        enabled: false,
      }
    },
    colors: ['#ee843b'],
    dataLabels: {
      enabled: true,
      background: {
        foreColor: '#000',
        padding: 0,
        borderRadius: 0,
        borderColor: 'transparent',
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['transparent'],
      },
      offsetY: -10,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 5,
        fillColor: '#000',
      },
      discrete: [{
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right', 
    }
  },
}




export const fullStackBarGraph = {
  series: [
  {
    name: '긍정',
    data: [44, 55, 41]
  }, 
  {
    name: '중립',
    data: [53, 32, 33]
  }, 
  {
    name: '부정',
    data: [15, 11, 20]
  }, 
  ],
  height: 350,
  options: {
    chart: {
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["#baeeff", "#f3f3f3", "#fac4c4"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '40%',
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      labels:{
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: ['세컨스킨','쥬시쥬디','에잇세컨즈'],
    },
    yaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false,
      },
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
    },
    dataLabels: {
      style: {
        colors: ['#888']
      }
    }
  },
}

export const positiveChartGraph = {
  series: [
    {
      name: "에잇세컨즈",
      data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
    },
    {
      name: "쥬시쥬디",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
    {
      name: "세컨스킨",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
  ],
  height: 330,
  options: {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false
      }, 
      zoom: {
        enabled: false,
      }
    },
    colors: ['#555', '#a9a9a9','#ee843b'],
    dataLabels: {
      enabled: true,
      background: {
        foreColor: '#000',
        padding: 0,
        borderRadius: 0,
        borderColor: 'transparent',
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['transparent'],
      },
      offsetY: -10,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 5,
        fillColor: '#000',
      },
      discrete: [{
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right', 
    }
  },
}


export const negativeChartGraph = {
  series: [
    {
      name: "에잇세컨즈",
      data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
    },
    {
      name: "쥬시쥬디",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
    {
      name: "세컨스킨",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
  ],
  height: 330,
  options: {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false
      }, 
      zoom: {
        enabled: false,
      }
    },
    colors: ['#555', '#a9a9a9','#ee843b'],
    dataLabels: {
      enabled: true,
      background: {
        foreColor: '#000',
        padding: 0,
        borderRadius: 0,
        borderColor: 'transparent',
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['transparent'],
      },
      offsetY: -10,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 5,
        fillColor: '#000',
      },
      discrete: [{
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right', 
    }
  },
}

export const boardTotalGraph = {
  series: [
    {
      name: "쥬시쥬디",
      data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
    },
    {
      name: "에잇세컨즈",
      data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
    },
    {
      name: "핀블랙",
      data: [0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.4, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24,0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.77]
    },
  ],
  height: 500,
  options: {
    chart: {
      type: 'line',
      dropShadow: {
        enabled: false,
        color: '#000',
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false
      }, 
      zoom: {
        enabled: false,
      }
    },
    colors: ['#ffb800', '#ed7d31',  '#404141'],
    dataLabels: {
      enabled: true,
      background: {
        foreColor: '#000',
        padding: 0,
        borderRadius: 0,
        borderColor: 'transparent',
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        colors: ['transparent'],
      },
      offsetY: -10,
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
        sizeOffset: 5,
        fillColor: '#000',
      },
      discrete: [{
        fillColor: '#e3e3e3',
        strokeColor: '#fff',
        size: 5
      }]
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      tickPlacement: 'between'
    },
    yaxis: {
      show: false
    }, 
    legend: {
      position: 'top',
      horizontalAlign: 'right', 
    }
  },
}


export const fullStackBarGraphType2 = {
  series: [
    {
      name: 'Sale',
      data: [44, 30, 50]
    }, 
    {
      name: 'Not Sale',
      data: [66, 70, 50]
    }, 

  ],
  height: 350,
  options: {
    chart: {
      stacked: true,
      stackType: '100%',
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["#0070c0", "#b3b3b3"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '40%',
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      labels:{
        show: false,
      },
      axisTicks: {
        show: false,
      },
      categories: ['세컨스킨','쥬시쥬디','에잇세컨즈'],
    },
    yaxis: {
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false,
      },
    },
    fill: {
      opacity: 1
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
    dataLabels: {
      style: {
        colors: ['#fff']
      }
    }
  },
}

export const bubbleChartOptionsType2 = {
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


export const barChartOptionsCheck = {
  options: {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false
      }, 
    },
    dataLabels: {
      enabled: true,
      offsetY: -20, 
      style: {
        colors: ['#888']
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: 'top'
        }
      }
    },
    grid: {
      show: false,
    },
    fill: {
      colors: [
        // color 값 최대값 최소 값 확인함수
        function({ value, w }) {
          const graphDataArr = w.config.series[0].data;
          const maxVal = Math.max.apply(9 , graphDataArr);
          const minVal = Math.min.apply(9 , graphDataArr);
          if (value === maxVal) {
            return '#2f5597'
          // eslint-disable-next-line no-else-return
          } else if(value === minVal){
            return '#f00001'
          }else{
            return '#a6a6a6'
          }
        }
      ],
      opacity: 0.7
    },
    title: {
      // text: ""
    },
    xaxis: {
      categories: ['test', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
      },
    },
  },
  series: [{
    name: "Desktops",
    data: [10, 10, 35, 51, 49, 62, 69, 148, 148]
  }], 

  
};