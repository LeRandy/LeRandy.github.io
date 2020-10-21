import React from 'react';
import './MainContent.scss';

function MainContent() {
    return (
        <div className={ `content-scroller` }>
            <div className={ `navigation` }>
                NAVIGATION
            </div>
            <div className={ `content` }>
                CONTENT
            </div>
        </div>      
    );
}

export default MainContent;