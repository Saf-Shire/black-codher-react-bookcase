import React from 'react';
import { Container } from 'react-bootstrap';
import '../stylesheets/About.css';


const About= () => {
    return (
        <React.Fragment>
            <Container fluid id="about">
               <div >
                    <h2>Welcome to Bookish</h2>
                         <p>Bookish is an app that displays a list of books
                            but also allows you to search for any other books.
                            <br></br>
                            The user can search for their book either by keyword or by author.
                            <br></br>
                            The "Add + " button will save it to your local bookcase where you can view your personal booklist.
                            <br></br>
                            If you change your mind you can remove it by clicking "Remove - ".
                        </p>
                </div>   
            </Container>
              
        </React.Fragment>
    
    );
}

export default About;