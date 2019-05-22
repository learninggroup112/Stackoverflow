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

    createTable = () => {
        let table = ["asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","adf"];
    
        // Outer loop to create parent
        for (let i = 0; i < table.length; i++) {
          let children = []
          //Inner loop to create children
          for (let j = 0; j < 2; j++) {
            children.push(<td>{`Column ${j + 1}`}</td>)
          }
          //Create the parent and add the children
          table.push(<tr>{children}</tr>)
        }
        return table
      }

    handleHeaderClick = (event) => {
        switch (event.key) {
            case "1":
                this.setState({ showSider: false });
                this.props.history.push("/login");
                break;
            case "2":
                this.setState({ showSider: false });
                this.props.history.push("/signup");
                break;
        }
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['']}
                        style={{ lineHeight: '64px', float: 'right' }}
                        onClick={this.handleHeaderClick}
                    >
                        <Menu.Item key="1">LogIn</Menu.Item>
                        <Menu.Item key="2">SignUp</Menu.Item>
                    </Menu>
                </Header>
                {this.state.showSider &&
                    <Layout>
                        <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['']}
                                defaultOpenKeys={['']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />Stack</span>}>
                                    <Menu.Item key="1">User1</Menu.Item>
                                    <Menu.Item key="2">User2</Menu.Item>
                                    <Menu.Item key="3">User3</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                    <Menu.Item key="5">User5</Menu.Item>
                                    <Menu.Item key="6">User6</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content
                            style={{ padding: '0 24px', minHeight: 1000 }}
                        >
                             <table>
                                {this.createTable()}
                            </table>
                        </Content>
                    </Layout>
                }

            </Layout>

        )
    }
}

export default withRouter(PageHeader);
