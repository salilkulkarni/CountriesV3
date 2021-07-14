import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Header from "./components/Header";
import Country from "./components/Country";
//import Filter from './components/Filter';
function App() {
  return (
    <>
      <Router>
        <Header />

        <Route exact path="/">
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </Router>
    </>
  );
}

export default App;
