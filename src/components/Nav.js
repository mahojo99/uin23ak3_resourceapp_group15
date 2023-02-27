import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <Link to="html" href="/HTML">HTML</Link>
            <Link to="css" href="/CSS">CSS</Link>
            <Link to="javascript" href="/JAVASCRIPT">JavaScript</Link>
            <Link to="react" href="/REACT">React</Link>
            <Link to="sanity" href="/SANITY">Sanity and headless CMS</Link>
        </nav>)
}