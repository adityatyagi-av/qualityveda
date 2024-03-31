import Link from 'next/link';
import React ,{FC} from 'react'

type Props = {
    url?:string;
    imageLink?:string;
    
}

const ImageCard: FC<Props>= ({url,imageLink}) => {
  return (
    <>
   <Link href={`${url}`}><div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
   <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{backgroundImage: `url(${imageLink})`}}></div>

  
</div></Link>
</>
  )

}

export default ImageCard