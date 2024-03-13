import { Component } from 'react';
import PropTypes from 'prop-types';

class PropsEx extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <div>{text}</div>
        <button onClick={valid}>버튼</button>
      </div>
    );
  }
}

PropsEx.defaultProps = {
  text: '이건 기본 text props입니다',
};

PropsEx.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PropsEx;
