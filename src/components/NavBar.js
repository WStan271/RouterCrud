import React from "react";
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Crud from "./Crud";

function NavBar (){
        return(
            
            <div className = 'navbar'>
                <Router>
                <nav>
                <Link to="/">Home</Link>
                <Link to="/About"> About</Link>
                <Link to="/Contact"> Contact</Link>
                <Link to="/Crud"> Crud</Link>
                </nav>
                    <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/Crud' component={Crud} />
                    </Switch>
                    </Router>
            </div>
        )
    }



export default NavBar