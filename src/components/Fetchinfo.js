import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";




const FetchFromApi = () => {
  const [product, setProduct] = useState([]);
  const [look, setLook] = useState(12);
  const [pageCount, setpageCount] = useState(0);



  const getData = async () => {
    const response = await fetch("https://api.spacexdata.com/v4/launches/past");
    setProduct(await response.json());
    // const data = await response.json();
    //  return data;


  };
  const loadMore = () => {
    setLook(look + 12)
  }
  useEffect(() => {
    getData();

  }, []);
  // const handlePageClick = () =>{
  //       console.log(data.selected);
  // }



  const renderData = (missions, index) => {
    return (

      <div className="col-xs-12 col-sm-4 col-md-3 col-lg-3"  key={missions.id}>

        <div className="cards hover">

          <div className="grid-container">
            <div className='grid-item'>
            
              <Link to={`/details?id=${missions.id}`}>{missions.name} <img class="img-responsive" src={missions.links.patch.small} className="rectangle" /> </Link>
              <p>Flight Number:{missions.flight_number}</p>
            


          
        </div>

      </div>


       </div>  
       </div>


    )
  }
  return (
    <div id="cards_landscape_wrap-2">
      <div class="container">
        <div class="row">
          {product.slice(0, look).map(renderData)}
        </div>
      </div>
      {look < product.length && (
        <button className='button' onClick={loadMore}><span>Load More</span></button>
      )}

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={15}
        pageRangeDisplayed={20}
      //  onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  )



}
export default FetchFromApi;