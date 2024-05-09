import React from 'react';
import { Result } from '../Tipi';

interface ArticleDetailProps {
    article: Result;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
    const { title, image_url, published_at, summary } = article;

    return (
        <div className="article-detail">
            {image_url && <img src={image_url} alt={title} />}
            <h2>{title}</h2>
            <p>Published on: {new Date(published_at).toLocaleDateString()}</p>
            <p>{summary}</p>
        </div>
    );
}

export default ArticleDetail;