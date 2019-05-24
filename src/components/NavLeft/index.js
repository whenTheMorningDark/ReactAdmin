import React, { Component } from 'react';
import MenuConfig from "../../config/menuConfig";
import { Menu, Icon } from 'antd';
import "./index.less";
// 3-5
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class NavLeft extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    <SubMenu key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }>
                        <Menu.Item key="1">1</Menu.Item>
                        <Menu.Item key="2">2</Menu.Item>
                        <Menu.Item key="3">3</Menu.Item>
                        <Menu.Item key="4">4</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}

export default NavLeft;
