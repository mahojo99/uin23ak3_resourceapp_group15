import ArticleContent from "../components/ArticleContent";
import Resources from '../ressurser';

export default function REACT() {
    return (
        <div id="content">
            {Resources.map(item => item.category === "react" ? <ArticleContent name={item.title} url={item.url} cat={item.category} /> : null)}
        </div>
            
    )
}