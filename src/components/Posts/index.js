import React, { Component, Fragment } from 'react'
import './index.css'
import {fetchPosts} from '../../../../../cra-redux/cra-redux/src/actions/fetchPosts'
import {connect} from 'react-redux'
class Posts extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
    const { posts } = this.props
    return (
      <Fragment>
        <h3>Posts</h3>
        <div className="flex-row">
            {posts.map((item, i) => (
                <div className="flex-column" key={i}>
              <div className="box-wrapper">
                <div className="box-title">{item.title}</div>
                <div className="box-body">{item.body}</div>
              </div>
                </div>
            ))}
        </div>
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => ({
        posts: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Posts)