import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Row, Card, CardBody,FormGroup } from 'reactstrap';
import { injectIntl } from 'react-intl';
// import IntlMessages from '../../../helpers/IntlMessages';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import 'react-datepicker/dist/react-datepicker.css';
import { Colxx } from '../../../components/common/CustomBootstrap';
// import Breadcrumb from '../../../containers/navs/Breadcrumb';

const Start = ({ intl }) => {
  const [startDateRange, setStartDateRange] = useState(new Date());
  const [endDateRange, setEndDateRange] = useState(new Date());
  const { messages } = intl;


  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Card>
            <CardBody>
            {/* <Breadcrumb heading="menu.start" match={match} />
            <Separator className="mb-5" /> */}

              <div className="tbl-vertical-heading">
                <table>
                  <tbody>
                    <tr>
                      {/* vertical유형의 테이블 th 값은 인라인 스타일로 지정 바랍니다. */}
                      <th style={{ width:'15%' }}>Period</th>
                      <td style={{ width:'85%' }} colSpan="3">
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
                      </td>
                    </tr>
                    <tr>
                      <th style={{ width:'15%' }}>Product(上) Category</th>
                      <td style={{ width:'35%' }}>
                      <Formik
                        initialValues={{
                          // select: '',
                          // date: null,
                        }}
                        // validationSchema={SignupSchema}
                        // onSubmit={onSubmit}
                      >
                      {({
                        handleChange,
                        handleBlur,
                        values,
                        errors,
                        touched,
                      }) => (
                        <Form className="av-tooltip tooltip-label-right">
                          <FormGroup className="error-l-100">
                            <select
                              name="select"
                              className="form-control"
                              value={values.select}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="">패션의류</option>
                              <option value="1">의류</option>
                              <option value="2">신발</option>
                            </select>

                            {errors.select && touched.select ? (
                              <div className="invalid-feedback d-block">
                                {errors.select}
                              </div>
                            ) : null}
                          </FormGroup>

                          <FormGroup className="error-l-100">
                            <select
                              name="select"
                              className="form-control"
                              value={values.select}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="">여성의류</option>
                              <option value="11">의류</option>
                              <option value="22">신발</option>
                              <option value="33">악세사리</option>
                            </select>

                            {errors.select && touched.select ? (
                              <div className="invalid-feedback d-block">
                                {errors.select}
                              </div>
                            ) : null}
                          </FormGroup>

                          <FormGroup className="error-l-100">
                            <select
                              name="select"
                              className="form-control"
                              value={values.select}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="">상의/티셔츠</option>
                              <option value="111">신발</option>
                              <option value="222">악세사리</option>
                            </select>

                            {errors.select && touched.select ? (
                              <div className="invalid-feedback d-block">
                                {errors.select}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Form>
                      )}
                      </Formik>
                      </td>
                      <th style={{ width:'15%' }}>Product(下) Category</th>
                      <td style={{ width:'35%' }}>No Keywords</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      {/* <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.start" />
          </p>
        </Colxx>
      </Row> */}
    </>
  );
};

export default injectIntl(Start);