import React, { Component } from 'react';
import { Card, Button, Modal } from "antd";

export default class Modals extends Component {
  state = {
    showModal: false
  }
  handleOpen = (type) => {
    // this.setState({
    //   showModal: type
    // })
    Modal.confirm({
      title: "确认",
      onOk() {
        console.log("ok");
      },
      onCancel() {
        console.log(123);
      }
    })
  }
  render() {
    return (
      <div>
        <Card title="基础弹框">
          <Button type="primary" onClick={() => this.handleOpen(true)}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen(true)}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen(true)}>Open</Button>
          <Button type="primary" onClick={() => this.handleOpen(true)}>Open</Button>
        </Card>
        <Modal title="React" visible={this.state.showModal} onCancel={() => { this.setState({ showModal: false }) }}>
          <p>modal测试</p>
        </Modal>
      </div>
    )
  }
}