/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint no-unused-vars: "off" */
/* eslint no-undef: "off" */
/* eslint no-plusplus : "off" */
/* eslint react/no-unused-state: "off" */
/* eslint prefer-template: "off" */
/* eslint react/no-array-index-key: "off" */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Row, Card, CardBody, Form, Button, FormGroup, Input, Nav, NavLink, NavItem, TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import Select from 'react-select';
import { Colxx } from '../../../components/common/CustomBootstrap';
import CompareLine from '../../../components/charts/CompareLine';
import TagInput from "../../../components/applications/TagInput";
import FullStackBar from "../../../components/charts/FullStackBar";
import BrushChart from '../../../components/charts/BrushChart';
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import 'react-datepicker/dist/react-datepicker.css';
import {
    boardTotalGraph,
    fullStackBarGraphType2
} from '../../../components/charts/config'

// eslint-disable-next-line react/prefer-stateless-function
class Onboard extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행

        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            activeTab: '1',
            activeTabSecond: '1',
            checkInfo: [
                { id: 1, value: "Daily", isChecked: false },
                { id: 2, value: "Weekly", isChecked: false },
                { id: 3, value: "Monthly", isChecked: false },
                { id: 4, value: "Yearly", isChecked: false }
            ],
            brushGraph: {
                series: [
                    {
                        name: "Coupang",
                        data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
                    },
                    {
                        name: "11st",
                        data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55, 0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
                    },
                    {
                        name: "G-market",
                        data: [0.7, 0.1, 0.12, 0.5, 0.1, 0.22, 0.30, 0.8, 0.05, 0.11, 0.49, 0.49, 0.83, 0.43, 0.33, 0.99, 0.56, 0.91, 0.03, 0.18, 0.56, 0.39, 0.45, 0.88, 0.77, 0.13, 0.85, 0.24, 0.44, 0.18, 0.17]
                    },
                    {
                        name: "Acuction",
                        data: [0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.4, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.77]
                    },
                ],
                height: 230,
                options: {
                    chart: {
                        id: 'chart2',
                        toolbar: {
                            show: false
                        },
                        zoom: {
                            enabled: false,
                        },
                    },
                    colors: ['#3a3b3b', '#404141', '#ed7d31', '#ffc104'],
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
                    legend: {
                        show: false
                    },
                },
                seriesLine: [
                    {
                        name: "Coupang",
                        data: [0.77, 0.8, 0.55, 0.22, 0.33, 0.44, 0.55, 0.12, 0.13, 0.76, 0.45, 0.52, 0.01, 0.76, 0.22, 0.78, 0.65, 0.63, 0.93, 0.94, 0.82, 0.2, 0.46, 0.15, 0.76, 0.22, 0.46, 0.55, 0.34, 0.74, 0.45]
                    },
                    {
                        name: "11st",
                        data: [0.7, 0.1, 0.12, 0.5, 0.1, 0.22, 0.30, 0.8, 0.05, 0.11, 0.49, 0.49, 0.83, 0.43, 0.33, 0.99, 0.56, 0.91, 0.03, 0.18, 0.56, 0.39, 0.45, 0.88, 0.77, 0.13, 0.85, 0.24, 0.44, 0.18, 0.17]
                    },
                    {
                        name: "G-market",
                        data: [0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.4, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.18, 0.28, 0.24, 0.44, 0.77]
                    },
                    {
                        name: "Acuction",
                        data: [0.77, 0.88, 0.99, 0.11, 0.12, 0.34, 0.56, 0.4, 0.56, 0.41, 0.42, 0.44, 0.55, 0.66, 0.77, 0.99, 0.11, 0.55, 0.11, 0.12, 0.13, 0.15, 0.46, 0.79, 0.53, 0.12, 0.86, 0.77, 0.2, 0.55, 0.44]
                    },
                ],
                heightLine: 130,
                optionsLine: {
                    chart: {
                        id: 'chart1',
                        brush: {
                            target: 'chart2',
                            enabled: true,
                            autoScaleYaxis: true
                        },
                        selection: {
                            enabled: true,
                        },
                        zoom: {
                            enabled: false,
                        }
                    },
                    colors: ['#3a3b3b', '#404141', '#ed7d31', '#ffc104'],
                    xaxis: {
                        tooltip: {
                            enabled: false
                        }
                    },
                    yaxis: {
                        tickAmount: 2
                    },
                    toolbar: {
                        show: false
                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'center',
                    },
                },
            },
        };
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

    validateKeyword = (value) => {
        let error;
        if (!value) {
            error = 'No Keywords';
        }
        return error;
    };

    toggle = (tab, count) => {
        const { activeTab, activeTabSecond } = this.state;
        if (count === 'first') {
            if (activeTab !== tab) {
                this.setState({
                    activeTab: tab
                })
            }
        } else if (count === 'second') {
            if (activeTabSecond !== tab) {
                this.setState({
                    activeTabSecond: tab
                })
            }
        }
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

        return (
            <div className='onboard-wrap'>
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
                                                    <th style={{ width: "15%" }}>Competitors</th>
                                                    <td style={{ width: "85%" }} colSpan="3">
                                                        <TagInput />
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
                                                                        validate={this.validateKeyword}
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
                                                onClick={() => { this.toggle('1', 'first'); }}
                                            >
                                                Num of Product
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: statesItems.activeTab === '2' })}
                                                onClick={() => { this.toggle('2', 'first'); }}
                                            >
                                                Avg of Regular Price
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: statesItems.activeTab === '3' })}
                                                onClick={() => { this.toggle('3', 'first'); }}
                                            >
                                                Num of Market
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: statesItems.activeTab === '4' })}
                                                onClick={() => { this.toggle('4', 'first'); }}
                                            >
                                                Num of Revuew
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: statesItems.activeTab === '5' })}
                                                onClick={() => { this.toggle('5', 'first'); }}
                                            >
                                                Num of Cart
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
                                                                <h2>Broad Market</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <p className='cont-noti small'>단위: 건</p>
                                                                <CompareLine options={boardTotalGraph.options} series={boardTotalGraph.series} height={boardTotalGraph.height} />
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
                                                                <h2>Avg of Regular Price</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <p className='cont-noti small'>단위: 건</p>
                                                                <CompareLine options={boardTotalGraph.options} series={boardTotalGraph.series} height={boardTotalGraph.height} />
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="3">
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='box-title'>
                                                                <h2>Num of Market</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <p className='cont-noti small'>단위: 건</p>
                                                                <CompareLine options={boardTotalGraph.options} series={boardTotalGraph.series} height={boardTotalGraph.height} />
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="4">
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='box-title'>
                                                                <h2>Num of Review</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <p className='cont-noti small'>단위: 건</p>
                                                                <CompareLine options={boardTotalGraph.options} series={boardTotalGraph.series} height={boardTotalGraph.height} />
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Colxx>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="5">
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='box-title'>
                                                                <h2>Num of Cart</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <p className='cont-noti small'>단위: 건</p>
                                                                <CompareLine options={boardTotalGraph.options} series={boardTotalGraph.series} height={boardTotalGraph.height} />
                                                            </div>
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
                <Row className="mt-5">
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <div>
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: statesItems.activeTabSecond === '1' })}
                                                onClick={() => { this.toggle('1', 'second'); }}
                                            >
                                                Sales
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: statesItems.activeTabSecond === '2' })}
                                                onClick={() => { this.toggle('2', 'second'); }}
                                            >
                                                Points
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={statesItems.activeTabSecond}>
                                        <TabPane tabId="1">
                                            <Row className='mt-5'>
                                                <Colxx xxs="12">
                                                    <Card>
                                                        <CardBody>
                                                            <div className='box-title'>
                                                                <h2>Benefits Type</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <FullStackBar
                                                                    options={fullStackBarGraphType2.options}
                                                                    series={fullStackBarGraphType2.series}
                                                                    height={fullStackBarGraphType2.height}
                                                                />
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
                                                                <h2>Benefits Type</h2>
                                                            </div>
                                                            <div className='graph-area'>
                                                                <FullStackBar
                                                                    options={fullStackBarGraphType2.options}
                                                                    series={fullStackBarGraphType2.series}
                                                                    height={fullStackBarGraphType2.height}
                                                                />
                                                            </div>
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
                <Row className='mt-5'>
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <div className='box-title'>
                                    <h2> Price Distribution</h2>
                                </div>
                                <div className='bx_select_area'>
                                    <span className='select-title'>Competitors</span>
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
                                </div>
                                <div className='graph-area'>
                                    <BrushChart />
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </div>
        )
    }
}

export default Onboard;