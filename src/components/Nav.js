import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav id="navBar">
            <Link to="/html" >HTML</Link>
            <Link to="/css" >CSS</Link>
            <Link to="/javascript" >JavaScript</Link>
            <Link to="/react" >React</Link>
            <Link to="/sanity">Sanity and headless CMS</Link>
        </nav>
    )
}