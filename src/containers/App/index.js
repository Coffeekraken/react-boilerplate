import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from '../Header/Loadable'
import HomePage from "../HomePage/Loadable"

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </div>
)
