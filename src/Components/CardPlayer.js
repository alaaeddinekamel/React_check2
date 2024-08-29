import Card from 'react-bootstrap/Card';

const CardPlayer =({el})=>{
    return(
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.url} style={{height : '286.4px'}}/>
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>team :{el.team}</Card.Text>
        <Card.Text>nationality : {el.nationality}</Card.Text>
        <Card.Text>jersey Number : {el.jerseyNumber}</Card.Text>
        <Card.Text>Age : {el.age}</Card.Text>
      </Card.Body>
    </Card>
    
    )
}

CardPlayer.defaultProps={
    el  : {
        "name" : "Ronaldinho",
        "team" : "AC Milan",
        "nationality": "Brazil",
        "jerseyNumber" : 10,
        "age": 42,
        "url" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzlg0z6rrPkRUDVZaksc2RmZH7A6EOfwjHz5CHEWo2eJpT84eIIUnH0Lk5gv_pBfgJUg&usqp=CAU"
    }
}
export default CardPlayer