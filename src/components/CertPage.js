import React from "react";
import { connect } from 'react-redux';
import Cert from "./Cert";
import { useParams } from "react-router-dom";
import downloadCert from '../actions/cert';
const CertPage = (props) => {
    const params = useParams();
    return (
        <div>
            <Cert {...params}/>
            <button class="btn" onClick={downloadCert}>Download</button>
        </div>
    );
}

export default CertPage;