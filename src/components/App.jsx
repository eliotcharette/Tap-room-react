import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';
import RotatingList from './RotatingList';
import Moment from 'moment';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotatingKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateRequestElapsedWaitTime(),
    60000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }
  updateRequestElapsedWaitTime() {
    let newMasterKegList = this.state.rotatingKegList.slice();
    newMasterKegList.forEach((keg) =>
      keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
    );
    this.setState({rotatingKegList: newMasterKegList});
  }
  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.rotatingKegList.slice();
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true);
    newMasterKegList.push(newKeg);
    this.setState({rotatingKegList: newMasterKegList});
  }
  render(){
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={KegList} />
          <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route path='/requests' render={()=><RotatingList kegList={this.state.rotatingKegList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
