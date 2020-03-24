import React from 'react';
import './battle_card.css';
import winner from './img/winner.png';
import letter from './img/letter.png';

const BattleCard = (props) => {
    const {
        live,
        upcoming,
        finished,
        match
    } = props;
    return (
        <>
            { live ? (
                <div className="battles-card card_border">
                    <svg className="battles-card__star" width="182" height="164" viewBox="0 0 182 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M181.767 155.832L117.839 103.14L6.56497 164L71.1271 58.3003L0 0H113.255H182L181.767 155.832Z" fill="#EA5656"/>
                    </svg>
                    <a className="card__link" href="https://www.twitch.tv/">
                        <svg className="card__link_icon" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 25.375V9.625L24.5 17.5L14 25.375ZM17.5 0C15.2019 0 12.9262 0.452651 10.803 1.33211C8.67984 2.21157 6.75066 3.50061 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5C0 22.1413 1.84374 26.5925 5.12563 29.8744C6.75066 31.4994 8.67984 32.7884 10.803 33.6679C12.9262 34.5474 15.2019 35 17.5 35C22.1413 35 26.5925 33.1563 29.8744 29.8744C33.1563 26.5925 35 22.1413 35 17.5C35 15.2019 34.5474 12.9262 33.6679 10.803C32.7884 8.67984 31.4994 6.75066 29.8744 5.12563C28.2493 3.50061 26.3202 2.21157 24.197 1.33211C22.0738 0.452651 19.7981 0 17.5 0Z" fill="white"/>
                        </svg>
                        <h6 className="battles-card__link_text">WATCH LIVE!</h6>
                    </a>
                    <h5 className="battles-card__title">Group Stage</h5>
                    <div className="battles-teams">
                        <div className="battles-teams__logo">
                            <img className="battles-logo" src={letter} alt="Team Logo"/>
                        </div>
                        <div className="battles-teams__info">
                            <div className="battles-teams__info_group">
                                <div className="battles-group__name">Group A</div>
                                <div className="battles-group__name">Group B</div>
                            </div>
                            <div className="battles-teams__info_match">{match}</div>
                        </div>
                    </div>
                    <div className="battles-match">
                        <div className="battles-match__info">Map: Erangel</div>
                    </div>
                </div>)
                : upcoming ? (
                    <div className="battles-card">
                        <svg className="battles-card__star" width="182" height="164" viewBox="0 0 182 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M181.767 155.832L117.839 103.14L6.56497 164L71.1271 58.3003L0 0H113.255H182L181.767 155.832Z" fill="url(#paint0_linear)"/>
                            <path d="M181.499 0.5L181.269 154.773L118.157 102.754L117.895 102.539L117.599 102.702L7.96753 162.663L71.5538 58.561L71.7807 58.1895L71.4441 57.9136L1.39874 0.5H113.255H181.499Z" stroke="#979797" strokeOpacity="0.1"/>
                            <defs>
                                <linearGradient id="paint0_linear" x1="109.492" y1="63.2289" x2="64.7098" y2="182.147" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F3FCFF"/>
                                    <stop offset="1" stopColor="#E1E5EE"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h5 className="battles-card__time">19:00</h5>
                        <h6 className="battles-card__date">March 8</h6>
                        <h5 className="battles-card__title">Group Stage</h5>
                        <div className="battles-teams">
                            <div className="battles-teams__logo">
                                <img className="battles-logo" src={letter} alt="Team Logo"/>
                            </div>
                            <div className="battles-teams__info">
                                <div className="battles-teams__info_group">
                                    <div className="battles-group__name">Group A</div>
                                    <div className="battles-group__name">Group B</div>
                                </div>
                                <div className="battles-teams__info_match">{match}</div>
                            </div>
                        </div>
                        <div className="battles-match">
                            <div className="battles-match__info">Starts in: 5h 39min • Map: Erangel</div>
                        </div>
                    </div>
                ) 
                : finished ? (
                    <div className="battles-card">
                        <svg  className="battles-card__star" width="182" height="164" viewBox="0 0 182 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M181.767 155.832L117.839 103.14L6.56497 164L71.1271 58.3003L0 0H113.255H182L181.767 155.832Z" fill="#F9F9F9"/>
                            <path d="M181.499 0.5L181.269 154.773L118.157 102.754L117.895 102.539L117.599 102.702L7.96753 162.663L71.5538 58.561L71.7807 58.1895L71.4441 57.9136L1.39874 0.5H113.255H181.499Z" stroke="#979797" strokeOpacity="0.1"/>
                        </svg>
                        <h5 className="battles-card__time finished">19:00</h5>
                        <h6 className="battles-card__date finished">March 8</h6>
                        <h5 className="battles-card__title">Group Stage</h5>
                        <div className="battles-teams">
                            <div className="battles-teams__logo">
                                <img className="battles-logo" src={letter} alt="Team Logo"/>
                            </div>
                            <div className="battles-teams__info">
                                <div className="battles-teams__info_group">
                                    <div className="battles-group__name">Group A</div>
                                    <div className="battles-group__name">Group B</div>
                                </div>
                                <div className="battles-teams__info_match">{match}</div>
                            </div>
                        </div>
                        <div className="battles-match">
                            <img className="battles-match__winner" src={winner} alt="Winner"/>
                            <div className="battles-match__info">Natus Vincere (A) - 233pts</div>
                        </div>
                    </div>
                ) 
                : null}
            
        </>
            
        
        
    )
}

export default BattleCard
