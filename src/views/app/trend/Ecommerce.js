/* eslint-disable react/no-unused-state */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import {
    Row,
    Card,
    CardBody,
    Form,
    Button,
    FormGroup,
    Nav,
    NavLink,
    NavItem,
    TabContent,
    TabPane,
    Input
} from 'reactstrap';
import { Formik, Field } from 'formik';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import CompareLine from '../../../components/charts/CompareLine';
import ChannelButton from '../../../components/applications/ChannelButton'
import BrushChart from '../../../components/charts/BrushChart';

class Ecommerce extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            activeTab: '1',
            selectedOptions: [],
            totalGraph: {
                series: [
                    {
                        name: "Total",
                        data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
                      },
                      {
                        name: "Coupang",
                        data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55,0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
                      },
                      {
                        name: "11st",
                        data: [0.7, 0.1, 0.12, 0.5, 0.1, 0.22, 0.30, 0.8, 0.05, 0.11, 0.49, 0.49, 0.83, 0.43, 0.33, 0.99, 0.56, 0.91, 0.03, 0.18, 0.56, 0.39, 0.45, 0.88, 0.77, 0.13, 0.85, 0.24, 0.44, 0.18, 0.17]
                      },
                      {
                        name: "G-market",
                        data: [0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.4, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24,0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.77]
                      },
                      {
                        name: "Acuction",
                        data: [0.77, 0.8, 0.55, 0.22, 0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.74, 0.45, 0.44, 0.18, 0.28, 0.24, 0.44, 0.76, 0.22,]
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
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left', 
                    },
                },
            },
            brushGraph: {
                series: [{
                    name: "Desktops",
                    data: [45, 52, 38, 45, 19, 33]
                  }],
                  height: 230,
                  options: {
                    chart: {
                      id: 'chart2',
                      toolbar: {
                        show: false
                      }
                    },
                    colors: ['#546E7A'],
                    stroke: {
                      width: 3
                    },
                    dataLabels: {
                      enabled: false
                    },
                    markers: {
                      size: 0
                    },
                    xaxis: {
                        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                    },
                  },
                
                  seriesLine: [{
                    name: "Desktops",
                    data: [45, 52, 38, 45, 19, 33]
                  }],
                  heightLine: 130,
                  optionsLine: {
                    chart: {
                      id: 'chart1',
                      brush:{
                        target: 'chart2',
                        enabled: true
                      },
                      selection: {
                        enabled: true,
                      },
                    },
                    colors: ['#008FFB'],
                    xaxis: {
                      tooltip: {
                        enabled: false
                      }
                    },
                    yaxis: {
                      tickAmount: 2
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

    handleOneChecked = (evt) => {
        const { checkInfo } = this.state;
        checkInfo.forEach(item => {
            if (item.value === evt.target.value) {
                item.isChecked = evt.target.checked;
            }
        });
        this.setState({ checkInfo });
    }

    toggle = (tab) => {
        const { activeTab } = this.state;

        if (activeTab !== tab) {
            this.setState({
                activeTab: tab
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

        return (
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
                                                    <th style={{ width: '15%' }}>Period</th>
                                                    <td style={{ width: '35%' }}>
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
                                                    <th style={{ width: '15%' }}>Period Unit</th>
                                                    <td style={{ width: '35%' }}>
                                                        {statesItems.checkInfo.map(items => {
                                                            return (
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
                                                    <th style={{ width: '15%' }}>Channel</th>
                                                    <td style={{ width: '85%' }} colSpan="3">
                                                        <ChannelButton />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th style={{ width: '15%' }}>Keywords</th>
                                                    <td style={{ width: '85%' }} colSpan="3">
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
                                <div className="chart_area">
                                    <div className='box-title'>
                                        <h2>Social Keyword Chart - 독특하다</h2>
                                    </div>
                                    <div className='chart-cont mt-5'>
                                        <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                    </div>
                                </div>
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
                                    </Nav>
                                    <TabContent activeTab={statesItems.activeTab}>
                                        <TabPane tabId="1">
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='box-title'>
                                                                <h2>Social Keyword Rank</h2>
                                                            </div>
                                                            <div className='graph-area negative-chart'>
                                                            <BrushChart options={statesItems.brushGraph.options} optionsLine={statesItems.brushGraph.optionsLine}  series={statesItems.brushGraph.series} seriesLine={statesItems.brushGraph.seriesLine} height={statesItems.brushGraph.height} heightLine={statesItems.brushGraph.heightLine} />
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2">
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='box-title'>
                                                                <h2>Heat Map</h2>
                                                            </div>
                                                            <div className='graph-area negative-chart'>
                                                            <BrushChart options={statesItems.brushGraph.options} optionsLine={statesItems.brushGraph.optionsLine}  series={statesItems.brushGraph.series} seriesLine={statesItems.brushGraph.seriesLine} height={statesItems.brushGraph.height} heightLine={statesItems.brushGraph.heightLine} />
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </Row>
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            test
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </Row>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </div>
        )
    }
}

export default Ecommerce;