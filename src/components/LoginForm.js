import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../style/admin_css/vendor/bootstrap/css/bootstrap.min.css'
import '../style/admin_css/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../style/admin_css/fonts/iconic/css/material-design-iconic-font.min.css'
import '../style/admin_css/vendor/animate/animate.css'
import '../style/admin_css/vendor/css-hamburgers/hamburgers.min.css'
import '../style/admin_css/vendor/animsition/css/animsition.min.css'
import '../style/admin_css/vendor/animsition/css/animsition.min.css'
import '../style/admin_css/vendor/daterangepicker/daterangepicker.css'
import '../style/admin_css/css/util.css'
import '../style/admin_css/css/main.css'
const LoginForm = () => (
    <div className="limiter">
        <div className='container-login100'>
            <div className='wrap-login100'>
                <form className="login100-form validate-form pt-3" > 
                    <span className="login100-form-title p-b-26">
                            UCCD System
                     </span> <span class="login100-form-title p-b-48">
                    <i className="zmdi zmdi-font"></i> 
                     </span>
                    <div className="wrap-input100 validate-input">
                        <input className="input100" type="email" name="admin_email"/> 
                        <span className="focus-input100" data-placeholder="Email" require></span> 
                     </div>
                    <div class="wrap-input100 validate-input" data-validate="Enter password">
                        <span className="btn-show-pass">
                            <i className="zmdi zmdi-eye"></i>
                        </span>
                        <input className="input100" type="password" name="admin_pass"/>
                        <span className="focus-input100" data-placeholder="Password" require></span> 
                    </div>
                    <div class="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn"></div>
                            <button type="submit" name="admin_login" className="login100-form-btn"> Login </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default LoginForm;