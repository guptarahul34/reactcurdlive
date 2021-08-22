import React from 'react'
import Navbar from './component/pages/Navbar.jsx';
import { Switch,Route } from 'react-router-dom';
import Home from './component/pages/Home.jsx';
import About from './component/pages/About.jsx';
import Adduser from './component/pages/Adduser.jsx';
import Error from './component/pages/Error.jsx';
import Contact from './component/pages/Contact.jsx';
import View from './component/pages/View.jsx';
import Edit from './component/pages/Edit.jsx';
import Delete from './component/pages/Delete.jsx';

const App = () => {
    return (
        <>
           <Navbar/>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/adduser" component={Adduser}/>
                  <Route exact path="/contact" component={Contact}/>
                  <Route exact path="/view/:id" component={View}/>
                  <Route exact path="/edit/:id" component={Edit}/>
                  <Route exact path="/delete/:id" component={Delete}/>
                  <Route component={Error}/>
              </Switch>
        </>
    )
}

export default App;
