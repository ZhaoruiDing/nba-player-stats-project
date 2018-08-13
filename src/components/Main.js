import React, { Component } from 'react';
import {Profile} from "./Profile";
import nba from 'nba';
import {ShotChart} from "./ShotChart"
export class Main extends Component{
  state = {
    playerId: nba.findPlayer("Chris Paul").playerId,
    playerInfo: {}
  }
  componentWillMount(){
    nba.stats.playerInfo({PlayerID: this.state.playerId}).then((info) => {
      console.log(info);
      const playerInfo = Object.assign({},info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
      console.log(playerInfo);
      this.setState({
        playerInfo: playerInfo
      });
    });
  }
  render(){
    return(
      <div className="main">
        <Profile playerInfo={this.state.playerInfo}/>
        <ShotChart playerId={this.state.playerId}/>
    </div>);
  }
}