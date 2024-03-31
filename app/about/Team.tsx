"use client"
import React, { useEffect, useState } from 'react'
import Individual from './Individual'
import { useGetUsersAllTeamsQuery } from '@/redux/features/teams/teamApi'
type Props = {}

const Team = (props: Props) => {
    const {data}=useGetUsersAllTeamsQuery({});
    const [users,setUsers]=useState<any[]>([]);
    useEffect(() => {
        if (data) {
          setUsers(data.teams);
        }
        console.log(data)
      }, [data]);
    
  return (
    <>
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
       


        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {users?.map((user)=>{
                return(
                    <Individual key={user._id} imageLink={user.image.url}
                    url={user.link} name={user.name} designation={user.designation}/>
                )
            })}
            
           
               
        </div>
    </div>
</section>
    </>
  )
}

export default Team