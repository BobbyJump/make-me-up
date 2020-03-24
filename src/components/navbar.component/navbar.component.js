import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


export default class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            matchesClicked: false,
            battlesActive: false,
        }
    }

    onClickMatches = () => {
        this.setState({
            matchesClicked: true,
            battlesClicked: false,
        });
    };
    onClickBattles = () => {
        this.setState({
            matchesClicked: false,
            battlesClicked: true,
        });
    };

    render() {
        return (
            <div className="navigation">
                <svg className="navigation__logo" width="400" height="379" viewBox="0 0 400 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M128.641 236.809L-35.8067 378.8L-19.763 129.564L-280.001 -0.219376H-14.728L0.291565 -231.169L136.663 -8.58899L399.764 -0.219376L231.245 137.823L373.059 371.159L128.641 236.809Z" fill="url(#paint0_linear)" fillOpacity="0.15"/>
                    <path d="M128.314 236.431L128.577 236.203L128.882 236.371L371.659 369.82L230.818 138.083L230.592 137.712L230.928 137.436L398.416 0.238007L136.647 -8.08925L136.377 -8.09782L136.237 -8.32777L0.688263 -229.564L-14.229 -0.18692L-14.2594 0.280624H-14.728H-277.878L-19.5399 129.117L-19.2427 129.265L-19.2641 129.596L-35.2312 377.642L128.314 236.431Z" stroke="#979797" strokeOpacity="0.1"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="160.28" y1="307.147" x2="160.28" y2="0.325184" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#DDDDDD"/>
                            <stop offset="1" stopColor="#ABD1DD" stopOpacity="0.13"/>
                        </linearGradient>
                    </defs>
                </svg>
                <div className="container container_border">
                    <h1 className="navigation__title">
                        Make me up!
                    </h1>
                    <div className="button-block">
                        <Link to={"/matches"}>
                            <button 
                                onClick={this.onClickMatches}
                                className={
                                    this.state.matchesClicked
                                    ? "navigation__button navigation__button_active"
                                    : "navigation__button"
                                }
                            >
                                matches
                            </button>
                        </Link>
                        <Link to={"/battles"}>
                            <button 
                                onClick={this.onClickBattles}
                                className={
                                    this.state.battlesClicked
                                    ? "navigation__button navigation__button_active"
                                    : "navigation__button"
                                }
                            >
                                battles
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
