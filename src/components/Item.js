import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
return(
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>
      {item.username}
      </Card.Text>
      <Button variant="primary">Detalle</Button>
    </Card.Body>
  </Card>
);
    

}
export default Item;