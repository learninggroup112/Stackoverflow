import React from 'react';
//import * as Submit from '../../utils/Parser/signUp'
import "./index.scss";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSignUp(event) {
		  let uname = document.getElementById("uname").value;
		  let email = document.getElementById("email").value;
		  let password = document.getElementById("password").value;
		//   Submit.submit(uname, email, password);
      }


    render() {
        return (
            <div>
                <label>
                    UserName:
                    <input id="uname" type="text" name="UserName"/>
                </label>
				<label>
                    Email:
                    <input id="email" type="text" name="Email"/>
                </label>
                <label>
                    Password:
                    <input type="password" id="password" name="Password"/>
                </label>
                <input type="button" value="SignUp" onClick = {this.handleSignUp}/>
            </div>
        );
    }
}

export default Signup;
