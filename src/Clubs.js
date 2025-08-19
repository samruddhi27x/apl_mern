import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './imges/ncc.png';
import img2 from './imges/lakshy.jpg';
import img3 from './imges/mlsa.png';
import img4 from './imges/nss.jpg';


function Clubs() {
  return (
    <div style={{display:'flex' , margin:'50px' , gap:'30px' }}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>NCC</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Lakshya Club</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>MLSA</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title>Nss</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     

    
    

    </div>
  );
}

export default Clubs;