import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { Layout , Menu} from 'antd';
import LandingPage from '../containers/LandingPage';
import PageHeader from '../components/PageHeader';
import './index.scss';
import 'antd/dist/antd.css';
import Login from '../containers/Login';
import Signup from '../containers/Signup'

const { Header, Content, Footer, Sider } = Layout;

class Router extends React.Component {


	render() {
		return (
			<Layout className="uiContainer">
				<PageHeader />
				<Layout className="mainLayout">
					<Content style={{ overflow: 'initial' }}>
						<Switch>
							<Route exact path='/' component={ LandingPage } />
							<Route path='/login' component={ Login } />	
							<Route path='/signup' component={ Signup } />	
						</Switch >
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default withRouter(Router);
