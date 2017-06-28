import React, { Component } from 'react';
import {Icon, Row, Col,Menu } from 'antd';
import 'antd/dist/antd.css';
import "./css/my.css";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class My extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
        	<div id="My_Bg">
                <Icon type="left" id="icon"/>
                <div id="Login">
                    <Icon type="user-add" />
                    <p>登录/注册</p>
                </div>
                <h4 id="person_name"></h4>
                 
                <div className="gutter-example">
                    <Row gutter={16}>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <p>0</p>
                            <p>收藏宝贝</p>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <p>0</p>
                            <p>收藏店铺</p>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <p>0</p>
                            <p>关注品牌</p>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <p><Icon type="clock-circle-o" /></p>
                            <p>我的足迹</p>
                        </div>
                      </Col>
                    </Row>
                </div> 
        	</div>
            <Row id="Look">
              <Col span={8} id="Dan_txt">我的订单</Col>
              <Col span={8} offset={8}>查看全部订单<Icon type="right" /></Col>
            </Row>


            <div className="order-nav">
                    <Row gutter={16}>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <p><Icon type="wallet" /></p>
                            <p>收藏宝贝</p>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <p><Icon type="rocket" /></p>
                            <p>待发货</p>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <p><Icon type="exception" /></p>
                            <p>待评价</p>
                        </div>
                      </Col>
                      <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                        <p><Icon type="smile-o" /></p>
                            <p>申请售后</p>
                        </div>
                      </Col>
                    </Row>
                </div> 

                <div className="blow"></div>

                <div className="fh-link-bar">
                <a className="dis-b">
                <span>云商店铺</span> 
                <Icon type="right" /> 
                </a>
                </div>

                <div className="fh-link-bar">
                <a className="dis-b">
                <span>收货地址管理</span> 
                <Icon type="right" /> 
                </a>
                </div>

                <div className="fh-link-bar">
                <a className="dis-b">
                <span>设置</span> 
                <Icon type="right" /> 
                </a>
                </div>

                <div className="fh-link-bar">
                <a className="dis-b">
                <span>意见反馈</span> 
                <Icon type="right" /> 
                </a>
                </div>

                 <div className="fh-link-bar">
                <a className="dis-b">
                <span>客服电话</span> 
                <span> <Icon type="right" /> </span>
                </a>
                </div>

            </div>
        );
    }
}

export default My;
