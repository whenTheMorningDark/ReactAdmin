import React, { Component } from 'react';
import { Select, InputNumber, Card, Form, Input, Button, Switch, Radio } from 'antd';
class Register extends Component {
  handSubmit = () => {
    // console.log(1);
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo);
  }
  onChange = (checked) => {
    // console.log(checked)
    this.setState({
      isShowSelect: !checked
    })
  }
  state = {
    isShowSelect: true
  }
  render() {
    const { getFieldDecorator } = this.props.form
    const { Option } = Select;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };

    return (
      <div>
        <Card>
          <Form layout="horizontal">
            <Form.Item label="Name" {...formItemLayout}>
              {
                getFieldDecorator("username", {
                  initialValue: "",
                  rules: [
                    { required: true, message: "用户名不能为空!" },
                    {
                      min: 5, max: 10, message: "长度不在范围内!"
                    }
                  ]
                })(<Input placeholder="请输入用户名"></Input>)
              }
            </Form.Item>

            <Form.Item label="性别" {...formItemLayout}>
              {
                getFieldDecorator("sex", {
                  initialValue: "1"
                })(
                  <Radio.Group>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </Radio.Group>
                )
              }
            </Form.Item>
            <Form.Item label="年龄" {...formItemLayout}>
              {
                getFieldDecorator("age", {
                  initialValue: 18
                })(<InputNumber></InputNumber>)
              }
            </Form.Item>
            <Form.Item label="品种" {...formItemLayout}>
              {
                getFieldDecorator("type", {
                  initialValue: "2"
                })(
                  <Select disabled={this.state.isShowSelect}>
                    <Option value="1">咖啡</Option>
                    <Option value="2">绿茶</Option>
                    <Option value="3">奶茶</Option>
                  </Select>)
              }
            </Form.Item>

            <Form.Item label="开关" {...formItemLayout}>
              {
                getFieldDecorator("close", {
                  initialValue: !this.state.isShowSelect
                })(
                  <Switch onChange={this.onChange}></Switch>
                )
              }
            </Form.Item>

            <Form.Item wrapperCol={{ span: 4, offset: 4 }}>
              <Button type="primary" onClick={this.handSubmit}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
export default Form.create()(Register);
