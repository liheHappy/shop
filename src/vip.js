import React, { Component } from 'react';
import { NavBar, Icon, Button, Flex, WingBlank,List, Checkbox} from 'antd-mobile';
import 'antd/dist/antd.css';
import "./css/vip.css";
 
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
 
class Vip extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return (
    	<div className="Vip_main">
    	<NavBar>会员注册</NavBar>
    	<form className="register">
    		<p className="phone">
    		注册手机号：<span>17560305210</span> 
    		</p>

    		<div className="register_box">
				<div className="Rg_txt">
		    		 <input type="tel" id="Input_s" placeholder="请输入手机验证码"/>
		    		 <img src="../Images/cleartext.png" className="Close_a"/>
		    		 <Button type="primary" inline style={{ marginRight: '0.08rem' }} id="Pull_right">获取验证码</Button>
		    		 <input type="password" id="Input_psd" placeholder="请设置6~20位登录密码"/>
		    		 <img src="../Images/eye.png" className="Eye_a"/>
		    		 <div className="register_txt">
		    		 <CheckboxItem><span>我已阅读并接受<a href="###"> 分红全球购注册协议</a></span></CheckboxItem>
					 <Button className="btn" type="primary">注册</Button>
		    		 </div>
	    		</div>
    		</div>
    		
		
    	</form>
    	</div>
    );
    }
}
export default Vip;
