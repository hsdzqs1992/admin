import React, { Component } from 'react';
import './App.css';
import { DatePicker,Button } from "antd";
import 'antd/dist/antd.css';
class App extends Component {
  render() {
    return (
      <div className="App">
       <DatePicker/>
       <Button  type="primary" disabled="true">提交</Button>
      </div>
    );
  }
}

export default App;
