import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import moment from "moment"

class ControversialNews extends Component {
  state = {
    controversialnews: []
  }
  componentDidMount() {
    axios
      .get("https://www.reddit.com/r/all/controversial/.json")
      .then(result => {
        this.setState({ controversialnews: result.data.data.children })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    const controversialdata = this.state.controversialnews.map(
      controversialnew => {
        return (
          <div key={controversialnew.data.id} className="hot-data">
            {controversialnew.data.thumbnail === ("self" || "default") ? (
              <img
                className="avatar"
                src="http://scyfilove.com/wp-content/themes/cw-magazine/images/no-featured-image.png"
                alt=""
              />
            ) : (
              <img
                className="avatar"
                src={controversialnew.data.thumbnail}
                alt=""
              />
            )}
            <div className="data-content">
              <div className="title">{controversialnew.data.title}</div>
              <div className="submitted">
                submitted{" "}
                {moment(controversialnew.data.created_utc).format("h")} hours
                ago by {controversialnew.data.author} to{" "}
                {controversialnew.data.subreddit_name_prefixed}
              </div>
              <Link
                to={`/controversialcomment/r/${
                  controversialnew.data.subreddit
                }/comments/${controversialnew.data.id}`}
                className="data-comment"
              >
                {controversialnew.data.num_comments} comments{" "}
              </Link>
              <a className="data-comment"> share </a>
              <a className="data-comment"> save </a>
              <a className="data-comment"> hide </a>
              <a className="data-comment"> report </a>
            </div>
          </div>
        )
      }
    )
    return <div>{controversialdata}</div>
  }
}

export default ControversialNews
