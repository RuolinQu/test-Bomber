import React from 'react';
import Button from './components/Button/button'
import BTN from './components/Button/btn'
import Menu from './components/Menu/menu'
import  MenuItem from './components/Menu/menuItem'
import DialogExample from './components/Dialog/dialog_example';
import IconExample  from './components/Icon/icon_example';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/btn">BTN</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/button">
           <ButtonPage/>
          </Route>
          <Route path="/btn">
           <ButtonPage/>
          </Route>
          <Route path="/menu">
            <MenuPage />
          </Route>
          <Route path="/dialog">
            <DialogExample/>
          </Route>
          <Route path="/icon">
            <IconExample/>
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <Button size="lg" btnType="primary">me</Button>
    //     <Menu mode="vertical">
    //       <MenuItem index="0">111</MenuItem>
    //       <MenuItem index="1">222</MenuItem>
    //       <MenuItem index="2">333</MenuItem>
    //     </Menu>
    //   </header>
    // </div>
  );
}

function ButtonPage() {
  return <Button size="lg" btnType="primary">me</Button>
}

function BTNPage() {
  return <BTN
            size="lg"
            btnType="primary"
            disabled={false}
        >
          me
        </BTN>
}

function MenuPage() {
  return (
        <Menu mode="vertical">
          <MenuItem index="0">111</MenuItem>
          <MenuItem index="1">222</MenuItem>
          <MenuItem index="2">333</MenuItem>
        </Menu>
  )
}

export default App;
