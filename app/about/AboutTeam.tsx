type Props = {}
const teachers=[
    {
        id:'1',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'2',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'3',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'4',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'5',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'6',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'7',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'8',
        src:'',
        name:"Aditya Tyagi"
    },{
        id:'9',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'10',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'11',
        src:'',
        name:"Aditya Tyagi"
    },
    {
        id:'12',
        src:'',
        name:"Aditya Tyagi"
    },
]
const AboutTeam = (props: Props) => {
  return (
    
<div id="team" className="p-8 bg-white rounded-lg shadow dark:bg-hsl-custom">
    <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
        The big team
    </p>
    <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
        Meat the best educators of world
    </p>
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        
            {teachers.map((teacher)=>{
                return(
                    <div className="p-4" key={teacher.id}>
                        <div className="flex-col  flex justify-center items-center">
                <div className="flex-shrink-0">
                    <a href="#" className="relative block">
                        <img alt="profil" src="/assests/client-3.jpg" className="mx-auto object-cover rounded-full h-20 w-20 "/>
                    </a>
                </div>
                <div className="mt-2 text-center flex flex-col">
                    <span className="text-lg font-medium text-gray-600 dark:text-white">
                        {teacher.name}
                    </span>
                    <span className="text-xs text-gray-400">
                        Quality Manager
                    </span>
                </div>
            </div>
        </div>
                )
            })}
    </div>
</div>

  )
}

export default AboutTeam