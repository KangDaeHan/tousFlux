/* eslint-disable react/no-array-index-key */
import React from 'react';

const relationTxt = [
  '핏',
  '멋짐',
  '다양성',
  '마무리감',
  '루즈',
];

const ActiveKeyword = () => {
  return (
    <>
      <div className="active-keyword-area">
        {relationTxt.map((item, index) => {
          return (
            <div className="item" key={index}>
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ActiveKeyword;
