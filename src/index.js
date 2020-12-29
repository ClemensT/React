import React from 'react';
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import Page1 from './Page/page1'
import Page2 from './Page/page2'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Navbar() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/page1">Page 1</Link>
        <Link to="/page2">Page 2</Link>
      </div>
    );
  };
  

function Home()
{
    return (
        <div>
            <Navbar />
            <div>home</div>
        </div>
    )
}

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Switch>
        </main>
    );
  }
  
  ReactDOM.render(
    <BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById('root')
  );