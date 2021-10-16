/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Pagination} from 'swiper';

  import 'swiper/swiper-bundle.min.css'
  import 'swiper/components/pagination'
//   import './ui'
  
  // install Swiper modules
  SwiperCore.use([Pagination]);

class Product extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {

        }
    }

    render() {

        return(
            <div className='main wrap'>
                <header className='header'>
                    <div className='header_inner'>
                        <div className='wrap_title'>
                            원피스
                        </div>
                        <div className='bx_right'>
                            <a href="javascript:void;" className='btn_search'>
                                <span className='btn_nor_search' />
                            </a>
                            <a href="javscript:void(0);" className='btn_fileter'>
                                <span className='btn_nor_filter' />
                            </a>
                        </div>
                    </div>
                    <ul className='list_menu'>
                        <li className='active'>
                            <a href="javascript:void;">Basic</a>
                        </li>
                        <li>
                            <a href="javascript:void;">Advenced</a>
                        </li>
                        <li>
                            <a href="javascript:void;">Industry</a>
                        </li>
                        <li>
                            <a href="javascript:void;">Social L</a>
                        </li>
                    </ul>
                </header>
                <div className='main_container'>
                    <div className='content product'>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title t-c">
                                    Present Style
                                </p>
                            </div>
                            <div className="panel_cont">
                                <div className='slide_wrap'>
                                    <Swiper
                                        slidesPerView={2}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                        pagination={true}
                                        >
                                        <SwiperSlide>
                                            <a href="javascript:void;">
                                                <img src="/assets/img/showroom/thumb1.png" alt="" />
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="javascript:void;">
                                                <img src="/assets/img/showroom/thumb2.png" alt="" />
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="javascript:void;">
                                                <img src="/assets/img/showroom/thumb3.png" alt="" />
                                            </a>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <a href="javascript:void;">
                                                <img src="/assets/img/showroom/thumb1.png" alt="" />
                                            </a>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title t-c">
                                    Trend by Product
                                </p>
                                <p className='panel_desc'>
                                    관련 한줄 설명
                                </p>
                            </div>
                            <div className="panel_cont">
                                <table className='tbl_basic'>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>요소</th>
                                            <th>포화상태</th>
                                            <th>상품수 (리뷰수)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                광택
                                                <span className='btn_status'>
                                                    <span className='dot' />
                                                    디테일
                                                </span>
                                            </td>
                                            <td>
                                                높음
                                            </td>
                                            <td>
                                                1,130 (439)
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title t-c">
                                    Emotional Factor
                                </p>
                            </div>
                            <div className="panel_cont">
                                <p className='panel_desc'>
                                    관련 한줄 설명
                                </p>
                                <ul className='list_option'>
                                    <li><a href="javascript:void;">사이즈조절</a></li>
                                    <li><a href="javascript:void;">타겟</a></li>
                                    <li><a href="javascript:void;">마감처리</a></li>
                                    <li><a href="javascript:void;">무늬</a></li>
                                    <li><a href="javascript:void;">제품구성</a></li>
                                    <li><a href="javascript:void;">디테일</a></li>
                                </ul>
                                <ul className='list_emotion_item'>
                                    <li>
                                        <a href="">
                                            <span>단정</span>
                                            <img src="/assets/img/showroom/thumb1.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>하객룩</span>
                                            <img src="/assets/img/showroom/thumb2.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>트렌치</span>
                                            <img src="/assets/img/showroom/thumb3.png" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <span>솔리드</span>
                                            <img src="/assets/img/showroom/thumb4.png" alt="" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className="footer_inner">
                        <ul className='footer_list'>
                            <li>
                                <a href="javascript:void;">
                                    <span className='ico _monitor' />
                                    <p>Monitoring</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void;">
                                    <span className='ico _analysis' />
                                    <p>Analysis</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void;">
                                    <span className='ico _account' />
                                    <p>My account</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div> 
        )
    }
}

export default Product;