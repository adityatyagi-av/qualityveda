import jsPDF from "jspdf"
import { format } from 'date-fns';
const pdfGenerator= (item:any,user:any) => {

    var name = `${user.name}`
    var course= `${item.name}`
    
    var doc = new jsPDF({
      orientation: 'landscape'
    })
    var img = new Image;
    img.crossOrigin = "";  
    img.src = "/assests/certificate.png"; 
     doc.addImage(img, 0, 0, 297, 210);
     doc.setFontSize(40); 
      doc.setTextColor(0, 0, 0); 
      doc.setFont('Lato-Black', 'bold');
      const nameTextWidth = doc.getTextWidth(name);
      const pageWidth = doc.internal.pageSize.getWidth();
      const nameX = (pageWidth - nameTextWidth) / 2;
      doc.text(name, nameX, 90); 

       doc.setFontSize(30);
       doc.setTextColor(0, 0, 0);
       doc.setFont('Lato-Black', 'bold');
       const courseTextWidth = doc.getTextWidth(course);
 
    const courseX = (pageWidth - courseTextWidth) / 2;
       doc.text(course,courseX,150);
       
          doc.save("Certificate.pdf");
  
}

export default pdfGenerator