import React, { Component } from 'react';
import { Checkbox, Card, Form, Input, Button, message } from 'antd';



class Login extends Component {
  handSubmit = () => {
    let userInfo = this.props.form.getFieldsValue();
    console.log(userInfo);
    this.props.form.validateFields((err, values) => {
      // console.log(err);
      if (!err) {
        message.success(`${userInfo.username}和${userInfo.password}`)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Card title="内联表单">
          <Form layout="inline">
            <Form.Item>
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
            <Form.Item>
              {
                getFieldDecorator("password", {
                  initialValue: "",
                  rules: [
                    { required: true, message: "密码不能为空!" }
                  ]
                })(<Input placeholder="请输入密码" type="password"></Input>)
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: false
                })(<Checkbox>记住密码</Checkbox>)
              }
            </Form.Item>
            <Form.Item>
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
export default Form.create()(Login);
