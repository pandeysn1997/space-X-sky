import React, { useEffect, useState } from 'react'
//import './App.css';

const App = () => {
  const [product, setProduct] = useState([])

  const getInfo = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launches/past");
    setProduct(await response.json());


  }
  useEffect(() => {
    getInfo();

  }, []);

  return (
    <>
      <h1 className="text centre">SpaceX Past Launches </h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {





            product.map((missions) => {
              return (
                <><div class="row row-cols-1 row-cols-md-3 g-4">
                  <div className="container mt-5">
                    <div className='col'>


                      <div className="card" style={{ width: 400 }} key={missions.id}>
                        <img class="img-responsive" src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" alt="mission" />
                        <div className="card-body">
                          <h4 className="card-title">{missions.name}</h4>
                          <p className="card-text">
                            {missions.details}
                          </p>

                        </div>
                      </div>
                    </div>
                    <br />




                  </div>
                </div>

                </>



              )
            }
            )}

        </div>
      </div>
      <div>
        <div className="container-fluid mt-5">



        <ul class="pagination pagination-lg">
            <li>
              <a href=" ">1</a>
            </li>
            <li className="active">
              <a href=" ">2</a>
            </li>
            <li>
              <a href=" ">3</a>
            </li>
            <li>
              <a href=" ">4</a>
            </li>
            <li>
              <a href=" ">5</a>
            </li>
          </ul>
        </div>




      </div>
    </>
  )
}
export default App;
