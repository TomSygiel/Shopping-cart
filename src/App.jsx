import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Cart from './components/Cart'
import './App.css'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './store'
import data from './data.json'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App


