import React from 'react';
import './App.css';
import MyClock from './components/Clock';
// import Pagination from './components/Pagination';

import Fetchinfo from './components/Fetchinfo';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Details from './components/Details';
const App = () =>{
  return(
    <>
    <div>
      {/* <Pagination/> */}
    <BrowserRouter>
    <Routes>
   
    <Route path ="/" element = {<Fetchinfo/>}/>
    <Route path = "/details" element = {<Details/>}/>
  
    </Routes>
    </BrowserRouter>
    <MyClock/>
    
    </div>
    </>
  );
};


export default App;