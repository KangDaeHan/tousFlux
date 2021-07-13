import React from 'react';
import { Row,
     Card,
     CardBody,
     Form,
     Button,
     FormGroup,
     Nav,
     NavLink,
     NavItem,
     TabContent,
     TabPane } from 'reactstrap';
import { Formik, Field } from 'formik';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import CompareLine from '../../../components/charts/CompareLine';
import HeatMap from '../../../components/charts/HeatMap';
import ChannelButton from '../../../components/applications/ChannelButton'

class Overview extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            activeTab: '1',
            // eslint-disable-next-line react/no-unused-state
            totalGraph : {
                series: [
                    {
                      name: "High - 2013",
                      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
                    },
                  ],
                  options: {
                    chart: {
                      height: 350,
                      type: 'line',
                      dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                      },
                      toolbar: {
                        show: false
                      }
                    },
                    colors: ['#77B6EA', '#545454'],
                    dataLabels: {
                      enabled: true,
                    },
                    stroke: {
                      curve: 'smooth'
                    },
                    title: {
                      text: 'Average High & Low Temperature',
                      align: 'left'
                    },
                    grid: {
                      borderColor: '#e7e7e7',
                      row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                      },
                    },
                    markers: {
                      size: 1
                    },
                    xaxis: {
                      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                      title: {
                        text: 'Month'
                      }
                    },
                    yaxis: {
                      title: {
                        text: 'Temperature'
                      },
                      min: 1,
                      max: 35
                    },
                    legend: {
                      position: 'top',
                      horizontalAlign: 'right',
                      floating: true,
                      offsetY: -25,
                      offsetX: -5
                    }
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
                options: {
                  chart: {
                    height: 350,
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
            }
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
    

    render() {

        const statesItems = this.state;
    
        const validateKeyword = (value) => {
            let error;
            if (!value) {
              error = 'No Keywords';
            } 
            return error;
        };

        return(
            <>
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
                                    <td style={{ width:'85%' }} colSpan="3">
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
                                </tr>
                                <tr>
                                    <th style={{ width:'15%' }}>Channel</th>
                                    <td style={{ width:'85%' }}>
                                    <ChannelButton />                             
                                    </td>
                                </tr>
                                <tr>
                                    <th style={{ width:'15%' }}>Keywords</th>
                                    <td style={{ width:'85%' }}>
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
                <Row className="mt-5">
                    <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            <div>
                                <Nav tabs>
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: statesItems.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Total
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: statesItems.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            I/D RATE
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: statesItems.activeTab === '3' })}
                                            onClick={() => { this.toggle('3'); }}
                                        >
                                            GAP
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={statesItems.activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Colxx xxs="12">
                                                <Card>
                                                    <CardBody>
                                                        <div className='graph-area total-area'>
                                                            <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
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
                                                            <h2>Heat Map</h2>
                                                        </div>
                                                        <div className='graph-area Heat-Map'>
                                                            <HeatMap options={statesItems.heatMapGraph.options} series={statesItems.heatMapGraph.series} height={statesItems.heatMapGraph.height} />
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Colxx>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Row>
                                            test2
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Row>
                                            test3
                                        </Row>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </CardBody>
                    </Card>
                    </Colxx>
                </Row>
            </>
        )
    }
}

export default Overview;