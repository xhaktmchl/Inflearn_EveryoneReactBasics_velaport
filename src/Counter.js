import React, { Component } from 'react';

// 클래스형 컴포넌트
class Counter extends Component {
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <p>값: 0</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default Counter; // 외부로 임포트 가능하게 함
