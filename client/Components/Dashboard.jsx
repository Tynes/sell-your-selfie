import React from 'react';
import 'whatwg-fetch';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      points: [],
    };
  }
  populateTweets() {
    fetch('/getpoints/jreidgreer', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    })
    .then(body => body.json())
    .then(json => {
      this.setState({
        tweets: json,
      });
    });
  }

  componentDidMount() {
    this.populateTweets();
  }
  
  render() {
    return (
      <div>
        <div className='dashboardHeader'>
          <button onClick='' ></button>
          <h2>Dashboard</h2>
        </div>
        <div className='dashboardTweets'>
          <ul>
              Your Advertisements | Your Points
            {this.state.tweets.map((tweet, index) =>
              <li key={index}>{`${tweet.name} | ${tweet.points} points`}</li>
            )}
          </ul>
        </div>
        <div className='dashboardPoints'>
        </div>
      </div>
    );
  }
}

export default Dashboard;
