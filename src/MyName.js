import React, { Component } from 'react';

class MyName extends Component {
  // 디폴트 값을 지정 해놓기
  static defaultProps = {
    name: '디폴트 이름'
  };

  render() {
    return <div>안녕하세요 제 이름은 {this.props.name}입니다.</div>;
  }
}

export default MyName; // export 해줘야 외부에서 이 파일 참조 가능
