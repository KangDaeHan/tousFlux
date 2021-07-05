/* eslint-disable constructor-super */
import React from 'react';
import { Row, Card, CardBody } from 'reactstrap';
import DatePicker from 'react-datepicker';
import { Colxx } from '../../../components/common/CustomBootstrap';
import Bar from '../../../components/charts/Bar';
import Line from '../../../components/charts/Line'
import 'react-datepicker/dist/react-datepicker.css';
// eslint-disable-next-line react/prefer-stateless-function
class Prime extends React.Component {
  constructor(props) {
    super(props); // React.Component의 생성자 메소드를 먼저 실행
    this.state = { // 이 컴포넌트의 state 설정
      series: [{
        data: [21, 22]
      }],
      options: {
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
      },
      // eslint-disable-next-line react/no-unused-state
      date: '',
    };
  };

  Changedate = (e) => {  
    this.setState({  
      date: e  
    });  
  };  
  
  render() {
    
    const items = this.state;
    
    const indiCont = [
      {id: 1, title :  'Key-Rank.', count: '-'},
      {id: 2, title :  'Click', count: 99},
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
                <DatePicker className="form-control"  
                  dateFormat="yyyy.MM.dd"
                  selected={items.date} 
                  placeholderText="Select Time" 
                  showPopperArrow={false}  
                  onChange={this.Changedate}  
                  /> 
                </CardBody>
              </Card>
            </Colxx>
          </Row>
          <Row>
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
                          // eslint-disable-next-line react/jsx-key
                          <li key={item.id}>
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
          <Row>
            <Colxx xxs="12">
              <Card>
                <CardBody>
                  <div className='box-title'>
                    <h2>Total Indicator</h2>
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
                            <Bar options={items.options} series={items.series} type="bar" height={350} />
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
                            <Bar options={items.options} series={items.series} type="bar" height={350} />
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
                            <Bar options={items.options} series={items.series} type="bar" height={350} />
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
                            <Bar options={items.options} series={items.series} type="bar" height={350} />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
          <Row>
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
                            <Line options={items.options} series={items.series} type="line" height={350} />
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
                            <Line options={items.options} series={items.series} type="line" height={350} />
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
                            <Line options={items.options} series={items.series} type="line" height={350} />
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
