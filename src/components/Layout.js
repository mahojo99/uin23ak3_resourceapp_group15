import Nav from './Nav';
import Header from './Header';
import ArticleContent from './ArticleContent'

export default function Layout({children}) {
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