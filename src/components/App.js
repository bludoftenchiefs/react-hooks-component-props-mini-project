import React from "react";
import blogData from "../data/blog";
import ArticleList from './ArticleList';
import About from './About';
import Header from './Header';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blog={blogData.name}/>
      <ArticleList posts={blogData.posts}/>
      <About img={blogData.img} about={blogData.about}/>
    </div>
  );
}

export default App;



