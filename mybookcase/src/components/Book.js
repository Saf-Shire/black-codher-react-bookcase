import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { CardGroup, Container } from 'react-bootstrap';
import {Col,Row} from 'react-bootstrap';
import '../stylesheets/Book.css'

const Book = (props) => {
  const { id,
    volumeInfo:{ 
      title, 
      authors, 
      description,
       imageLinks: { thumbnail },
       }
    } = props.book;

  
  const renderAmount = () => {
    if (
      props.book.saleInfo && 
      props.book.saleInfo.listPrice &&
      props.book.saleInfo.listPrice.amount
      ) {
      return '£' + props.book.saleInfo.listPrice.amount;
    }
    return 'No price available';
  };

 
  // // const renderAuthors = () => {
  // //   if (authors.length === 1) {
  // //     return authors;
  // //   }
  // //   return authors.map(author => author + ', ');
  // }
  

  return (
    <>
    <Container>
    <CardGroup> 
    <Card >
      
        <Card.Body>
           <Card.Title className="main">{title} - {authors}</Card.Title>
           <Card.Img  fluid src={thumbnail}  alt="bookImage"  />
            <Card.Subtitle className="priceShown">
              {renderAmount()}
               </Card.Subtitle>
       
                 <hr className="rounded"></hr>
          <Card.Text className="bookDescription">
              {description}
              
          </Card.Text>
          
            <Button id="controlButtons" onClick={() => props.addBook(id)}> Add +</Button>
          <Button id="controlButtons" onClick={() => props.removeBook(id)}> Remove -</Button> 
         
        </Card.Body>
    </Card>
    </CardGroup>
    </Container>
    </>
  );
}
Book.propTypes ={
    book: PropTypes.shape({
      volumeInfo:PropTypes.shape({
        title:PropTypes.string.isRequired , 
        authors:PropTypes.array.isRequired , 
        description:PropTypes.string.isRequired , 
        imageLinks:PropTypes.shape({
          thumbnail:PropTypes.string.isRequired
        }),
      }),
      saleInfo: PropTypes.shape({
        listPrice:PropTypes.shape({
          amount:PropTypes.number.isRequired,  
      }),
    }),  
  }),
};

// Book.defaultProps ={
//   title:'This is the title'
// };

export default Book;