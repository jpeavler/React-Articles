import React from 'react';

class UpdateArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
        this.updateArticle = this.updateArticle.bind(this);
    }

    updateArticle(event){
        event.preventDefault();
        fetch(`http://localhost:4000/api/articles/${this.state.id}`, {
            method: 'DELETE'
        }).then(response => response.json())
        .then(articles => this.setState({articles}))
        .then(this.props.getArticles)
    }
    render(){
        return(
            <form>

            </form>
        )
    }
}
export default UpdateArticle