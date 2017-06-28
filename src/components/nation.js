import React, { Component } from 'react';
import { Icon } from 'antd';
import './../css/nation.css';


class Nation extends Component {
    constructor(props) {
        super(props);
        this.state={
        	slide:[],
        	two:[],
        	three:[]
        }
    }

    componentDidMount(){
    	fetch('./json/nation.json').then((response)=>{
    		return response.json();
    	}).then((data)=>{
            var res=data.result;
    		this.setState({
    			slide:res.channel_slides,	
    			two:res.channel_classes,
    			three:res.hot_activities.list
    		})
    	})

    }

    render() {
        return (
        	<div id="nation">
        		<ul className="swipe">
            		{this.state.slide.map((item,index)=>{
            			return (<li key={index}><img src={item.image_url} /></li>)
            		})}
            	</ul>
            	<Listtwo toListtwo={this.state.two}/>
                <Listthree toListthree={this.state.three}/>
            	
        	</div>
        );
    }
}

//列表二
class Listtwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listtwo">
                <ul>
                	{
                		this.props.toListtwo.map((item,index)=>{
                			return (<li key={index} ><img src={item.class_pic} /></li>)
                		})
                	}
                </ul>
            </div>
        );
    }
}

//分红精选部分
class Listthree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialHeight: 200,
        }
    }
    render() {
        return (
            <div className="listthree">
            	<h3>分红精选</h3>
            	{
            		this.props.toListthree.map((item,index)=>{
            			return (
            				<div key={index}>
            					<img src={item.activity_banner}/>
            					<ul className="list">
	            					傻逼吧,另一个页面就可以
            					</ul>
            				</div>
            			)
            		})
            	}
            </div>
        );
    }
}


export default Nation;