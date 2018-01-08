import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import moment from "moment"

class TopNews extends Component {
  state = {
    topnews: []
  }
  componentDidMount() {
    axios
      .get("https://www.reddit.com/r/all/top/.json")
      .then(result => {
        this.setState({ topnews: result.data.data.children })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    const topdata = this.state.topnews.map(topnew => {
      return (
        <div key={topnew.data.id} className="hot-data">
          {topnew.data.thumbnail === ("self" || "default") ? (
            <img
              className="avatar"
              src="http://scyfilove.com/wp-content/themes/cw-magazine/images/no-featured-image.png"
              alt=""
            />
          ) : (
            <img className="avatar" src={topnew.data.thumbnail} alt="" />
          )}
          <div className="data-content">
            <div className="title">{topnew.data.title}</div>
            <div className="submitted">
              submitted {new moment(topnew.data.created_utc).format("h")} hours
              ago by {topnew.data.author} to{" "}
              {topnew.data.subreddit_name_prefixed}
            </div>
            <Link
              to={`/topcomment/r/${topnew.data.subreddit}/comments/${
                topnew.data.id
              }`}
              className="data-comment"
            >
              {topnew.data.num_comments} comments{" "}
            </Link>
            <a className="data-comment"> share </a>
            <a className="data-comment"> save </a>
            <a className="data-comment"> hide </a>
            <a className="data-comment"> report </a>
          </div>
        </div>
      )
    })
    return <div>{topdata}</div>
  }
}

export default TopNews
