/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */

import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination'

// install Swiper modules
SwiperCore.use([Pagination]);

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuActiveItem: 1,
            num: 0,
            isActive: false
        }
    }

    handler = (e) => {
        e.preventDefault();
        const liel = document.querySelectorAll('.list_option li');
        for (let i = 0; i < liel.length; i += 1) {
            liel[i].classList.remove('active');
        }
        e.target.parentNode.classList.add('active');
        this.setState({
            num: e.target.getAttribute("data-index"),
        })
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState(({ isActive }) => ({ isActive: !isActive }));
        // this.setState({
        //     isActive: !this.state.isActive
        // })
    }


    render() {
        const statesItems = this.state;

        const menuList = [
            { id: 1, title: 'Basic' },
            { id: 2, title: 'Advenced' },
            { id: 3, title: 'Industry' },
            { id: 4, title: 'Social L' },
        ]

        const slideItems = [
            { id: 1, img: 'thumb1.png' },
            { id: 2, img: 'thumb2.png' },
            { id: 3, img: 'thumb3.png' },
            { id: 4, img: 'thumb4.png' },
        ]

        const tableItems = [
            { id: 1, element: '광택', elementDetail: '디테일', state: '높음', productCount: 1130, reviewCount: 439 },
            { id: 2, element: '무늬', elementDetail: '지칭', state: '보통', productCount: 1130, reviewCount: 439 },
            { id: 3, element: '셔츠', elementDetail: '지칭', state: '보통', productCount: 1130, reviewCount: 51 },
            { id: 4, element: '광택', elementDetail: '지칭', state: '낮음', productCount: 1043, reviewCount: 3 },
            { id: 5, element: '광택', elementDetail: '지칭', state: '보통', productCount: 1130, reviewCount: 439 },
            { id: 6, element: '광택', elementDetail: '지칭', state: '보통', productCount: 1130, reviewCount: 439 },
            { id: 7, element: '광택', elementDetail: '지칭', state: '보통', productCount: 1130, reviewCount: 439 },
            { id: 8, element: '광택', elementDetail: '지칭', state: '보통', productCount: 1130, reviewCount: 439 }
        ]

        const listOption = [
            { id: 1, title: '사이즈조절' },
            { id: 2, title: '타겟' },
            { id: 3, title: '마감처리' },
            { id: 4, title: '무늬' },
            { id: 5, title: '제품구성' },
            { id: 6, title: '디테일' }
        ]

        const emotionItem =
            [
                [
                    { id: 1, title: '단정', img: 'thumb1.png' },
                    { id: 2, title: '하객룩', img: 'thumb2.png' },
                    { id: 3, title: '트렌치', img: 'thumb3.png' },
                    { id: 4, title: '솔리드', img: 'thumb4.png' }
                ],
                [
                    { id: 1, title: '단정', img: 'thumb4.png' },
                    { id: 2, title: '하객룩', img: 'thumb3.png' },
                    { id: 3, title: '트렌치', img: 'thumb2.png' },
                    { id: 4, title: '솔리드', img: 'thumb1.png' }
                ],
                [
                    { id: 1, title: '단정', img: 'thumb1.png' },
                    { id: 2, title: '하객룩', img: 'thumb2.png' },
                    { id: 3, title: '트렌치', img: 'thumb3.png' },
                    { id: 4, title: '솔리드', img: 'thumb4.png' }
                ],
                [
                    { id: 1, title: '단정', img: 'thumb4.png' },
                    { id: 2, title: '하객룩', img: 'thumb3.png' },
                    { id: 3, title: '트렌치', img: 'thumb2.png' },
                    { id: 4, title: '솔리드', img: 'thumb1.png' }
                ],
                [
                    { id: 1, title: '단정', img: 'thumb1.png' },
                    { id: 2, title: '하객룩', img: 'thumb2.png' },
                    { id: 3, title: '트렌치', img: 'thumb3.png' },
                    { id: 4, title: '솔리드', img: 'thumb4.png' }
                ],
                [
                    { id: 1, title: '단정', img: 'thumb4.png' },
                    { id: 2, title: '하객룩', img: 'thumb3.png' },
                    { id: 3, title: '트렌치', img: 'thumb2.png' },
                    { id: 4, title: '솔리드', img: 'thumb1.png' }
                ],
            ]

        return (
            <div className='main wrap'>
                <header className='header'>
                    <div className='header_inner'>
                        <div className={statesItems.isActive === true ? 'wrap_title active' : 'wrap_title'}>
                            <span>원피스</span>
                            <div className='wrap_ipt'>
                                <input type="text" className="form-control" placeholder="키워드를 입력하세요." />
                            </div>
                        </div>
                        <div className='bx_right'>
                            <a href="#" className='btn_search' onClick={this.changeHandler}>
                                <span className='btn_nor_search' />
                            </a>
                            <a href="javscript:void(0);" className='btn_fileter'>
                                <span className='btn_nor_filter' />
                            </a>
                        </div>
                    </div>
                    <ul className='list_menu'>
                        {menuList.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    onClick={() => this.setState({ menuActiveItem: item.id })}
                                    className={`${statesItems.menuActiveItem === item.id ? 'active' : ""}`}
                                >
                                    <a href="#">{item.title}</a>
                                </li>
                            )
                        })}
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
                                        pagination={true}
                                    >
                                        {
                                            slideItems.map(item => {
                                                return (
                                                    <SwiperSlide
                                                        key={item.id}
                                                    >
                                                        <a href="#">
                                                            <img src={`/assets/img/showroom/${item.img}`} alt="" />
                                                        </a>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className='panel'>
                            <div className="panel_header">
                                <p className="panel_title t-c">
                                    Trend by Product
                                </p>
                                <p className='panel_desc mt20'>
                                    관련 한줄 설명
                                </p>
                            </div>
                            <div className="panel_cont">
                                <table className='tbl_basic'>
                                    <colgroup>
                                        <col style={{ width: '10%' }} />
                                        <col style={{ width: '40%' }} />
                                        <col style={{ width: '20%' }} />
                                        <col style={{ width: '30%' }} />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>요소</th>
                                            <th>포화상태</th>
                                            <th>상품수 (리뷰수)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableItems.map(item => {
                                            const productCountDot = item.productCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            const reviewCountDot = item.reviewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            return (
                                                <tr
                                                    key={item.id}
                                                >
                                                    <td>
                                                        {item.id}
                                                    </td>
                                                    <td>
                                                        {item.element}
                                                        <span className='btn_status'>
                                                            <span className='dot' />
                                                            {item.elementDetail}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {item.state}
                                                    </td>
                                                    <td>
                                                        {productCountDot} ({reviewCountDot})
                                                    </td>
                                                </tr>
                                            )
                                        })}
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
                                <p className='panel_desc t-c'>
                                    관련 한줄 설명
                                </p>
                                <ul className='list_option mt20'>
                                    {listOption.map((item, idx) => {
                                        return (
                                            <li key={item.id} onClick={this.handler}><a href="#" data-index={idx}>{item.title}</a></li>
                                        )
                                    })}
                                </ul>
                                <ul className='list_emotion_item mt20'>
                                    {emotionItem[`${statesItems.num}`].map(item => {
                                        return (
                                            <li key={item.id}>
                                                <a href="">
                                                    <span>{item.title}</span>
                                                    <img src={`/assets/img/showroom/${item.img}`} alt="" />
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='footer'>
                    <div className="footer_inner">
                        <ul className='footer_list'>
                            <li>
                                <a href="#">
                                    <span className='ico _monitor' />
                                    <p>Monitoring</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className='ico _analysis' />
                                    <p>Analysis</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
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