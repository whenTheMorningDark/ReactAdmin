import React, { Component } from 'react';
import { Card, Button } from "antd";
import "./ui.less";
// 5-1
class Buttons extends Component {
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">Imocc</Button>
                    <Button type="primary">Imocc</Button>
                    <Button type="primary" disabled>Imocc</Button>
                </Card>
            </div>
        );
    }
}

export default Buttons;