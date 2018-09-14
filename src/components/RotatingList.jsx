import React from 'react';
import RotatingKeg from './RotatingKeg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class RotatingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleThumbUpClick = this.handleThumbUpClick.bind(this);
    this.handleSortTweets = this.handleSortTweets.bind(this);
    this.handleThumbDownClick = this.handleThumbDownClick.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.handleSortTweets(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  handleSortTweets(){
    this.setState(() => {
      this.props.kegList.sort(compareTweets);
    });
  }

  handleThumbUpClick(key){
    let tempIndex = this.findTweetIndex(key);
    this.setState(() => {
      this.props.kegList[tempIndex].thumbsUp++;
    });
  }

  handleThumbDownClick(key){
    let tempIndex = this.findTweetIndex(key);
    this.setState(() => {
      this.props.kegList[tempIndex].thumbsDown++;
    });
  }

  findTweetIndex(key)
  {
    return this.props.kegList.map((keg) => { return keg.id; }).indexOf(key);
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .head {
            text-align: center
          }
          `}
        </style>
        <div className="head">
          <h1>Beer Request List</h1>
          <p>(Click <Link to="/newkeg">here</Link> to add a beer to the list or vote for an existing one!)</p>
        </div>
        <div>
          {this.props.kegList.map((keg) =>
            <RotatingKeg beer={keg.beer}
              comments={keg.comments}
              brewer={keg.brewer}
              name={keg.name}
              email={keg.email}
              img={keg.img}
              thumbsUp={keg.thumbsUp}
              thumbsDown={keg.thumbsDown}
              onClickUp={this.handleThumbUpClick}
              onClickDown={this.handleThumbDownClick}
              formattedWaitTime={keg.formattedWaitTime}
              id={keg.id}
              key={keg.id}/>
          )}
        </div>
      </div>
    );
  }
}
RotatingList.propTypes = {
  kegList: PropTypes.array
};

export default RotatingList;

function compareTweets(tweetOne,tweetTwo)
{
  return tweetTwo.thumbsUp - tweetOne.thumbsUp;
}
