import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Credits from "./components/Credits";
import Balance from "./components/Balance";
import Debits from "./components/Debits";

function App() {
  const [state, setState] = useState({
    accountBalance: 14568.27,
    currentUser: {
      userName: "Joe Smith",
      memberSince: "07/23/96",
      login: false,
    },
  });

  // Update state's currentUser (userName) after "Log In" button is clicked
  function mockLogIn(logInInfo) {
    const newUser = { ...state.currentUser };
    newUser.userName = logInInfo.userName;
    newUser.memberSince = new Date().toISOString().slice(0, 10);
    newUser.login = true;
    setState({ ...state, currentUser: newUser });
  }

  function handleChange(amount) {
    const balance = Number(state.accountBalance) + Number(amount);
    setState({ ...state, accountBalance: balance });
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home info={state} />}/>
        <Route exact path="/login" element={<LogIn user={state.currentUser} mockLogIn={mockLogIn} />}/>
        <Route exact path="/userProfile" element={<UserProfile info={state} />} />
        <Route exact path="/Credits" element={<Credits accountBalance={state.accountBalance} login={state.currentUser.login} onChange={handleChange} />}/>
        <Route exact path="/balance" element={<Balance info={state} />} />
        <Route exact path="/Debits" element={<Debits accountBalance={state.accountBalance} login={state.currentUser.login} onChange={handleChange} />}/>
      </Routes>
    </Router>
  );
}

export default App;
