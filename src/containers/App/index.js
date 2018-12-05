import React from "react"
import { Switch, Route } from "react-router-dom"

import FullscreenVideo from "../../components/FullscreenVideo"
import video from "../../assets/disaster.mp4"
import Header from "../Header/Loadable"
import HomePage from "../HomePage/Loadable"
import CounterPage from "../CounterPage/Loadable"

import "./style.css"

export default () => (
  <div>
    <Header />
    <FullscreenVideo autoPlay muted loop src={video}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/counter" component={CounterPage} />
      </Switch>
    </FullscreenVideo>
  </div>
)
