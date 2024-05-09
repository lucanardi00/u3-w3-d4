import React from 'react';
import { Result } from "../Tipi";
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Col } from 'react-bootstrap';

interface ArticlesProps {
    result: Result;
}

const Articles: React.FC<ArticlesProps> = ({ result }) => {
    const { id, title, image_url, published_at } = result;

    return (
        <Col md="3" className="mb-4">
            <Link to={`/article/${id}`} className="article-card-link">
            <Card>
                {image_url && <CardImg  width="100%" src={image_url} alt={title} />}
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>Date of Publication: {new Date(published_at).toLocaleDateString()}</CardSubtitle>
                </CardBody>
            </Card>
            </Link>
        </Col>
    );
}

export default Articles;
