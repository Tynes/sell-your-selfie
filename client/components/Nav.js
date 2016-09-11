import React from 'react';

export default class Nav extends React.Component {
  render() {
    <div class="row col-md-12">
      <nav class=" navbar navbar-light bg-faded">
        <div class="navbar-inner">
          <div class="container">
            <ul class="nav navbar-nav">
              <li><a href="/auth/twitter">Sign in with
                <img src="images/twitter_logo.png" alt="twitter"
                style="width:42px;height:42px;border:0;" />
                  </a>
              </li>
              <li><a href="#sign-up"> Sign Up </a></li>
              <li><a href="#how-it-works"> How It works </a></li>
                </ul>
          </div>
        </div>
      </nav>
    </div>
  }
}