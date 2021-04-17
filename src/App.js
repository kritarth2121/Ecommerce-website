import './App.css';
import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import {Switch,Route} from "react-router-dom";
import Header from "./components/nav/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>

      <Header/>
      <ToastContainer/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>

        <Route exact path="/register" component={Register}></Route>

      </Switch>
    </>
  );
}

export default App;
