import React, { Component } from "react"
import axios from "axios"

class HotComments extends Component {
  state = {
    comments: [],
    replies: []
  }
  componentDidMount() {
    let id = this.props.match.params.id
    let subreddit = this.props.match.params.subreddit
    axios
      .get(`https://www.reddit.com/r/${subreddit}/comments/${id}/.json`)
      .then(response => {
        this.setState({
          comments: response.data[1].data.children,
          replies: response.data[1].data.children[0].data.replies.data.children
        })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    const HotComment = this.state.comments.map(comment => {
      return <div key={comment.data.id}>---{comment.data.body}</div>
    })

    const HotReplies = this.state.replies.map(reply => {
      return <div>{reply.data.body}</div>
    })

    return (
      <div>
        <h1>Comment :</h1>
        {HotComment}
        <h1>Reply :</h1> {HotReplies}
      </div>
    )
  }
}

export default HotComments
