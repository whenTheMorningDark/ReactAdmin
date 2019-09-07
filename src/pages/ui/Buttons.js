import React, { Component } from 'react';
import { Card, Button, Radio } from "antd";
import "./ui.less";
// 5-1
class Buttons extends Component {
  state = {
    size: "default"
  }
  handleCloseLoading = () => {
    console.log("asd");
  }
  handleChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }
  render() {
    // 5-2
    return (
      <div>
        <Card title="基础按钮">
          <Button type="primary" onClick={this.handleCloseLoading}>test</Button>
          <Button type="primary">Imocc</Button>
          <Button type="primary" disabled>Imocc</Button>
        </Card>
        <Card title="按钮组">
          <Button.Group>
            <Button icon="left" type="primary">返回</Button>
            <Button icon="right" type="primary">前进</Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group>
            <Radio value="small" onChange={this.handleChange}>小</Radio>
            <Radio value="default" onChange={this.handleChange}>中</Radio>
            <Radio value="large" onChange={this.handleChange}>大</Radio>
          </Radio.Group>
          <Button.Group>
            <Button icon="left" type="primary" size={this.state.size}>返回</Button>
            <Button icon="right" type="primary" size={this.state.size}>前进</Button>
          </Button.Group>
        </Card>
      </div>
    );
  }
}

export default Buttons;