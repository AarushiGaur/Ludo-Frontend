
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Settings from './Components/Settings';
import BuyChips from './Components/BuyChips';
import SellChips from './Components/SellChips';
import Header from './Components/Header';
import Refer from './Components/Refer';
import Support from './Components/Support';
import Help from './Components/Help';
function App() {
  return (
    // <div>
    //    <Home/>
    //   <Login/>
    //   <Settings/>
    //   <BuyChips/>
    // </div>

    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/buyChips' component={BuyChips} />
          <Route exact path='/sellChips' component={SellChips} />
          <Route exact path='/refer' component={Refer} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/help' component={Help} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
