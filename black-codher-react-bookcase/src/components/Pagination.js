import React from 'react';
import '../stylesheets/Pagination.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


const Pagination = ({ booksPerPage, totalBooks, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
      pageNumbers.push(i);
    }
    function handlePagination (event,number){
      event.preventDefault();
      paginate(number);
    }

    return (
      <Container>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a onClick={(event) => handlePagination(event,number)} href='!#' className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
     </Container>
    );
  };
  

 export default Pagination;