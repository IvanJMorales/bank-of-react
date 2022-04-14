import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';

class App extends Component {
  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      currentCredit: {
        creditName: ["Credit1" , " Credit2"],
        creditAmount: 0,
        creditDate: "01/01/2000"
      },
      currentUser: {
        userName: "Joe Smith",
        memberSince: "07/23/96",
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  mockAddCredit = (newCredit) => {
    const newCreditCard = {...this.state.currentCredit}
    newCredit.creditName = newCredit.creditName
    this.setState({currentCredit: newCreditCard})
  }

  render() {
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () =>(
      <Credits
        creditInfo={this.state.creditInfo}
        creditAmount={this.state.creditAmount}
      />)
    
    return (
      <Router>
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </div>
      </Router>
    );
  }
}
export default App;
