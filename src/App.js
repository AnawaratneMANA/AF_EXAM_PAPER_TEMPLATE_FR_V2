import React from 'react'
import './App.css';
import {Home} from './Components/home';
import {AddUser} from './Components/addUser';
import {EditUser} from './Components/editUser';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <React.Fragment>
            <Router>
                {/*Put the navigation bar here.*/}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add" component={AddUser}/>
                    <Route exact path="/edit/:id" component={EditUser}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;
