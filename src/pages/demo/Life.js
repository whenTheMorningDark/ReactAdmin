import React, {
  Component
} from 'react';
import Child from "./Child"
import "./index.less"
import { Button } from "antd"
export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div className="content">
        <p>react生命周期</p>
        <Button onClick={this.handAdd}>点击一下</Button>
        <Button type="dashed">Dashed</Button>
        <p>{this.state.count}</p>
        <Child name={this.state.count}></Child>
      </div>
    );
  }
}