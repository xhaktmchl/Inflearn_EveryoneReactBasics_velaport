import React, { Component } from 'react';

class MyComponent extends Component {
  // state 객체 정의
  state = {
    value: 2
  };

  // 컴포넌트 데이터가 업데이트 될 때 실행되는 lifecycle api
  // props에서 온 value 값이 바뀌면 state.value에 반영
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.value !== prevState.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  // 특정 조건에 렌더링 유무를 결정하는 lifecycle api
  shouldComponentUpdate(nextProps, prevState) {
    if (nextProps.value === 10) {
      // 받아오는 props 값이 10이 될 때 렌더링 안 됨
      return false;
    }
    return true; // 나머지는 렌더링 함
  }

  // 커포넌트 업데이트 이후 실행되는 lifecycle api
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('props value값이 바뀌었다. : ', this.props.value);
    }
  }

  // 해당 컴포넌트가 사라질 때 실행되는 lifecycle api
  componentWillUnmount() {
    console.log('good bye');
  }

  render() {
    return (
      <div>
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
