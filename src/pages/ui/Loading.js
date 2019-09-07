import React, { Component } from 'react';
import { Card, Spin, Icon, Alert } from "antd";

export default class Loading extends Component {
  render() {
    const icon = <Icon type="loading" />;
    return (
      <div>
        <Card title="Spin">
          <Spin size="small" />
          <Spin size="large" />
          <Spin indicator={icon} />
        </Card>
        <Card title="内容遮挡">
          <Alert message="react" description="我是描述" type="info">

          </Alert>
          <Alert message="react" description="我是描述" type="warning">

          </Alert>
          <Spin tip="加载中...">
            <Alert message="react" description="我是描述" type="warning">

            </Alert>
          </Spin>
        </Card>
      </div>
    );
  }
}
