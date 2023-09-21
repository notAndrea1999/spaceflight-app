import { Card } from "react-bootstrap";
import { Article } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

interface SingleArticleProps {
  article: Article;
}
const SingleArticle = ({ article }: SingleArticleProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Card.Img
        variant="top"
        src={article.image_url}
        height={"250px"}
        style={{ objectFit: "cover", cursor: "pointer" }}
        onClick={() => navigate("/details/" + article.id)}
      />
      <Card.Body>
        <Card.Title className="text-truncate">{article.title}</Card.Title>
        <Card.Text className="text-truncate">{article.summary}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
