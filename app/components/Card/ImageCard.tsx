import Image from 'next/image';
import Link from 'next/link';
import React ,{FC} from 'react'

type Props = {
    url?:string;
    imageLink:string;
    
}

const ImageCard: FC<Props>= ({url,imageLink}) => {
  return (
    <>
   <Link href={`${url}`}>
   
   <Image src={imageLink} width={150} height={150} className="w-48 h-32" alt="image" />

  
</Link>
</>
  )

}

export default ImageCard