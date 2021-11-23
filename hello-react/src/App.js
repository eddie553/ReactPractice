// 3.1 클래스형 컴포넌트
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}

export default App;
