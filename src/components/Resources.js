import resources from "../ressurser";
import ArticleContent from "./ArticleContent";

export default function Resources({id}) {
    return (<div id="content">
        <ul>
            {resources.map((item, index) => item.category === id ? <ArticleContent key={index} url={item.url} title={item.title}  /> : null)}   
        </ul>
    
    </div>)
}