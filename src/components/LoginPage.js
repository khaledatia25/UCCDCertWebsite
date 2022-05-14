import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogin } from "../actions/auth";
import { history } from './../routers/AppRouter';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            visible: false,
            error: ''
        };
    }; 
    onEmailChange = (e) => {
        const username = e.target.value; 
        this.setState({ username });
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState({ password });
    }
    onVisibleChange = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let err = this.props.startLogin({
            username: this.state.username,
            password: this.state.password

        });
        err.then((err) => {
            if(err.error){
                return this.setState({error: err.error})
            }
            
        })
        history.push('/dashboard/')
        
    }
    render() { 
        return (
            <div className="login-box">
                <div className='login-box--l'>
                        <div className='title'>
                        UCCD <span>ADMIN LOGIN</span>
                        </div>
                        <form onSubmit={this.onSubmit} className="pure-form pure-form-stacked" > 
                            <fieldset>
                                <input 
                                    className="input100" 
                                    type="email" 
                                    value={this.state.username}
                                    onChange={this.onEmailChange}
                                    placeholder="Email"
                                    name="username"
                                    required
                                    />
                                    <div className="login-spacing"></div>  
                                <input 
                                    className="input100" 
                                    type= {this.visible?"text" : "password"} 
                                    value={this.state.password}
                                    onChange={this.onPasswordChange}
                                    placeholder="Pasword"
                                    required
                                    name="password"
                                    
                                   />

                                   {!!this.state.error && <span className="pure-form-message">{this.state.error}</span>}
                                   <div className="login-spacing"></div> 
                                   <button type="submit" name="admin_login" className="pure-button login-button"> Login </button>
                                   <div className="login-spacing"></div> 
                                <div><NavLink className="go-back" to="/">Go Back</NavLink></div>
                            </fieldset>
                            
                                
                        
                        </form>
                        
                    </div>
                    
                </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    startLogin : (data) => dispatch(startLogin(data))
});

export default connect(undefined, mapDispatchToProps)(LoginPage);

/*
    
*/ 