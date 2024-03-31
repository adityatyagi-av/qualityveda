import Link from 'next/link'
import React,{FC} from 'react'

type Props = {
    imageLink:string;
    url:string;
    name:string;
    designation:string;
    
}

const Individual:FC<Props> = ({imageLink,url,name,designation}) => {
  return (
   <Link href={url}>
   <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <img className="object-cover w-full h-56" src={imageLink} alt="avatar"/>

    <div className="py-5 text-center">
        <Link href="#" className="block text-xl font-bold text-gray-800 dark:text-white"  role="link">{name}</Link>
        <span className="text-sm text-gray-700 dark:text-gray-200">{designation}</span>
    </div>
</div>
   </Link>
  )
}

export default Individual