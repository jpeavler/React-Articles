import React from 'react';
import {Link} from 'react-router-dom';
import AddArticles from './AddArticles'
import DeleteArticle from './DeleteArticle';
import UpdateArticle from './UpdateArticle';

class Articles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles: []
        }
        this.getArticles = this.getArticles.bind(this);
    }
    getArticles() {
        fetch('http://localhost:4000/api/articles')
            .then(response => response.json())
            .then(articles => this.setState({articles}))
    }

    componentDidMount(){
        this.getArticles();
    }
    
    render(){
        const ArticleComponents = this.state.articles.map(article => 
        <li>
            {article.title}<DeleteArticle id={article._id} getArticles={this.getArticles}/>
            <ul>
                <li>Id: {article._id}</li>
                <li>Link: {article.link}</li>
            </ul>
        </li>)
        return (
            <>
                <h1>Articles</h1>
                <button onClick={this.getArticles}>Refresh Articles</button>
                <ul>
                    {ArticleComponents}
                </ul>
                <h2>Add Articles</h2>
                <AddArticles getArticles={this.getArticles}/>
                <h2>Update Article</h2>
                <UpdateArticle getArticles={this.getArticles}/>
                <Link to='/'>Home</Link>
            </>
        )
    }

}

export default Articles;