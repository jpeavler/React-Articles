import React from 'react';

class DeleteArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
        this.delArticle = this.delArticle.bind(this);
    }

    delArticle(event){
        event.preventDefault();
        fetch(`http://localhost:4000/api/articles/${this.state.id}`, {
            method: 'DELETE'
        }).then(response => response.json())
        .then(articles => this.setState({articles}))
        .then(this.props.getArticles)
    }
    render(){
        return(
            <button onClick={this.delArticle}>Delete</button>
        )
    }
}
export default DeleteArticle