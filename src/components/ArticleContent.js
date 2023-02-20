
import ArtCategory from "./ArtCategory";
import ArtTitle from "./ArtTitle";
import ArtUrl from "./ArtUrl";


export default function ArticleContent({ name, cat, link }) {

    return (
        <article className="">
            <ArtTitle name={name} />
            <ArtCategory cat={cat} />
            <ArtUrl link={link} />

        </article>
    )
}