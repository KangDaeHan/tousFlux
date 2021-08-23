/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Row,
     Card,
     CardBody,
     Form,
     Button,
     FormGroup, 
     Input,
    } from 'reactstrap';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import {ReactTable} from '../../../containers/ui/ReactTable';
import CompareLine from '../../../components/charts/CompareLine';
// import NegativeBar from '../../../components/charts/NegativeBar';
// import HeatMap from '../../../components/charts/HeatMap';
import ChannelButton from '../../../components/applications/ChannelButton'
import CustomSelectInput from '../../../components/common/CustomSelectInput';
// eslint-disable-next-line import/named
import { TableData2 } from './data';


class Social extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            activeTab: '1',
            // eslint-disable-next-line react/no-unused-state
            selectedOptions : [],
            // eslint-disable-next-line react/no-unused-state
            totalGraph : {
                series: [
                    {
                      name: "Total Graph",
                      data: [2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 4, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4,4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4]
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
                    colors: ['#000'],
                    dataLabels: {
                      enabled: false,
                    },
                    markers: {
                      size: 5,
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
                    
                  },
            }, 
            totalGraph2 : {
              series: [
                  {
                    name: "Total Graph",
                    data: [2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 4, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4,4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4]
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
                  colors: ['#b9b9b9'],
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
                    size: 5,
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
                  
                },
          }, 
            // eslint-disable-next-line react/no-unused-state
            heatMapGraph : {
                series: [{
                    name: 'Jan',
                    data: [{x: "1", y: -21}, {x: "2", y: 30}]
                  },
                  {
                    name: 'Test',
                    data: [{x: "1", y: 10}, {x: "2", y: 55}]
                  },
                ],
                height: 500,
                options: {
                  chart: {
                    type: 'heatmap',
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
                  title: {
                    text: 'HeatMap Chart with Color Range'
                  },
                },
            }, 
            // eslint-disable-next-line react/no-unused-state
            columeNegativeGraph : {
              series: [{
                name: 'Cash Flow',
                data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                  5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                  48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
                ]
              }],
              height: 350,
              options: {
                chart: {
                  type: 'bar',
                },
                plotOptions: {
                  bar: {
                    colors: {
                      ranges: [{
                        from: -100,
                        to: -46,
                        color: '#F15B46'
                      }, {
                        from: -45,
                        to: 0,
                        color: '#FEB019'
                      }]
                    },
                    columnWidth: '80%',
                  }
                },
                dataLabels: {
                  enabled: false,
                },
                yaxis: {
                  title: {
                    text: 'Growth',
                  },
                },
                xaxis: {
                  type: 'datetime',
                  categories: [
                    '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                    '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                    '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                    '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                    '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                    '2013-07-01', '2013-08-01', '2013-09-01'
                  ],
                  labels: {
                    rotate: -90
                  }
                }
              },
            },
            checkInfo: [
              { id: 1, value: "Daily", isChecked: false },
              { id: 2, value: "Weekly", isChecked: false },
              { id: 3, value: "Monthly", isChecked: false },
              { id: 4, value: "Yearly", isChecked: false }
            ], 
        }
    }

    ChangeStartDate = (e) => { 
        this.setState({  
          startDate: e,
        });
      };  
      
    ChangeEndDate = (e) => { 
        this.setState({  
            endDate: e
        });  
    };
    
    toggle = (tab) => {
        const { activeTab } = this.state;

        if(activeTab !== tab){
            this.setState({
                activeTab : tab
            })
        }
    }

    handleOneChecked = (evt) => {
      const { checkInfo } = this.state;
      checkInfo.forEach(item => {
        if (item.value === evt.target.value){
          // eslint-disable-next-line no-param-reassign
          item.isChecked = evt.target.checked;
        }
      });
      this.setState({ checkInfo });
    }

    generateData = (count, yrange) => {
        let i = 0;
        const series = [];
        while (i < count) {
          const x = (i + 1).toString();
          const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          series.push({
            x,
            y
          });
          // eslint-disable-next-line no-plusplus
          i++;
        }
        console.log(series);
        return series;
      }

      setSelectedOptions = (val) => {
        this.setState({  
          selectedOptions: val
        }); 
      }
    

    render() {

        const statesItems = this.state;

        const selectedOptionsBase = [
          { label: 'Total', value: 'social_val01', key: 0 },
          { label: 'Naver_news', value: 'social_val02', key: 1 },
          { label: 'Naver_blog', value: 'social_val03', key: 2 },
        ];

        const columns = [
          {
            Header: 'Rank',
            accessor: 'id',
          },
          {
            Header: 'Total',
            accessor: 'Total',
          },
          {
            Header: 'Naver News',
            accessor: 'naverNews',
          },
          {
            Header: 'Naver Cafe',
            accessor: 'naverCafe',
          },
          {
            Header: 'Naver Blog',
            accessor: 'naverBlog',
          },
          {
            Header: 'instagram',
            accessor: 'instagram',
          },
          {
            Header: 'facebook',
            accessor: 'facebook',
          },
          {
            Header: 'youtube',
            accessor: 'youtube',
          },
        ]
    
        const validateKeyword = (value) => {
            let error;
            if (!value) {
              error = 'No Keywords';
            } 
            return error;
        };

        return(
            <div className='social_area'>
                <Row>
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                            <Form className="check-box-wrap multi">
                              <div className="tbl-vertical-heading">
                                <table>
                                    <tbody>
                                    <tr>
                                        {/* vertical유형의 테이블 th 값은 인라인 스타일로 지정 바랍니다. */}
                                        <th style={{ width:'15%' }}>Period</th>
                                        <td style={{ width:'35%' }}>
                                        <div className="date-picker-wrap">
                                            <DatePicker className="form-control"  
                                            locale={ko}
                                            dateFormat="yyyy.MM.dd"
                                            selected={statesItems.startDate} 
                                            selectsStart
                                            startDate={statesItems.startDate}
                                            endDate={statesItems.endDate}
                                            onChange={this.ChangeStartDate}  
                                            placeholderText="Select Time" 
                                            /> 
                                            <span className="cal-range"> ~ </span>
                                            <DatePicker className="form-control"  
                                            locale={ko}
                                            dateFormat="yyyy.MM.dd"
                                            selected={statesItems.endDate}
                                            selectsEnd
                                            startDate={statesItems.startDate}
                                            endDate={statesItems.endDate}
                                            onChange={this.ChangeEndDate}  
                                            placeholderText="Select Time" 
                                            /> 
                                        </div>
                                        </td>
                                        <th style={{ width:'15%' }}>Period Unit</th>
                                        <td  style={{ width:'35%' }}>
                                        {statesItems.checkInfo.map(items => {
                                            return(
                                              <FormGroup check inline className='check-box lookup-area' key={items.id}>
                                                <Input 
                                                id={items.id}
                                                key={items.id}
                                                onChange={this.handleOneChecked}
                                                defaultChecked={items.isChecked}
                                                type="checkbox"
                                                value={items.value}
                                                className='check-single-box'
                                                />{' '}
                                                <label htmlFor={items.id} className='bx_check_oran'>
                                                  <span>{items.value}</span>
                                                </label>
                                              </FormGroup>
                                            )
                                          })}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{ width:'15%' }}>Channel</th>
                                        <td style={{ width:'85%' }} colSpan="3">
                                        <ChannelButton />                             
                                        </td>
                                    </tr>
                                    <tr>
                                        <th style={{ width:'15%' }}>Keywords</th>
                                        <td style={{ width:'85%' }} colSpan="3">
                                          <Formik
                                              initialValues={{
                                              keyword: '',
                                              }}
                                              // onSubmit={onSubmit}
                                          >                                         
                                            {({ errors, touched }) => (
                                                <FormGroup className="keyword-area">
                                                <Field
                                                    className="form-control"
                                                    name="keyword"
                                                    validate={validateKeyword}
                                                />
                                                {errors.keyword && touched.keyword && (
                                                    <div className="d-block noti-text">
                                                    {errors.keyword}
                                                    </div>
                                                )}
                                                </FormGroup>
                                            )}
                                        </Formik>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                                <div className="text-center">
                                <Button className="btn-xl mt-4" color="gray" type="submit">
                                    ENTER
                                </Button>
                                </div>
                            </Form>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                <Row className='mt-5'>
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                              <div className='box-title'>
                                <h2>Social Trend Chart</h2>
                              </div>
                                <div className='bx_select_area'>
                                  <FormGroup className="select-box">
                                    <Select
                                      components={{ Input: CustomSelectInput }}
                                      className="react-select"
                                      classNamePrefix="react-select"
                                      name="form-field-name"
                                      value={statesItems.selectedOptions}
                                      onChange={(val) => this.setSelectedOptions(val)}
                                      options={selectedOptionsBase}
                                    />
                                  </FormGroup>
                                  <p className='cont-noti small'>단위: 건</p>
                                </div>
                                <div className='clearfix box-line'>
                                    <div className='box left'>
                                        <div className="graph-area chart_area">
                                            <div className='chart-header'>
                                                <p className='bx_name'>Buzz</p>
                                            </div>
                                            <div className='chart-cont'>
                                                <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                            </div>
                                        </div>      
                                    </div>
                                    <div className='box right'>
                                        <div className="graph-area chart_area">
                                            <div className='chart-header'>
                                              <p className='bx_name'>Comment</p>
                                            </div>
                                            <div className='chart-cont'>
                                                <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                            </div>
                                        </div>      
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                <Row className='mt-5'>
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                              <div className='box-title'>
                                <h2>Social Keyword Rank</h2>
                              </div>
                                <ReactTable
                                  className='table mt-5 tbl_updown'
                                  data={TableData2}
                                  columns={columns}
                                />
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
                <Row className='mt-5'>
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                              <div className="chart_area">
                                <div className='box-title'>
                                    <h2>Social Keyword Chart - 독특하다</h2>
                                </div>
                                  <div className='chart-cont'>
                                      <p className='cont-noti small mt-5'>단위: 건</p>
                                      <CompareLine options={statesItems.totalGraph2.options} series={statesItems.totalGraph2.series} height={statesItems.totalGraph2.height} />
                                  </div>
                              </div>      
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </div>
        )
    }
}

export default Social;