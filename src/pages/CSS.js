import ArticleContent from "../components/ArticleContent";
import Resources from '../ressurser';

export default function CSS() {
    return (
        <div id="content">
            {Resources.map(item => item.category === "css" ? <ArticleContent name={item.title} url={item.url} cat={item.category} /> : null)}
        </div>

    )
}