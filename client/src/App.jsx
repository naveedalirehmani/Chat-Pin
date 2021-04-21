import React from "react";
import LogginPage from "./components/loginPage/logginPage.jsx";
import Home from "./components/userProfile/home.jsx";
import Tomessages from "./components/messages/toMessages.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Findpeople from './components/findPeople/findpeople.jsx'
import NewRequest from './components/friendRequest/newRequests.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LogginPage}></Route>
        <Route exact path="/userprofile" component={Home}></Route>
        <Route exact path="/userprofile/message" component={Tomessages}></Route>
        <Route exact path="/userprofile/findpeople" component={Findpeople}></Route>
        <Route exact path="/requests" component={NewRequest}></Route>
      </Router>
    </div>
  );
};

export default App;
