import ArticleContent from "../components/ArticleContent";
import Resources from '../ressurser';

export default function SANITY() {
    return (
        <div id="content">
            {Resources.map(item => item.category === "headless-cms" ? <ArticleContent name={item.title} url={item.url} cat={item.category} /> : null)}
        </div>
            
    )
}