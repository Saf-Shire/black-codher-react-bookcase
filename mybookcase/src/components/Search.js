import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../stylesheets/Search.css';
import { Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap';


const propTypes={};
const defaultProps= {};
const Search = (props) => {
    const [keyword,setKeyword]=useState('');
    const [byAuthor,setByAuthor]=useState('');

 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(keyword,byAuthor);
        setKeyword("");
        setByAuthor("");
        };
        
    return (
        <>
        <Container>
          <Form.Row onSubmit={handleSubmit} className="Searchbar">
              <Form.Label> Search for a Book </Form.Label>
                    <Form.Control
                        className="search-field-1"
                        type='text' 
                        value={keyword}
                        onChange={ (e) => setKeyword(e.target.value)}
                        placeholder="Input keyword..."
                    
                    />
                <Form.Label> Search by Author </Form.Label>
                    <Form.Control
                        className="search-field-2"
                        type='text' 
                        value={byAuthor} 
                        onChange={ (e) => setByAuthor(e.target.value)}
                        placeholder="Input Author(s) name..."
                    />
                <Button as="input" type="submit" value="Submit" active/>{' '}                 
            </Form.Row>  
        </Container>
        </>
        )
    }
    
    Search.propTypes=propTypes;
    Search.defaultProps=defaultProps;
    
    export default Search;