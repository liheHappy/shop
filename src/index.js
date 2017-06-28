import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import { Router,Route,hashHistory,IndexRoute,browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import Home from './home.js'
import Sort from './sort.js'
import Find from './find.js'
import Cart from './cart.js'
import My from './my.js'
import Sorted from './sorted.js'
import Login from './login.js'
import Vip from './vip.js'
import History from './history.js'


ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={Layout}>
	    	<IndexRoute component={Home}/>
	    	<Route path="/home" component={Home} />
	    	<Route path="/sort" component={Sort} />
	    	<Route path="/find" component={Find} />
	    	<Route path="/cart" component={Cart} />
	    	<Route path="/my" component={My} />
	    </Route>
	    <Route path="/sorted/:id/:area/:name" component={Sorted} />
	    	<Route path="/login" component={Login} />
	    	<Route path="/vip" component={Vip} />
	    	<Route path="/history" component={History} />
	</Router>
	, document.getElementById('root')
);
registerServiceWorker();
