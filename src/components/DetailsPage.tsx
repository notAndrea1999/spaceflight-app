import { useEffect, useState } from "react";
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DetailedArticle } from "../interfaces/interfaces";

const DetailsPage = () => {
  const params = useParams();
  const [singleArticle, setSingleArticle] = useState<DetailedArticle>();
  const [loader, setLoader] = useState(true);

  const fetchSingleArticleId = async () => {
    const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id);
    if (resp.ok) {
      const data = await resp.json();
      setSingleArticle(data);
      setLoader(false);
      console.log(data);
    }
  };

  useEffect(() => {
    fetchSingleArticleId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="12">
          <h1 className="display-4">
            Articolo fornito da: <br /> <span className="display-2">{singleArticle?.news_site}</span>
          </h1>
        </Col>
        {loader ? (
          <Col xs="6">
            <Card>
              <Card.Img variant="top" src="https://placehold.co/544x350/png" height={"350px"} />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                  <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <>
            <Col xs="6">
              <Card>
                <Card.Img variant="top" src={singleArticle?.image_url} height={"350px"} />
                <Card.Body>
                  <Card.Title>{singleArticle?.title}</Card.Title>
                  <Card.Text>{singleArticle?.summary} </Card.Text>
                  <Card.Text>
                    <span className="fw-medium">Fonte:</span> <br /> {singleArticle?.news_site}{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
export default DetailsPage;
