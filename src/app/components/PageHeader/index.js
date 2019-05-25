import React from 'react';
import { Layout, Menu, Icon, Input, Row, Col, Button } from 'antd';
import HeaderIcon from '../../components/HeaderIcon';
import { withRouter } from 'react-router';
import * as logo from '../../../assets/images/logo.png';
import './index.scss';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

class PageHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showSider: true
        }
    }


    render() {
        return (
            <div className="pageHeader">
                <Row>
                    <Col align="middle" span={4}><img src={logo} width="140px"/></Col>
                    <Col align="right" span={11} className="pageHeader-headerSearch-box"><Input /> </Col>
                    <Col align="right" span={1} className="pageHeader-headerSearch-icon"> <HeaderIcon type="search" /></Col>
                    <Col align="right" width="20px" span={1}><HeaderIcon type="user" /></Col>
                    <Col align="right" width="20px" span={1}><HeaderIcon type="user" /></Col>
                    <Col align="right" width="20px" span={1}><HeaderIcon type="question-circle" /></Col>
                    <Col align="right" width="20px" span={1}><HeaderIcon type="user" /></Col>
                    <Col align="right" span={2}><Button>LogIn</Button></Col>
                    <Col align="right" span={2}><Button>SignUp</Button></Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(PageHeader);
