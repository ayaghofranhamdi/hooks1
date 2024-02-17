import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
const MovieCard = ({ movie }) => {
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title> {movie.title} </Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Card.Footer></Card.Footer>
          <div> Rate: {movie.rate} </div>
          <ReactStars  count={5} size={24} color2={"#ffd700"} value={movie.rate} edit={false} />

          <Button variant="primary"> trailer</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
