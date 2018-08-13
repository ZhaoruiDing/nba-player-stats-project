import React, {Component} from 'react'

export class Profile extends Component{
  render(){
    return (
      <div className="profile">
        <div className="player-name">James Harden</div>
        <img className="player-pic" src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201935.png"/>
        <div className="profile-entry">
          <div className="profile-entry-left">Team</div>
          <div className="profile-entry-right">Houston Rockets</div>
        </div>
        <img className="team-pic" src="https://stats.nba.com/media/img/teams/logos/HOU_logo.svg"/>
      </div>
    );
  }
}