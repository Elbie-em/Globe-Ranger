import {Provider} from 'react-redux'
import store from './redux/store'
import {BrowserRouter,Switch, Route, NavLink, Redirect} from 'react-router-dom'
import './App.css';
import CountryContainer from './containers/CountryContainer';
import CountryListContainer from './containers/CountryListContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <nav className="navbar p-3">
            <NavLink to={"/"} className="navbar-brand brand-font">Globe Ranger</NavLink>
          </nav>
          <Switch>
            <Route path={"/"} exact component={CountryListContainer}/>
            <Route path={"/country/:country"} exact component={CountryContainer}/>
            <Redirect to={"/"} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
