import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Article } from "../interfaces/interfaces";
import SingleArticle from "./SingleArticle";

const NewsFetchComponent = () => {
  const [news, setNews] = useState<Article[]>([]);

  const [loader, setLoader] = useState(true);

  const fetchedNews = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const data = await resp.json();
        const result = await data.results;
        setNews(result);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedNews();
  }, []);

  return (
    <Container>
      {loader ? (
        <Spinner variant="success"></Spinner>
      ) : (
        <>
          <Row>
            <Col xs="12">
              <h1 className="display-4 mt-3">Tutte le notizie in tempo reale</h1>
            </Col>
          </Row>
          <Row>
            {news.map((article) => (
              <Col xs={12} sm={6} md={3} lg={4} key={`id-${article.id}`} className="gy-4">
                <SingleArticle article={article} />
              </Col>
            ))}
          </Row>{" "}
        </>
      )}
    </Container>
  );
};

export default NewsFetchComponent;
