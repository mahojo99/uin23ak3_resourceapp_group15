import Nav from './Nav';
import Header from './Header';
import ArticleContent from './ArticleContent'

export default function Layout() {
    //LayoutBranch
    return (
        <body>
            <div className='container'>
                <Header />
                <Nav />
                <main>
                    <ArticleContent />
                </main>

            </div>
        </body>
    )
}