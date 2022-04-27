import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

const LoginPage = () => (
    <LoginForm />
);

const mapDispatchToProps = () => ({
    
});

export default connect(undefined, mapDispatchToProps)(LoginPage);