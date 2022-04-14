import React, { Component } from 'react';

// 클래스형 컴포넌트
class Counter extends Component {
  // state 변수 정의
  state = {
    number: 0
  };

  // 가격 1 증가 메소드
  handleIncrease = () => {
    // state를 업데이트하기 위해선 setState 메소드를 통해 바꾸어야 한다.
    this.setState({
      number: this.state.number + 1
    });
  };

  // 가격 1 감소 메소드
  handleDecrease = () => {
    // state를 업데이트하기 위해선 setState 메소드를 통해 바꾸어야 한다.
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>카운터</h1>
        <p>값: {this.state.number}</p> {/*state를 통해 jsx에 변수로 넣기*/}
        <button onClick={this.handleIncrease}>+</button>{' '}
        {/*onClick이벤트 리스너에 handleIncrease메소드를 등록*/}
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter; // 외부로 임포트 가능하게 함
