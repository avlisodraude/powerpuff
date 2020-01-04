import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Show from './components/Show';
import NotFound from './components/NotFound';
import Episode from "./components/Episode";
import ShowsSearch from "./components/ShowsSearch";

const App = () => (
    <BrowserRouter>
        <main>
            <Switch>
                <Redirect from="/home" to="/"/>
                <Route exact path="/" component={ShowsSearch}/>
                <Route path="/show/:showId" component={Show}/>
                <Route path="/episode/:showId/:seasonId/:episodeNumber" component={Episode}/>
                <Route component={NotFound}/>
            </Switch>
        </main>
    </BrowserRouter>
);

export default App;
