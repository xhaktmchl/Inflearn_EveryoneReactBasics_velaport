import React, { Component } from 'react'; //

/*
기본적으로 클래스에 컴포넌트를 상속받아 컴폰넌트를 구현한다.
*/
class App extends Component {
  render() {
    // css 스타일 정의
    const style = {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '36px'
    };

    return (
      <div>
        <p style={style}>css 스타일 변수로 적용</p>
      </div>
    );
  }
}

export default App;
