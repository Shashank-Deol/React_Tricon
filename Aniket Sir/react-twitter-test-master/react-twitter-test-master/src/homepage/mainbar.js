import React from 'react';
import { CreateTweet } from './create-tweet';
import { TweetList } from './tweet-list';

export class Mainbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showCreateTweet: true
    };
    this.toggleShowCreateTweet = this.toggleShowCreateTweet.bind(this);
  }

  toggleShowCreateTweet() {
    let currentShowCreateTweet = this.state.showCreateTweet;

    this.setState({
      showCreateTweet: !currentShowCreateTweet
    });
  }

  render() {
    return (
      <div className='main-bar'>
        <button onClick={this.toggleShowCreateTweet}>Toggle Create Tweet</button>
        { this.state.showCreateTweet ? <CreateTweet /> : null}
        <TweetList tweets={this.props.tweetList}/>
      </div>
    )
  }
}