// import React from 'react'
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';


// const Cardd = () => {
//   return (
//     <Card style={{ width: '18rem' }}>
//     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//     <Card.Body>
//       <Card.Title>Card Title</Card.Title>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the
//         bulk of the card's content.
//       </Card.Text>
//     </Card.Body>
//     <ListGroup className="list-group-flush">
//       <ListGroup.Item>Cras justo odio</ListGroup.Item>
//       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//       <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//     </ListGroup>
//     <Card.Body>
//       <Card.Link href="#">Card Link</Card.Link>
//       <Card.Link href="#">Another Link</Card.Link>
//     </Card.Body>
//   </Card>
//   )
// }

// export default Cardd


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import profile from "./henry-cavill-profile.jpg"

function Cardd() {

  const imgStyle = {
    width: '200px', // Adjust the width as needed
    height: '200px', // Maintain aspect ratio
    margin: '0 auto',
    backgroundSize: 'cover',
    backgroundPosition: 'fixed',
    backgroundRepeat: 'no-repeat',
    //borderRadius: '25%', // Apply a circular border radius
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  };
  const text = {
    textAlign: 'center',
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile} style={imgStyle}/>
      <Card.Body>
        <Card.Title style={text}>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cardd;

