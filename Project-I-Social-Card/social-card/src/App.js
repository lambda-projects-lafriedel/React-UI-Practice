import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      commentCount: 0,
      retweets: 0,
      likes: 0
    };
  }

  increaseLikes = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  increaseComments = () => {
    this.setState({
      commentCount: this.state.commentCount + 1
    })
  }

  increaseRetweets = () => {
    this.setState({
      retweets: this.state.retweets + 1
    })
  }

  render() {
    return (
      <div className='app'>
        <HeaderContainer />
        <CardContainer />
        <Footer 
          commentCount={this.state.commentCount}
          increaseComments={this.increaseComments}
          retweets={this.state.retweets}
          increaseRetweets={this.increaseRetweets}
          likes={this.state.likes}
          increaseLikes={this.increaseLikes}
        />
      </div>
    );
  }

};

export default App;
