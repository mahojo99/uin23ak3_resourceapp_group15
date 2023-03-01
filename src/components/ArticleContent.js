import ArtCategory from "./ArtCategory";
import ArtTitle from "./ArtTitle";
import ArtUrl from "./ArtUrl";



export default function ArticleContent({url, title}) {

    return (

        <li>
            <a href={url}>{title}</a>
        </li>
    )
}