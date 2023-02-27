
import ArtCategory from "./ArtCategory";
import ArtTitle from "./ArtTitle";
import ArtUrl from "./ArtUrl";


export default function ArticleContent({ name, cat, link }) {

    return (
        <article className="">
            <ArtTitle name={name} />
            <ArtUrl link={link} />
            <ArtCategory cat={cat} />
        </article>
    )
}