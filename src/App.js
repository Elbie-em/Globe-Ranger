import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import store from './redux/store';
import './App.css';
import CountryContainer from './containers/CountryContainer';
import CountryListContainer from './containers/CountryListContainer';
import NavContainer from './containers/NavContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <NavContainer />
          <Switch>
            <Route path="/" exact component={CountryListContainer} />
            <Route path="/country/:country" exact component={CountryContainer} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
