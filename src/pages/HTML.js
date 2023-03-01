import ArticleContent from '../components/ArticleContent';
import Resources from '../ressurser';

export default function HTML() {
    return (<div id="content">
    {Resources.map((item, index) => item.category === "html" ? <ArticleContent key={index} name={item.title} url={item.url} cat={item.category} /> : null)}
    </div>)
}