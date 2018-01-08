import React, { Component } from "react"
import axios from "axios"

class RisingCommments extends Component {
  state = {
    comments: []
  }
  componentDidMount() {
    let id = this.props.match.params.id
    let subreddit = this.props.match.params.subreddit
    axios
      .get(`https://www.reddit.com/r/${subreddit}/comments/${id}/.json`)
      .then(response => {
        this.setState({
          comments: response.data[1].data.children
        })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    var NewComment = this.state.comments.map(comment => {
      return <div key={comment.data.id}>--- {comment.data.body}</div>
    })

    return (
      <div>
        <h1>Comment :</h1> {NewComment}
      </div>
    )
  }
}

export default RisingCommments
