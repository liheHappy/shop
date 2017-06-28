import React, { Component } from 'react';
import { Row, Col,Icon,Input, AutoComplete } from 'antd';
import { Router,Route,hashHistory,IndexRoute,browserHistory,Link } from 'react-router';
import 'antd/dist/antd.css';
import './css/sort.css';


class Sort extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:"",
        }
    }
    render() {
        return (
        	<div id="sort">
                <Header/>
        		<List/>
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
                    <Col span={4} pull={20}><Link to='/'><Icon type="left" /></Link></Col>
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
        fetch('./json/sort.json').then((response)=>{
          return response.json();
        }).then((data)=>{
            var res=data.result;
            this.setState({
                dataSea:res[1],
                dataChina:res[0]
            })
            //console.log(res[0][0].gc_id)
        })
        
    }
    
   
    render() {
        return (
            <div className="list">
                <h3>海外商品分类</h3>
                <ul>
                    {
                        this.state.dataSea.map((item,index)=>{
                            return (
                                <li key={index}>
                                	<Link to={`/sorted/${item.gc_id}/${item.gc_area}/${item.gc_name}`}>
                                    	<img src={item.gc_img} />
                                    	<span>{item.gc_name}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <h3>国内商品分类</h3>
                <ul>
                    {
                        this.state.dataChina.map((item,index)=>{
                            return (
                                <li key={index}>
                                	<Link to={`/sorted/${item.gc_id}/${item.gc_area}/${item.gc_name}`}>
                                    	<img src={item.gc_img} />
                                    	<span>{item.gc_name}</span>
                                    </Link>
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
