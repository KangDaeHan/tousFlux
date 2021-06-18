import React, { useState } from 'react';
import { 
  Row, 
  Card, 
  CardBody, 
  Form, 
  FormGroup, 
  Nav,
  NavItem,
  Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { injectIntl } from 'react-intl';
import classnames from 'classnames';
import Select from 'react-select';
// import IntlMessages from '../../../helpers/IntlMessages';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import ShowRoom from '../../../containers/pages/ShowRoom';
import Bubble from '../../../components/charts/Bubble';
import Line from '../../../components/charts/Line';
import Bar from '../../../components/charts/Bar';
import ScatterQuadrant from '../../../components/charts/ScatterQuadrant';
import { ReactTableWithPaginationCard } from '../../../containers/ui/ReactTableCards';
import { Colxx } from '../../../components/common/CustomBootstrap';
import CustomSelectInput from '../../../components/common/CustomSelectInput';

// import Breadcrumb from '../../../containers/navs/Breadcrumb';

const Start = ({ intl }) => {
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(new Date());
  const [selectedOptionsStep1, setSelectedOptionsStep1] = useState([]);
  const [selectedOptionsStep2, setSelectedOptionsStep2] = useState([]);
  const [selectedOptionsStep3, setSelectedOptionsStep3] = useState([]);

  const { messages } = intl;

  // Category select data step1 
  const selectDataTypeStep1 = [
    { label: '패션의류', value: 'clothing1', key: 0 },
    { label: '의류', value: 'clothing2', key: 1 },
    { label: '신발', value: 'clothing3', key: 2 },
  ];

  // Category select data step2 
  const selectDataTypeStep2 = [
    { label: '신발', value: 'clothing1', key: 0 },
    { label: '패션의류', value: 'clothing2', key: 1 },
    { label: '계절의류', value: 'clothing3', key: 2 },
  ];

  // Category select data step3
  const selectDataTypeStep3 = [
    { label: '가방', value: 'clothing1', key: 0 },
    { label: '신발', value: 'clothing2', key: 1 },
    { label: '패션의류', value: 'clothing3', key: 2 },
  ];

  const [activeFirstTab, setActiveFirstTab] = useState('1');

  const validateKeyword = (value) => {
    let error;
    if (!value) {
      error = 'No Keywords';
    } else if (value.length < 2) {
      error = 'Value must be longer than 2 characters';
    }
    return error;
  };

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody>
              { /* s: 검색 조건 일단 여기 */ }
              <Form className="select-box-wrap multi">
              <div className="tbl-vertical-heading">
                <table>
                  <tbody>
                    <tr>
                      {/* vertical유형의 테이블 th 값은 인라인 스타일로 지정 바랍니다. */}
                      <th style={{ width:'15%' }}>Period</th>
                      <td style={{ width:'85%' }} colSpan="3">
                        <div className="date-picker-wrap">
                          <DatePicker
                            locale={ko}
                            dateFormat="yyyy.MM.dd"
                            selected={startDateRange}
                            selectsStart
                            startDate={startDateRange}
                            endDate={endDateRange}
                            onChange={setStartDateRange}
                            placeholderText={messages['form-components.start']}
                          />
                          <span className="cal-range"> ~ </span>
                          <DatePicker
                            locale={ko}
                            dateFormat="yyyy.MM.dd"
                            selected={endDateRange}
                            selectsEnd
                            startDate={startDateRange}
                            endDate={endDateRange}
                            onChange={setEndDateRange}
                            placeholderText={messages['form-components.end']}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th style={{ width:'15%' }}>Product(上) Category</th>
                      <td style={{ width:'35%' }}>
                        <FormGroup className="select-box">
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOptionsStep1}
                            onChange={(val) => setSelectedOptionsStep1(val)}
                            options={selectDataTypeStep1}
                          />
                        </FormGroup>
                        <FormGroup className="select-box">
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOptionsStep2}
                            onChange={(val) => setSelectedOptionsStep2(val)}
                            options={selectDataTypeStep2}
                          />
                        </FormGroup>
                        <FormGroup className="select-box">
                          <Select
                            components={{ Input: CustomSelectInput }}
                            className="react-select"
                            classNamePrefix="react-select"
                            name="form-field-name"
                            value={selectedOptionsStep3}
                            onChange={(val) => setSelectedOptionsStep3(val)}
                            options={selectDataTypeStep3}
                          />
                        </FormGroup>
                      </td>
                      <th style={{ width:'15%' }}>Product(下) Category</th>
                      <td style={{ width:'35%' }}>
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
              { /* e: 검색 조건 일단 여기 */ }
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* s:showwoom */}
      <Row className="mt-5">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <div className="box-title">
                <h2>Showroom</h2>
                <span className="help"><img src="/assets/img/icon/icon_help.png" alt="도움말" /></span>
              </div>
              {/* 이미지 갤러리 */}
              <div className="showroom-gallery">
                {/* 이미지 갤러리 */}
                <ShowRoom />
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* e:showwoom */}
      {/* s:tab menu */}
      <Row className="mt-5">
        <Colxx xxs="12">
          {/* s: 탭메뉴 */}
          <Nav tabs className="card-header-tabs ">
            <NavItem>
              <NavLink
                to="#"
                location={{}}
                className={classnames({
                  active: activeFirstTab === '1',
                  'nav-link': true,
                })}
                onClick={() => {
                  setActiveFirstTab('1');
                }}
              >
                P-Factor Analysis
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#"
                location={{}}
                className={classnames({
                  active: activeFirstTab === '2',
                  'nav-link': true,
                })}
                onClick={() => {
                  setActiveFirstTab('2');
                }}
              >
                E-Factor Analysis
              </NavLink>
            </NavItem>
          </Nav>
          {/* e: 탭메뉴 */}
        </Colxx>
      </Row>
      {/* e:tab menu */}
      
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody>
              {/* s:trend-quad */}
              <div className="box-title">
                 <h2>Trend-Quad</h2>
                 <span className="help"><img src="/assets/img/icon/icon_help.png" alt="도움말" /></span>
              </div>
              <div className="clearfix box-line">
                <div className="box left">
                  {/* 각 차트별 height 값은 props로 전달 차트 */}
                  <ScatterQuadrant height={500} />
                </div>
                <div className="box right">
                  <div className="chart-area">
                    <div className="chart-header">
                      <div className="chart-title">
                        <h4>Post-Trend</h4>
                        <span className="help"><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></span>
                      </div>
                      <span className="mean">Pre-Trend <span className="number">85.5%</span></span>
                    </div>
                    {/* 각 차트별 height 값은 props로 전달 */}
                    <Line height={210} />
                  </div>
                  <div className="chart-area mb-0">
                    <div className="chart-header">
                      <div className="chart-title">
                        <h4>Sentiment Factor | <span>Brand</span></h4>
                        <span className="help"><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></span>
                      </div>
                    </div>
                    {/* 각 차트별 height 값은 props로 전달 */}
                    <Bar height={210} />
                  </div>
                </div>
              </div>
              {/* e:trend-quad */}

              {/* s:grobal index analysis */}
              <div className="box-title mt-5">
                <h2>GI(Global Index) Analysis</h2>
                <span className="help"><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></span>
              </div>
              
              <div className="table-sort-area">
                <div className="clearfix box-line">
                  <div className="box left">
                    <ReactTableWithPaginationCard />
                  </div>
                  <div className="box right relation-img">
                    <Bubble height={400} className="relation-bubble" />
                  </div>
                </div>
                {/* s: 연관 이미지 영역 */}
                <div className="showroom-gallery relation-gallery">
                  <ShowRoom />
                </div>
                {/* e: 연관 이미지 영역 */}
                
              </div>
              {/* e:grobal index analysis */}
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      
    </>
  );
};

export default injectIntl(Start);