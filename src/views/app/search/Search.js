/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unused-state */
import React from 'react';
import MobileLogo from '../../../assets/logos/logo_mobile.png'

class Search extends React.Component {
    constructor(props) {
        super(props); // React.Component의 생성자 메소드를 먼저 실행
        this.state = {

        }
    }

    render() {
        return(
            <div className='search_wrap'>           
                <div className='logo_wrap'>
                    <img src={MobileLogo} alt="" />
                </div>
                <div className="search_ipt_area">
                    <input type="text" className='search_ipt' />
                </div>
                <div className='btn_wrap'>
                    <a href="#" className='btn_manual'>Manual download</a>
                </div>
            </div>
        )
    }
}

export default Search;