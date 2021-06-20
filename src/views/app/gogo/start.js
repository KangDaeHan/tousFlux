import React, { useState } from 'react';
import { 
  Row, 
  Card, 
  CardBody, 
  Form, 
  FormGroup, 
  Nav,
  NavItem,
  Button,
  Popover, 
  PopoverBody } from 'reactstrap';
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

  const [popoverOpenHelp1, setPopoverOpenHelp1] = useState(false);
  const [popoverOpenHelp2, setPopoverOpenHelp2] = useState(false);
  const [popoverOpenHelp3, setPopoverOpenHelp3] = useState(false);
  const [popoverOpenHelp4, setPopoverOpenHelp4] = useState(false);
  const [popoverOpenHelp5, setPopoverOpenHelp5] = useState(false);
  const [popoverOpenHelp6, setPopoverOpenHelp6] = useState(false);



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
                <button type="button" className="help" id="popover_1" onClick={() => setPopoverOpenHelp1(true)} onKeyDown={() => setPopoverOpenHelp1(true)}><img src="/assets/img/icon/icon_help.png" alt="도움말" /></button>
                <Popover 
                  placement="right"
                  isOpen={popoverOpenHelp1}
                  target="popover_1"
                  toggle={() => setPopoverOpenHelp1(!popoverOpenHelp1)}
                >
                  <PopoverBody>조회한 상품(키워드)와 관련한 상위 top14개 상품 이미지</PopoverBody>
                </Popover>
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
                <button type="button" className="help" id="popover_2" onClick={() => setPopoverOpenHelp2(true)} onKeyDown={() => setPopoverOpenHelp2(true)}><img src="/assets/img/icon/icon_help.png" alt="도움말" /></button>
                <Popover 
                  placement="right"
                  isOpen={popoverOpenHelp2}
                  target="popover_2"
                  toggle={() => setPopoverOpenHelp2(!popoverOpenHelp2)}
                >
                  <PopoverBody>
                    <div>(가로축) P/R Index는 상품수와 리뷰수의 합을 계산한 것으로, <span className="f-blue">상품수와 리뷰수가 많을수록 우측에 위치함</span></div>
                    <div>(세로축) Rise/Fall 은 요소의 랭킹 변화를 나타내는 지표로써, 네이버 쇼핑 Best100에서 <br />(P-Factor인 경우) <span className="f-blue">상품의 랭킹이 높아질수록 위쪽에 위치함</span><br/>(E-Factor인 경우) <span className="f-blue">요소의중요도가 높아질수록 위쪽에 위치함</span></div>
                    <img src="../../../assets/img/icon/help.png" alt="도움말 이미지" />
                    <div className="f-red">포인트 클릭시, 우측 그래프가 활성화됩니다.</div>
                  </PopoverBody>
                </Popover>
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
                        <button type="button" className="help" id="popover_3" onClick={() => setPopoverOpenHelp3(true)} onKeyDown={() => setPopoverOpenHelp3(true)}><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></button>
                        <Popover
                          style={{ maxWidth: '600px' }}
                          placement="right"
                          isOpen={popoverOpenHelp3}
                          target="popover_3"
                          toggle={() => setPopoverOpenHelp3(!popoverOpenHelp3)}
                        >
                          <PopoverBody>
                            좌측 포지셔닝 맵에서 선택한 요소에 대하여 트렌드의 흐름을 보여줌 <br/>
                            재생버튼 클릭시, 앞으로의 <span className="f-blue">미래 트랜드를 예측</span>하여 나타내며, 우측 상단으로 뻗어가는 그래프일수록 잠재 트랜드 요소인 것으로 판단됨.<br/>
                            Pre-Trend 퍼센트가 높을수록 향후 트랜드에 있어 변동이 큰 요소라고 볼 수 있음.
                          </PopoverBody>
                        </Popover>
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
                        <button type="button" className="help" id="popover_4" onClick={() => setPopoverOpenHelp4(true)} onKeyDown={() => setPopoverOpenHelp4(true)}><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></button>
                        <Popover 
                          style={{ maxWidth: '600px' }}
                          placement="right"
                          isOpen={popoverOpenHelp4}
                          target="popover_4"
                          toggle={() => setPopoverOpenHelp4(!popoverOpenHelp4)}
                        >
                          <PopoverBody>
                            (Sentiment Factor) <br/>
                            - 좌측 포지셔닝 맵에서 선택한 요소에 대하여 소비자가 느낀 이미지 상위 10개<br/>
                            - 빨간색: 소비자가 가장 많이 연상하는 이미지 / 파란색: 소비자가 10번째로 연상하는 이미지 <br/>
                            (Brand) <br/>
                            - 좌측 포지셔닝 맵에서 선택한 요소가 가장 만힝 언급되는 브랜드 상위 10개 <br/>
                            - 빨간색: 해당 요소가 가장 많이 언급된 브랜드 / 파란색: 해당요소가 10번째로 언급된 브랜드 
                          </PopoverBody>
                        </Popover>
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
                <button type="button" className="help" id="popover_5" onClick={() => setPopoverOpenHelp5(true)} onKeyDown={() => setPopoverOpenHelp5(true)}><img src="/assets/img/icon/icon_help.png" alt="도움말" /></button>
                <Popover
                  style={{ maxWidth: '700px' }}
                  placement="right"
                  isOpen={popoverOpenHelp5}
                  target="popover_5"
                  toggle={() => setPopoverOpenHelp5(!popoverOpenHelp5)}
                >
                  <PopoverBody>
                    <div>
                      Global Index는 온라인 소비자 글과 패션 주요 속성 간의 연관성을 측정하는 나타내는 지표이며, 구매요인, 만족요인, 불만족요인에 따라 GI값을 보기위해 PGI(Purchase GI), SGI(Satisfaction GI), DGI(Dis-satisfaction GI) 지표를 생성함.
                    </div>
                    <div>
                      <span className="f-blue">(Purchase Factor)</span> 상품의 잠재적 구매 요인 랭킹을 보여주며, PGI를 구성하는 요인 <br/>
                      - 랭킹이 높을수록, 조회한 상품을 구매할 때 많이 고려하는 요소임
                    </div>
                    <div>
                      <span className="f-blue">(Satisfaction Factor)</span> 상품의 만족요인 랭킹을 보여주며, SGI를 구성하는 요인 <br/>
                      - 랭킹이 높을수록, 상품 구매 후 만족도가 높게 나타나는 요소임
                    </div>
                    <div>
                      <span className="f-blue">(Dis-satisfaction Factor)</span> 상품의 불만족 요인 랭킹을 보여주며, DGI를 구성하는 요인<br/>
                      - 랭킹이 높을수록, 상품 구매 후 불만족도가 높게 나타나는 요소임
                    </div>
                  </PopoverBody>
                </Popover>
              </div>
              
              <div className="table-sort-area">
                <div className="clearfix box-line">
                  <div className="box left">
                    <ReactTableWithPaginationCard />
                  </div>
                  <div className="box right relation-img">
                  <button type="button" className="help pos-right" id="popover_6" onClick={() => setPopoverOpenHelp6(true)} onKeyDown={() => setPopoverOpenHelp6(true)}><img src="/assets/img/icon/icon_help_small.png" alt="도움말" /></button>
                  <Popover
                    style={{ maxWidth: '700px' }}
                    placement="left"
                    isOpen={popoverOpenHelp6}
                    target="popover_6"
                    toggle={() => setPopoverOpenHelp6(!popoverOpenHelp6)}
                  >
                    <PopoverBody>
                      <div>
                        (가로축) DGI, 불만족을 나타내는 정도 <br/>
                        (세로축) SGI, 만족을 나타내는 정도 <br/>
                        (버블크기) PGI, 잠재 구매욕구를 나타내는 정도
                      </div>
                      <img src="../../../assets/img/icon/help2.png" alt="도움말 이미지" />
                      <p className="f-red">버블 클릭시, 그래츠 아래에 연관된 이미지가 활성화됩니다.</p>
                    </PopoverBody>
                  </Popover>
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