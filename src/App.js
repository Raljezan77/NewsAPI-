import ReactPaginate from 'react-paginate';
import './App.css';
import React from 'react';
import Articlelist from './components/Articlelist';
function App() { 

  

  const handlePageClick = (data)=>{

    console.log("data.selected")
    let currentPage= data.selected +1
  }
  
  return (
      <div className="App">
      <Articlelist/>
      <ReactPaginate
      previousLabel={'pervious'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination  justfiy-content-center'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      previousClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextClassName={'page-item'}
      nextLinkClassName={'page-link'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeClassName={'active'}
      />
    </div>
  );
}

export default App;