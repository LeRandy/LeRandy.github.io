import React from 'react';
import './Intro.scss';

function Intro() {
    return (
        <div className={ 'intro' }>
            <div className={ `frosted-glass` }>
                <div className={ `intro-text` }>
                    <h1>Randy Leeeeeeeee</h1>
                        <br/>
                        <div className={ `location-div` }>
                            <img className={ `location` } src={ require( './location.png') } alt={ `Location` } />
                            <h3>CANADA</h3>
                        </div>
                        <p>
                            welcome
                            <br/>
                            this is mostly just a playground for me to play around with libraries and designs
                        </p>
                </div>
                <div className={ `intro-image` }>
                    <img src={ require( './profile-pic.jpg' ) } alt={ `Profile` }/>
                </div>
            </div>
        </div>
    );
}

export default Intro;