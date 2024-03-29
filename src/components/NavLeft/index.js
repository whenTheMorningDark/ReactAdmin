import React, { Component } from 'react';
import MenuConfig from "../../config/menuConfig";
import { Menu } from 'antd';
import "./index.less";
import { NavLink } from "react-router-dom";
// 4-2
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
    componentWillMount() { // 加载数据
        const menuTreeNode = this.renderMenu(MenuConfig);
        console.log(menuTreeNode);
        this.setState({
            menuTreeNode
        })
    }
    // 菜单渲染
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>
                    {item.title}
                </NavLink>
            </Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {/* <SubMenu key="sub1"
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
                    </SubMenu> */}
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;
