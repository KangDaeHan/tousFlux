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
import ReactApexChart from "react-apexcharts";
import { Row, Card, CardBody, Form, Button, FormGroup, Input, Nav, NavLink, NavItem, TabContent, TabPane, } from 'reactstrap';
import classnames from 'classnames';
import { Formik, Field } from 'formik';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import {ReactTable} from '../../../containers/ui/ReactTableCards';
import ChannelButton from '../../../components/applications/ChannelButton'
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import CompareBar from '../../../components/charts/CompareBar';
import CompareLine from '../../../components/charts/CompareLine';
import { Columns, TableData } from './tableData';
import 'react-datepicker/dist/react-datepicker.css';

// eslint-disable-next-line react/prefer-stateless-function
class ProductPrice extends React.Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행

    this.state = {
      startDate: new Date(),
      endDate: new Date(),
      checkInfo: [
        { id: 1, value: "Daily", isChecked: false },
        { id: 2, value: "Weekly", isChecked: false },
        { id: 3, value: "Monthly", isChecked: false },
        { id: 4, value: "Yearly", isChecked: false }
      ],
      activeId: 1,

    };
  }

  ChangeStartDate = (e) => {
    this.setState({
      startDate: e,
    });
  }

  ChangeEndDate = (e) => {
    this.setState({
      endDate: e
    });
  }

  validateKeyword = (value) => {
    let error;
    if (!value) {
      error = 'No Keywords';
    }
    return error;
  }

  listClickEvt = (evt) => {
    evt.preventDefault();
    const getNum = Number(evt.currentTarget.className.replace('item-',''));

    this.setState({
      activeId : getNum,
    });
  }

  render() {
    const statesItems = this.state;
    const statesChart = this.state;

    const indiCont = [
      {id: 1, title :  'Product',},
      {id: 2, title :  'Delivery',},
      {id: 3, title :  'Reviews',},
    ]

    const usersChartData = [
      {
        series: [
          {
            name: "Coupang",
            data: [20, 10, 27, 19, 35, 42, 50,]
          },
          {
            name: "11st",
            data: [12, 52, 32, 19, 22, 10, 60,]
          },
          {
            name: "Gmarket",
            data: [28, 22, 46, 39, 15, 21, 58,]
          },
          {
            name: "Timon",
            data: [22, 45, 30, 22, 35, 27, 65,]
          },
        ],
        height: 400,
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
          annotations: {
            position: 'back' ,
            yaxis: [
              {
                y: 20,
                y2: 40,
                opacity: 0.3,
                fillColor: "#FEB019",
              },
            ],
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right', 
          },
          colors: ['#f6980b','#b9b9b9','#4e4f4f','#b9b9b9'],
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
          grid: {
            show: false,
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            tickPlacement: 'between',
            axisTicks: {
              show: false,
            }
          },
          yaxis: {
            axisBorder: {
              show: true,
            },
            title: {
              text: 'Product',
              rotate: 0,
              offsetX: 0,
              offsetY: -150,
              style: {
                fontSize: '14px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-title',
              },
            }
          }, 
          
        },
      },
    ]




    // const usersChartData = [
    //   {id: 1, options: {xaxis: {categories: ['테스트1', '테스트2', '테스트3', '테스트4',],}}, series: [{data: [17, 15, 50, 120], title: 'Product',}]},
    // ]

    const sessionsChartData = [
      {id: 1, series: [{data: [50, 20, 55, 100, 140], title: 'Sessions', average: [5, 50, 20, 1.5, 45.3],}]},
    ]

    const conversionChartData = [
      {id: 1, series: [{data: [23, 10, 82, 35, 100], title: 'Conversion', average: [5, 50, 20, 1.5, 45.3],}]},
    ]

    const bounceChartData = [
      {id: 1, series: [{data: [10, 20, 30, 40, 50], title: 'Bounce', average: [5, 50, 20, 1.5, 45.3],}]},
    ]

    const chartDataArray = [usersChartData, sessionsChartData, conversionChartData, bounceChartData];

    

    return (
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

        
        <ul className="tab-list mt-5">
          {indiCont.map((item, idx) => {
            return (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <li 
                key={idx} 
                onClick={this.listClickEvt}
                className={`item-${item.id} ${statesChart.activeId === Number(item.id) ? 'active' : ""}` }
              >
                <span className='title'>{item.title}</span>
              </li>
            );
          })}
        </ul>

        <Row className="mt-2">
          <Colxx xxs="12">
            <Card>
              <CardBody>
                <div className="box-title">
                  <h2>Commerce Indicatior</h2>
                </div>

                <div className="graph-area box-line pl-2 pr-5">
                  {chartDataArray.map((list , indx) => {
                      return(
                        <ul 
                          key={indx} 
                          className={`item-${indx + 1} graph-list`} style={statesChart.activeId === Number(`${indx + 1}`) ? {display : 'block'} : {display : 'none'}}
                        >
                          {list.map((item, idx) => {
                            return(
                              <li
                                key={idx}
                              >
                                { statesChart.activeId === Number(`${indx + 1}`) && 
                                <div className='chart-area bor-none'>
                                  <CompareLine options={item.options} series={item.series} height={350} className="chart-bar" />
                                </div>
                                }
                              </li>
                            );
                          })}
                        </ul>
                      )
                    })}
                </div>

                <div className="box-line tbl-wrap">
                  <p className="total-count">단위 : 건</p>
                  <div className="tbl-no-page tbl-scroll-auto">
                    <ReactTable
                      className='table'
                      data={TableData}
                      columns={Columns}
                      defaultPageSize={10}
                      sortable={false}
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Colxx>
        </Row>
      
        
      </>
    )
  }
}

export default ProductPrice;