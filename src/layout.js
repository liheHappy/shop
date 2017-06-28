import React, { Component } from 'react';
import { Tabs,Icon } from 'antd';
import 'antd/dist/antd.css';
import './css/layout.css';


const TabPane = Tabs.TabPane;


class Layout extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
        	<div>
                <div id="layoutChild">
                    {this.props.children}
                </div>
                <div id="mainTab">
                    <Tabs defaultActiveKey="5">
                        <TabPane tab={<a href="#/home"><span><Icon type="home" />首页</span></a>} key="5"></TabPane>
                        <TabPane tab={<a href="#/sort"><span><Icon type="bars" />分类</span></a>} key="2"></TabPane>
                        <TabPane tab={<a href="#/find"><span><Icon type="compass" />发现</span></a>} key="3"></TabPane>
                        <TabPane tab={<a href="#/cart"><span><Icon type="shopping-cart" />购物袋</span></a>} key="4"></TabPane>
                        <TabPane tab={<a href="#/my"><span><Icon type="user" />我的</span></a>} key="1"></TabPane>
                    </Tabs>
                </div>
        	</div>
        );
    }
}

export default Layout;
