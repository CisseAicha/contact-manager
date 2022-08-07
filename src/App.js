import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from "./components/pages/Contact";
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contacts/add" component={AddContact} />
        <Route exact path="/contacts/edit/:id" component={EditContact} />
        <Route exact path="/contacts/:id" component={Contact} />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;
