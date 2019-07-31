import React from 'react';

export class TweetList extends React.Component {
  render() {
    return (
      <div className='tweet-list'>
        {
          this.props.tweets.map((tweet) => {
            return (
              <div className='tweet'>
                <p>{tweet.name}</p>
                <p>{tweet.tweet}</p>
                <p></p>
              </div>
            )
          })
        }
      </div>
    )
  }
}