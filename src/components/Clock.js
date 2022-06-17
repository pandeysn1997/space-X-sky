import React, { useEffect, useState } from 'react';

const MyClock = () => {
    
  
  
    const [time, setTime] = useState(new Date());
     useEffect(() => {
        
       let TimeId = setInterval(() => setTime(new Date()), 1000);
       return () => {
        clearInterval(TimeId);
       };
       });
       
        return <div className='text-center' style={{backgroundColor:"yellow"}}><b> the time is </b>  {
           time.toLocaleTimeString() 
    } </div>
    
   };
   export default MyClock;