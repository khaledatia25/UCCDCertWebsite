import React  from 'react';
import moment from 'moment';
import '../style/certificate.css';
import QrCode from './QrCode';

const Cert = ({qrP,name, temp5,showHours,startDate, endDate, hours, description, program, temp, showDate, showDesc}) => {
    return (
        <div id={`bg-${temp}`}>
        
        <div className="name-text">

            <p className="name">{name}</p>
            <p className="program-text">For attending {program} Program</p>
            {showHours && <p className="hour-text">For {hours} Hours </p>}
            {showDate && <p className="date-text">From {moment(parseInt(startDate)).format('MMM Do, Y')} To {moment(parseInt(endDate)).format('MMM Do, Y')}</p>}
            
            {showDesc && <p className="description">{description}</p>}
            
        </div>
        <div className="qr" style={{
            position: 'relative',
            display: 'flex',
            flexDirection: temp == 1 || temp == 5 ?'row-reverse' : 'row',
            top: temp == 5 ? `${temp5}px`:`${qrP}px`
        }}>
                <span>
                <QrCode 
                url='https://www.facebook.com'
                />
                </span>
            
            
        </div>
        {temp == 5 ? (<div className='temp-5-qr-spacing'></div>) : ''}
        
    </div>
    );
}


export default Cert;
