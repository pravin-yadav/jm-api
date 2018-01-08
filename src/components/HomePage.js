import React, { Component } from "react"
import { Tabs } from "antd"
import HotNews from "./News/HotNews"
import NewNews from "./News/NewNews"
import RisingNews from "./News/RisingNews"
import ControversialNews from "./News/ControversialNews"
import TopNews from "./News/TopNews"

var TabPane = Tabs.TabPane

class Homepage extends Component {
  render() {
    return (
      <div>
        <Tabs type="card" className="tabs-wid">
          <TabPane tab="hot" key="1">
            <HotNews />
          </TabPane>
          <TabPane tab="new" key="2">
            <NewNews />
          </TabPane>
          <TabPane tab="rising" key="3">
            <RisingNews />
          </TabPane>
          <TabPane tab="controversial" key="4">
            <ControversialNews />
          </TabPane>
          <TabPane tab="top" key="5">
            <TopNews />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Homepage
