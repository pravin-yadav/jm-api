import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import moment from "moment"

class RisingNews extends Component {
  state = {
    risingnews: []
  }
  componentDidMount() {
    axios
      .get("https://www.reddit.com/r/all/rising/.json")
      .then(result => {
        this.setState({ risingnews: result.data.data.children })
      })
      .catch(error => {
        throw error
      })
  }
  render() {
    const risingdata = this.state.risingnews.map(risingnew => {
      return (
        <div key={risingnew.data.id} className="hot-data">
          {risingnew.data.thumbnail === ("self" || "default") ? (
            <img
              className="avatar"
              src="http://scyfilove.com/wp-content/themes/cw-magazine/images/no-featured-image.png"
              alt=""
            />
          ) : (
            <img className="avatar" src={risingnew.data.thumbnail} alt="" />
          )}
          <div className="data-content">
            <div className="title">{risingnew.data.title}</div>
            <div className="submitted">
              submitted {moment(risingnew.data.created_utc).format("h")} hours
              ago by {risingnew.data.author} to{" "}
              {risingnew.data.subreddit_name_prefixed}
            </div>
            <Link
              to={`/risingcomment/r/${risingnew.data.subreddit}/comments/${
                risingnew.data.id
              }`}
              className="data-comment"
            >
              {risingnew.data.num_comments} comments{" "}
            </Link>
            <a className="data-comment"> share </a>
            <a className="data-comment"> save </a>
            <a className="data-comment"> hide </a>
            <a className="data-comment"> report </a>
          </div>
        </div>
      )
    })
    return <div>{risingdata}</div>
  }
}

export default RisingNews
