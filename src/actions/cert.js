import html2pdf from '../../node_modules/html2pdf.js/dist/html2pdf.bundle.min';

export default (name, id) => {
        const element = document.getElementById(id);
        let opt = {
            margin: 0,
            filename: `${name}.pdf`,
            image: {
            type: 'jpg',
            quality: 1
            },
            html2canvas: {
            scale: 2
            },
            jsPDF: {
            unit: 'in',
            format:'letter',
            orientation: 'landscape'
            }
            };
        html2pdf().from(element).set(opt).save();
}