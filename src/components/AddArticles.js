import React from 'react';
//import {Link} from 'react-router-dom';

class AddArticles extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            link: '',
            desc: '',
            topics: []
        }

        this.addArticle = this.addArticle.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleTopic1 = this.handleTopic1.bind(this);
        this.handleTopic2 = this.handleTopic2.bind(this);
        this.handleTopic3 = this.handleTopic3.bind(this);
    }
    addArticle(event) {
        event.preventDefault();
        fetch('http://localhost:4000/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify([this.state])
        }).then(response => response.json())
        .then(articles => this.setState({articles}))
        .then(this.props.getArticles)
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }
    handleAuthor(event) {
        this.setState({author: event.target.value});
    }
    handleLink(event) {
        this.setState({link: event.target.value});
    }
    handleDesc(event) {
        this.setState({desc: event.target.value});
    }
    handleTopic1(event) {
        this.setState({topic1: event.target.value});
    }
    handleTopic2(event) {
        this.setState({topic2: event.target.value});
    }
    handleTopic3(event) {
        this.setState({topic3: event.target.value});
    }
    
    render(){
        return (
            <>
                <form onSubmit={this.addArticle}>
                    <input placeholder="Title" onChange={this.handleTitle} required/>
                    <input placeholder="Author" onChange={this.handleAuthor}/>
                    <input placeholder="Link" onChange={this.handleLink} required/>
                    <input placeholder="Desc" onChange={this.handleDesc}/>
                    <input placeholder="Topic 1" onChange={this.handleTopic1}/>
                    <input placeholder="Topic 2" onChange={this.handleTopic2}/>
                    <input placeholder="Topic 3" onChange={this.handleTopic3}/>
                    <input type="submit" value="Add Article"/>
                </form>
            </>
        )
    }

}

export default AddArticles;