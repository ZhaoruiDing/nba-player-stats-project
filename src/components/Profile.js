import React, {Component} from 'react'

export class Profile extends Component{
  render(){
    const {
      playerName,
      playerId,
      teamAbbreviation,
      teamCity,
      teamName,
      height,
      weight,
      pts,
      reb,
      ast,
      pie
    } = this.props.playerInfo;


    return (
      <div className="profile">
        <div className="player-name">{`${playerName}`}</div>
        <img className="player-pic" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`}/>
        <div className="profile-entry">
          <div className="profile-entry-left">Team</div>
          <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
        </div>
        <img className="team-pic" src={`https://stats.nba.com/media/img/teams/logos/${teamAbbreviation}_logo.svg`}/>
        <div className="profile-entry">
          <div className="profile-entry-left">Height</div>
          <div className="profile-entry-right">{`${height}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">Weight</div>
          <div className="profile-entry-right">{`${weight}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">PTS</div>
          <div className="profile-entry-right">{`${pts}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">REB</div>
          <div className="profile-entry-right">{`${reb}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">AST</div>
          <div className="profile-entry-right">{`${ast}`}</div>
        </div>
        <div className="profile-entry">
          <div className="profile-entry-left">PIE</div>
          <div className="profile-entry-right">{`${pie}`}</div>
        </div>
      </div>
    );
  }
}