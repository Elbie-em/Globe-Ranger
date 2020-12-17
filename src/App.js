import {BrowserRouter,Switch, Route, NavLink, Redirect} from 'react-router-dom'
import './App.css';
import CountryContainer from './containers/CountryContainer';
import CountryListContainer from './containers/CountryListContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route path={"/"} exact component={CountryListContainer}/>
        <Route path={"/country/:country"} exact component={CountryContainer}/>
        <Redirect to={"/"} />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
