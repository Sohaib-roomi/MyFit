import React from 'react'
import Sidebar from '../../components/Sidebar'
import ActivityCard from '../../components/activityCard'
import Exercise from '../../components/Exercise'


const Dashboard = () => {
  return (
    <>
    <div style={{display:'flex', flexDirection:'column'}}> 
      <div style={{width:'20%'}}>
      <Sidebar />
      </div >
      <div style= {{width: '100%',marginLeft:"40px"}}>
      <Exercise />
      </div>

    </div>
    
    
    

    
    
  {/* <ActivityCard/> */}
    </>
    
  )
}

export default Dashboard