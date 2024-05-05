type Props = {}
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Doctor from "./Doctor"
import Team from "./Team"

const AboutTeam = (props: Props) => {
  return (
    
<div id="team" className="p-8 mx-auto max-w-screen-xl bg-white rounded-lg shadow dark:bg-hsl-custom">
  
        <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] dark:bg-hsl-custom text-[#000] font-[700] tracking-tight">
        Our Dream Team: <span className="text-[#a6a6a6]  text-gradient">The Brains behind the Brilliance!</span>{" "}
          
        </h1>
    
        
    <Tabs defaultValue="doctor" className="items-center justify-center mx-auto">
  <TabsList className="grid w-[420px] mx-auto my-4 mb-6 grid-cols-2 justify-center items-center">
    <TabsTrigger value="doctor">Trainers</TabsTrigger>
    <TabsTrigger value="main">Core Team</TabsTrigger>
  </TabsList>
  <TabsContent value="doctor"><Doctor/></TabsContent>
  <TabsContent value="main"><Team/></TabsContent>
</Tabs>
    </div>


  )
}

export default AboutTeam