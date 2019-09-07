import React from 'react';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../src/Header';
import Signup from './Signup';
import Dashboard from './Dashboard';




export function Container() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        maxWidth: '100vw'
    }}>
        <Header />
        <Switch>
            <Route path='/signup' component={Signup} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/' component={Login} />
        </Switch>
    </div>
}