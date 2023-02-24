import articles from '../ressurser';
import ArticleContent from './ArticleContent';

export default function ContenPage({}){
    return (
        <main>
            
            <div id="content">
            {articles.map((item) =>{
             return(
             <ArticleContent  
             name={item.title} 
             url={item.url} 
             cat={item.category} 
             />   
            )
        } 
        )}
            </div>
        </main>
    )
}