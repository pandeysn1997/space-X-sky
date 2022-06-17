import React, { useEffect, useState } from 'react'
import {  useParams, useSearchParams } from 'react-router-dom';
 import ReactPlayer from 'react-player'



const Details = () => {
    const [ data1 ,setData1] = useState([]);
   
    // const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
var id=searchParams.get("id");
const getData1 = async() => {
    const response = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
    setData1(await response.json());
    };
    
    useEffect(()=> {
        getData1();
    console.log(data1);
    }, [] );
    
    var str = JSON.stringify(data1);
    var JsonArray = JSON.parse(str);
   
    
    return(
      <>
   <div>{JsonArray.name} </div>
        <body>
<div class="container-fluid bg-1 text-center">
  <h2 class="margin">{JsonArray.name}</h2>
  <h3>{JsonArray.date_utc}</h3>
</div>
<div class="container-fluid bg-3 text-center" >
  <h3 class="margin">Details</h3>
  <h4>{JsonArray.details} </h4>
  <div>
  <ReactPlayer url="https://www.youtube.com/watch?v=0a_00nJ_Y88" />
  </div>
</div>
</body>
</>
    )
}

export default Details;