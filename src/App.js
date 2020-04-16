import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './page/home'
import Detail from './page/detail'
import Search from './page/search'
import ScrollToTop from './component/scroll-top'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path='/detail/:id' component={Detail}></Route>
            <Route path='/search' component={Search}></Route>
            <Route path='/' component={Home}></Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>
  )
}

export default App