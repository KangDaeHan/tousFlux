import React from 'react';
import { Row, Card, CardBody, Form, Button, FormGroup } from 'reactstrap';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import ChannelButton from '../../../components/applications/ChannelButton'

class Channels extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
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
                            <div className='box-title'>
                                <h2>Posting Indicator</h2>
                            </div>
                            <table className='r-table table tbl-indicator mt-5'>
                                <thead>
                                    <tr>
                                        <th>Channel Category</th>
                                        <th>Channel</th>
                                        <th>Post(Product)</th>
                                        <th>Comment(Review)</th>
                                        <th>View</th>
                                        <th>Like(Cart)</th>
                                        <th>Press</th>
                                        <th>Positive Rate</th>
                                        <th>Negative Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Search Volume</td>
                                        <td>Naver</td>
                                        <td>447</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan='5'>Social</td>
                                        <td>Naver News</td>
                                        <td>496</td>
                                        <td>38</td>
                                        <td>456</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Naver Blog</td>
                                        <td>1298</td>
                                        <td>153</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Instagram</td>
                                        <td>3520</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Facebook</td>
                                        <td>1595</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Youtube</td>
                                        <td>5894</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>Shopping</td>
                                        <td>Naver Shopping</td>
                                        <td>354</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>E-commerce</td>
                                        <td>Coupang</td>
                                        <td>9988</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                </tbody>
                            </table>
                        </CardBody>
                    </Card>
                    </Colxx>
                </Row>
            </>
        )
    }
}

export default Channels;