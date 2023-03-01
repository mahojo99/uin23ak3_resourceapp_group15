import Nav from './Nav';
import Header from './Header';

export default function Layout({ children }) {
    //LayoutBranch
    return (
        <div className='container'>
            <Header />
            <Nav />
            <main>
                {children}
            </main>
        </div>

    )
}