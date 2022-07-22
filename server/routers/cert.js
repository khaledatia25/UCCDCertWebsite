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
    const nameSize = () => {
        switch(certOptions.temp){
                case '1':
                    if(user.name.length > 50)return 30;
                    if(user.name.length > 46)return 35;
                    if(user.name.length > 40)return 40;
                    if(user.name.length > 32)return 45;
                    else return 60;
                case '2':
                    if(user.name.length > 40)return 30;
                    if(user.name.length > 37)return 35;
                    if(user.name.length > 32)return 40;
                    else return 45;
                case '3':
                    if(user.name.length > 46)return 15;
                    if(user.name.length > 42)return 20;
                    if(user.name.length > 38)return 25;
                    if(user.name.length > 34)return 30;
                    if(user.name.length > 30)return 35;
                    return 40;
                case '4':
                    if(user.name.length > 46)return 15;
                    if(user.name.length > 42)return 20;
                    if(user.name.length > 38)return 25;
                    if(user.name.length > 34)return 30;
                    if(user.name.length > 30)return 35;
                    return 40;
                case '5':
                    if(user.name.length > 45)return 25;
                    if(user.name.length > 40)return 30;
                    if(user.name.length > 37)return 35;
                    if(user.name.length > 32)return 40;
                    else return 45;    

        }
    }
    const programColor = "#3030f6";
    const renderDesc = () => {
        if(certOptions.description === 'true'){
            
            return `${user.description}
`;
        }else{
            return '';
        }
    }
    const renderHours = () =>{
        if(certOptions.hours === 'true'){
            return `For ${user.hours} Hours
`;
        }else{
            return '';
        }
    }
    const renderDate = () => {
        if(certOptions.date === 'true'){
            return `From ${moment(parseInt(user.startDate)).format('MMMM Do, Y')} To ${moment(parseInt(user.endDate)).format('MMMM Do, Y')}
`;
        }else{
            return '';
        }
    }
    const qr = new QrCode(options);
    qr.saveImage({
        path: 'q.png'
    }).then((data) => {
        let doc;
    switch(certOptions.temp){
        case '1':
            doc = new PDFDocument({
                layout: 'landscape',
                size: 'A4'
            });
            doc.on('data', dataCallBack);
            doc.on('end', endCallBack);
            doc.image('temp-1.png', 0, 0,{fit: [840, 800]})
                .stroke()
            doc.font('fonts/Sinami demo.ttf')
                .fontSize(nameSize()).fillColor('#0aa64d')
                .text(`${user.name}`, 50, 250, {
                    align: 'center'
                });
            doc
            .fillColor(programColor)
            .font('Times-Roman')
            .fontSize(25)
            .text(`For attending ${user.program} Program`,50,295,{
                align: 'center'
            });
            doc
            .fillColor('black')
            .font('Times-Roman')
            .fontSize(20)
            .text(`${renderHours()}${renderDate()}${renderDesc()}
            `,80,320,{
                align: 'center'
            });
            
            doc.image('q.png', 657.5, 440, {fit: [90, 90]})
                .stroke();    
        
            doc.end();
            break;
        case '2': 
            doc = new PDFDocument({
                layout: 'landscape',
                size: 'A4'
            });
            doc.on('data', dataCallBack);
            doc.on('end', endCallBack);
            doc.image('temp-2.png', 0, 0,{fit: [844, 800]})
                .stroke()
            doc.font('Times-Roman')
                .fontSize(nameSize()).fillColor('#0aa64d')
                .text(`${user.name}`, 50, 270, {
                    align: 'center'
                });
            doc
            .fillColor(programColor)
            .font('Times-Roman')
            .fontSize(25)
            .text(`For attending ${user.program} Program`,50,315,{
                align: 'center'
            });
            doc
            .fillColor('black')
            .font('Times-Roman')
            .fontSize(20)
            .text(`${renderHours()}${renderDate()}${renderDesc()}
            `,80,340,{
                align: 'center'
            });
            doc
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(10)
                .text("This certificate is verified with QR code", 657.5, 502,{
                    align: 'center',
                    width: 110,
                    lineGap: -2
                });
            doc.image('q.png', 672.5, 415, {fit: [80, 80]})
                .stroke();    
        
            doc.end();
            break;
        case '3':
            doc = new PDFDocument({
                size: 'A4'
            });
            doc.on('data', dataCallBack);
            doc.on('end', endCallBack);
            doc.image('temp-3.png', 0, 0,{fit: [860, 830]})
                .stroke()
            doc.font('Times-Roman')
                .fontSize(nameSize()).fillColor('#0aa64d')
                .text(`${user.name}`, 0, 310, {
                    align: 'center',
                    lineGap: -2,
                    width: 600
                });
            doc
            .fillColor(programColor)
            .font('Times-Roman')
            .fontSize(25)
            .text(`For attending ${user.program} Program`,50,350,{
                align: 'center',
            });
            doc
            .fillColor('black')
            .font('Times-Roman')
            .fontSize(20)
            .text(`${renderHours()}${renderDate()}${renderDesc()}
            `,80,375,{
                align: 'center',
            });
            doc
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(10)
                .text("This certificate is verified with QR code", 425, 747,{
                    align: 'center',
                    width: 110,
                    lineGap: -2
                });
            doc.image('q.png', 435, 650, {fit: [90, 90]})
                .stroke();    
        
            doc.end();
            break;
        case '4':
            doc = new PDFDocument({
                size: 'A4'
            });
            doc.on('data', dataCallBack);
            doc.on('end', endCallBack);
            doc.image('temp-4.png', 0, 0,{fit: [860, 830]})
                .stroke()
            doc.font('Times-Roman')
                .fontSize(40).fillColor('#0aa64d')
                .text(`${user.name}`, 0, 330, {
                    align: 'center',
                    lineGap: -2,
                    width: 600
                });
            doc
            .fillColor(programColor)
            .font('Times-Roman')
            .fontSize(25)
            .text(`For attending ${user.program} Program`,50,370,{
                align: 'center'
            });
            doc
            .fillColor('black')
            .font('Times-Roman')
            .fontSize(20)
            .text(`${renderHours()}${renderDate()}${renderDesc()}
            `,80,395,{
                align: 'center'
            });
                doc
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(10)
                .text("This certificate is verified with QR code", 455, 736,{
                    align: 'center',
                    width: 110,
                    lineGap: -2
                });
            doc.image('q.png', 470, 650, {fit: [80, 80]})
                .stroke();    
        
            doc.end();
            break;
            case '5':
                doc = new PDFDocument({
                    layout: 'landscape',
                    size: 'A4'
                });
                doc.on('data', dataCallBack);
                doc.on('end', endCallBack);
                doc.image('temp-5.png', 0, 0,{fit: [844, 800]})
                    .stroke()
                doc.font('Times-Roman')
                    .fontSize(nameSize()).fillColor('#0aa64d')
                    .text(`${user.name}`, 50, 270, {
                        align: 'center'
                    });
                doc
                .fillColor(programColor)
                .font('Times-Roman')
                .fontSize(25)
                .text(`For attending ${user.program} Program`,50,315,{
                    align: 'center'
                });
                doc
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(20)
                .text(`${renderHours()}${renderDate()}${renderDesc()}
                `,80,340,{
                    align: 'center'
                });
                doc
                .fillColor('black')
                .font('Times-Roman')
                .fontSize(10)
                .text("This certificate is verified with QR code", 677.5, 501,{
                    align: 'center',
                    width: 110,
                    lineGap: -2
                });
                doc.image('q.png', 692.5, 415, {fit: [80, 80]})
                    .stroke();

            
                doc.end();
                break;    


    }
    
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