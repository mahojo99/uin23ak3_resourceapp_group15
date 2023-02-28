import ArtCategory from "./ArtCategory";
import ArtTitle from "./ArtTitle";
import ArtUrl from "./ArtUrl";


export default function ArticleContent({ name, cat, url }) {

    return (

        <article>
            <ArtTitle name={name} />
            <ArtUrl link={url} title={name} />
            <ArtCategory cat={cat} />
        </article>
    )
}