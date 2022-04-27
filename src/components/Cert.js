import React  from 'react';
import moment from 'moment';
import { QRCode } from 'react-qrcode-logo';
import { QRCodeSVG } from 'qrcode.react';
import '../style/certificate.css';

const Cert = ({name, startDate, endDate, hours, description, program}) => {
    return (
        <div id="bg">
        <div className="name-text">
            <p className="name">{name}</p>
            <p className="program-text">Has Attended The Program {program}</p>
            <p className="date-text">From {moment(startDate).format('MMM Do, YYY')} To {moment(endDate).format('MMM Do, YYY')}</p>
            <p className="hour-text">For {hours} Hours </p>
            <p className="description">{description}</p>
        </div>
        <div className="qr" >
            <QRCode 
                value='https://www.facebook.com'
                logoImage='../images/logo.png'
            />
        </div>
    </div>
    );
}


export default Cert;
