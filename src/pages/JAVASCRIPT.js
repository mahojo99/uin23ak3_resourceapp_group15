import ArticleContent from "../components/ArticleContent";
import Resources from '../ressurser';

export default function JAVASCRIPT() {
    return (
        <div id="content">
            {Resources.map(item => item.category === "javascript" ? <ArticleContent name={item.title} url={item.url} cat={item.category} /> : null)}
        </div>
            
    )
}