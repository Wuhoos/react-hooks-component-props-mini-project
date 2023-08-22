function Article({post}) {

    // console.log(post.minutes)
    const minutes = post.minutes

    function displayEmojis(){
        let emojis =''

        if(minutes < 30){
            // return '☕️'
            for(let counter = 0; counter < minutes; counter+=5){
                emojis += '☕️'
            }
        } else {
            for(let counter = 0; counter < minutes; counter+=10){
                emojis += '🍱'
            }
        }       
        return emojis
    }

    return (
        <article>
            <h3>{post.title}</h3>
            <small>{post.date !== undefined ? post.date : "January 1, 1970"}  {displayEmojis()} {minutes} mins read</small>
            <p>{post.preview}</p>
        </article>
    )
}


export default Article;