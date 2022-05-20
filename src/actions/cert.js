import html2pdf from '../../node_modules/html2pdf.js/dist/html2pdf.bundle.min';


export default async (id) => {
    try{
        const requestOptions = {
            method: 'GET',
        }
        return fetch(`http://localhost:5000/certificate/${id}`, requestOptions).
        then((res) => {
            console.log(res);
        }).catch((e) => {
            console.log(e);
        })

    }catch(e) {
        console.log(e);
    }
}

// export default (name) => {
//     const element = document.getElementById('bg');
//     let opt = {
//         margin: 0,
//         filename: `${name}.pdf`,
//         image: {
//         type: 'jpg',
//         quality: 1
//         },
//         html2canvas: {
//         scale: 2
//         },
//         jsPDF: {
//         unit: 'in',
//         format:'letter',
//         orientation: 'landscape'
//         }
//         };
//     html2pdf().from(element).set(opt).save();

// }