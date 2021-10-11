import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import IndexContainer from '../containers/IndexContainer';
import WelcomeContainer from '../containers/WelcomeContainer';

const App = () =>{
    
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                   <IndexContainer />
                </Route>
                <Route path="/welcome">
                    <WelcomeContainer/>
                </Route>
                <Route>
                    <div className="container mt-5 text-center">
                        <h1>404 Not Found</h1>
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;