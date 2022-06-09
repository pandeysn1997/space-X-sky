import React, { useEffect, useState } from 'react'
const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launches/past");
    setData(await response.json());

  }
  useEffect(() => {
    getData();

  }, []);
  
  return (
    <>
      <h1 className="text centre">SpaceX Past Launches </h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {
            data.map((missions) => {
              return (
                
                <div className="col-12 col-md-4 mt-8">
                <div className="card" style={{ width: "20rem" }} key = {missions.id}>
  <img src="https://images2.imgbox.com/00/2f/FhtEd0nB_o.png" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{missions.name}</h5>
    <p className="card-text">
      {missions.details}
      <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white status">
      <div class="d-flex flex-row bg-secondary"><span className="Flight number">Flight No.</span>{missions.flight_number}</div>
      <div className="d-flex flex-row bg-secondary"><span className="followers">Success</span>{missions.success}</div>
      <div class="d-flex flex-row bg-secondary"><span className="ratingd">Ratings</span>3.8</div>
      </div>
      <p class="card-text"><small class="text-muted"> last updated few mins ago</small></p>
    </p>
    {/* <button onClick = {data.map} className="btn btn-primary btn-sm"> */}
      {/* Get to details</button> */}
    
    
  </div>
</div>
</div>


              )
            }
            )
          }
        </div>
      </div>
    </>
  )
}
export default App;