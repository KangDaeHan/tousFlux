import React from 'react';
import { Row,
     Card,
     CardBody,
     Form,
     Button,
     FormGroup,
     Nav,
     NavLink,
     NavItem,
     TabContent,
     TabPane, 
     Table, 
     Label, 
     Input 
    } from 'reactstrap';
import { Formik, Field } from 'formik';
import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import { ko } from "date-fns/esm/locale";
import { Colxx } from '../../../components/common/CustomBootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import CompareLine from '../../../components/charts/CompareLine';
import NegativeBar from '../../../components/charts/NegativeBar';
import HeatMap from '../../../components/charts/HeatMap';
import ChannelButton from '../../../components/applications/ChannelButton'
import CustomSelectInput from '../../../components/common/CustomSelectInput';
import { heatMapGraphData, columeNegativeGraph } from '../../../components/charts/config'

class Overview extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {
            startDate: new Date(),
            endDate: new Date(),
            activeTab: '1',
            // eslint-disable-next-line react/no-unused-state
            selectedOptions : [{ label: 'Total', value: 'social_val01', key: 0 }],
            // eslint-disable-next-line react/no-unused-state
            totalGraph : {
                series: [
                    {
                      name: "Total Graph",
                      data: [2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 4, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4,4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4, 1.8, 2.8, 2.4, 4.4]
                    },
                  ],
                  height: 500,
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
                    colors: ['#b9b9b9'],
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
                    stroke: {
                      curve: 'smooth'
                    },
                    grid: {
                      show: false,
                    },
                    xaxis: {
                      categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
                      tickPlacement: 'between'
                    },
                    yaxis: {
                      min: 1,
                      max: 5
                    },
                    
                  },
            }, 
            // eslint-disable-next-line react/no-unused-state
            checkInfo: [
              { id: 1, value: "Naver", isChecked: false },
              { id: 2, value: "Test1", isChecked: false },
              { id: 3, value: "Test2", isChecked: false },
              { id: 4, value: "Test3", isChecked: false }
            ], 
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
    
    toggle = (tab) => {
        const { activeTab } = this.state;

        if(activeTab !== tab){
            this.setState({
                activeTab : tab
            })
        }
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
  

    generateData = (count, yrange) => {
        let i = 0;
        const series = [];
        while (i < count) {
          const x = (i + 1).toString();
          const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
          series.push({
            x,
            y
          });
          // eslint-disable-next-line no-plusplus
          i++;
        }
        console.log(series);
        return series;
      }

      setSelectedOptions = (val) => {
        this.setState({  
          selectedOptions: val
        }); 
      }

      
    

    render() {


      const statesItems = this.state;
      console.log(statesItems.configData);

        const selectedOptionsBase = [
          { label: 'Total', value: 'social_val01', key: 0 },
          { label: 'Naver_news', value: 'social_val02', key: 1 },
          { label: 'Naver_blog', value: 'social_val03', key: 2 },
        ];
    
        const validateKeyword = (value) => {
            let error;
            if (!value) {
              error = 'No Keywords';
            } 
            return error;
        };

        return(
            <div className='overview_area'>
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
                                    <td style={{ width:'35%' }}>
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
                                    <th style={{ width:'15%' }}>Period Unit</th>
                                    <td  style={{ width:'35%' }}>
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
                                    <th style={{ width:'15%' }}>Channel</th>
                                    <td style={{ width:'85%' }} colSpan="3">
                                    <ChannelButton />                             
                                    </td>
                                </tr>
                                <tr>
                                    <th style={{ width:'15%' }}>Keywords</th>
                                    <td style={{ width:'85%' }} colSpan="3">
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
                            <div>
                                <Nav tabs>
                                    <NavItem>
                                    <NavLink
                                        className={classnames({ active: statesItems.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Total
                                    </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: statesItems.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >
                                            I/D RATE
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: statesItems.activeTab === '3' })}
                                            onClick={() => { this.toggle('3'); }}
                                        >
                                            GAP
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={statesItems.activeTab}>
                                    <TabPane tabId="1">
                                        <Row>
                                            <Colxx xxs="12">
                                                <Card>
                                                    <CardBody>
                                                        <div className='graph-area total-area'>
                                                            <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                                            <p className='cont-noti'>* 모든 채널의 값을 지수화하여 표시</p>
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
                                                            <h2>Heat Map</h2>
                                                        </div>
                                                        <div className='graph-area Heat-Map'>
                                                          <HeatMap options={heatMapGraphData.options} series={heatMapGraphData.series} height={heatMapGraphData.height} />
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
                                                      <div className='bx_select_area'>
                                                        <span className='select-title'>Channel</span>
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
                                                      <div className='graph-area negative-chart title-type'>
                                                        <p className='bx_name'>{statesItems.selectedOptions.label}</p>
                                                        <NegativeBar options={columeNegativeGraph.options} series={columeNegativeGraph.series} height={columeNegativeGraph.height} />
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
                                                            <h2>Heat Map</h2>
                                                        </div>
                                                        <div className='graph-area Heat-Map'>
                                                            <HeatMap options={heatMapGraphData.options} series={heatMapGraphData.series} height={heatMapGraphData.height} />
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Colxx>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="3">
                                      <Row>
                                          <Colxx xxs="12">
                                              <Card>
                                                  <CardBody>
                                                      <div className='graph-area grap-area'>
                                                          <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                                      </div>
                                                  </CardBody>
                                              </Card>
                                          </Colxx>
                                      </Row>
                                      <Row className='mt-5'>
                                          <Colxx xxs="12">
                                              <Card>
                                                  <CardBody>
                                                      <div className='clearfix box-line'>
                                                        <div className='box left'>
                                                          <Table hover bordered>
                                                            <thead>
                                                              <tr>
                                                                <th>No</th>
                                                                <th>Channel1</th>
                                                                <th>Channel2</th>
                                                                <th>Gap</th>
                                                              </tr>
                                                            </thead>
                                                            <tbody>
                                                              <tr>
                                                                <td>1</td>
                                                                <td>Shopping</td>
                                                                <td>Coupang</td>
                                                                <td>0.67</td>
                                                              </tr>
                                                              <tr>
                                                                <td>2</td>
                                                                <td>Shopping</td>
                                                                <td>Google Analytics</td>
                                                                <td>0.58</td>
                                                              </tr>
                                                              <tr>
                                                                <td>3</td>
                                                                <td>Instagram</td>
                                                                <td>Coupang</td>
                                                                <td>0.56</td>
                                                              </tr>
                                                            </tbody>
                                                          </Table>
                                                        </div>
                                                        <div className='box right'>
                                                          <div className="chart_area">
                                                            <div className='chart-header'>
                                                              Channel Chart
                                                            </div>
                                                            <div className='chart-cont'>
                                                              <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                                            </div>
                                                          </div>
                                                          <div className="chart_area">
                                                            <div className='chart-header'>
                                                              GAP Chart
                                                            </div>
                                                            <div className='chart-cont'>
                                                              <CompareLine options={statesItems.totalGraph.options} series={statesItems.totalGraph.series} height={statesItems.totalGraph.height} />
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                  </CardBody>
                                              </Card>
                                          </Colxx>
                                      </Row>
                                      <Row>
                                          <Colxx xxs="12">
                                              <Card>
                                                  <CardBody>
                                                      <div className='graph-area grap-area'>
                                                          TEST
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
            </div>
        )
    }
}

export default Overview;