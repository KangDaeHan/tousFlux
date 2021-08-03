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
// import {ReactTable} from '../../../containers/ui/ReactTable';
import 'react-datepicker/dist/react-datepicker.css';

// eslint-disable-next-line react/prefer-stateless-function
class Overview extends React.Component {
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

  render() {
    const statesItems = this.state;


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
      </>
    )
  }
}

export default Overview;