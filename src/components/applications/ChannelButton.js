import React, { useState } from 'react';
import { Button } from 'reactstrap';

const ChannelButton = () => {
    const [rSelected, setRSelected] = useState(null);
    const [checkSelected, setCheckSelected] = useState([]);
    const [selectArray, setSelectArray] = useState([]);


    const onCheckboxBtnClick = (id, name) => {
        const checkFunc = selectArray.findIndex((item)=> item.id === id);

        if (checkFunc < 0) {
            selectArray.push({id, name});
            checkSelected.push(id);
        } else {
            selectArray.splice(checkFunc , 1);
            checkSelected.splice(checkFunc , id);
        }

        setCheckSelected([...checkSelected]);
        setSelectArray([...selectArray]);
      }
      
    const tagRemoveBtn = (id) =>{
        const checkFunc = selectArray.findIndex((item)=> item.id === id);
        
        selectArray.splice(checkFunc , 1);
        checkSelected.splice(checkFunc , id);

        setSelectArray([...selectArray]);
    }

    const socialDataTitle = [ 'Naver', 'Daum', 'SNS', 'Community']

    const Naverdata =[
        {id: 1, name: 'Naver_News',},
        {id: 2, name: 'Naver_Blog',},
        {id: 3, name: 'Naver_Cafe',},
        {id: 4, name: 'Naver_Kin',},
        {id: 5, name: 'Naver_Post',},
    ]

    const daumData = [
        {id: 6, name: 'Daum_News',},
        {id: 7, name: 'Daum_Cafe',},
    ]

    const snsData = [
        {id: 8, name: 'Instagram',},
        {id: 9, name: 'Facebook',},
        {id: 10, name: 'Youtube',},
    ]

    const commData = [
        {id: 11, name: 'Ppomppu',},
        {id: 12, name: 'Todayhumor',},
        {id: 13, name: 'Clien',},
        {id: 14, name: 'Mlbpark',},
        {id: 15, name: '82cook',},
    ]    

    // const onlineShopData = [
    //     {id: 1, name: 'Naver_News',},+
    //     {id:2, Naver,},
    //     {id:3, Naver,},
    //     {id:4, Naver,},
    //     {id:5, Naver,},
    //     {id:6, Naver,},
    //     {id:7, Naver,},
    //     {id: 8, Naver,},
    // ]

    // const googleAnalData = [
    //     {id:1, name: 'Google Analytics'},
    // ]
    
    const socialData = [ Naverdata, daumData, snsData, commData ]
    const tabTitle = ['Social', 'Online Shopping', 'Google Analytics']
   

  return (
    <>
      <div>
      {tabTitle.map((title, idx) => {
          return(
            <Button key color="primary" onClick={() => setRSelected(idx)} active={rSelected === idx}>{title}</Button>
          )
      })}
      </div>

      <div className='channel_box'>
        <table className='tbl_social'>
            {socialData.map((list, idx) => {
                return(
                    <tr key>
                        <th>{socialDataTitle[idx]}</th>
                        <td>
                            {list.map(item => {
                                return (
                                    <Button color="primary" key={item.id} onClick={() => onCheckboxBtnClick(item.id, item.name)} active={checkSelected.includes(item.id)}>{item.name}</Button>
                                )
                            })}
                        </td>
                    </tr>
                )
            })}
        </table>
        <ul>
            {selectArray.map(item =>{
                return(
                    <li key>{item.name} <Button close onClick={() => tagRemoveBtn(item.id)} /></li>
                )
            })}
        </ul>
      </div>

      
      
    </>
  );


}

export default ChannelButton;