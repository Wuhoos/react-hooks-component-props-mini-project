
import Article from "./Article";


function ArticleList({posts}) {
   
    
    return (
        <main>
            {posts.map(post => {
                return <Article key={post.id} post={post}/>
            })}
        </main>
    )
}

export default ArticleList;