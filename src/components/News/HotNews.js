import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import moment from "moment"

class HotNews extends Component {
  state = {
    hotnews: []
  }
  componentDidMount(props) {
    axios
      .get("https://www.reddit.com/r/all/.json")
      .then(result => {
        this.setState({ hotnews: result.data.data.children })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    console.log(this)
    const hotdata = this.state.hotnews.map(hotnew => {
      return (
        <div key={hotnew.data.id} className="hot-data">
          {hotnew.data.thumbnail === ("self" || "default") ? (
            <img
              className="avatar"
              src="http://scyfilove.com/wp-content/themes/cw-magazine/images/no-featured-image.png"
              alt=""
            />
          ) : (
            <img className="avatar" src={hotnew.data.thumbnail} alt="" />
          )}
          <div className="data-content">
            <div className="title">{hotnew.data.title}</div>
            <div className="submitted">
              submitted {new moment(hotnew.data.created).format("h")} hours ago
              by {hotnew.data.author} to {hotnew.data.subreddit_name_prefixed}
            </div>
            <Link
              to={`/hotcomment/r/${hotnew.data.subreddit}/comments/${
                hotnew.data.id
              }`}
              className="data-comment"
            >
              {hotnew.data.num_comments} comments{" "}
            </Link>
            <a className="data-comment"> share </a>
            <a className="data-comment"> save </a>
            <a className="data-comment"> hide </a>
            <a className="data-comment"> report </a>
          </div>
        </div>
      )
    })

    return <div>{hotdata}</div>
  }
}

export default HotNews
