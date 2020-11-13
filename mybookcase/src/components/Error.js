import React,{useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



function Error () {
    const [show, setShow] = useState(true);

  if (show) {
    return (
        <React.Fragment>
           <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
            Please return to previous page.
        </p>
      </Alert>   
        </React.Fragment>
    
    );
  }
  return <Button variant="danger" onClick={() => setShow(true)}>Show Alert</Button>;
}
 
export default Error ;