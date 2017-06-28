import React, { Component } from 'react';
import { Icon } from 'antd';
import './../css/homemain.css';
import { Carousel, WhiteSpace, WingBlank,Button } from 'antd-mobile';


class Homemain extends Component {
    constructor(props) {
        super(props);
        this.state={
        	slide:[],
            activesone:[],
            activestwo:[],
            activetwo:[],
            activethree:[],
            activefour:[],
            activefive:[]
        }
    }

    componentDidMount(){
    	fetch('./json/homemain.json').then((response)=>{
    		return response.json();
    	}).then((data)=>{
            var res=data.result;
    		this.setState({
    			slide:res.slides,
                activesone:res.activities[0].seckilling_adv,
                activestwo:res.activities[0].advs,
                activetwo:res.guojiaguan.list,
                activethree:res.zhutiguan.list,
                activefour:res.recommended_goods.list,
                activefive:res.pinpaiguan.list
    		})
    	})

    }

    render() {
        return (
        	<div id="homemain">
        		<Slide toSlideSon={this.state.slide}/>
                <Actionlist/>
                <Listone toListone={this.state.activesone} toListoneo={this.state.activestwo}/>
                <Listtwo toListtwo={this.state.activetwo}/>
                <Listthree toListthree={this.state.activethree}/>
                <Listfive toListfive={this.state.activefive}/>
                <Listfour toListfour={this.state.activefour}/>
        	</div>
        );
    }
}

//轮播图

class Slide extends Component {
  constructor(props) {
        super(props);
        this.state = {
            initialHeight: 200,
        }
    }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
    	<div className="slide">
	      <WingBlank>
	        <Carousel
	          className="my-carousel"
	          autoplay={false}
	          infinite
	          selectedIndex={1}
	          swipeSpeed={35}
	        >
	          {this.props.toSlideSon.map((item,index) => (
	            <a key={index} style={hProp}>
	              <img
	                src={item.image_url}
	                alt="icon"
	                onLoad={() => {
	                  // fire window resize event to change height
	                  window.dispatchEvent(new Event('resize'));
	                  this.setState({
	                    initialHeight: null,
	                  });
	                }}
	              />
	            </a>
	          ))}
	        </Carousel>
	      </WingBlank>
      </div>
    );
  }
}

//活动列表
class Actionlist extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="actionlist">
                <ul>
                    <li>
                        <Icon type="frown" />
                        <span>分红云商</span>
                    </li>
                    <li>
                        <Icon type="frown" />
                        <span>人气热销</span>
                    </li>
                    <li>
                        <Icon type="frown" />
                        <span>保税直邮</span>
                    </li>
                    <li>
                        <Icon type="frown" />
                        <span>促销专区</span>
                    </li>
                    <li>
                        <Icon type="frown" />
                        <span>分享赚钱</span>
                    </li>
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
                <p>
                    <img src={this.props.toListone.adv_pic} />
                </p>
                <ul>
                    {
                        this.props.toListoneo.map((item,index)=>{
                            return (<li key={index}><img src={item.adv_pic} /></li>)
                        })
                    }
                </ul>
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
                			return (<li key={index} > <img src={item.activity_pic} /></li>)
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
        this.state = {
            initialHeight: 200,
        }
    }
	componentDidMount() {
	    setTimeout(() => {
	      this.setState({
	        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
	      });
	    }, 100);
	  }
    render() {
    	const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
        return (
            <div className="listthree">
            	<h3>分红精选</h3>
            	{
            		this.props.toListthree.map((item,index)=>{
            			return (
            				<div key={index}>
            					<img src={item.activity_banner}/>
            					<ul className="list">
	            					{
	            						item.goods_list.map((item,index) =>{
	            							return (
	            								<li key={index}>
	            									<img src={item.goods_image}/>
	            									<p>{item.goods_name}</p>
	            									<p><span>￥{item.goods_price}</span><span>￥{item.goods_marketprice}</span></p>
	            								</li>
	            							)
	            						})
	            					}
            					</ul>
            				</div>
            			)
            		})
            	}
            </div>
        );
    }
}

//列表四
class Listfour extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listfour">
            	<h3>单品推荐</h3>
                <ul>
                	{
                		this.props.toListfour.map((item,index)=>{
                			return (
                				<li key={index}>
                					<p><img src={item.nation_flag}/> <span>{item.goods_promise}</span></p>
                					<img src={item.goods_image} />
                					<button>￥{item.goods_promotion_price}</button>
                					<p>{item.share_title}</p>
                					<p>{item.share_describe}</p>
                				</li>
                			)
                		})
                	}
                </ul>
            </div>
        );
    }
}

//列表二
class Listfive extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="listfive">
            	<h3>全球好货</h3>
                <ul>
                	{
                		this.props.toListfive.map((item,index)=>{
                			return (<li key={index} > <img src={item.brand_pic} /></li>)
                		})
                	}
                </ul>
            </div>
        );
    }
}


export default Homemain;
