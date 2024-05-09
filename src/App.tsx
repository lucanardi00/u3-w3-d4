import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./Routes/HomePage"
import ArticleDetailPage from './Routes/ArticleDetailPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  )
}

export default App
