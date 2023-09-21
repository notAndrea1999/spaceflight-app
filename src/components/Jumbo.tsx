import { Container } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <Container className="bg-dark text-white" style={{ marginTop: "100px" }}>
      <div>
        <h1 className="display-4">Welcome to Spaceflight</h1>
        <p>Best news Web-Site in 2023</p>
        <hr className="my-4" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam soluta sequi consequuntur omnis! Ducimus
          voluptas obcaecati, cum corrupti ipsum adipisci?
        </p>
      </div>
    </Container>
  );
};

export default Jumbotron;
