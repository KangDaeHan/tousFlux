/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

class RelationImage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    // const { 상태조회변수 } = this.state;

    const thumbs = [
      { img : '/assets/img/showroom/thumb1.png' , clickColor : '#2a5894'},
      { img : '/assets/img/showroom/thumb2.png' , clickColor : '#f9a21b'},
      { img : '/assets/img/showroom/thumb3.png' , clickColor : '#00e396'},
      { img : '/assets/img/showroom/thumb4.png' , clickColor : '#f9a21b'},
      { img : '/assets/img/showroom/thumb3.png' , clickColor : '#2a5894'},
    ];

    return (
      <>
        {thumbs.map((item, index) => {
          return (
            <div key={index} >
              <p style={{ color: item.clickColor }}>test</p>
              <img
                className="img-fluid border-radius"
                src={item.img}
                alt="thumbnail"
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default RelationImage;
