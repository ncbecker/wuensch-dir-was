import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Welcome from './pages/Welcome';
import WishList from './pages/WishList';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Welcome title="Nicolas" goAdd="/add" goWishList="/wishlist" />
        </Route>
        <Route exact path="/add">
          <Add />
        </Route>
        <Route exact path="/wishlist">
          <WishList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
