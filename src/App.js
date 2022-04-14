import React, { Component } from 'react'; //
import './App.css';
import MyName from './MyName';
import Counter from './Counter'; // 카운터 컴포넌트 임포트

/*
기본적으로 클래스에 컴포넌트를 상속받아 컴폰넌트를 구현한다.
*/
class App extends Component {
  render() {
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
      </div>
    );
  }
}

export default App;
