import React from 'react';
import { getUserID } from './../actions/users';
import '../style/verify.css';
class VerificationPage extends React.Component {
    constructor(props){
        super(props);
        const id = props.params.id;
        console.log(id);
        this.state = {
            user: {}
        }
    }

    async componentDidMount(){
        const user = await getUserID(this.props.params.id);
        console.log(user[0]);
        this.setState({user: user[0]});
    }

    render(){
        return (
            <div className="verf-page">
            <img src={require("../images/logo.png")}/>
            <div className="information-box">
                <div className="user-name">{this.state.user.name}</div>
                
                <div className='verf-description'>{" "}took{" "}{this.state.user.program}{" "}{this.state.user.hours}{" "}hours program from UCCD Univerrsity Center for Career Development Mansura Engineering</div>
                
            </div>
            <div id='footer'>
                <div className='container text-center'>
                <p>
                    This Website designed and created by our volunteers
                    <a href='https://www.linkedin.com/in/khaled-waleed-mohammed/'>Khaled Waleed Attia</a>{", "}
                    <a>Ahmed Mohammed Seif</a>
                </p>
                </div>
            </div>
            </div>
            );

    }
}

export default VerificationPage;
