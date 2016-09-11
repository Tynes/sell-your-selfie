import React from 'react';
import 'whatwg-fetch';

// const Dashboard = () => (
//       <div class="container">
//         <div class="header row">

//             <div class="col-sm-12 col-md-4 text-right text-uppercase">
//               <h1 class="text-thick"> #SellYourSelfie </h1>
//               <h3 class="text-thin"> description??</h3>
//             </div>
//             <div class="col-sm-12 col-md-4 text-right text-uppercase">
//             </div>
//             <div class="col-sm-12 col-md-4 text-right text-uppercase">

//             </div>
//         </div>
//           <div class=" row col-md-12">

//                   <div class="row col-md-12">
//                       <hr />
//                   </div>

//                   <div class="row col-md-12">
//                     <nav class=" navbar navbar-light bg-faded">
//                       <div class="navbar-inner">
//                         <div class="container-fluid">
//                           <ul class="nav navbar-nav">
//                             <li><a href="index.html"> Home  </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>
//                     </nav>
//                   </div>
//         </div>
//         <div class="col-md-12">
//           <div class="main-body row">
//             <div class="col-md-6">
//                 <img class="img-responsive"
//                   src="http://placeimg.com/350/200/tech"
//                   alt="pic 3" />
//                 <h3 class="text-uppercase"> User Name </h3>
//                 <h6 class="text-uppercase"> Brand Score </h6>
//             </div>



//             <div class="col-md-6 right">
//               <div class="container-fluid">
//                 <iframe border='0' frameborder='0' height='250' width='550'
//                   src="http://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>
//               </div>
//             </div>
//          </div>

//               <div class="col-md-12">

//                 <h2 class="text-muted"> Footer </h2>
//               </div>
//         </div>
//       </div>
//   )

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      points: [],
    };
  }

  populateTweets() {
    fetch('/tweets/:username', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    })
    .then(body => {
      this.setState({
        tweets: body,
      });
    });
  }

  populatePoints() {
    fetch('/getPoints/:username', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
    })
    .then(body => {
      this.setState({
        points: body,
      });
    });
  }

  ComponentDidMount() {
    this.populateTweets();
    this.populatePoints();
  }

  render() {
    return (
      <div>
        <div className='dashboardHeader'>
          <button onClick='' />
          <h2>Dashboard</h2>
        </div>
        <div className='dashboardTweets'>
          <ul>
              Your Tweets | Your Advertisements | Your Points | Your Upcoming Rewards
            {this.state.tweets.map(tweet =>
              <li>`${tweet.tweet} | ${tweet.company} | ${tweet.points} | ${tweet.reward}`</li>
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
