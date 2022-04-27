import React from "react";
import { connect } from 'react-redux';
import Cert from "./Cert";
import downloadCert from '../actions/cert';
const CertPage = (props) => {
    return (
        <div>
            <Cert {...props.user}/>
            <button class="btn" onClick={() => downloadCert(props.user.name)}>Download</button>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => user.id === props.params.id)
    }
}

export default connect(mapStateToProps)(CertPage);