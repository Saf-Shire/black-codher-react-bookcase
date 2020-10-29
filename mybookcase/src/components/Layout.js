import React from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
 <Container fluid>
 <Row>
     {props.children}
</Row>


</Container>
)


export default Layout ;