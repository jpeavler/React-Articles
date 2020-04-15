import React from 'react';

class UpdateArticle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id
        }
        this.updateArticle = this.updateArticle.bind(this);
        this.handleId = this.handleId.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.handleValue = this.handleValue.bind(this);
    }

    updateArticle(event){
        event.preventDefault();
        fetch(`http://localhost:4000/api/articles/${this.state.id}`, {
            method: 'PATCH'
        }).then(this.props.getArticles)
    }

    handleId(event){
        this.setState({id: event.target.value});
    }
    handleKey(event){
        this.setState({key: event.target.value});
    }
    handleValue(event){
        this.setState({value: event.target.value});
    }
    render(){
        return(
            <form onSubmit={this.updateArticle}>
                <input placeholder="Article id" onChange={this.handleId} required/>
                <input placeholder="Value to Change" onChange={this.handleKey} required/>
                <input placeholder="Change Value to" onChange={this.handleValue} required/>
                <input type="submit" value="Update Article"/>
            </form>
        )
    }
}
export default UpdateArticle