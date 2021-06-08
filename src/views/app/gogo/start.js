import React, { useState } from 'react';
import { Row, Card, CardBody, Form, FormGroup, Button } from 'reactstrap';
import { injectIntl } from 'react-intl';
import Select from 'react-select';
// import IntlMessages from '../../../helpers/IntlMessages';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import Bubble from '../../../components/charts/Bubble';
import Line from '../../../components/charts/Line';
import Bar from '../../../components/charts/Bar';

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

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <Form className="select-box-wrap multi">
              <div className="tbl-vertical-heading">
                <table>
                  <tbody>
                    <tr>
                      {/* vertical유형의 테이블 th 값은 인라인 스타일로 지정 바랍니다. */}
                      <th style={{ width:'10%' }}>Period</th>
                      <td style={{ width:'90%' }} colSpan="3">
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
                      <th style={{ width:'10%' }}>Product(上) Category</th>
                      <td style={{ width:'40%' }}>
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
                      <th style={{ width:'10%' }}>Product(下) Category</th>
                      <td style={{ width:'40%' }}>No Keywords</td>
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
                <ul>
                  <li><img src="/assets/img/showroom/thumb1.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb2.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb3.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb4.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb3.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb4.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb2.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb1.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb1.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb3.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb1.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb2.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb3.png" alt="연관 이미지"/></li>
                  <li><img src="/assets/img/showroom/thumb4.png" alt="연관 이미지"/></li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* e:showwoom */}

      {/* s:P-Factor Analysis */}
      <Row className="mt-5">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <div className="box-title">
                <h2>Trend-Quad</h2>
                <span className="help"><img src="/assets/img/icon/icon_help.png" alt="도움말" /></span>
              </div>

              <div className="box-line">
                <Bubble />

                <Line />

                <Bar />
              </div>
              
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* e:P-Factor Analysis */}
    </>
  );
};

export default injectIntl(Start);