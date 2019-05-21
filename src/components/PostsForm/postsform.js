import React, {Component, Fragment} from 'react'

class PostsForm extends Component {
    state = {
        title: '',
        body: '',
    }
    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const posts = {
            title: this.state.title,
            body: this.state.body,
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
            .then(res => res.json())
            .then(posts => console.log(posts))
    }
    render(){
        const {title, body} = this.state
        return(
          <Fragment>
                <h3>Post Form</h3>
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <div className="form-label">Title</div>
                      <div className="form-input"><input type="text" name="title" value={title} onChange={this.handleChange}/></div>
                  </div>
                  <div className="form-group">
                      <div className="form-label">Body</div>
                      <div className="form-input"><input type="textarea" name="body" value={body} onChange={this.handleChange}/></div>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
              </form>
          </Fragment>
        )
    }
}

export default PostsForm