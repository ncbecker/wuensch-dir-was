import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Button>+</Button>
          <ButtonAdd title="+" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
