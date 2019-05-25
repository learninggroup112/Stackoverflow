import React from 'react';
import { Row, Col, Input } from 'antd';
import "./index.scss";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSignUp(event) {
        let uname = document.getElementById("uname").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        //   Submit.submit(uname, email, password);
    }


    render() {
        return (
            <div className="signUp">

                <Row className="signUp-form">
                    <Col className="signUp-form-field">
                        <div></div><Input />
                    </Col>
                    <Col className="signUp-form-field">
                        <div></div><Input />
                    </Col>
                    <Col className="signUp-form-field">
                        <div></div><Input />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Signup;
