import React from "react";
import { connect } from 'react-redux';
import Cert from "./Cert";
import downloadCert from '../actions/cert';
import TempleteItem from "./TempleteItem";
const CertPage = (props) => {
    return (
        <div>
            <div className="sidenav">
                <div className="title">Templetes</div>
                <hr />{}
                <TempleteItem src="../images/templetes/1.jpg" templeteName="Templete-1"/>
                <button class="pure-button" onClick={() => downloadCert(props.user.name)}>Download</button>
            </div>
            <div className="cert-content">
                <Cert {...props.user}/>
                
            </div>
            
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => user.id === props.params.id)
    }
}

export default connect(mapStateToProps)(CertPage);