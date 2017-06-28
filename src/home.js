import React, { Component } from 'react';
import { Tabs,Row, Col,Icon,Input, AutoComplete } from 'antd';
import './css/home.css';
import Homemain from './components/homemain.js'
import Allgoods from './components/allgoods.js'
import Nation from './components/nation.js'

const TabPane = Tabs.TabPane;

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div id="home">
                <Header/>
                <Tab/>
        	</div>
        );
    }
}

//头部子组件
class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <Row>
                    <Col span={20} push={4}>
                        <div className="certain-category-search-wrapper" style={{ width: 250 }}>
                            <AutoComplete
                                className="certain-category-search"
                                size="large"
                                style={{ width: '100%' }}
                                value="分红全球购 精彩无限"
                                optionLabelProp="value"
                            >
                                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                            </AutoComplete>
                        </div>
                    </Col>
                    <Col span={4} pull={20}><Icon type="bars" /></Col>
                </Row>
            </header>
        );
    }
}

class Tab extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabs>
                <TabPane tab="首页" key="1">
                   <Homemain/>
                </TabPane>
                <TabPane tab="全球优品" key="2">
                	<Allgoods/>
                </TabPane>
                <TabPane tab="国家馆" key="3">
                	<Nation/>
                </TabPane>
                <TabPane tab="美妆护肤" key="4">Content of tab 3</TabPane>
                <TabPane tab="美食酒水" key="5">Content of tab 3</TabPane>
                <TabPane tab="母婴用品" key="6">Content of tab 3</TabPane>
                <TabPane tab="瘦身保健" key="7">Content of tab 3</TabPane>
                <TabPane tab="家具个护" key="8">Content of tab 3</TabPane>
                <TabPane tab="品牌特辑" key="9">Content of tab 3</TabPane>
            </Tabs>
        );
    }
}



export default Home;
