import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Header from './components/layouts/Header'
import Home from './pages/HomePage'


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
    </Router>
    </Provider>
  );
}

export default App;
