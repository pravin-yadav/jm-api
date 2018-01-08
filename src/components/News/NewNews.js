import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import moment from "moment"

class NewNews extends Component {
  state = {
    newnews: []
  }
  componentDidMount() {
    axios
      .get("https://www.reddit.com/r/all/new/.json")
      .then(result => {
        this.setState({ newnews: result.data.data.children })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    const newdata = this.state.newnews.map(newnew => {
      return (
        <div key={newnew.data.id} className="hot-data">
          {newnew.data.thumbnail === ("self" || "default") ? (
            <img
              className="avatar"
              src="http://scyfilove.com/wp-content/themes/cw-magazine/images/no-featured-image.png"
              alt=""
            />
          ) : (
            <img className="avatar" src={newnew.data.thumbnail} alt="" />
          )}
          <div className="data-content">
            <div className="title">{newnew.data.title}</div>
            <div className="submitted">
              submitted {moment(newnew.data.created_utc).format("h")} hours ago
              by {newnew.data.author} to {newnew.data.subreddit_name_prefixed}
            </div>
            <Link
              to={`/newcomment/r/${newnew.data.subreddit}/comments/${
                newnew.data.id
              }`}
              className="data-comment"
            >
              {newnew.data.num_comments} comments{" "}
            </Link>
            <a className="data-comment"> share </a>
            <a className="data-comment"> save </a>
            <a className="data-comment"> hide </a>
            <a className="data-comment"> report </a>
          </div>
        </div>
      )
    })
    return <div>{newdata}</div>
  }
}

export default NewNews
