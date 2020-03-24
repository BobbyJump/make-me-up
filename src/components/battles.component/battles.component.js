import React, { Component } from 'react';
import BattleCard from '../battles-card.component/battle-card.component'

import './battles.css';

export default class BattlesComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="matches_section">
                    <BattleCard 
                        live={true}
                        match='Match #1'
                    />
                    <BattleCard 
                        upcoming={true}
                        match='Match #2'
                    />
                    <BattleCard 
                        upcoming={true}
                        match='Match #3'
                    />
                    <BattleCard 
                        upcoming={true}
                        match='Match #4'
                    />
                    <BattleCard 
                        finished={true}
                        match='Match #5'
                    />
                    <BattleCard 
                        finished={true}
                        match='Match #6'
                    />
                    <BattleCard 
                        finished={true}
                        match='Match #7'
                    />
                    <BattleCard 
                        finished={true}
                        match='Match #8'
                    />
                </div>
            </div>
        )
    }
}