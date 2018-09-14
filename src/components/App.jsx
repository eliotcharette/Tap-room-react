import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import KegList from './KegList';
import Error404 from './Error404';
import NewKegControl from './NewKegControl';
import RotatingList from './RotatingList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotatingKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  handleAddingNewKegToList(newKeg){
    var newMasterKegList = this.state.rotatingKegList.slice();
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
          <Route path='/rotators' render={()=><RotatingList kegList={this.state.rotatingKegList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;
