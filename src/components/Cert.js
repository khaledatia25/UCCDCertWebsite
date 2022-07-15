import React  from 'react';
import moment from 'moment';
import '../style/certificate.css';
import QrCode from './QrCode';

const Cert = ({qrP,name, temp5,showHours,startDate, endDate, hours, description, program, temp, showDate, showDesc, id}) => {
    return (
        <div id={`bg-${temp}`}>
        
        <div className="name-text">

            <p className="name">{name}</p>
            <p className="program-text">For attending {program} Program</p>
            {showHours && <p className="hour-text">For {hours} Hours </p>}
            {showDate && <p className="date-text">From {moment(parseInt(startDate)).format('MMM Do, Y')} To {moment(parseInt(endDate)).format('MMM Do, Y')}</p>}
            
            {showDesc && <p className="description">{description}</p>}
            
        </div>
        <div className='qr'>
            <QrCode 
            url={`http://uccdeng.com/verify/${id}`}
            logoImage="../images/favicon.ico"
            size="250"
            fgColor="#050505"
            quietZone="0"

            />
        </div>
        
        
    </div>
    );
}


export default Cert;
