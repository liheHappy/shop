import React, { Component } from 'react';
import { Button, Flex, WingBlank } from 'antd';
import 'antd/dist/antd.css';
import "./css/login.css";
 
 
class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="login_main">
            <div className="login_logo">
                <img src="logo.png" className="logo"/> 
                <div className="percent">
                    <input type="text" placeholder="请输入手机号/用户名"/>
                    <Button className="btn" type="primary">登录/注册</Button>
                </div>
                 <img src="close.png" className="close"/> 
            </div>  

            </div>
            
        );
    }
}

export default Login;
