import { ArrowDownIcon } from 'evergreen-ui';
import './Intro.scss';
import location from './location.png';
import profilepic from './profile-pic.jpg';

function Intro() {
    return (
        <div className={ `intro-container` }>
            <div className={ 'intro-header' }>
                <div className={ `frosted-glass` }>
                    <div className={ `intro-text` }>
                        <h1>Randy Le</h1>
                            <br/>
                            <div className={ `location-div` }>
                                <img className={ `location` } src={ location } alt={ `Location` } />
                                <h3>CANADA</h3>
                            </div>
                            <p>
                                welcome
                                <br/>
                                this is mostly just a playground for me to play around with libraries and designs
                            </p>
                    </div>
                    <div className={ `intro-image` }>
                        <img src={ profilepic } alt={ `Profile` }/>
                    </div>
                </div>
            </div>
            <div className={ `intro-footer` }>
                <div className={ `text` }>
                    get<br/>started
                </div>
                <ArrowDownIcon size={ 20 }/>
            </div>
        </div>
    );
}

export default Intro;