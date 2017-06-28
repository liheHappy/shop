import React, { Component } from 'react';
import { NavBar, Icon,Tabs, WhiteSpace } from 'antd-mobile';
import 'antd/dist/antd.css';
import "./css/history.css";
 
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
 
class History extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return (
    	<div className="history_main">
    	   <NavBar 
              mode="light"
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[ 
                <Icon key="1" type="ellipsis" />,
              ]}
            >浏览历史</NavBar>

        

        <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
              <TabPane tab="收藏商品" key="1">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                  收藏商品
                </div>
              </TabPane>
              <TabPane tab="收藏店铺" key="2">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                  收藏店铺
                </div>
              </TabPane>
              <TabPane tab="关注品牌" key="3">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                  关注品牌
                </div>
              </TabPane>
               <TabPane tab="我的足迹" key="4">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                  我的足迹
                </div>
              </TabPane>
            </Tabs>
            <WhiteSpace />
    	</div>
    );
    }
}
export default History;
