import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import routes from './routes'
import Header from './components/layouts/Header'

function App() {
  return (
    <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      {
        routes.map(r => (
          <Route key={r.path} exact path={r.path} component={r.component} />
        ))
      }
    </Router>
    </Provider>
  );
}

export default App;
