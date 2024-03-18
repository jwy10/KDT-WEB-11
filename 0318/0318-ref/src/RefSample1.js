import { Component } from 'react';

class RefSample1 extends Component {
  handleFocus = () => {
    console.log('this', this);
    console.log('this.myInput', this.myInput);
    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 포커스 처리</p>
        <input
          type="text"
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample1;
