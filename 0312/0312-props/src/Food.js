// import { Component } from 'react';
// import PropTypes from 'prop-types';

const Food = (props) => {
  const { food } = props;
  return (
    <div>
      내가 가장 좋아하는 음식은 <span className="food">{food}</span>
      입니다
    </div>
  );
};

Food.defaultProps = {
  food: '햄버거',
};

export default Food;
