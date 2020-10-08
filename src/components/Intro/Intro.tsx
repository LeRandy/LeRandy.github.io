import React from 'react';
import './Intro.scss';

function Intro() {
    return (
        <div className={ 'intro' }>
            <div className={ `intro-text` }>
                <h2>Randy Le</h2>
                    <br/>
                    welcome
                    <br/>
                    this is mostly just a playground for me to play around with libraries and designs
            </div>
            <div className={ `intro-image` }>
                <img src={ require( './profile-pic.jpg' ) } alt={ `Profile` }/>
            </div>
        </div>
    );
}

export default Intro;