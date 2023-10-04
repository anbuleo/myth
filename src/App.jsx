import { useState } from "react"
import Card from "./Card"
function App() {
  let [count,setCount]= useState(0)

  const data = [
    {
      plan:'FREE',
      price:'0',
      user: 'Single User',
      bolder:false,
      userEnabler:true,
      storage:'5GB Storage',
      storageEnabler:true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler:true,
      communityAccess:'Community Access',
      communityAccessEnabler:false,
      privateProjects: 'Unlimited Private Projects',
      privateProjectsEnabler:false,
      support: 'Dedicated Phone Support',
      supportEnabler:false,
      subDomain:'Free Subdomain',
      subDomainEnabler: false,
      reports: 'Monthly Status Reports',
      reportsEnabler:false
    },
    {
      plan:'PLUS',
      price:'10',
      user: '5 Users',
      bolder:true,
      userEnabler:true,
      storage:'50GB Storage',
      storageEnabler:true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler:true,
      communityAccess:'Community Access',
      communityAccessEnabler:true,
      privateProjects: 'Unlimited Private Projects',
      privateProjectsEnabler:true,
      support: 'Dedicated Phone Support',
      supportEnabler:true,
      subDomain:'Free Subdomain',
      subDomainEnabler: true,
      reports: 'Monthly Status Reports',
      reportsEnabler:false
    },{
      plan:'PRO',
      price:'49',
      user: 'Unlimited Users',
      bolder:true,
      userEnabler:true,
      storage:'150GB Storage',
      storageEnabler:true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler:true,
      communityAccess:'Community Access',
      communityAccessEnabler:true,
      privateProjects: 'Unlimited Private Projects',
      privateProjectsEnabler:true,
      support: 'Dedicated Phone Support',
      supportEnabler:true,
      subDomain:'Unlimited Free Subdomain',
      subDomainEnabler: true,
      reports: 'Monthly Status Reports',
      reportsEnabler:true
    }
  ]

  return <>
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {/* <!-- Free Tier --> */}
      {
        data.map((e,i)=>{
          return  <Card data={e} key={i}/>
          
        })
      }
      
    
      
       
      
    </div>
    <div>
      <button className="btn btn-primary" onClick={()=>{
        return setCount(count+1)
      }}>Click Me, I was already clicked {count} times</button>
    </div>
  </div>
</section>
    </>
  
}

export default App
