import React, { Component } from 'react';
import { Row, Col,Icon,Input, AutoComplete } from 'antd';
import { Router,Route,hashHistory,IndexRoute,browserHistory,Link } from 'react-router';
import 'antd/dist/antd.css';
import './css/sorted.css';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:""
        }
    }
    render() {
        var id=this.props.params.id;
        var area=this.props.params.area;
        var title=this.props.params.name;
        return (
        	<div id="sorted">
                <Header name3={title}/>
        		<List name1={id} name2={area}/>
        	</div>
        );
    }
}

//头部子组件
class Header extends Component {
    constructor(props) {
        super(props);
    }
	handlegoBack(){
		window.history.back();
	}
    render() {
    	
        return (
            <header>
				<Row>
				  <Col span={20} push={10}>{this.props.name3}</Col>
				  <Col span={4} pull={20}><Icon type="left" onClick={this.handlegoBack} /></Col>
				</Row>
            </header>
        );
    }
}


//列表组件
class List extends Component {
	
    constructor(props) {
        super(props);
        this.state={
            dataSea:[],
            dataChina:[]
        }
        
    }
   
    componentDidMount(){
        fetch('/api/index.php?act=common_goods&op=get_goods_class&pid='+this.props.name1+'&area='+this.props.name2+'&flag=wap').then((response)=>{
          return response.json();
        }).then((data)=>{
            var res=data.result;
            this.setState({
            	dataSea:res
            })
        })
        
    }
    
   
    render() {
    	
        return (
            <div className="list">
                <ul>
                    {
                        this.state.dataSea.map((item,index)=>{
                            return (
                                <li key={index}>
                                    <img src={item.gc_img} />
                                    <span>{item.gc_name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}




export default Sort;
