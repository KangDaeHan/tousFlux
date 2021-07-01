/* eslint-disable react/no-array-index-key */
import React from 'react';

const thumbs = [
  { number: '1' , src: '/assets/img/showroom/thumb1.png' },
  { number: '2' , src: '/assets/img/showroom/thumb2.png' },
  { number: '3' , src: '/assets/img/showroom/thumb3.png' },
  { number: '4' , src: '/assets/img/showroom/thumb4.png' },
  { number: '5' , src: '/assets/img/showroom/thumb3.png' },
  { number: '6' , src: '/assets/img/showroom/thumb2.png' },
  { number: '7' , src: '/assets/img/showroom/thumb1.png' },
  { number: '8' , src: '/assets/img/showroom/thumb4.png' },
  { number: '9' , src: '/assets/img/showroom/thumb2.png' },
  { number: '10' , src: '/assets/img/showroom/thumb3.png' },
  { number: '11' , src: '/assets/img/showroom/thumb4.png' },
  { number: '12' , src: '/assets/img/showroom/thumb2.png' },
  { number: '13' , src: '/assets/img/showroom/thumb1.png' },
  { number: '14' , src: '/assets/img/showroom/thumb4.png' },
];

const ShowRoom = () => {

  return (
    <>
      <ul>
        {thumbs.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.number}</span>
              <img
                className="img-fluid border-radius"
                src={item.src}
                alt="thumbnail"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ShowRoom;
