import React from 'react';

export class CreateTweet extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tweetContent: '',
      tweetButtonText: 'Twedfwdfet'
    };
    this.updateTweetContent = this.updateTweetContent.bind(this);
  }

  updateTweetContent(event) {
    let value = event.target.value;
    this.setState({
      tweetContent: value
    })
  }

  componentDidMount() {
    console.log('I am mounted');
  }

  componentDidUpdate() {
    console.log('I am updated');
  }

  render() {
    return (
      <div className='create-tweet'>
        <textarea onChange={this.updateTweetContent} value={this.state.tweetContent}></textarea>
        <button> {this.state.tweetButtonText} </button>
      </div>
    )
  }
}