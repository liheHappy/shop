import React, { Component } from 'react';
import { Carousel, WhiteSpace, WingBlank,Button } from 'antd-mobile';
import './../css/allgoods.css'

class Allgoods extends Component {
    constructor(props) {
        super(props);
        this.state={
        	slide:[],
        	two:[],
        	one:[],
        	three1:[],
        	three2:[]
        }
        
    }
	componentDidMount(){
		fetch('./json/allgoods.json').then((response)=>{
    		return response.json();
    	}).then((data)=>{
            var res=data.result;
            var threeone=res.hot_goods.list.splice(0,3);
            var threetwo=res.hot_goods.list.splice(2);
            
            this.setState({
    			slide:res.channel_slides,
    			two:res.channel_classes,
    			one:res.hot_activities.list,
    			three1:threeone,
				three2:threetwo   			
    		})
    	})
    	
	}
    render() {
        return (
            <div id="allgoods">
            	<ul className="swipe">
            		{this.state.slide.map((item,index)=>{
            			return (<li key={index}><img src={item.image_url} /></li>)
            		})}
            	</ul>
            	<Listtwo toListtwo={this.state.two}/>
            	<Listone toListone={this.state.one}/>
            	<Listthree toListthreeOne={this.state.three1} toListthreeTwo={this.state.three2} />
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
                	<li></li>
                </ul>
            </div>
        );
    }
}

//列表一
class Listone extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listone">
                <ul>
                	<h3>分红精选</h3>
	            	{
	            		this.props.toListone.map((item,index)=>{
	            			return (<img key={index} src={item.activity_pic} />)
	            		})
	            	}
                </ul>
            </div>
        );
    }
}

//列表三
class Listthree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listthree">
            	<h3>热门好货</h3>
                <ul>
					{
                		this.props.toListthreeOne.map((item,index)=>{
                			return (<li  key={index}><img src={item.goods_image} /></li>)
                		})
                	}
                </ul>
                <ol>
					{
                		this.props.toListthreeTwo.map((item,index)=>{
                			return (
                				<li key={index}>
                					<img src={item.goods_image} />
                					<p>{item.goods_name}</p>
                					<span>原价: ￥ {item.goods_marketprice}</span>
                					<span>售价: ￥ {item.goods_price}</span>
                				</li>
                			)
                		})
                	}
                </ol>
            </div>
        );
    }
}




export default Allgoods;