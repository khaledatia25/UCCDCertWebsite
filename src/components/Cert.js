import React  from 'react';
import moment from 'moment';
import '../style/certificate.css';
import QrCode from './QrCode';

const Cert = ({name, showHours,startDate, endDate, hours, description, program, temp, showDate, showDesc}) => {
    return (
        <div id={`bg-${temp}`}>
        
        <div className="name-text">

            <p className="name">{name}</p>
            <p className="program-text">For attending {program} Program</p>
            {showHours && <p className="hour-text">For {hours} Hours </p>}
            {showDate && <p className="date-text">From {moment(parseInt(startDate)).format('MMM Do, Y')} To {moment(parseInt(endDate)).format('MMM Do, Y')}</p>}
            
            {showDesc && <p className="description">{description}</p>}
            
        </div>
        <div className="qr" >
            
                <QrCode 
                url='https://www.facebook.com'
                />
            
            
        </div>
        
    </div>
    );
}


export default Cert;
