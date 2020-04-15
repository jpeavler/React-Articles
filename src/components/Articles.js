import React from 'react';
import {Link} from 'react-router-dom';
import AddArticles from './AddArticles'
import DeleteArticle from './DeleteArticle';

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
        <li>{article.title}<DeleteArticle id={article._id} getArticles={this.getArticles}/></li>)
        return (
            <>
                <h2>Articles</h2>
                <button onClick={this.getArticles}>Refresh Articles</button>
                <ul>
                    {ArticleComponents}
                </ul>
                <h2>Add Articles</h2>
                <AddArticles getArticles={this.getArticles}/>
                <Link to='/'>Home</Link>
            </>
        )
    }

}

export default Articles;