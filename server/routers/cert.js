const fs = require('fs');
const PDFDocument = require('pdfkit');
const path = require('path');
const QrCode = require('easyqrcodejs-nodejs');
const moment = require('moment');


const buildPDF = async (certOptions, user ,dataCallBack, endCallBack) => {
    console.log(moment(parseInt(user.startDate)).format('MMM Do, Y'))
    const options = {
        text: `http://uccdeng.com/verify/${user.id}`,
        logo: 'favicon.png',
        logoWidth: 20,
        logoHeight: 20,
        height: 110,
        width: 110,
        

    };
    const renderDesc = () => {
        if(certOptions.date === 'true'){
            return `${user.description}`;
        }else{
            return '';
        }
    }
    const renderHours = () =>{
        if(certOptions.hours === 'true'){
            return `For ${user.hours} Hours`;
        }else{
            return '';
        }
    }
    const renderDate = () => {
        if(certOptions.date === 'true'){
            return `From ${moment(parseInt(user.startDate)).format('MMM Do, Y')} To ${moment(parseInt(user.endDate)).format('MMM Do, Y')} `;
        }else{
            return '';
        }
    }
    const qr = new QrCode(options);
    qr.saveImage({
        path: 'q.png'
    }).then((data) => {
            const doc = new PDFDocument({
        layout: 'landscape',
        size: 'A4'
    });
    doc.on('data', dataCallBack);
    doc.on('end', endCallBack);
    doc.image('temp-1.png', 0, 0,{fit: [840, 800]})
        .stroke()
    doc.font('fonts/Sinami demo.ttf')
        .fontSize(60).fillColor('#0aa64d')
        .text(`${user.name}`, 50, 250, {
            align: 'center'
        });
    doc
    .fillColor('black')
    .font('Times-Roman')
    .fontSize(25)
    .text(`For attending ${user.program} Program`,50,320,{
        align: 'center'
    });
    doc
    .fillColor('black')
    .font('Times-Roman')
    .fontSize(25)
    .text(`${renderHours()}`,50,345,{
        align: 'center'
    });
    doc
    .fillColor('black')
    .font('Times-Roman')
    .fontSize(25)
    .text(`${renderDate()}`,50,370,{
        align: 'center'
    });
    doc
    .fillColor('black')
    .font('Times-Roman')
    .fontSize(25)
    .text(`${renderDesc()} `,50,395,{
        align: 'center'
    });
    
    doc.image('q.png', 657.5, 440, {fit: [90, 90]})
        .stroke();    

    doc.end();
    }).then((data) => {
        fs.stat('./q.png', function (err, stats) {
            //console.log(stats);//here we got all information of file in stats variable
         
            if (err) {
                return console.log("er");
            }
         
            fs.unlink('./q.png',function(err){
                 if(err) return console.log("err");
                 console.log('file deleted successfully');
            });  
         });  
    });
    
      

    
    

}

module.exports = buildPDF;