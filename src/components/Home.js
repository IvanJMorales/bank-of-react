import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import '../styles/home.css';
import banner from '../images/bank-banner.jpg';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <img src={banner} alt="bank" className='image'/>
                <h1 className='title'>Bank of React</h1>
                <div className='navbar'>
                    <div className='link-container'>
                        <Link to="/userProfile" className='link'>User Profile</Link>
                        <Link to="/credits" className='link'>Credits</Link>
                        <Link to="/debits" className='link'>Debits</Link>
                        <Link to="/login" className='link'>Log In</Link>

                    </div>
                </div>

                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        )
    }
}

export default Home;