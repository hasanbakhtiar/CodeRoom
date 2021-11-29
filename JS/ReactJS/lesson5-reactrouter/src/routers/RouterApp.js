import React from 'react'
import Nav from '../components/Nav'
import HomePage from '../components/Pages/HomePage'
import AboutPage from '../components/Pages/AboutPage'
import NotFoundPage from '../components/Pages/NotFoundPage'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

const RouterApp = ()=>{
    return(
        <BrowserRouter>
        <Nav />
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route  component={NotFoundPage}></Route>

            
            </Switch>

        </BrowserRouter>
    )
}

export default RouterApp
