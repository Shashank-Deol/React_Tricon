import React from 'react';
import {Mainbar} from './mainbar';
import {Sidebar} from './sidebar';
import './homepage.css';

export class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tweetList: []
    }
  }

  componentDidMount() {
    let response = [
      {
        name: 'aniket',
        tweet: 'RTI Bill'
      },
      {
        name: 'aniket',
        tweet: 'Hobbs ands Shaw'
      }
    ]

    this.setState({
      tweetList: response
    })
  }

  render() {
    return (
      <div className='homepage'>
        <Mainbar tweetList={this.state.tweetList}/>
        <Sidebar/>
      </div>
    )
  }
}