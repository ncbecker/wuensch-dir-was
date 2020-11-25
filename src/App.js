import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Welcome from './pages/Welcome';
import WishList from './pages/WishList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/wishlist/:id">
          <WishList />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
