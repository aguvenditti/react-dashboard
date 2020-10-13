import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContentWrapper from './components/ContentWrapper.js';
import SideBar from './components/SideBar.js';
import TablesContent from './components/TablesContent.js';

function App() {
  return (
        <Router>
            <div className="App" id="wrapper">
                <Switch>
                    {/* /pages router */}
                    <Route path="/pages">
                        <SideBar />
                        <h1>pages</h1>
                    </Route>

                    {/* /charts router */}
                    <Route path="/charts">
                        <SideBar />
                        <h1>charts</h1>
                    </Route>

                    {/* /tables router */}
                    <Route path="/tables">
                        <SideBar />
                        <TablesContent />
                    </Route>

                    {/* /home router */}
                    <Route path='/'>
                        <SideBar />
                        <ContentWrapper />    
                    </Route>    
                </Switch>
                
            </div>
        </Router>    
    
  );
}

export default App;
