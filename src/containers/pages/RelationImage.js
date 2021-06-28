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
      '/assets/img/showroom/thumb1.png',
      '/assets/img/showroom/thumb2.png',
      '/assets/img/showroom/thumb3.png',
      '/assets/img/showroom/thumb4.png',
      '/assets/img/showroom/thumb3.png',
    ];

    return (
      <>
        {thumbs.map((item) => {
          return (
            <div key={item} >
              <p>test</p>
              <img
                className="img-fluid border-radius"
                src={item}
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
