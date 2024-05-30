import Link from "next/link";
import React, { FC } from "react";
import pdfGenerator from "./pdfGenerator";


type Props = {
  item: any;
  isProfile?: boolean;
  user:any;
};

const generatePdf=(item:any,user:any)=>{
  pdfGenerator(item,user);
}
const CertificateCard2: FC<Props> = ({ item, isProfile ,user}) => {
    

  return (
    <>
  

<div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{item.name}</h1>
        
    </div>
    <Link href={!isProfile ? `/course/${item._id}` : `course-access/${item._id}`}>
    
</Link>
    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
  
        <button onClick={()=>generatePdf(item,user)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Download</button>
    </div>

</div>

    
    </>
  );
};

export default CertificateCard2;
