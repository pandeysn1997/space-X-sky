// import React from 'react';
// import ReactPaginate from 'react-paginate';
// function Pagination() {
//     const [items, setItems] = useState([]);

//   const [pageCount, setpageCount] = useState(0);

//   let limit = 10;

//   useEffect(() => {
//     const getComments = async () => {
//       const res = await fetch(
//         `https://api.spacexdata.com/v4/launches/past/${id}`
        
//       );

//       const data = await res.json();
//       const total = res.headers.get("x-total-count");
//       setpageCount(Math.ceil(total / limit));
//       // console.log(Math.ceil(total/12));
//       setItems(data);
//     };

//     getComments();
//   }, [limit]);

  
//   const fetchComments = async (currentPage) => {
//     const res = await fetch(
//         `https://api.spacexdata.com/v4/launches/past/${id}`
      
//     );
//     const data = await res.json();
//     return data;
//   };

// const handlePageClick = () =>{
//     console.log(data.selected);

// let currentPage = data.selected + 1;

//     const commentsFormServer = fetchComments(currentPage);

//     setItems(commentsFormServer);
//     // scroll to the top
//     //window.scrollTo(0, 0)
//   };
  
//         return (
           
//                 product.map((missions) => {
//     <div className="container">
//      <div className="col-sm-6 col-md-4 v my-2" key = {missions.id} >
//                   <div className="container mt-5">
//                     <div className='col'>
//                       <div className="card luci" style={{ width: "auto" }} key={missions.id}>
//                         <img class="img-responsive" src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png" alt="mission" />
//                         <div className="card-body expo">
//                           <h4 className="card-title pop">{missions.name}</h4>
//                           <p className="card-text">
//                             {/* {missions.details} */}
//                           </p>

//                         </div>
//                       </div>
//                     </div>
//                     <br/>
//                   </div>
//                 </div>

   
//          <ReactPaginate
//         previousLabel={"previous"}
//         nextLabel={"next"}
//         breakLabel={"..."}
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={3}
//         onPageChange={handlePageClick}
//         containerClassName={"pagination justify-content-center"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         nextLinkClassName={"page-link"}
//         breakClassName={"page-item"}
//         breakLinkClassName={"page-link"}
//         activeClassName={"active"}
//       />
//     </div>
// })
//     )}
// export default Pagination;