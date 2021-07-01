import React from 'react'
import Article from './Article'

function ArticleList(props) {
     return (
        <main>
        {props.posts.map (post => {
          return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        })}
     </main>
        )
    }







export default ArticleList

// Make a ArticleList component as a child of App. It should return:

// a <main> element with the following components inside:
// an array of Article components (one component for each post passed down 
// as a prop to ArticleList)
// make sure to assign a unique key prop to each Article
