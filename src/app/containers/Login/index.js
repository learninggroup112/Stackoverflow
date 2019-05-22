import React from 'react';
import "./index.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }


    render() {
        return (
            <div>
                <label>
                    UserName:
                    <input type="text" name="UserName"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="Password"/>
                </label>
                <input type="button" value="Login"/>
            </div>
        );
    }
}

export default Login;
