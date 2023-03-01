export default function ArticleContent({ url, title }) {

    return (

        <li>
            <a href={url}>{title}</a>
        </li>
    )
}