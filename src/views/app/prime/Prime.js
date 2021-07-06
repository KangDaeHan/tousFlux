/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Row, Card, CardBody, Form, FormGroup,Input, Label, Button } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import Bar from '../../../components/charts/Bar';
import Line from '../../../components/charts/Line'
import 'react-datepicker/dist/react-datepicker.css';
// eslint-disable-next-line react/prefer-stateless-function
class Prime extends React.Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      // eslint-disable-next-line react/no-unused-state
      chartOption: [
        {id:1, series: [{data: [21, 22]}], options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: ['1', 'Mar'],
          },
        }},
        
        {id:2, series: [{data: [50, 11]}], options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          xaxis: {
            categories: ['1', 'Mar'],
          },
        }},
      ],
      
      
      // eslint-disable-next-line react/no-unused-state
      startDate: new Date(),
      // eslint-disable-next-line react/no-unused-state
      endDate: new Date(),
      // eslint-disable-next-line react/no-unused-state
      checkInfo: [
        { id: 1, value: "Naver", isChecked: false },
        { id: 2, value: "Test1", isChecked: false },
        { id: 3, value: "Test2", isChecked: false },
        { id: 4, value: "Test3", isChecked: false }
      ], 
      // eslint-disable-next-line react/no-unused-state
      activeId: null, 
    };
  };

  ChangeStartDate = (e) => { 
    this.setState({  
      startDate: e,
    });  ;
  };  
  
  ChangeEndDate = (e) => { 
    this.setState({  
      endDate: e
    });  
  }; 

  handleAllChecked = (evt) => {
    // eslint-disable-next-line prefer-const
    let { checkInfo } = this.state;

    checkInfo.forEach(item => {
      // eslint-disable-next-line no-param-reassign
      item.isChecked = evt.target.checked
    });
    this.setState({ checkInfo });
  }
  
  handleOneChecked = (evt) => {
    // eslint-disable-next-line prefer-const
    let { checkInfo } = this.state;
    checkInfo.forEach(item => {
      if (item.value === evt.target.value){
        // eslint-disable-next-line no-param-reassign
        item.isChecked = evt.target.checked;
      }
    });
    this.setState({ checkInfo });
  }

  listClickEvt = (evt) => {
    const getNum = evt.currentTarget.className.replace('item-','');
    this.setState({activeId : Number(getNum)})

  }
  

  render() {
    
    const statesItems = this.state;
    

    const indiCont = [
      {id: 1, title :  'Key-Rank.', count: '-', active: false},
      {id: 2, title :  'Click', count: 99, active: false},
      {id: 3, title :  'Social Buzz', count: 824},
      {id: 4, title :  'Num of Product', count: 11485},
      {id: 5, title :  'Num of Conversion', count: 2345},
    ]
    

    // eslint-disable-next-line prefer-const
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
                              <FormGroup check inline className='check-box'>
                                <Label check>
                                <Input 
                                  className='check-all-box'
                                  onChange={this.handleAllChecked}
                                  type="checkbox"
                                />{' '}
                                  all
                                </Label>
                              </FormGroup>
                            {statesItems.checkInfo.map(items => {
                              return(
                                <FormGroup check inline className='check-box' key={items.id}>
                                  <Label check>
                                  <Input 
                                  key={items.id}
                                  onChange={this.handleOneChecked}
                                  checked={items.isChecked}
                                  type="checkbox"
                                  value={items.value}
                                  className='check-single-box'
                                  />{' '}
                                    {items.value}
                                  </Label>
                                </FormGroup>
                              )
                            })}
                              
                            </td>
                          </tr>
                          <tr>
                            <th style={{ width:'15%' }}>Keywords</th>
                            <td style={{ width:'85%' }}>
                              <span>No Keywords</span>
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
                    <h2>4-Trend indidcator</h2>
                  </div>
                  <div className='indi-wrap'>
                    <ul className='lst-indi'>
                      {indiCont.map((item) => {
                        const countNumberDot = item.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return (
                          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                          <li 
                            key={item.id}
                            onClick={this.listClickEvt}
                            className={`item-${item.id}${statesItems.activeId === Number(item.id) ? ' active' : ""}` }
                          >
                            <div>
                              <p>
                                <span className='title'>{item.title}</span>
                                <span className='count'>{countNumberDot}</span>
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                    <p className='noti'>* 각 수치는 기간 내 일평균 값을 의미</p>
                  </div>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
          <Row className="mt-5">
            <Colxx xxs="12">
              <Card>
                <CardBody>
                  <div className='box-title'>
                    <h2>Total Indicator</h2>
                  </div>
                  <div className='graph-area'>
                    <ul className='item-1 graph-list' style={statesItems.activeId === 1 ? {display : 'flex'} : {display : 'none'}}>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                    </ul>
                    <ul className='item-2 graph-list'>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Bar options={statesItems.options} series={statesItems.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
          <Row className="mt-5">
            <Colxx xxs="12">
              <Card>
                <CardBody>
                  <div className='box-title'>
                    <h2>Demographics Comparison</h2>
                  </div>
                  <div className='graph-area'>
                    <ul>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Line options={statesItems.options} series={statesItems.series} type="line" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Line options={statesItems.options} series={statesItems.series} type="line" height={350} />
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className='count-area'>
                          <p className='area-title'>Post</p>
                          <p className='count'>1557</p>
                        </div>
                        <div className='chart-area'>
                          <div id="chart">
                            <Line options={statesItems.options} series={statesItems.series} type="line" height={350} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </>
      )
  }
}

export default Prime;
