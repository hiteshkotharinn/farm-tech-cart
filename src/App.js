import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
            <ToastContainer autoClose={2000} closeButton={false} position="bottom-right" />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
