import React from 'react';
import { Icon } from 'antd';
import './index.scss';
import 'antd/dist/antd.css';


class HeaderIcon extends React.Component {

    render() {console.log(this.props.type)
        return (
            <Icon type = {this.props.type} style={{fontSize: "18px"}} />
        )
    }
}

export default HeaderIcon;
