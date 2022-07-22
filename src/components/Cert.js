import React  from 'react';
import moment from 'moment';
import '../style/certificate.css';
import QrCode from './QrCode';

const Cert = ({qrP,name, temp5,showHours,startDate, endDate, hours, description, program, temp, showDate, showDesc, id}) => {
    let nameSize = () => {
        switch(temp){
            case 1:
                if(name.length > 46)return '45px';
                if(name.length > 40)return '50px';
                if(name.length > 35)return '60px';
                else return '70px';
                break;
            case  2:
                if(name.length > 43)return '35px'
                if(name.length > 35)return '40px';
                else return '50px';
                break;
            case 3:
                if(name.length > 43)return 18;
                if(name.length > 38)return 20;
                if(name.length > 33)return 25;
                if(name.length > 28)return 27;
                if(name.length <= 28) return 31;
            case 4:
                if(name.length > 33)return 20;
                if(name.length > 28)return 25;
                if(name.length <= 28) return 31;
            case  5:
                if(name.length > 43)return '35px'
                if(name.length > 35)return '40px';
                else return '50px';
                break;


        }
        
        
    }
    
    return (
        <div id={`bg-${temp}`}>
        
        <div className="name-text">

            <p className="name" style={{
                fontSize: nameSize()
            }}>{name}</p>
            <p className="program-text">For attending {program} Program</p>
            {showHours && <p className="hour-text">For {hours} Hours </p>}
            {showDate && <p className="date-text">From {moment(parseInt(startDate)).format('MMMM Do, Y')} To {moment(parseInt(endDate)).format('MMMM Do, Y')}</p>}
            
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
