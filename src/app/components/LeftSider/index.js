import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router';
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
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1">HOME</Menu.Item>
                    <Menu.ItemGroup key="2" title="PUBLIC">
                        <Menu.Item key="2_1"><Icon type="global" />Stack Overflow</Menu.Item>
                        <Menu.Item key="2_2"><Icon type="globl" />Tags</Menu.Item>
                        <Menu.Item key="2_3"><Icon type="globl" />Users</Menu.Item>
                    </Menu.ItemGroup>

                </Menu>
            </div>
        )
    }
}

export default withRouter(PageHeader);
