import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import Header from './components/layouts/Header'
import Home from './pages/HomePage'
import CatalogPage from './pages/CatalogPage'
import CatalogDetailsPage from './pages/CatalogDetailsPage'


function App() {
  return (
    <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/catalog/:location/:branch" component={CatalogPage} />
      <Route exact path="/catalog-details/:location/:branch/:catalog" component={CatalogDetailsPage} />
    </Router>
    </Provider>
  );
}

export default App;
