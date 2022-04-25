import React  from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { QRCode } from 'react-qrcode-logo';
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
                value="https://www.facebook.com/"
                size={100}
            />
        </div>
    </div>
    );
}

const mapStateToProps = (state, props) => {
    const user = state.users.find((user) => user.id === props.id);
    return {
        ...user
    }
}

export default connect(mapStateToProps)(Cert);
