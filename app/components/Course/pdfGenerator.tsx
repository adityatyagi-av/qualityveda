import jsPDF from "jspdf"
import { format } from 'date-fns';
const pdfGenerator= (item:any,user:any) => {

    var name = `${user.name}`
    var doc = new jsPDF({
      orientation: 'landscape'
    })
    var img = new Image;
    img.crossOrigin = "";  
    img.src = "/assests/certificate.jpg"; 
     doc.addImage(img, 0, 0, 297, 210);
     doc.setFontSize(40); 
      doc.setTextColor(0, 0, 0); 
      doc.setFont('Lato-Black', 'bold');
      doc.text(name, 110, 90); 
    doc.setFont('Lato-Regular', 'normal');
       doc.setFontSize(15);
          doc.save("Certificate.pdf");
  
}

export default pdfGenerator