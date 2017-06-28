import React, { Component } from 'react';
import { Row, Col,Icon } from 'antd';
import { Router,Route,hashHistory,IndexRoute,browserHistory,Link } from 'react-router';
import 'antd/dist/antd.css';
import './css/find.css';

class Find extends Component {
    constructor(props) {
        super(props);   
	    this.state={
	        data:"",
	    }
	}

    render() {
        return (
        	<div id="find">
        		<Header/>
        		<List/>
        	</div>
        );
    }
}

class Header extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<header>
				<Row>
				  <Col span={20} push={11}>发现</Col>
				  <Col span={4} pull={20}><Link to='/'><Icon type="left" /></Link></Col>
				</Row>
			</header>
		)
	}
}
class List extends Component {
	constructor(props){
		super(props);
		this.state={
            result1:[],
            result2:[],
            result3:[],
            result4:[],
            result5:[],
            scimages:[],
            scname1:[],
            scname2:[],
            scname3:[],
            scname4:[],
            scname5:[]
        }
	}
	componentDidMount(){
		fetch('./json/find.json').then((response)=>{
			return response.json();
		}).then((data)=>{
			var res = data.result;
            this.setState({
                result1:res[0].subclass,
                result2:res[1].subclass,
                result3:res[2].subclass,
                result4:res[3].subclass,
                result5:res[4].subclass,
                scimages:res[0].sc_images,
                scname1:res[0].sc_name,
                scname2:res[1].sc_name,
                scname3:res[2].sc_name,
                scname4:res[3].sc_name,
                scname5:res[4].sc_name,
            })
			//console.log(res[0].subclass)
			//console.log(res[0].sc_images)
		})
	}
	render(){
		return(
			<div className="list">
				<img src={this.state.scimages} />
			    <ul>
                    <h1>{this.state.scname1}</h1>
                    {
                        this.state.result1.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.sc_pic} />
                                    <span>{item.sc_name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
			    <ul>
			    	<h1>{this.state.scname2}</h1>
                    {
                        this.state.result2.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.sc_pic} />
                                	<span>{item.sc_name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
			    <ul>
			    	<h1>{this.state.scname3}</h1>
                    {
                        this.state.result3.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.sc_pic} />
                                	<span>{item.sc_name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
			    <ul>
			    	<h1>{this.state.scname4}</h1>
                    {
                        this.state.result4.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.sc_pic} />
                                	<span>{item.sc_name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
			    <ul>
			    	<h1>{this.state.scname5}</h1>
                    {
                        this.state.result5.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.sc_pic} />
                                	<span>{item.sc_name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
			</div>
		)
	}
}


















export default Find;
