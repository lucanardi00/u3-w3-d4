import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Result } from '../Tipi';
import ArticleDetail from '../components/ArticleDetail';

const ArticleDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [article, setArticle] = useState<Result | null>(null);

    useEffect(() => {
        // Fetch article data based on id
        fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
            .then(response => response.json())
            .then(data => setArticle(data))
            .catch(error => console.error('Error fetching article', error));
    }, [id]);

    return (
        <div>
            {article ? (
                <ArticleDetail article={article} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default ArticleDetailPage;