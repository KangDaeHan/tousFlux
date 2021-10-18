/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
import React from 'react';
import CompareLine from '../../../components/charts/CompareLine';
import CompareBar from '../../../components/charts/CompareBar';

class Product extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            graphInfo_01: {
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }],
            options: {
                colors: ['#f69200'], 
                chart: {
                toolbar: {
                    show: false
                },
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: false
                },
                stroke: {
                curve: 'straight'
                },
                grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
                },
                xaxis: {
                tickPlacement: 'between',
                categories: ['2020.05.01', '2020.06.01', '2020.07.01', '2020.08.01', '2020.09.01', '2020.10.01', '2020.11.01', '2020.12.01', '2021.01.01'],
                }
            },
           },
           graphInfo_02: {
            series: [{
                name: "Desktops",
                data: [148, 10, 41, 35, 51, 49, 62, 69, 91, 50]
                }],
            options: {
                colors: [
                    function ({ value, seriesIndex, dataPointIndex, w }) {
                        if (dataPointIndex === 0) {
                          return "#f69200";
                        } else {
                          return "#ddd";
                        }
                }],
                chart: {
                toolbar: {
                    show: false
                },
                states: {
                    hover: {
                        filter: {
                            type: 'none',
                            // value: 0.1,
                        }
                    },
                    active: {
                        filter: {
                            type: 'darken',
                            value: 0.2,
                        }
                    },
                },
                height: 350,
                type: 'bar',
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: true,
                style: {
                    colors: ['#555']
                },
                },
                stroke: {
                curve: 'straight'
                },
                grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
                },
                xaxis: {
                tickPlacement: 'between',
                categories: ['예쁘다', '귀엽다', '화려하다', '부드럽다', '하얗다', '여성스럽다', '광택감', '하객룩', '블라우스', '단색'],
                }
            },
           },
           graphInfo_03: {
            series: [{
                name: "Desktops",
                data: [148 ,10, 41, 35, 51, 49, 62, 69, 91, 10]
                }],
            options: {
                colors: [
                    function ({ value, seriesIndex, dataPointIndex, w }) {
                        if (dataPointIndex === 0) {
                          return "#f69200";
                        } else {
                          return "#ddd";
                        }
                      }],
                chart: {
                toolbar: {
                    show: false
                },
                states: {
                    hover: {
                        filter: {
                            // type: 'darken',
                            type: 'none',
                            // value: 0.1,
                        }
                    },
                    active: {
                        filter: {
                            type: 'darken',
                            value: 0.2,
                        }
                    },
                },
                height: 350,
                type: 'bar',
                zoom: {
                    enabled: false
                }
                },
                dataLabels: {
                enabled: true,
                style: {
                    colors: ['#555']
                },
                },
                stroke: {
                curve: 'straight'
                },
                grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
                },
                xaxis: {
                tickPlacement: 'between',
                categories: ['에잇세컨즈', '써스데이아일랜드', '자라', '에이치엔엠', '스파오', '핀블랙', '유니클로', '망고', '미쏘'],
                }
            },
           }
        }
    }

    render() {
        const statesItems = this.state;
        
        return(
            <div className='main wrap'>
                <header className='header'>
                    <div className='header_inner'>
                        <div className='wrap_title'>
                            원피스
                        </div>
                        <div className='bx_right'>
                            <a href="#" className='btn_search'>
                                <span className='btn_nor_search' />
                            </a>
                            <a href="#" className='btn_fileter'>
                                <span className='btn_nor_filter' />
                            </a>
                        </div>
                    </div>
                    <div className='menu_info'>
                        <a href="#">
                            <span className='ico _back' />
                        </a>
                        <p className='desc'>
                            <span>디테일</span> {`>`} <span>광택</span>
                        </p>
                    </div>
                </header>
                <div className='main_container'>
                    <div className='content graphinfo'>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title">
                                    Future Trend
                                </p>
                                <p className='panel_desc'>
                                    지금 트렌드 예측 신뢰도는 <span>{`'67.8%'`}</span>
                                </p>
                            </div>
                            <div className="panel_cont">
                            <CompareLine options={statesItems.graphInfo_01.options} series={statesItems.graphInfo_01.series} height={statesItems.graphInfo_01.height} />
                            </div>
                        </div>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title">
                                    Sentiment Factor
                                </p>
                                <p className='panel_desc'>
                                <span>‘광택’</span> 요소에 대한 주요 감성 표현
                                </p>
                            </div>
                            <div className="panel_cont">
                                <CompareBar options={statesItems.graphInfo_02.options} series={statesItems.graphInfo_02.series} height={statesItems.graphInfo_02.height} />
                            </div>
                        </div>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title">
                                Referral Brands
                                </p>
                                <p className='panel_desc'>
                                    <span>‘광택’</span> 요소에 대한 주요 감성 표현
                                </p>
                            </div>
                            <div className="panel_cont">
                                <CompareBar options={statesItems.graphInfo_03.options} series={statesItems.graphInfo_03.series} height={statesItems.graphInfo_03.height} />
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className="footer_inner">
                        <ul className='footer_list'>
                            <li>
                                <a href="#">
                                    <span className='ico _monitor' />
                                    <p>Monitoring</p>
                                </a>
                            </li>
                            <li className='active'>
                                <a href="#">
                                    <span className='ico _analysis' />
                                    <p>Analysis</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className='ico _account' />
                                    <p>My account</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div> 
        )
    }
}

export default Product;