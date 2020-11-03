import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button, { ButtonAdd } from './components/Button';
import WishListItem from './components/WishListItem';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <WishListItem title="Nicolas" />
          <ButtonAdd text="+" />
        </Route>
        <Route exact path="/wishlistitem">
          <Button>
            <Link to="/wishlistitem">+</Link>
          </Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
