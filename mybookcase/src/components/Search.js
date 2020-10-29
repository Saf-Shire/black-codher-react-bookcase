import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


const Search = (props) => {
 
    const handleSubmit = (event) => {
        event.preventDefault();
        props.findBooks(props.keyword);
        };
        
    return (
        <Form onSubmit={handleSubmit}> 
        <Row>
            <Col> {props.keyword && 'Searching for term:' + props.keyword}
        <input 
            type='text' 
            value={props.keyword} 
            onChange={ (e) => {props.setKeyword(e.target.value)}}
        />
        </Col>
        <Col>
       <Button as="input" type="submit"  value="Submit" active />{' '}
       </Col>
        </Row>
        
        </Form>
    )
    }
    export default Search;