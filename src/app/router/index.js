import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import LandingPage from '../containers/LandingPage';
import LeftSider from '../components/LeftSider';
import PageHeader from '../components/PageHeader';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import './index.scss';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

class Router extends React.Component {


	render() {
		return (
			<Layout className="uiContainer">
				<Header><PageHeader /></Header>
				<Layout className="mainLayout">
					<Sider><LeftSider /></Sider>
					<Signup />
					<Content style={{ overflow: 'initial' }}>
						<Switch>
							<Route exact path='/' component={LandingPage} />
							<Route path='/login' component={Login} />
							<Route path='/signup' component={Signup} />
						</Switch >
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(Router);
