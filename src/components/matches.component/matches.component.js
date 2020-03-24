import React, { Component } from 'react';
import MatchCard from '../match-card.component/match-card.component'
import './matches.css';

import newbee from './img/newbee.png';
import aster from './img/aster.png';
import alliance from './img/alliance.png';
import boom from './img/boom.png';
import businnes from './img/businnes.png';
import forze from './img/forze.png';
import noping from './img/noping.png';

export default class MatchesComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="matches_section">
                    <MatchCard 
                        live={true}
                        firstTeamLogo={newbee}
                        secondTeamLogo={aster}
                        firstTeam='Albert Warren'
                        secondTeam='Gloria Henry'
                    />
                    <MatchCard 
                        upcoming={true}
                        firstTeamLogo={businnes}
                        secondTeamLogo={forze}
                        firstTeam='Regina Watson'
                        secondTeam='Kathryn Jones'
                    />
                    <MatchCard 
                        upcoming={true}
                        firstTeamLogo={aster}
                        secondTeamLogo={boom}
                        firstTeam='Ricardo Hawkins'
                        secondTeam='Bruce Simmmons'
                    />
                    <MatchCard 
                        upcoming={true}
                        firstTeamLogo={alliance}
                        secondTeamLogo={noping}
                        firstTeam='Jenny Bell'
                        secondTeam='Arlene Robertson'
                    />
                    <MatchCard 
                        finished={true}
                        firstTeamLogo={newbee}
                        secondTeamLogo={businnes}
                        firstTeam='Courtney Alexander'
                        secondTeam='Judith Nguyen'
                        firstScore='0'
                        secondScore='3'
                        looseFirst={true}
                        looseSecond={false}
                    />
                    <MatchCard 
                        finished={true}
                        firstTeamLogo={newbee}
                        secondTeamLogo={forze}
                        firstTeam='Priscilla Fisher'
                        secondTeam='Arlene Black'
                        firstScore='3'
                        secondScore='0'
                        looseFirst={false}
                        looseSecond={true}
                    />
                    <MatchCard 
                        finished={true}
                        firstTeamLogo={boom}
                        secondTeamLogo={noping}
                        firstTeam='Cody Howard'
                        secondTeam='Brandon Mccoy'
                        firstScore='0'
                        secondScore='3'
                        looseFirst={true}
                        looseSecond={false}
                    />
                    <MatchCard 
                        finished={true}
                        firstTeamLogo={newbee}
                        secondTeamLogo={alliance}
                        firstTeam='Jorge Fox'
                        secondTeam='Zack Miles'
                        firstScore='0'
                        secondScore='3'
                        looseFirst={true}
                        looseSecond={false}
                    />
                </div>
            </div>
        )
    }
}