import React from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import User from './User';
import Resume from './Resume';

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/blog">blog</Link></li>
                    <li><Link to="/resume">resume</Link></li>
                    <li><Link to="/user">user</Link></li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/home" component={ Home } />
                        <Route exact path="/blog" component={ Blog } />
                        <Route exact path="/resume" component={ Resume } />
                        <Route exact path="/user" component={ User } />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter;
