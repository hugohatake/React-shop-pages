import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';


const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path='/' Component={Home} />
                    <Route exact path="/login" Component={Login} />
                    <Route exact path='recovery-password' Component={RecoveryPassword} />
                    <Route Component={NotFound} />
                </Layout>
            </Switch>
        </BrowserRouter>
        
    );
}

export default App;
