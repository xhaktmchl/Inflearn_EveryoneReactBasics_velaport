import React, { Component } from 'react'; //
import './App.css';
import MyName from './MyName';
import Counter from './Counter'; // 카운터 컴포넌트 임포트
import MyComponent from './MyComponent'; //  컴포넌트 임포트

/*
기본적으로 클래스에 컴포넌트를 상속받아 컴폰넌트를 구현한다.
*/
class App extends Component {
  // 생성자
  constructor(props) {
    super(props);
    console.log(1);
  }

  // state 객체
  state = {
    value: 3,
    error: false
  };

  // 1씩 증가하는 메소드
  handleClick = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  // 자식 컴포넌트에서 에러가 났을 때 실행되는 예외처리 lifecycle api
  componentDidCatch(error, info) {
    // 에러가 났을 때 서버로 오류내용 날리기
    console.log(error);
    console.log(info);

    this.setState({
      error: true
    });
  }

  render() {
    // 에러시 예외처리 화면 렌더링
    if (this.state.error) {
      return <div>에러가 났습니다!</div>;
    }
    // css 파일의 클래스 적용 , className=으로 지정
    return (
      <div>
        {/*css 파일의 클래스 적용 , className=으로 지정*/}
        <div className="App"></div>
        <div>
          {/*JSX 내부에서 주석 적용하기*/}
          안녕하세요.
          {/*props르 이용해 정보 전달하기*/}
          <MyName name="리액트" />
        </div>

        {/*카운터 컴포넌트*/}
        <div>
          <Counter />
        </div>

        <div>
          안녕하세요 리액트
          <MyComponent value={this.state.value} />{' '}
          {/*props는 중괄호를 통해서 데이터 전달*/}
          <button onClick={this.handleClick}>click me</button>
        </div>
      </div>
    );
  }
}

export default App;
