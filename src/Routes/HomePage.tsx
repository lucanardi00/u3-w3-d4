import {useState, useEffect} from "react";
import { Result } from "../Tipi";
import Articles from '../components/Articles'
import { Row } from 'react-bootstrap';
const HomePage: React.FC = () => {
    const [articles, setArticles] = useState<Result[]>([])
    useEffect (() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then(response => response.json())
        .then(data => setArticles(data.results))
        .catch(error => console.error('Errore', error))
    }, [])
return(
    <div>
            <Row>
                {articles.map((result, index) => (
                    <Articles key={index} result={result} />
                ))}
            </Row>
        </div>
)
}

export default HomePage