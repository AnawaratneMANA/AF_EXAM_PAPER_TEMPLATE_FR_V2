import React from 'react'
import './App.css';
import {Home} from './Components/Home/home';
import {AddUser} from './Components/AddUser/addUser';
import {EditUser} from './Components/EditUser/editUser';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <React.Fragment>
            <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
                <Router>
                    {/*Put the navigation bar here.*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/add" component={AddUser}/>
                        <Route exact path="/edit/:id" component={EditUser}/>
                    </Switch>
                </Router>
            </div>
        </React.Fragment>
    )
}

export default App;
