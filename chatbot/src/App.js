import TweetList from './components/TweetList';
import UserLogin from './components/UserLogin';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //   <Router>
    //      <Switch>
    //         <div className="App"> </div>
    //         <Route path="/:userId/tweets">
    //           <TweetList />
    //         </Route>
    //         {/* <Route path="/" component={UserLogin} /> */}
    //       </Switch>
    //   </Router>
    <Router>
      <Switch>
        <Route path="/:userId/tweets">
          <TweetList />
        </Route>
        <Route exact path="/">
          <UserLogin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
