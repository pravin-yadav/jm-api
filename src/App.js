import React, { Component } from "react"
import Homepage from "./components/HomePage"
import { Switch, Route } from "react-router"
import HotComments from "./components/Comments/HotComments"
import NewComments from "./components/Comments/NewComments"
import ControversialComments from "./components/Comments/ControversialComments"
import RisingComments from "./components/Comments/RisingComments"
import TopComments from "./components/Comments/TopComments"

require("antd/dist/antd.css")
require("./App.css")

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/hotcomment/r/:subreddit/comments/:id"
            component={HotComments}
          />
          <Route
            path="/newcomment/r/:subreddit/comments/:id"
            component={NewComments}
          />
          <Route
            path="/controversialcomment/r/:subreddit/comments/:id"
            component={ControversialComments}
          />
          <Route
            path="/risingcomment/r/:subreddit/comments/:id"
            component={RisingComments}
          />
          <Route
            path="/topcomment/r/:subreddit/comments/:id"
            component={TopComments}
          />
        </Switch>
      </div>
    )
  }
}

export default App
