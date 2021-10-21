import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layaout from '../components/Layaout';
import Home from '../Pages/Home';
import Checkout from '../Pages/Checkout';
import Fruit from '../Pages/Fruit';
import Signup from '../Pages/Signup';
import NotFound from '../Pages/NotFound';
import Signin from '../Pages/Signin';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layaout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/fruit' component={Fruit} />
          <Route exact path='/sign-up' component={Signup} />
          <Route exact path='/sign-in' component={Signin} />
          <Route component={NotFound} />
        </Switch>
      </Layaout>
    </BrowserRouter>
  );
};

export default AppRouter;
